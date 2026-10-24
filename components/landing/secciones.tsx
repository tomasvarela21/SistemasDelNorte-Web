import { BotonPildora } from "@/components/ui/boton"
import { Icono, Sticker, type IconoNombre } from "@/components/ui/grafica"
import { Isotipo } from "@/components/brand/marca"
import { casos, dia, proceso, rubros, servicios, waLink } from "@/lib/contenido"
import { CasosFila } from "@/components/landing/casos-fila"
import { Resaltador } from "@/components/landing/resaltador"

/* ---------- Marquee de rubros (estático en Fase 2) ---------- */
export function Rubros() {
  const fila = [...rubros, ...rubros]
  return (
    <section aria-label="Rubros con los que trabajo" className="marquee overflow-hidden border-y border-borde bg-resaltador py-5">
      <ul className="marquee-pista flex w-max gap-10 whitespace-nowrap" aria-hidden="false">
        {fila.map((r, i) => (
          <li key={i} aria-hidden={i >= rubros.length} className="flex items-center gap-10 font-display text-[clamp(1.25rem,1rem+1vw,2rem)] font-bold text-tinta">
            {r}
            <svg viewBox="0 0 10 10" className="size-2.5" aria-hidden="true"><circle cx="5" cy="5" r="5" fill="currentColor" /></svg>
          </li>
        ))}
      </ul>
    </section>
  )
}

/* ---------- Un día de tu negocio ---------- */
const fondosDia = ["#fffdf7", "var(--marca-color-resaltador-suave)", "var(--marca-color-papel-2)", "var(--marca-color-tinta)"]
export function DiaDelNegocio() {
  return (
    <section id="dia" className="dia py-[var(--marca-seccion)]" aria-labelledby="dia-titulo">
      <div className="dia-escenario relative">
        <div className="dia-fondos" aria-hidden="true">
          {fondosDia.map((c, i) => (
            <span key={i} className="dia-fondo" style={{ background: c }} />
          ))}
        </div>
        <div className="dia-pista contenedor relative grid gap-12">
        <div className="dia-intro grid content-center gap-5">
          <h2 id="dia-titulo" className="max-w-[18ch] text-[length:var(--marca-fs-h2)]">Un día de tu negocio, sin cuadernos ni planillas.</h2>
          <p className="max-w-[44rem] text-[length:var(--marca-fs-lead)] text-texto-2">
            Así cambia una jornada cuando el negocio deja de vivir en cuadernos y planillas.
          </p>
        </div>
        <ol className="dia-lista grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dia.map((m, i) => (
            <li
              key={m.hora}
              className={`dia-card grid content-start gap-5 rounded-[var(--marca-radio)] p-6 ${i === 3 ? "superficie-tinta ring-1 ring-inset ring-[var(--marca-color-borde)]" : i === 2 ? "bg-papel-2 ring-1 ring-inset ring-[var(--marca-color-borde)]" : i === 1 ? "bg-resaltador-suave" : "bg-[#fffdf7] ring-1 ring-inset ring-[var(--marca-color-borde)]"}`}
            >
              <div className="flex items-center justify-between">
                <span className="cifra text-[length:var(--marca-fs-h3)] leading-none">{m.hora}</span>
                <Icono nombre={m.icono as IconoNombre} className="size-7" />
              </div>
              <h3 className="text-[length:var(--marca-fs-h3)]">{m.momento}</h3>
              <dl className="grid gap-3 text-[0.98rem]">
                <div>
                  <dt className="text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-texto-2">Antes</dt>
                  <dd className="text-texto-2">{m.antes}</dd>
                </div>
                <div>
                  <dt className="text-[0.8rem] font-semibold uppercase tracking-[0.08em]">Con tu sistema</dt>
                  <dd>{m.ahora}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  )
}

/* ---------- Statement ---------- */
const DECLARACION = "Lo que hoy anotás en tres lugares distintos, mañana lo ves en uno. Y no te adaptás vos al programa: el programa se adapta a tu negocio."
export function Declaracion() {
  return (
    <section className="declaracion superficie-tinta py-[var(--marca-seccion)]" aria-label="Cómo pienso el trabajo">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="solo-lectores">{DECLARACION}</p>
          <p aria-hidden="true" className="declaracion-texto max-w-[22ch] font-display text-[length:var(--marca-fs-h2)] font-bold leading-[1.08] tracking-[-0.03em]">
            {DECLARACION}
          </p>
        </div>
        <Sticker texto="lo tuyo es tuyo · lo tuyo es tuyo · " variante="resaltador" className="w-32 shrink-0 sm:w-40" />
      </div>
    </section>
  )
}

