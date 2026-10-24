"use client"

import { useState } from "react"
import { BotonPildora } from "@/components/ui/boton"
import { Wordmark } from "@/components/brand/marca"
import { waLink } from "@/lib/contenido"

const opcionesRubro = ["Comercio / local", "Distribuidora o mayorista", "Ventas en cuotas", "Servicios con turnos (estética, consultorio, gimnasio)", "Gastronomía", "Otro"]

export function Contacto() {
  const [error, setError] = useState<string | null>(null)

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const nombre = String(f.get("nombre") || "").trim()
    const rubro = String(f.get("rubro") || "")
    const necesidad = String(f.get("necesidad") || "").trim()
    if (!nombre || !necesidad) {
      setError("Completá tu nombre y contame qué necesitás para poder responderte.")
      const primero = e.currentTarget.querySelector<HTMLElement>(!nombre ? "#nombre" : "#necesidad")
      primero?.focus()
      return
    }
    setError(null)
    const texto = `Hola Tomás, soy ${nombre}${rubro ? ` (${rubro})` : ""}. ${necesidad}`
    window.open(waLink(texto), "_blank", "noopener,noreferrer")
  }

  return (
    <section id="contacto" className="superficie-tinta py-[var(--marca-seccion)]" aria-labelledby="contacto-titulo">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="grid content-start gap-6">
          <h2 id="contacto-titulo" className="max-w-[14ch] text-[length:var(--marca-fs-h2)]">
            Contame cómo trabajás hoy.
          </h2>
          <p className="max-w-[44ch] text-[length:var(--marca-fs-lead)] text-texto-2">
            Completá esto y se abre WhatsApp con el mensaje armado. La primera charla no tiene costo ni compromiso.
          </p>
        </div>
        <form onSubmit={enviar} noValidate className="grid gap-5" aria-describedby={error ? "form-error" : undefined}>
          <div className="grid gap-2">
            <label htmlFor="nombre" className="font-medium">Tu nombre</label>
            <input id="nombre" name="nombre" autoComplete="name" required className="campo" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="rubro" className="font-medium">Rubro</label>
            <select id="rubro" name="rubro" className="campo" defaultValue="" autoComplete="off">
              <option value="">Elegí una opción</option>
              {opcionesRubro.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="necesidad" className="font-medium">¿Qué te gustaría ordenar?</label>
            <textarea id="necesidad" name="necesidad" rows={4} required autoComplete="off" className="campo resize-y" placeholder="Ej.: llevo el stock en un Excel y las ventas en un cuaderno…" />
          </div>
          {error ? (
            <p id="form-error" role="alert" aria-live="polite" className="text-resaltador">
              {error}
            </p>
          ) : null}
          <div>
            <BotonPildora variante="resaltador" type="submit">
              Enviar por WhatsApp
            </BotonPildora>
          </div>
        </form>
      </div>
    </section>
  )
}

export function Pie() {
  return (
    <footer className="superficie-tinta border-t border-borde py-12">
      <div className="contenedor flex flex-wrap items-end justify-between gap-8">
        <div className="grid gap-3">
          <Wordmark className="h-8 w-auto text-papel" />
          <p className="text-[0.9rem] text-texto-2">Sistemas a medida, webs y turnos · San Miguel de Tucumán</p>
        </div>
        <p className="text-[0.85rem] text-texto-2">© {new Date().getFullYear()} VareLab</p>
      </div>
    </footer>
  )
}
