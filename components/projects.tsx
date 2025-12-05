"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, Sparkles } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Sistema Administrativo - Comercio Electrónico",
    category: "Sistemas administrativos",
    problem: "Gestión manual de pedidos, inventario desorganizado, sin reportes de ventas.",
    solution: "Sistema integrado que automatiza pedidos, controla stock en tiempo real y genera reportes diarios.",
    techs: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind"],
    demoLink: "#",
    image: "https://images.unsplash.com/photo-1560264357-8d9766d54748?w=500&h=300&fit=crop",
  },
  {
    id: 2,
    name: "E-commerce Inteligente",
    category: "E-commerce",
    problem: "Necesidad de vender online sin invertir en plataforma cara ni complicada.",
    solution: "Catálogo digital con carrito de compras, pagos integrados y gestión de inventario automática.",
    techs: ["Next.js", "Stripe", "Firebase", "React"],
    demoLink: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Catálogo Digital Interactivo",
    category: "Catálogos digitales",
    problem: "Catálogo en PDF que no atrae a clientes ni permite buscar fácilmente.",
    solution: "Catálogo web moderno, responsive, con búsqueda avanzada y filtros inteligentes.",
    techs: ["React", "Tailwind", "Framer Motion", "TypeScript"],
    demoLink: "#",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Plataforma de Gestión Interna",
    category: "Apps web",
    problem: "Múltiples herramientas desconectadas, información dispersa, sin control central.",
    solution: "Plataforma unificada con acceso a datos en tiempo real desde cualquier dispositivo.",
    techs: ["Next.js", "PostgreSQL", "Redux", "AWS"],
    demoLink: "#",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Automatización de Reportes",
    category: "Automatización",
    problem: "Reportes manuales que toman horas, propensos a errores.",
    solution: "Sistema automatizado que genera reportes diarios, semanales y mensuales.",
    techs: ["Node.js", "Firebase", "Cron Jobs", "SendGrid"],
    demoLink: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
  },
  {
    id: 6,
    name: "App Móvil de Gestión",
    category: "Apps web",
    problem: "Equipo en campo sin acceso a información de la empresa.",
    solution: "App web progresiva con acceso offline y sincronización automática.",
    techs: ["React Native", "PWA", "IndexedDB"],
    demoLink: "#",
    image: "https://images.unsplash.com/photo-1512941691920-25bef266d0a0?w=500&h=300&fit=crop",
  },
]

const categories = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filtered = selectedCategory === "Todos" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#2CA8FF]" />
            <span className="text-sm font-semibold text-[#2CA8FF]">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1B34] mb-4">Proyectos Realizados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones que transformaron negocios reales. Cada proyecto es una historia de éxito.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#2CA8FF] to-[#1e88d4] text-white shadow-lg shadow-[#2CA8FF]/50 scale-105"
                  : "bg-white text-[#0A1B34] hover:border-[#2CA8FF] border border-gray-200 hover:shadow-md"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de Proyectos */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#2CA8FF] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Imagen */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">{project.category}</span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0A1B34] mb-2">{project.name}</h3>

                  <div className="mb-4 space-y-2">
                    <p className="text-sm text-gray-600">
                      <strong>Problema:</strong> {project.problem}
                    </p>
                    <p className="text-sm text-[#0A1B34]">
                      <strong>Solución:</strong> {project.solution}
                    </p>
                  </div>

                  {/* Tags de tecnología */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-[#2CA8FF]/10 text-[#2CA8FF] rounded-md font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botones */}
                  <div className="flex gap-3">
                    <a
                      href={project.demoLink}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-[#2CA8FF] to-[#1e88d4] text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <Eye size={16} /> Ver Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
