import { Wordmark } from "@/components/brand/marca"
import { waLink } from "@/lib/contenido"

const links = [
  ["Servicios", "#servicios"],
  ["Cómo trabajo", "#proceso"],
  ["Casos", "#casos"],
  ["Contacto", "#contacto"],
] as const

export function Encabezado() {
  return (
    <header className="encabezado sticky top-0 z-40 border-b border-borde bg-[color-mix(in_srgb,var(--marca-color-papel)_92%,transparent)] backdrop-blur-md">
      <a href="#contenido" className="solo-lectores focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-tinta focus:px-4 focus:py-2 focus:text-papel">
        Saltar al contenido
      </a>
      <div className="contenedor flex h-16 items-center justify-between gap-6">
        <a href="#inicio" aria-label="VareLab, ir al inicio" className="inline-flex min-h-[44px] items-center">
          <Wordmark className="h-7 w-auto text-tinta" title="VareLab" />
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map(([t, h]) => (
              <li key={h}>
                <a href={h} className="nav-link inline-flex min-h-[44px] items-center rounded-full px-4 text-[0.95rem] font-medium">
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={waLink("Hola Tomás, quiero consultarte por mi negocio.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center rounded-full bg-tinta px-5 text-[0.95rem] font-semibold text-papel transition-transform duration-150 ease-[var(--marca-ease-out)] active:scale-[0.97]"
        >
          Escribime
        </a>
      </div>
    </header>
  )
}
