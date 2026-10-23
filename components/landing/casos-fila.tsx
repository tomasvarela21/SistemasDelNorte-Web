"use client"

import { useCallback, useEffect, useRef, useState } from "react"

/** Fila horizontal con scroll-snap y flechas anterior/siguiente. */
export function CasosFila({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLUListElement>(null)
  const [bordes, setBordes] = useState({ inicio: true, fin: false })

  const medir = useCallback(() => {
    const el = ref.current
    if (!el) return
    setBordes({ inicio: el.scrollLeft < 8, fin: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    medir()
    el.addEventListener("scroll", medir, { passive: true })
    window.addEventListener("resize", medir)
    return () => {
      el.removeEventListener("scroll", medir)
      window.removeEventListener("resize", medir)
    }
  }, [medir])

  const mover = (dir: 1 | -1) => {
    const el = ref.current
    if (!el) return
    const card = el.querySelector("li")
    const paso = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8
    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    el.scrollBy({ left: dir * paso, behavior: reducido ? "auto" : "smooth" })
  }

  return (
    <div className="relative">
      <div className="contenedor mb-4 flex justify-end gap-2">
        <button type="button" className="flecha-fila" onClick={() => mover(-1)} disabled={bordes.inicio} aria-controls="casos-lista" aria-label="Caso anterior">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M19 12H6M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button type="button" className="flecha-fila" onClick={() => mover(1)} disabled={bordes.fin} aria-controls="casos-lista" aria-label="Caso siguiente">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
      <ul
        id="casos-lista"
        ref={ref}
        className="casos-fila flex snap-x snap-mandatory gap-4 overflow-x-auto px-[max(var(--marca-gutter),calc((100vw-var(--marca-ancho))/2+var(--marca-gutter)))] pb-6 pt-2 [scroll-padding-inline:max(var(--marca-gutter),calc((100vw-var(--marca-ancho))/2+var(--marca-gutter)))] [scrollbar-width:thin]"
        tabIndex={0}
        aria-label="Casos, desplazable horizontalmente"
      >
        {children}
      </ul>
    </div>
  )
}
