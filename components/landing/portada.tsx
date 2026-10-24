import { BotonPildora } from "@/components/ui/boton"
import { Sello } from "@/components/ui/grafica"
import { waLink } from "@/lib/contenido"

const capitulos = [
  "Hoy, la información está en cuadernos, planillas y chats.",
  "Cada venta, cada cobro y cada movimiento de stock queda registrado.",
  "Y ves tu negocio entero en una sola pantalla.",
]

export function Portada() {
  return (
    <section id="inicio" className="portada relative overflow-x-clip pt-[clamp(2.5rem,1.5rem+4vw,5.5rem)] pb-[var(--marca-seccion)]">
      <div className="portada-escenario contenedor grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <div className="grid justify-items-start gap-7">
          <h1 className="titular max-w-[13ch] text-[length:var(--marca-fs-display)]">
            <span className="linea-mascara"><span>Tu negocio,</span></span>{" "}
            <span className="linea-mascara"><span><span className="resaltado">ordenado</span></span></span>{" "}
            <span className="linea-mascara"><span>y&nbsp;a&nbsp;mano.</span></span>
          </h1>
          <p className="max-w-[46ch] text-[length:var(--marca-fs-lead)] text-texto-2">
            Sistemas a medida, webs y turnos online para dejar el cuaderno y el Excel. Ventas, stock, cobranzas y turnos en un solo lugar, desde la compu o el celular.
          </p>
          <BotonPildora href={waLink("Hola Tomás, quiero ordenar mi negocio con un sistema.")} target="_blank" rel="noopener noreferrer">
            Contame de tu negocio
          </BotonPildora>
          <p className="text-[0.9rem] text-texto-2">Te responde Tomás, la misma persona que lo construye.</p>
        </div>

        <div className="hero-pista">
          <div className="hero-sticky grid gap-5">
            <figure className="hero-visual relative mx-auto aspect-[6/5] w-full max-w-[36rem]" aria-describedby="hero-cap">
              <picture>
                <source media="(prefers-reduced-motion: reduce) and (min-width: 600px)" srcSet="/hero/d-059.webp" />
                <source media="(prefers-reduced-motion: reduce)" srcSet="/hero/m-035.webp" />
                <source media="(min-width: 600px)" srcSet="/hero/d-000.webp" />
                <img
                  src="/hero/m-000.webp"
                  alt="Ilustración: un cuaderno de ventas, una planilla de stock con errores y mensajes de clientes que se ordenan en un panel con ventas del día, productos con stock bajo y clientes por cobrar."
                  width={960}
                  height={800}
                  fetchPriority="high"
                  className="hero-poster absolute inset-0 size-full rounded-[var(--marca-radio)] object-cover"
                />
              </picture>
              <canvas className="hero-canvas absolute inset-0 size-full rounded-[var(--marca-radio)] opacity-0" aria-hidden="true" />
              <Sello className="absolute -bottom-5 -left-3 w-20 sm:w-24" />
            </figure>
            <ol className="hero-capitulos mx-auto grid w-full max-w-[36rem] gap-1.5 pl-1 text-[0.98rem]">
              {capitulos.map((c, i) => (
                <li key={c} className="hero-capitulo flex gap-3" data-i={i}>
                  <span className="cifra" aria-hidden="true">{i + 1}</span>
                  {c}
                </li>
              ))}
            </ol>
            <p id="hero-cap" className="mx-auto w-full max-w-[36rem] text-[0.78rem] text-texto-2">
              Ilustración propia: productos, cifras, nombres y mensajes de ejemplo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
