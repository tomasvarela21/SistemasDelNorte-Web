"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  BarChart3,
  ClipboardList,
  Eye,
  FileBarChart,
  Globe,
  PackageCheck,
  Smartphone,
  Sparkles,
  Store,
} from "lucide-react"
import { ProjectDemoModal, type DemoType, type ProjectCase } from "@/components/project-demos"

const projects: ProjectCase[] = [
  {
    id: 1,
    name: "Panel de Ventas e Inventario",
    client: "NorteStock Mayorista",
    industry: "Distribuidora de insumos",
    tagline: "Control de caja, pedidos y reposición para un mayorista que vende por mostrador y WhatsApp.",
    category: "Ventas",
    problem: "Ventas, stock y caja se actualizan tarde porque dependen de planillas o registros manuales.",
    solution: "Un panel operativo registra ventas, descuenta stock y deja alertas visibles para decidir rápido.",
    techs: ["Dashboard", "Stock", "Caja", "Alertas"],
    demoType: "sales",
    metrics: ["Stock vivo", "Caja diaria", "Alertas"],
    previewStats: [
      { label: "Ventas", value: "128" },
      { label: "Stock", value: "94%" },
      { label: "Caja", value: "$1.8M" },
    ],
    palette: {
      primary: "#0f766e",
      secondary: "#2563eb",
      surface: "#dff7f2",
      text: "#ffffff",
    },
    whatsappMessage: "Hola Sistemas del Norte, quiero una demo de gestión de ventas e inventario para mi negocio.",
  },
  {
    id: 2,
    name: "Tienda Online Inteligente",
    client: "Aura Boutique",
    industry: "Indumentaria y accesorios",
    tagline: "Experiencia de compra con promociones, carrito claro y pedido listo para cobrar.",
    category: "E-commerce",
    problem: "El negocio necesita vender online sin depender de catálogos manuales ni pedidos desordenados.",
    solution: "Una tienda simple permite armar carrito, aplicar promociones y confirmar pedidos desde un mismo flujo.",
    techs: ["Carrito", "Pagos", "Promos", "Pedidos"],
    demoType: "ecommerce",
    metrics: ["Carrito", "Descuentos", "Pedidos"],
    previewStats: [
      { label: "Ticket", value: "$68K" },
      { label: "Conv.", value: "4.8%" },
      { label: "Pedidos", value: "32" },
    ],
    palette: {
      primary: "#be185d",
      secondary: "#f97316",
      surface: "#fff1f2",
      text: "#ffffff",
    },
    whatsappMessage: "Hola Sistemas del Norte, quiero conversar sobre un e-commerce inteligente para mi negocio.",
  },
  {
    id: 3,
    name: "Catálogo Digital Interactivo",
    client: "Casa Andina Deco",
    industry: "Decoración y hogar",
    tagline: "Catálogo consultable para que el cliente filtre, compare y arme una solicitud comercial.",
    category: "Catálogos",
    problem: "El catálogo en PDF no permite buscar, filtrar ni convertir interés en consultas comerciales.",
    solution: "Un catálogo web filtra productos y arma consultas listas para enviar al equipo de ventas.",
    techs: ["Búsqueda", "Filtros", "Consulta", "WhatsApp"],
    demoType: "catalog",
    metrics: ["Filtros", "Selección", "Consulta"],
    previewStats: [
      { label: "Items", value: "240" },
      { label: "Rubros", value: "12" },
      { label: "Leads", value: "+38%" },
    ],
    palette: {
      primary: "#7c3aed",
      secondary: "#0891b2",
      surface: "#f5f3ff",
      text: "#ffffff",
    },
    whatsappMessage: "Hola Sistemas del Norte, quiero un catálogo digital interactivo para mostrar mis productos.",
  },
  {
    id: 4,
    name: "Operaciones Internas",
    client: "Clínica San Miguel",
    industry: "Servicios profesionales",
    tagline: "Tablero de tareas, responsables y prioridades para equipos que coordinan muchas solicitudes.",
    category: "Gestión",
    problem: "Las tareas se pierden entre chats, planillas y conversaciones sin responsables claros.",
    solution: "Un tablero interno ordena estados, responsables y prioridades para que el equipo avance coordinado.",
    techs: ["Tareas", "Roles", "Estados", "Prioridad"],
    demoType: "workflow",
    metrics: ["Avance", "Responsables", "Prioridad"],
    previewStats: [
      { label: "SLA", value: "92%" },
      { label: "Tareas", value: "46" },
      { label: "Equipo", value: "8" },
    ],
    palette: {
      primary: "#1d4ed8",
      secondary: "#16a34a",
      surface: "#eff6ff",
      text: "#ffffff",
    },
    whatsappMessage: "Hola Sistemas del Norte, quiero ordenar la gestión interna de mi equipo con una plataforma web.",
  },
  {
    id: 5,
    name: "Reportes Ejecutivos Automáticos",
    client: "Ruta 9 Logística",
    industry: "Logística y distribución",
    tagline: "Resumen ejecutivo por período con indicadores operativos listos para dirección.",
    category: "Automatización",
    problem: "Los reportes se preparan a mano, llegan tarde y suelen tener errores de carga o consolidación.",
    solution: "Un generador automático resume ventas, operaciones y alertas por período con envío simulado.",
    techs: ["Reportes", "Automatización", "KPIs", "Email"],
    demoType: "reports",
    metrics: ["KPIs", "Períodos", "Envíos"],
    previewStats: [
      { label: "Ahorro", value: "9h" },
      { label: "KPIs", value: "14" },
      { label: "Errores", value: "-81%" },
    ],
    palette: {
      primary: "#b45309",
      secondary: "#dc2626",
      surface: "#fffbeb",
      text: "#ffffff",
    },
    whatsappMessage: "Hola Sistemas del Norte, quiero automatizar reportes para ahorrar tiempo administrativo.",
  },
  {
    id: 6,
    name: "Equipo en Campo PWA",
    client: "TecnoCampo Service",
    industry: "Servicio técnico en ruta",
    tagline: "Carga de visitas, evidencia y sincronización para técnicos que trabajan con conectividad variable.",
    category: "Campo",
    problem: "El equipo fuera de oficina carga visitas tarde y pierde información cuando no tiene conexión.",
    solution: "Una app web progresiva guarda visitas temporalmente, trabaja offline y sincroniza al volver la señal.",
    techs: ["PWA", "Offline", "Visitas", "Sync"],
    demoType: "field",
    metrics: ["Offline", "Cola", "Sincronización"],
    previewStats: [
      { label: "Visitas", value: "57" },
      { label: "Offline", value: "OK" },
      { label: "Sync", value: "2s" },
    ],
    palette: {
      primary: "#365314",
      secondary: "#0f766e",
      surface: "#ecfccb",
      text: "#ffffff",
    },
    whatsappMessage: "Hola Sistemas del Norte, quiero una app para mi equipo en campo con modo offline.",
  },
]

