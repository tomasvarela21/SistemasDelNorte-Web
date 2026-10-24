import type React from "react"
import { useId } from "react"
import { cn } from "@/lib/utils"
import { Isotipo } from "@/components/brand/marca"

/* ---------- Sticker con texto curvo ---------- */
type StickerProps = {
  texto: string
  centro?: React.ReactNode
  variante?: "resaltador" | "tinta" | "papel"
  className?: string
  /** El sticker es decorativo salvo que se pase etiqueta */
  etiqueta?: string
}
const fondos = {
  resaltador: { fill: "var(--marca-color-resaltador)", ink: "var(--marca-color-tinta)" },
  tinta: { fill: "var(--marca-color-tinta)", ink: "var(--marca-color-papel)" },
  papel: { fill: "var(--marca-color-papel)", ink: "var(--marca-color-tinta)" },
}

export function Sticker({ texto, centro, variante = "resaltador", className, etiqueta }: StickerProps) {
  const id = useId().replace(/:/g, "")
  const c = fondos[variante]
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("sticker", className)}
      role={etiqueta ? "img" : undefined}
      aria-label={etiqueta}
      aria-hidden={etiqueta ? undefined : true}
    >
      <defs>
        <path id={`c-${id}`} d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
      </defs>
      <circle cx="100" cy="100" r="98" fill={c.fill} />
      <circle cx="100" cy="100" r="88" fill="none" stroke={c.ink} strokeOpacity=".22" strokeWidth="1" />
      <g className="sticker-anillo" style={{ transformOrigin: "100px 100px" }}>
        <text
          fill={c.ink}
          style={{ fontFamily: "var(--marca-font-display)", fontWeight: 700, fontSize: 17, letterSpacing: "0.14em" }}
        >
          <textPath href={`#c-${id}`} startOffset="0" textLength="440" lengthAdjust="spacing">
            {texto.toUpperCase()}
          </textPath>
        </text>
      </g>
      {centro ? (
        <foreignObject x="50" y="50" width="100" height="100">
          <div className="grid size-full place-items-center" style={{ color: c.ink }}>
            {centro}
          </div>
        </foreignObject>
      ) : null}
    </svg>
  )
}

/* ---------- Sello giratorio con el isotipo original (exportado de Figma, no redibujado) ---------- */
export function Sello({ texto = "a medida · por etapas · lo tuyo es tuyo · ", className }: { texto?: string; className?: string }) {
  const id = useId().replace(/:/g, "")
  return (
    <div className={cn("sello relative aspect-square", className)} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="absolute inset-0 size-full">
        <defs>
          <path id={`s-${id}`} d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
        </defs>
        <circle cx="100" cy="100" r="99" fill="var(--marca-color-tinta)" />
        <g className="sello-anillo" style={{ transformOrigin: "100px 100px" }}>
          <text fill="var(--marca-color-papel)" style={{ fontFamily: "var(--marca-font-texto)", fontWeight: 600, fontSize: 13.5, letterSpacing: "0.2em" }}>
            <textPath href={`#s-${id}`} textLength="498" lengthAdjust="spacing">
              {texto.toUpperCase()}
            </textPath>
          </text>
        </g>
      </svg>
      <div className="absolute inset-[30%] grid place-items-center text-papel">
        <Isotipo className="h-full w-auto" />
      </div>
    </div>
  )
}

/* ---------- Blobs suaves ---------- */
const BLOBS = [
  "M43.6,-58.5C55.3,-49.2,62.9,-34.6,67.2,-18.9C71.5,-3.2,72.6,13.6,66.1,27C59.6,40.4,45.6,50.4,30.4,57.7C15.2,65,-1.2,69.6,-17.6,66.8C-34,64,-50.4,53.8,-60.4,39.2C-70.4,24.6,-74,5.6,-69.9,-11.2C-65.8,-28,-54,-42.6,-39.9,-51.5C-25.8,-60.4,-12.9,-63.6,1.7,-65.9C16.3,-68.2,31.9,-67.8,43.6,-58.5Z",
  "M51.2,-62.6C64.8,-50.7,73.2,-33.2,74.7,-15.6C76.2,2,70.8,19.6,61.2,33.9C51.6,48.2,37.8,59.2,21.7,65.4C5.6,71.6,-12.8,73,-28.7,66.9C-44.6,60.8,-58,47.2,-65.6,31C-73.2,14.8,-75,-4,-69.6,-20.3C-64.2,-36.6,-51.6,-50.4,-37.2,-61.9C-22.8,-73.4,-6.6,-82.6,9.7,-84.2C26,-85.8,37.6,-74.5,51.2,-62.6Z",
]
export function Blob({ variante = 0, color = "var(--marca-color-resaltador-suave)", className }: { variante?: 0 | 1; color?: string; className?: string }) {
  return (
    <svg viewBox="-90 -90 180 180" className={cn("blob pointer-events-none", className)} aria-hidden="true">
      <path d={BLOBS[variante]} fill={color} />
    </svg>
  )
}

/* ---------- Íconos de línea por categoría (trazo 1.75, puntas redondas) ---------- */
type IconoNombre = "stock" | "ventas" | "cuotas" | "cobranzas" | "caja" | "reportes" | "mensajes" | "web"
const ICONOS: Record<IconoNombre, React.ReactNode> = {
  stock: (
    <>
      <path d="M3.5 8.5 12 4l8.5 4.5v8L12 21l-8.5-4.5v-8Z" />
      <path d="M3.5 8.5 12 13l8.5-4.5M12 13v8" />
    </>
  ),
  ventas: (
    <>
      <path d="M6 3.5h12v17l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3v-17Z" />
      <path d="M9 8h6M9 11.5h6M9 15h3.5" />
    </>
  ),
  cuotas: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      <path d="M8 13.5h.01M12 13.5h.01M16 13.5h.01M8 17h.01M12 17h.01" strokeWidth="2.4" />
    </>
  ),
  cobranzas: (
    <>
      <rect x="3" y="6.5" width="18" height="12" rx="2.5" />
      <circle cx="12" cy="12.5" r="2.6" />
      <path d="M6.5 9.8v5.4M17.5 9.8v5.4" />
    </>
  ),
  caja: (
    <>
      <path d="M4 10.5h16l-1 9.5H5l-1-9.5Z" />
      <path d="M7 10.5V5.5h7v5M14 7.5h3v3" />
      <path d="M9 14.5h6" />
    </>
  ),
  reportes: (
    <>
      <path d="M4 20.5h16" />
      <path d="M7 16.5v-5M12 16.5V7M17 16.5v-3" />
    </>
  ),
  mensajes: (
    <>
      <path d="M20.5 11.6a8.1 8.1 0 0 1-12 7.1L4 20l1.3-4.3a8.1 8.1 0 1 1 15.2-4.1Z" />
      <path d="M9 10.5h6M9 13.5h3.5" />
    </>
  ),
  web: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="M3 9h18M6.5 6.8h.01M9 6.8h.01" />
    </>
  ),
}

export function Icono({ nombre, className, titulo }: { nombre: IconoNombre; className?: string; titulo?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-6", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={titulo ? "img" : undefined}
      aria-label={titulo}
      aria-hidden={titulo ? undefined : true}
    >
      {ICONOS[nombre]}
    </svg>
  )
}
export type { IconoNombre }
