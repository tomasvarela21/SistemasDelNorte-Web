import type React from "react"
import { cn } from "@/lib/utils"

type Variante = "tinta" | "resaltador" | "papel"

type Comun = {
  variante?: Variante
  children: React.ReactNode
  className?: string
}

type ComoLink = Comun & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type ComoBoton = Comun & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

const estilos: Record<Variante, { base: string; circulo: string }> = {
  tinta: { base: "bg-tinta text-papel", circulo: "bg-resaltador text-tinta" },
  resaltador: { base: "bg-resaltador text-tinta", circulo: "bg-tinta text-resaltador" },
  papel: { base: "bg-papel text-tinta ring-1 ring-inset ring-[var(--marca-color-borde)]", circulo: "bg-tinta text-papel" },
}

function Flecha() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true" className="flecha">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Botón píldora con flecha en un círculo. Un solo CTA principal por sección. */
export function BotonPildora(props: ComoLink | ComoBoton) {
  const { variante = "tinta", children, className, ...resto } = props
  const e = estilos[variante]
  const clases = cn(
    "boton-pildora group inline-flex min-h-[52px] items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5",
    "font-sans text-[1rem] font-semibold leading-none select-none",
    e.base,
    className,
  )
  const interior = (
    <>
      <span>{children}</span>
      <span className={cn("circulo grid size-10 shrink-0 place-items-center rounded-full", e.circulo)}>
        <Flecha />
      </span>
    </>
  )
  if ("href" in resto && resto.href) {
    return (
      <a className={clases} {...(resto as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {interior}
      </a>
    )
  }
  return (
    <button type="button" className={clases} {...(resto as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {interior}
    </button>
  )
}
