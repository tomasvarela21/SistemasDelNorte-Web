"use client"

import { useEffect, useRef, useState } from "react"

const links = [
  ["Servicios", "#servicios"],
  ["Cómo trabajo", "#proceso"],
  ["Casos", "#casos"],
  ["Contacto", "#contacto"],
] as const

/** Menú mobile como bottom sheet: se cierra arrastrando hacia abajo, con Esc o tocando afuera.
 *  Entrada 260 ms, salida 160 ms (más rápida). Solo transform. */
export function MenuMovil() {
  const dlg = useRef<HTMLDialogElement>(null)
  const hoja = useRef<HTMLDivElement>(null)
  const [abierto, setAbierto] = useState(false)
  const drag = useRef({ y0: 0, dy: 0, t0: 0, activo: false })

  const abrir = () => {
    dlg.current?.showModal()
    requestAnimationFrame(() => setAbierto(true))
  }
  const cerrar = () => {
    setAbierto(false)
    const h = hoja.current
    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!h || reducido) return dlg.current?.close()
    h.style.transform = ""
    const fin = () => {
      dlg.current?.close()
      h.removeEventListener("transitionend", fin)
    }
    h.addEventListener("transitionend", fin)
    setTimeout(fin, 260)
  }

  useEffect(() => {
    const d = dlg.current
    if (!d) return
    const onCancel = (e: Event) => {
      e.preventDefault()
      cerrar()
    }
    d.addEventListener("cancel", onCancel)
    return () => d.removeEventListener("cancel", onCancel)
  })

  const onDown = (e: React.PointerEvent) => {
    drag.current = { y0: e.clientY, dy: 0, t0: performance.now(), activo: true }
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    hoja.current?.classList.add("arrastrando")
  }
  const onMove = (e: React.PointerEvent) => {
    if (!drag.current.activo || !hoja.current) return
    const dy = Math.max(0, e.clientY - drag.current.y0)
    drag.current.dy = dy
    hoja.current.style.transform = `translateY(${dy}px)`
  }
  const onUp = () => {
    if (!drag.current.activo || !hoja.current) return
    drag.current.activo = false
    hoja.current.classList.remove("arrastrando")
    const { dy, t0 } = drag.current
    const vel = dy / Math.max(1, performance.now() - t0)
    if (dy > 90 || vel > 0.6) cerrar()
    else hoja.current.style.transform = ""
  }

  return (
    <>
      <button type="button" onClick={abrir} className="inline-flex min-h-[44px] items-center rounded-full px-4 font-medium ring-1 ring-inset ring-[var(--marca-color-borde)] transition-[transform,background-color] duration-150 active:scale-[0.97] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-papel-2 md:hidden" aria-haspopup="dialog">
        Menú
      </button>
      <dialog
        ref={dlg}
        className="hoja-dialogo"
        aria-label="Menú"
        onClick={(e) => {
          if (e.target === dlg.current) cerrar()
        }}
      >
        <div ref={hoja} className={`hoja-inferior ${abierto ? "abierta" : ""}`}>
          <div className="grid place-items-center pb-2 pt-3 touch-none" onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}>
            <span className="h-1.5 w-12 rounded-full bg-[var(--marca-color-borde)]" aria-hidden="true" />
          </div>
          <nav aria-label="Principal (móvil)">
            <ul className="grid">
              {links.map(([t, h]) => (
                <li key={h}>
                  <a href={h} onClick={cerrar} className="flex min-h-[56px] items-center border-b border-borde font-display text-2xl font-bold">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button type="button" onClick={cerrar} className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-papel-2 font-semibold">
            Cerrar
          </button>
        </div>
      </dialog>
    </>
  )
}
