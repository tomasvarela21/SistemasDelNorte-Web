import { BotonPildora } from "@/components/ui/boton"
import { Sello, Blob } from "@/components/ui/grafica"
import { waLink } from "@/lib/contenido"

const cuaderno = [
  ["10:00", "Sofi · uñas", true],
  ["10:30", "¿Cami? confirmar", false],
  ["11:00", "Lu · cejas · seña??", false],
  ["12:00", "Agus — no vino", true],
] as const

const agenda = [
  ["10:00", "Esmaltado semipermanente", "Sofía M.", "Seña paga"],
  ["11:00", "Perfilado de cejas", "Lucía G.", "Seña paga"],
  ["12:30", "Libre", "", ""],
  ["15:00", "Limpieza facial", "Carla R.", "Recordada"],
] as const

/** Póster del hero. En la Fase 3 se convierte en la secuencia en canvas ligada al scroll. */
function Ilustracion() {
  return (
    <figure className="relative mx-auto w-full max-w-[34rem]" aria-labelledby="ilus-cap">
      <Blob variante={1} className="absolute -left-10 -top-8 w-[85%] opacity-90" />
      {/* Hoja de cuaderno */}
      <div className="hoja relative w-[78%] -rotate-3 rounded-[14px] bg-[#fffdf7] p-5 pl-12 shadow-[var(--marca-sombra-1)] ring-1 ring-[var(--marca-color-borde)]">
        <span className="absolute inset-y-0 left-8 w-px bg-[#e4a59a]" aria-hidden="true" />
        <p className="cifra mb-2 text-[0.8rem] text-texto-2">martes</p>
        <ul className="renglones grid text-[0.95rem] leading-8 [background-position:0_-1px]">
          {cuaderno.map(([h, t, tachado]) => (
            <li key={h} className="flex gap-3">
              <span className="cifra text-[0.85rem] text-texto-2">{h}</span>
              <span className={tachado ? "line-through decoration-[1.5px]" : ""} style={{ fontStyle: "italic" }}>
                {t}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* Agenda ordenada */}
      <div className="relative -mt-16 ml-auto w-[82%] rotate-[1.5deg] rounded-[var(--marca-radio)] bg-tinta p-5 text-papel shadow-[var(--marca-sombra-2)]">
        <div className="mb-3 flex items-baseline justify-between">
          <p className="font-display text-lg font-semibold">Martes</p>
          <p className="cifra text-sm text-gris-claro">3 turnos · 1 libre</p>
        </div>
        <ul className="grid gap-2">
          {agenda.map(([h, s, c, e]) => (
            <li key={h} className={`grid grid-cols-[3.4rem_1fr] items-center gap-3 rounded-xl px-3 py-2.5 ${c ? "bg-tinta-2" : "border border-dashed border-[var(--marca-color-gris)]"}`}>
              <span className="cifra text-sm text-resaltador">{h}</span>
              <span className="min-w-0">
                <span className="block truncate text-[0.9rem] font-medium">{s}</span>
                {c ? (
                  <span className="block text-[0.78rem] text-gris-claro">
                    {c} · {e}
                  </span>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Sello className="absolute -bottom-6 -left-2 w-24 sm:w-28" />
      <figcaption id="ilus-cap" className="mt-10 text-center text-[0.78rem] text-texto-2">
        Ilustración: turnos y nombres de ejemplo.
      </figcaption>
    </figure>
  )
}

export function Portada() {
  return (
    <section id="inicio" className="portada relative overflow-hidden pb-[var(--marca-seccion)] pt-[clamp(3rem,2rem+4vw,6rem)]">
      <div className="contenedor grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div className="grid justify-items-start gap-7">
          <h1 className="titular max-w-[13ch] text-[length:var(--marca-fs-display)]">
            Tu negocio, <span className="resaltado">ordenado</span> y&nbsp;a&nbsp;mano.
          </h1>
          <p className="max-w-[46ch] text-[length:var(--marca-fs-lead)] text-texto-2">
            Webs, turnos online y sistemas a medida para negocios de Tucumán que hoy resuelven todo por WhatsApp.
          </p>
          <BotonPildora
            href={waLink("Hola Tomás, quiero ordenar los turnos/la web de mi negocio.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contame de tu negocio
          </BotonPildora>
          <p className="text-[0.9rem] text-texto-2">Te responde Tomás, la misma persona que lo construye.</p>
        </div>
        <Ilustracion />
      </div>
    </section>
  )
}
