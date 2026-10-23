// Copy de la landing. Todo lo que es dato tiene que ser verificable.
// Los casos aparecen por rubro hasta tener permiso de cada cliente para nombrarlo.

export const WHATSAPP = "543812165087"
export const waLink = (texto: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`

export const rubros = [
  "Estéticas",
  "Cafeterías",
  "Peluquerías",
  "Barberías",
  "Centros de uñas",
  "Consultorios",
  "Comercios",
  "Distribuidoras",
]

export const dia = [
  {
    hora: "09:12",
    momento: "Te piden un turno",
    antes: "Contestás el WhatsApp entre clienta y clienta, mirando una agenda de papel.",
    ahora: "La clienta entra a tu web, elige el servicio y el horario libre, y reserva sola.",
    icono: "mensajes",
  },
  {
    hora: "13:40",
    momento: "Se confirma el turno",
    antes: "Pedís la seña por transferencia y esperás el comprobante.",
    ahora: "La seña se paga con Mercado Pago al reservar y el turno queda confirmado.",
    icono: "cobranzas",
  },
  {
    hora: "18:05",
    momento: "Alguien no va a venir",
    antes: "Te enterás cuando el horario ya está perdido.",
    ahora: "Un recordatorio sale antes del turno y, si cancela, el horario vuelve a quedar libre.",
    icono: "cuotas",
  },
  {
    hora: "21:30",
    momento: "Cerrás el día",
    antes: "Sumás a mano lo que entró, si te queda energía.",
    ahora: "Ves en un lugar los turnos del día y lo que cobraste.",
    icono: "reportes",
  },
] as const

export const servicios = [
  {
    nombre: "Tu web, con tu marca",
    para: "Para que te encuentren y te escriban",
    texto:
      "Una web hecha con tus colores, tu tipografía y tus fotos, no una plantilla. Con tus servicios, precios, ubicación y el botón para reservar o escribirte.",
    icono: "web",
  },
  {
    nombre: "Turnos y reservas online",
    para: "Para dejar de agendar por WhatsApp",
    texto:
      "Tus clientas reservan solas, con seña si la necesitás. Elijo con vos la herramienta que mejor le sirve a tu negocio y te la dejo andando. Si una opción gratuita te alcanza, te lo digo.",
    icono: "cuotas",
  },
  {
    nombre: "Sistemas a medida",
    para: "Para negocios con ventas, stock o cobranzas",
    texto:
      "Cuando una planilla ya no alcanza: un sistema armado sobre cómo trabajás, con los reportes que necesitás para decidir.",
    icono: "stock",
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
  { rubro: "Marca de café", titulo: "Web institucional con video de portada", detalle: "Sitio de marca para una marca de café.", tipo: "Web" },
  { rubro: "Emprendimiento gastronómico", titulo: "Landing con pedidos por WhatsApp", detalle: "Carta online y pedidos que llegan armados al WhatsApp del negocio.", tipo: "Web" },
  { rubro: "Entrenador personal", titulo: "App de alumnos, rutinas y cuotas", detalle: "Versión con la marca del entrenador sobre una plataforma propia.", tipo: "App" },
  { rubro: "Grupo constructor e inmobiliario", titulo: "Reportes contables multiempresa", detalle: "Información contable de varias empresas en un solo lugar.", tipo: "Sistema", cifra: { valor: "≈286 mil", etiqueta: "registros en 5 empresas" } },
  { rubro: "Empresa de ventas en cuotas", titulo: "Ventas, cobranzas y stock", detalle: "Seguimiento de cuotas y cobradores en zonas rurales de Tucumán.", tipo: "Sistema" },
  { rubro: "Boutique", titulo: "Stock por talle y color", detalle: "Reemplazó las planillas de stock por variantes.", tipo: "Sistema" },
  { rubro: "Administración de consorcios", titulo: "Expensas, morosidad y recibos", detalle: "Liquidación de expensas y recibos en PDF.", tipo: "Sistema" },
  { rubro: "Inmobiliaria", titulo: "Rediseño de la web", detalle: "Rediseño completo de la web de una inmobiliaria.", tipo: "Web" },
]
