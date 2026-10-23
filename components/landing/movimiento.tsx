"use client"

import { useEffect } from "react"

/**
 * Orquestador de movimiento.
 * - GSAP, ScrollTrigger, SplitText y Lenis se cargan con import() en el primer momento ocioso
 *   o ante el primer gesto. Hasta entonces la página se ve completa con el póster del hero.
 * - Solo se animan transform y opacity. gsap.matchMedia() separa desktop / mobile / reducido.
 * - Con prefers-reduced-motion: sin pin, sin Lenis, sin desplazamientos.
 */
export function Movimiento() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let limpiar: (() => void) | undefined
    let cargado = false
    const gestos = ["pointerdown", "keydown", "wheel", "touchstart", "scroll"] as const

    const cargar = async () => {
      if (cargado) return
      cargado = true
      gestos.forEach((g) => window.removeEventListener(g, cargar))
      const [{ gsap }, { ScrollTrigger }, { SplitText }, { default: Lenis }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("gsap/SplitText"),
        import("lenis"),
      ])
      limpiar = iniciar(gsap, ScrollTrigger, SplitText, Lenis)
    }

    gestos.forEach((g) => window.addEventListener(g, cargar, { once: true, passive: true }))
    // En mobile se espera el primer gesto (CPU y datos limitados); en desktop, también el primer momento ocioso.
    const esDesktop = window.matchMedia("(min-width: 900px) and (pointer: fine)").matches
    const ric = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1200))
    const id = esDesktop ? ric(cargar, { timeout: 2500 }) : undefined

    return () => {
      gestos.forEach((g) => window.removeEventListener(g, cargar))
      if (id !== undefined) window.cancelIdleCallback?.(id as number)
      limpiar?.()
    }
  }, [])
  return null
}

/* eslint-disable @typescript-eslint/no-explicit-any */
type G = typeof import("gsap").gsap
type ST = typeof import("gsap/ScrollTrigger").ScrollTrigger
type SPT = typeof import("gsap/SplitText").SplitText
type L = typeof import("lenis").default

