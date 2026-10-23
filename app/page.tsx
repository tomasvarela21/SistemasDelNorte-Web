import { Encabezado } from "@/components/landing/encabezado"
import { Portada } from "@/components/landing/portada"
import { Rubros, DiaDelNegocio, Declaracion, Servicios, Proceso, Casos, QuienSoy } from "@/components/landing/secciones"
import { Contacto, Pie } from "@/components/landing/contacto"
import { Movimiento } from "@/components/landing/movimiento"

// Secciones ordenadas por momentos del cliente: reconoce el problema → ve su día resuelto →
// confía (honestidad) → entiende qué hago → cómo → pruebas → quién → contacto.
export default function Home() {
  return (
    <>
      <Encabezado />
      <main id="contenido">
        <Portada />
        <Rubros />
        <DiaDelNegocio />
        <Declaracion />
        <Servicios />
        <Proceso />
        <Casos />
        <QuienSoy />
        <Contacto />
      </main>
      <Pie />
      <Movimiento />
    </>
  )
}
