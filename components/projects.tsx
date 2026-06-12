"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, Sparkles } from "lucide-react"
import Image from "next/image"

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
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Luces de fondo ambientadas */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-primary rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-sm font-semibold text-accent tracking-wider font-display">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-display">Proyectos Realizados</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
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
              className={`px-6 py-2 rounded-full font-medium transition-all border ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-primary to-accent text-background border-transparent shadow-lg shadow-primary/20 scale-105"
                  : "bg-zinc-900/60 text-zinc-300 border-zinc-800 hover:border-accent hover:text-accent hover:bg-zinc-800"
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
                className="group glass border-gradient-glow rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
              >
                {/* Imagen */}
                <div className="relative h-48 overflow-hidden bg-zinc-900 border-b border-white/5">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-accent text-xs font-bold uppercase tracking-widest">{project.category}</span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 font-display">{project.name}</h3>

                  <div className="mb-6 space-y-3">
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      <strong className="text-white font-medium">Problema:</strong> {project.problem}
                    </p>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      <strong className="text-accent font-medium">Solución:</strong> {project.solution}
                    </p>
                  </div>

                  {/* Tags de tecnología */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techs.map((tech, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 bg-primary/10 border border-primary/20 text-accent rounded-md font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botones */}
                  <div className="flex gap-3">
                    <a
                      href={project.demoLink}
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-primary to-accent text-background rounded-lg font-bold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group/btn text-sm"
                    >
                      <Eye size={16} className="text-background" /> Ver Demo
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