function iniciar(gsap: G, ScrollTrigger: ST, SplitText: SPT, Lenis: L) {
  gsap.registerPlugin(ScrollTrigger, SplitText)
  const root = document.documentElement
  root.classList.add("mov")

  // Refrescar solo cuando el scroll se detiene (no cortar la inercia de iOS)
  ScrollTrigger.config({ ignoreMobileResize: true, autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" })
  let pendiente = false
  let ultimoScroll = 0
  const onScroll = () => (ultimoScroll = performance.now())
  const onResize = () => {
    pendiente = true
    window.setTimeout(() => {
      if (pendiente && performance.now() - ultimoScroll > 200) {
        pendiente = false
        ScrollTrigger.refresh()
      }
    }, 250)
  }
  const onScrollEnd = () => {
    if (pendiente) {
      pendiente = false
      ScrollTrigger.refresh()
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true })
  window.addEventListener("resize", onResize)
  ScrollTrigger.addEventListener("scrollEnd", onScrollEnd)

  // Lenis sincronizado con ScrollTrigger (el touch queda nativo)
  const lenis = new Lenis({ autoRaf: false, anchors: { offset: -72 } })
  lenis.on("scroll", ScrollTrigger.update)
  const tick = (t: number) => lenis.raf(t * 1000)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)

  const mm = gsap.matchMedia()
  mm.add(
    { desktop: "(min-width: 900px)", mobile: "(max-width: 899.98px)" },
    (ctx) => {
      const { desktop } = ctx.conditions as { desktop: boolean; mobile: boolean }
      const fin = [
        hero(gsap, ScrollTrigger, desktop),
        marquee(gsap, ScrollTrigger),
        desktop ? diaHorizontal(gsap) : undefined,
        declaracion(gsap, SplitText),
        mascota(gsap),
        contador(gsap, ScrollTrigger),
      ]
      ScrollTrigger.refresh()
      return () => fin.forEach((f) => f?.())
    },
  )

  return () => {
    mm.revert()
    gsap.ticker.remove(tick)
    lenis.destroy()
    window.removeEventListener("scroll", onScroll)
    window.removeEventListener("resize", onResize)
    ScrollTrigger.removeEventListener("scrollEnd", onScrollEnd)
    root.classList.remove("mov")
  }
}

/* ---------- Hero: secuencia de frames en canvas ligada al scroll ---------- */
function hero(gsap: G, ScrollTrigger: ST, desktop: boolean): (() => void) | undefined {
  const sec = document.querySelector<HTMLElement>(".portada")
  const fig = sec?.querySelector<HTMLElement>(".hero-visual")
  const canvas = fig?.querySelector<HTMLCanvasElement>(".hero-canvas")
  if (!sec || !fig || !canvas) return
  const ctx2d = canvas.getContext("2d")
  if (!ctx2d) return

  const usarDesktop = fig.clientWidth >= 420
  const n = usarDesktop ? 60 : 36
  const pref = usarDesktop ? "d" : "m"
  const frames: HTMLImageElement[] = []
  let actual = -1
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const ajustar = () => {
    canvas.width = Math.round(fig.clientWidth * dpr)
    canvas.height = Math.round(fig.clientHeight * dpr)
    actual = -1
  }
  ajustar()
  const dibujar = (i: number) => {
    // si el frame pedido no cargó todavía, usar el cargado más cercano hacia atrás
    let k = i
    while (k > 0 && !(frames[k]?.complete && frames[k].naturalWidth)) k--
    const img = frames[k]
    if (!img?.complete || k === actual) return
    actual = k
    ctx2d.drawImage(img, 0, 0, canvas.width, canvas.height)
  }
  for (let i = 0; i < n; i++) {
    const img = new Image()
    img.decoding = "async"
    img.src = `/hero/${pref}-${String(i).padStart(3, "0")}.webp`
    if (i === 0) img.onload = () => { dibujar(0); gsap.to(canvas, { opacity: 1, duration: 0.25 }) }
    frames.push(img)
  }

  const caps = gsap.utils.toArray<HTMLElement>(".hero-capitulo", sec)
  let previo = -1
  const marcar = (p: number) => {
    const activo = p < 0.36 ? 0 : p < 0.72 ? 1 : 2
    if (activo === previo) return
    previo = activo
    caps.forEach((c, i) => gsap.to(c, { opacity: i === activo ? 1 : 0.62, duration: 0.2, overwrite: "auto" }))
  }
  marcar(0)

  const estado = { f: 0 }
  gsap.to(estado, {
    f: n - 1,
    ease: "none",
    onUpdate: () => dibujar(Math.round(estado.f)),
    scrollTrigger: desktop
      ? { trigger: sec, start: "top top", end: "+=120%", pin: true, scrub: 0.5, onUpdate: (s) => marcar(s.progress) }
      : { trigger: sec.querySelector(".hero-pista"), start: "top 72px", end: "bottom bottom", scrub: 0.4, onUpdate: (s) => marcar(s.progress) },
  })
  const onR = () => { ajustar(); dibujar(Math.round(estado.f)) }
  ScrollTrigger.addEventListener("refresh", onR)
  return () => ScrollTrigger.removeEventListener("refresh", onR)
}

/* ---------- Marquee: velocidad sigue al scroll e invierte al subir ---------- */
function marquee(gsap: G, ScrollTrigger: ST): undefined {
  const pista = document.querySelector<HTMLElement>(".marquee-pista")
  if (!pista) return
  // Sin scroll, la franja queda quieta (no es movimiento automático). Al scrollear avanza
  // con la velocidad del scroll, invierte la dirección al subir y vuelve a frenar.
  const loop = gsap.to(pista, { xPercent: -50, ease: "none", duration: 22, repeat: -1 })
  loop.totalTime(loop.duration() * 50) // margen para poder ir en reversa
  loop.timeScale(0)
  ScrollTrigger.create({
    onUpdate: (self) => {
      const extra = Math.min(Math.abs(self.getVelocity()) / 300, 6)
      loop.timeScale(self.direction * (0.8 + extra))
      gsap.to(loop, { timeScale: 0, duration: 1.4, ease: "power2.out", overwrite: true })
    },
  })
  // El anillo del sello gira con el scroll, no solo
  gsap.utils.toArray<SVGGElement>(".portada .sello-anillo").forEach((g) =>
    gsap.to(g, { rotation: 360, svgOrigin: "100 100", ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.6 } }),
  )
}