const iconByDemo: Record<DemoType, typeof BarChart3> = {
  sales: PackageCheck,
  ecommerce: Store,
  catalog: Globe,
  workflow: ClipboardList,
  reports: FileBarChart,
  field: Smartphone,
}

const categories = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))] as const

function ProjectPreview({ project }: { project: ProjectCase }) {
  const Icon = iconByDemo[project.demoType]
  const previewStyle = {
    background: `radial-gradient(circle at 15% 10%, ${project.palette.surface}, transparent 38%), linear-gradient(135deg, ${project.palette.primary}22, ${project.palette.secondary}28)`,
  }

  return (
    <div className="relative h-56 overflow-hidden border-b border-border/70 dark:border-white/5" style={previewStyle}>
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-lg border border-border/70 bg-card/80 shadow-lg backdrop-blur dark:border-white/10 dark:bg-zinc-950/60">
        <Icon className="h-6 w-6" style={{ color: project.palette.primary }} />
      </div>
      <div className="absolute right-5 top-5 max-w-[160px] rounded-md border border-border/70 bg-card/85 px-3 py-2 text-right text-[10px] font-bold uppercase tracking-widest text-muted-foreground backdrop-blur dark:border-white/10 dark:bg-zinc-950/60">
        {project.industry}
      </div>

      <div className="absolute left-5 right-5 top-24 rounded-xl border border-border/70 bg-card/80 p-4 shadow-xl backdrop-blur dark:border-white/10 dark:bg-zinc-950/55">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="font-display text-sm font-extrabold text-foreground">{project.client}</span>
          <span className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white" style={{ backgroundColor: project.palette.primary }}>
            Live
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {project.previewStats.map((stat) => (
            <div key={stat.label} className="rounded-lg bg-secondary/70 px-2.5 py-2 dark:bg-white/5">
              <span className="block text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</span>
              <span className="font-display block text-sm font-extrabold text-foreground tabular-nums">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      <span className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-widest" style={{ color: project.palette.primary }}>
        {project.category}
      </span>
    </div>
  )
}

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [activeProject, setActiveProject] = useState<ProjectCase | null>(null)

  const filtered = selectedCategory === "Todos" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="relative overflow-hidden bg-background py-20">
      <div className="absolute left-10 top-10 h-[400px] w-[400px] rounded-full bg-primary opacity-10 mix-blend-screen blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 animate-pulse text-accent" />
            <span className="font-display text-sm font-semibold tracking-wider text-accent">Soluciones en Acción</span>
          </div>
          <h2 className="font-display mb-4 text-4xl font-extrabold text-foreground md:text-5xl">Demos Interactivas</h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Tocá cada solución y probá una mini experiencia con datos simulados, métricas vivas y flujos reales de negocio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full border px-6 py-2 font-medium transition-all ${
                selectedCategory === cat
                  ? "scale-105 border-transparent bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20 dark:text-background"
                  : "border-border bg-card/75 text-secondary-foreground hover:border-accent hover:bg-secondary hover:text-accent dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:bg-zinc-800"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border-gradient-glow glass group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <ProjectPreview project={project} />

                <div className="relative z-10 p-6">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">{project.client}</span>
                  <h3 className="font-display mb-3 text-xl font-bold text-foreground">{project.name}</h3>

                  <div className="mb-6 space-y-3">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <strong className="font-medium text-foreground">Problema:</strong> {project.problem}
                    </p>
                    <p className="text-sm leading-relaxed text-secondary-foreground">
                      <strong className="font-medium text-accent">Solución:</strong> {project.solution}
                    </p>
                  </div>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span key={tech} className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-accent">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:shadow-primary/30 dark:text-background"
                  >
                    <Eye size={16} className="text-primary-foreground dark:text-background" />
                    Ver Demo
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectDemoModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
