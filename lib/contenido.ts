// Copy de la landing. Todo lo que es dato tiene que ser verificable.
// Los casos aparecen por rubro hasta tener permiso de cada cliente para nombrarlo.

export const WHATSAPP = "543812165087"
export const waLink = (texto: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`

export const rubros = [
  "Comercios",
  "Distribuidoras",
  "Boutiques",
  "Ventas en cuotas",
  "Consorcios",
  "Inmobiliarias",
  "Gimnasios",
  "Estéticas",
]

export const dia = [
  {
    hora: "09:00",
    momento: "Abrís el local",
    antes: "Revisás estantes y planillas para ver qué te falta.",
    ahora: "El sistema te muestra qué productos están por agotarse.",
    icono: "stock",
  },
  {
    hora: "12:30",
    momento: "Vendés",
    antes: "Anotás en el cuaderno y descontás el stock “después”.",
    ahora: "La venta queda registrada y el stock se descuenta solo.",
    icono: "ventas",
  },
  {
    hora: "17:00",
    momento: "Cobrás",
    antes: "Buscás en el cuaderno quién te debe y cuánto.",
    ahora: "Ves quién está atrasado, cuántas cuotas debe y cuánto suma.",
    icono: "cobranzas",
  },
  {
    hora: "20:30",
    momento: "Cerrás la caja",
    antes: "Sumás a mano lo que entró, si te queda energía.",
    ahora: "Ves cuánto vendiste y cuánto entró, por día o por mes.",
    icono: "caja",
  },
] as const

export const servicios = [
  {
    nombre: "Sistemas a medida",
    para: "Para dejar el cuaderno y el Excel",
    texto:
      "Gestión, ventas, stock, cobranzas, cuotas o turnos: armado según cómo funciona tu negocio, para usar desde la compu o el celular.",
    icono: "stock",
  },
  {
    nombre: "Reportes y automatizaciones",
    para: "Para que lo repetitivo se haga solo",
    texto:
      "Avisos de stock bajo, recordatorios de cobro y reportes que te llegan sin tener que armarlos a mano.",
    icono: "reportes",
  },
  {
    nombre: "Tu web, con tu marca",
    para: "Para que te encuentren y te escriban",
    texto:
      "Una web con tus colores, tu tipografía y tus fotos, no una plantilla. Si hace falta, conectada al sistema: catálogo, pedidos o turnos online.",
    icono: "web",
  },
  {
    nombre: "Acompañamiento",
    para: "Para que todo siga funcionando",
    texto:
      "Un abono mensual para cambios, actualizaciones y dudas. Sin contratos eternos y sin promesas de atención las 24 horas: trabajo yo, y te digo cuándo te respondo.",
    icono: "mensajes",
  },
] as const

export const proceso = [
  { paso: "Entender", texto: "Una charla para ver cómo trabajás hoy: qué hacés a mano, qué se te pierde y qué te come el día." },
  { paso: "Diseñar", texto: "Te muestro una propuesta concreta, con alcance y precio cerrados, antes de escribir una línea de código." },
  { paso: "Entregar por etapas", texto: "Ves y usás cada parte apenas está lista. Pagás por avance, no a ciegas." },
  { paso: "Acompañar", texto: "Te dejo todo documentado. El código, los datos y el dominio quedan a tu nombre." },
] as const

export type Caso = { rubro: string; titulo: string; detalle: string; tipo: "Web" | "Sistema" | "App"; cifra?: { valor: string; etiqueta: string } }
export const casos: Caso[] = [
  { rubro: "Grupo constructor e inmobiliario", titulo: "Reportes contables multiempresa", detalle: "Información contable de varias empresas en un solo lugar.", tipo: "Sistema", cifra: { valor: "≈286 mil", etiqueta: "registros en 5 empresas" } },
  { rubro: "Empresa de ventas en cuotas", titulo: "Ventas, cobranzas y stock", detalle: "Seguimiento de cuotas y cobradores en zonas rurales de Tucumán.", tipo: "Sistema" },
  { rubro: "Boutique", titulo: "Stock por talle y color", detalle: "Reemplazó las planillas de stock por variantes.", tipo: "Sistema" },
  { rubro: "Administración de consorcios", titulo: "Expensas, morosidad y recibos", detalle: "Liquidación de expensas y recibos en PDF.", tipo: "Sistema" },
  { rubro: "Entrenador personal", titulo: "App de alumnos, rutinas y cuotas", detalle: "Versión con la marca del entrenador sobre una plataforma propia.", tipo: "App" },
  { rubro: "Marca de café", titulo: "Web institucional con video de portada", detalle: "Sitio de marca para una marca de café.", tipo: "Web" },
  { rubro: "Emprendimiento gastronómico", titulo: "Landing con pedidos por WhatsApp", detalle: "Carta online y pedidos que llegan armados al WhatsApp del negocio.", tipo: "Web" },
  { rubro: "Inmobiliaria", titulo: "Rediseño de la web", detalle: "Rediseño completo de la web de una inmobiliaria.", tipo: "Web" },
]
