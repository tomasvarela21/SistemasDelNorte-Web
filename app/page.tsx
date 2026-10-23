import { Wordmark } from "@/components/brand/marca"

// Fase 1: la landing se arma en la Fase 2. Mientras tanto, una portada mínima.
export default function Home() {
  return (
    <main className="renglones grid min-h-[100svh] place-items-center">
      <h1 className="contenedor grid justify-items-center gap-6 text-center">
        <Wordmark className="w-[min(24rem,72vw)] text-tinta" />
        <span className="font-sans text-[length:var(--marca-fs-lead)] font-normal tracking-normal text-texto-2">
          Sistemas a medida para ordenar ventas, stock y cobranzas.
        </span>
      </h1>
    </main>
  )
}