/* ---------- Un día: recorrido horizontal pineado con fondo por momento ---------- */
function diaHorizontal(gsap: G): (() => void) | undefined {
  const esc = document.querySelector<HTMLElement>(".dia-escenario")
  const pista = esc?.querySelector<HTMLElement>(".dia-pista")
  if (!esc || !pista) return
  esc.classList.add("dia--horizontal")
  const fondos = gsap.utils.toArray<HTMLElement>(".dia-fondo", esc)
  const distancia = () => Math.max(0, pista.scrollWidth - window.innerWidth)
  const tl = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: { trigger: esc, start: "top top", end: () => "+=" + distancia() * 1.1, pin: true, scrub: 0.6, invalidateOnRefresh: true },
  })
  tl.to(pista, { x: () => -distancia(), duration: 1 }, 0)
  fondos.forEach((f, i) => {
    if (i === 0) return
    tl.to(f, { opacity: 1, duration: 0.18 }, (i / fondos.length) * 0.95)
  })
  return () => esc.classList.remove("dia--horizontal")
}

/* ---------- Statement: palabras que se encienden con scrub (arrancan al 55 %) ---------- */
function declaracion(gsap: G, SplitText: SPT): undefined {
  const p = document.querySelector<HTMLElement>(".declaracion-texto")
  if (!p) return
  SplitText.create(p, {
    type: "words",
    aria: "none",
    onSplit(self) {
      return gsap.fromTo(
        self.words,
        { opacity: 0.55 },
        { opacity: 1, stagger: 0.08, ease: "none", scrollTrigger: { trigger: p, start: "top 78%", end: "bottom 42%", scrub: true } },
      )
    },
  })
}

/* ---------- Mascota: el resaltador cruza y deja el renglón ---------- */
function mascota(gsap: G): undefined {
  const m = document.querySelector<HTMLElement>(".mascota")
  if (!m) return
  const marcador = m.querySelector(".mascota-marcador")
  const linea = m.querySelector(".mascota-linea")
  const tl = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: m, start: "top 85%", end: "top 25%", scrub: 0.5 } })
  tl.fromTo(linea, { scaleX: 0 }, { scaleX: 1, transformOrigin: "left center" }, 0)
  tl.fromTo(marcador, { x: () => -0.12 * m.clientWidth }, { x: () => m.clientWidth - 20 }, 0)
}

/* ---------- Contador animado (solo cifras reales) ---------- */
function contador(gsap: G, ScrollTrigger: ST): undefined {
  document.querySelectorAll<HTMLElement>("[data-contar]").forEach((el) => {
    const original = el.dataset.contar || ""
    const m = original.match(/(\D*)([\d.]+)(.*)/)
    if (!m) return
    const [, pre, num, suf] = m
    const fin = parseFloat(num.replace(/\./g, ""))
    if (el.getBoundingClientRect().top < window.innerHeight) return
    const o = { v: 0 }
    el.textContent = `${pre}0${suf}`
    ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => gsap.to(o, { v: fin, duration: 1.4, ease: "power2.out", onUpdate: () => (el.textContent = `${pre}${Math.round(o.v)}${suf}`) }),
    })
  })
}