/* ---------- Servicios ---------- */
export function Servicios() {
  return (
    <section id="servicios" className="py-[var(--marca-seccion)]" aria-labelledby="servicios-titulo">
      <div className="contenedor grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid content-start gap-6 lg:sticky lg:top-28">
          <h2 id="servicios-titulo" className="text-[length:var(--marca-fs-h2)]">Qué hago</h2>
          <p className="max-w-[40ch] text-[length:var(--marca-fs-lead)] text-texto-2">
            Empiezo por lo que más te ordena el día: tus ventas, tu stock y lo que te deben. Después, lo que tu negocio necesite.
          </p>
          <BotonPildora variante="resaltador" href="#contacto" className="justify-self-start">
            Pedí una propuesta
          </BotonPildora>
        </div>
        <ul className="divide-y divide-[var(--marca-color-borde)] border-y border-borde">
          {servicios.map((s) => (
            <li key={s.nombre} className="grid gap-3 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
              <span className="grid size-12 place-items-center rounded-full bg-papel-2">
                <Icono nombre={s.icono as IconoNombre} />
              </span>
              <div className="grid gap-2">
                <h3 className="text-[length:var(--marca-fs-h3)]">{s.nombre}</h3>
                <p className="font-medium">{s.para}</p>
                <p className="max-w-[60ch] text-texto-2">{s.texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- Proceso ---------- */
export function Proceso() {
  return (
    <section id="proceso" className="renglones bg-papel-2 py-[var(--marca-seccion)]" aria-labelledby="proceso-titulo">
      <div className="contenedor grid gap-12">
        <h2 id="proceso-titulo" className="max-w-[18ch] text-[length:var(--marca-fs-h2)]">Cómo trabajo, en cuatro pasos.</h2>
        <Resaltador />
        <ol className="grid gap-8 md:grid-cols-4">
          {proceso.map((p, i) => (
            <li key={p.paso} className="grid content-start gap-3 border-t-2 border-tinta pt-5">
              <h3 className="flex items-baseline gap-3 text-[length:var(--marca-fs-h3)]">
                <span className="cifra text-[0.9em] text-texto-2" aria-hidden="true">{i + 1}</span>
                {p.paso}
              </h3>
              <p className="text-texto-2">{p.texto}</p>
            </li>
          ))}
        </ol>
        <div>
          <BotonPildora href={waLink("Hola Tomás, quiero agendar una charla para contarte de mi negocio.")} target="_blank" rel="noopener noreferrer">
            Agendar la primera charla
          </BotonPildora>
        </div>
      </div>
    </section>
  )
}

/* ---------- Casos ---------- */
export function Casos() {
  return (
    <section id="casos" className="py-[var(--marca-seccion)]" aria-labelledby="casos-titulo">
      <div className="contenedor grid gap-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="grid max-w-[40rem] gap-4">
            <h2 id="casos-titulo" className="text-[length:var(--marca-fs-h2)]">Trabajos hechos</h2>
            <p className="text-texto-2">
              Webs, apps y sistemas que ya están en uso. Los muestro por rubro hasta que cada cliente me autorice a nombrarlo.
            </p>
          </div>
        </div>
      </div>
      <CasosFila>
        {casos.map((c) => (
          <li key={c.titulo} className="caso-card grid w-[min(20rem,82vw)] shrink-0 snap-start content-between gap-8 rounded-[var(--marca-radio)] bg-papel-2 p-6">
            <div className="grid gap-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[0.85rem] font-medium text-texto-2">{c.rubro}</span>
                <span className="rounded-full bg-papel px-3 py-1 text-[0.75rem] font-semibold">{c.tipo}</span>
              </div>
              <h3 className="text-[1.375rem]">{c.titulo}</h3>
              <p className="text-texto-2">{c.detalle}</p>
            </div>
            {c.cifra ? (
              <p className="grid">
                <span className="cifra text-[2.25rem] leading-none" data-contar={c.cifra.valor}>{c.cifra.valor}</span>
                <span className="text-[0.85rem] text-texto-2">{c.cifra.etiqueta}</span>
              </p>
            ) : (
              <Isotipo className="h-8 w-auto self-end justify-self-start text-tinta opacity-20" />
            )}
          </li>
        ))}
      </CasosFila>
   </section>
  )
}

/* ---------- Quién está detrás ---------- */
export function QuienSoy() {
  return (
    <section className="quien py-[var(--marca-seccion)] pt-0" aria-labelledby="quien-titulo">
      <div className="contenedor grid gap-8 rounded-[calc(var(--marca-radio)*1.5)] bg-resaltador-suave p-[clamp(1.5rem,1rem+3vw,4rem)] md:grid-cols-[auto_1fr] md:items-center">
        <div className="grid size-28 place-items-center rounded-full bg-tinta text-papel md:size-36">
          <Isotipo className="h-14 w-auto md:h-16" />
        </div>
        <div className="grid gap-4">
          <h2 id="quien-titulo" className="text-[length:var(--marca-fs-h3)]">Detrás de VareLab hay una persona.</h2>
          <p className="max-w-[62ch]">
            Soy Tomás Varela, desarrollador full stack en Tucumán y estudiante de Ingeniería en Sistemas. No hay equipo de ventas ni intermediarios: hablás conmigo desde la primera charla hasta el soporte.
          </p>
        </div>
      </div>
    </section>
  )
}
