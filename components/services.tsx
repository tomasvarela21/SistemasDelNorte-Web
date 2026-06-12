"use client"

import { motion } from "framer-motion"
import { Package, Globe, Zap, BarChart3, Cog, Gauge } from "lucide-react"

const services = [
  {
    icon: Package,
    title: "Sistemas Personalizados",
    description: "Desarrollamos sistemas adaptados al flujo real de tu negocio. Soluciones que crecen contigo.",
    tags: ["Gestión", "Escalabilidad", "A medida"],
  },
  {
    icon: Globe,
    title: "Catálogos Digitales & E-commerce",
    description:
      "Plataformas web que venden. Catálogos digitales y tiendas online que convierten visitantes en clientes.",
    tags: ["Ventas", "Web", "Integración"],
  },
  {
    icon: BarChart3,
    title: "Sistemas Administrativos",
    description:
      "Control total de tu negocio. Gestión interna, reportes en tiempo real y toma de decisiones basada en datos.",
    tags: ["Reportes", "Control", "Datos"],
  },
  {
    icon: Zap,
    title: "Automatización de Procesos",
    description: "Automatiza tareas repetitivas y ahorra horas en trabajo manual. Eficiencia y precisión garantizadas.",
    tags: ["Automatización", "Eficiencia", "Tiempo"],
  },
  {
    icon: Cog,
    title: "Apps Web y Plataformas",
    description: "Aplicaciones web modernas, rápidas y seguras. Accesibles desde cualquier dispositivo.",
    tags: ["Tecnología", "Móvil", "Nube"],
  },
  {
    icon: Gauge,
    title: "Soporte y Escalabilidad",
    description: "Acompañamiento constante. Tu sistema crece con tu negocio, siempre con soporte técnico disponible.",
    tags: ["Soporte", "Mantenimiento", "Crecimiento"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Services() {
  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Resplandor de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-display">
            Lo que hacemos
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Soluciones integrales diseñadas para ordenar, automatizar y escalar tu negocio
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            // Determinamos el col-span en base al índice para crear el Bento Grid
            const isWide = index === 0 || index === 3 || index === 5
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group glass border-gradient-glow p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                  isWide ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                {/* Glow de tarjeta */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/10">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors font-display">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 mb-6 text-base leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-primary/10 border border-primary/20 text-accent rounded-full hover:bg-primary/25 transition-colors font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
