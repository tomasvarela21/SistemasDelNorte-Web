import type { Metadata } from "next"
import { Wordmark, Isotipo } from "@/components/brand/marca"
import { BotonPildora } from "@/components/ui/boton"
import { Sticker, Sello, Blob, Icono, type IconoNombre } from "@/components/ui/grafica"

export const metadata: Metadata = { title: "Kit de marca · VareLab", robots: { index: false, follow: false } }

const colores = [
  ["tinta", "#14181B", "bg-tinta text-papel"],
  ["tinta-2", "#232A2F", "bg-tinta-2 text-papel"],
  ["papel", "#F6F3EC", "bg-papel text-tinta ring-1 ring-inset ring-[var(--marca-color-borde)]"],
  ["papel-2", "#ECE6D8", "bg-papel-2 text-tinta"],
  ["resaltador", "#FFB81C", "bg-resaltador text-tinta"],
  ["resaltador-suave", "#FFE6A6", "bg-resaltador-suave text-tinta"],
  ["gris", "#5B6670", "bg-gris text-papel"],
  ["gris-claro", "#A7B0B8", "bg-gris-claro text-tinta"],
] as const

const iconos: IconoNombre[] = ["stock", "ventas", "cuotas", "cobranzas", "caja", "reportes", "mensajes", "web"]

export default function Kit() {
  return (
    <main>
      <section className="renglones relative overflow-hidden py-[var(--marca-seccion)]">
        <Blob className="absolute -right-24 -top-24 w-[28rem] opacity-80" />
        <div className="contenedor relative grid gap-10">
          <Wordmark className="w-[min(22rem,70vw)] text-tinta" />
          <h1 className="max-w-[16ch] text-[length:var(--marca-fs-display)]">
            Sabé siempre <span className="resaltado">cuánto te deben</span>.
          </h1>
          <p className="max-w-[60ch] text-[length:var(--marca-fs-lead)] text-texto-2">
            Kit de marca de trabajo. Esta página no se indexa: sirve para revisar tokens, tipografías y recursos gráficos antes de armar la landing.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <BotonPildora href="#colores">Escribime por WhatsApp</BotonPildora>
            <BotonPildora variante="resaltador">Ver casos</BotonPildora>
            <BotonPildora variante="papel">Cómo trabajo</BotonPildora>
          </div>
        </div>
      </section>

      <section id="colores" className="py-[var(--marca-seccion)]">
        <div className="contenedor grid gap-8">
          <h2 className="text-[length:var(--marca-fs-h2)]">Paleta</h2>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {colores.map(([n, hex, c]) => (
              <li key={n} className={`flex min-h-36 flex-col justify-end rounded-[var(--marca-radio)] p-4 ${c}`}>
                <span className="font-display text-lg font-semibold">{n}</span>
                <span className="cifra text-sm">{hex}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="superficie-tinta py-[var(--marca-seccion)]">
        <div className="contenedor grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div className="grid gap-6">
            <h2 className="text-[length:var(--marca-fs-h2)]">Tres voces tipográficas</h2>
            <p className="font-display text-[length:var(--marca-fs-h3)] font-bold">Bricolage Grotesque · titulares y stickers</p>
            <p className="max-w-[62ch] text-texto-2">
              Inter · la información. Hoy anotás las cuotas en un cuaderno. Te armamos algo para que sepas en todo momento quién te debe y cuánto.
            </p>
            <p className="cifra text-[length:var(--marca-fs-cifra)] leading-none text-resaltador">≈286 mil</p>
            <p className="text-sm text-texto-2">Martian Mono · cifras y horarios (dato real: registros de ReporteApp).</p>
          </div>
          <div className="mx-auto w-full max-w-[18rem]">
            <Sello />
          </div>
        </div>
      </section>

      <section className="py-[var(--marca-seccion)]">
        <div className="contenedor grid gap-10">
          <h2 className="text-[length:var(--marca-fs-h2)]">Stickers, isotipo e íconos</h2>
          <div className="flex flex-wrap items-center gap-6">
            <Sticker texto="hecho en Tucumán · hecho en Tucumán · " className="w-36" />
            <Sticker texto="lo tuyo es tuyo · lo tuyo es tuyo · " variante="tinta" className="w-36" centro={<Isotipo className="h-14 w-auto" />} />
            <Sticker texto="por etapas · por etapas · por etapas · " variante="papel" className="w-36 drop-shadow-[0_6px_16px_rgb(20_24_27/0.18)]" />
            <div className="grid size-36 place-items-center rounded-full bg-tinta text-papel">
              <Isotipo className="h-20 w-auto" title="Isotipo de VareLab" />
            </div>
          </div>
          <ul className="grid grid-cols-4 gap-4 sm:grid-cols-8">
            {iconos.map((n) => (
              <li key={n} className="grid justify-items-center gap-2 rounded-[var(--marca-radio)] bg-papel-2 p-4">
                <Icono nombre={n} className="size-7" />
                <span className="text-xs">{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
