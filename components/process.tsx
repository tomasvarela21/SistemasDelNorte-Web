"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: 1,
    title: "Relevamiento del Negocio",
    description:
      "Conocemos tu negocio, desafíos y objetivos. Entendemos tu flujo de trabajo y necesidades específicas.",
  },
  {
    number: 2,
    title: "Propuesta y Prototipo",
    description:
      "Presentamos una solución clara con prototipo interactivo. Refinamos hasta que sea exactamente lo que necesitas.",
  },
  {
    number: 3,
    title: "Desarrollo y Pruebas",
    description:
      "Desarrollamos con tecnología moderna y de calidad. Probamos exhaustivamente para garantizar confiabilidad.",
  },
  {
    number: 4,
    title: "Implementación y Capacitación",
    description: "Desplegamos tu sistema y capacitamos a tu equipo. Te aseguramos que todos sepan usar la solución.",
  },
  {
    number: 5,
    title: "Soporte y Escalabilidad",
    description: "Soporte técnico continuo. Tu sistema escala con tu negocio, siempre con asistencia profesional.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 bg-background relative overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 font-display">Cómo Trabajamos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un proceso claro, transparente y enfocado en resultados
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 glass border border-border/70 rounded-2xl p-6 hover:bg-secondary/60 hover:border-accent/25 dark:border-white/5 dark:hover:bg-white/5 dark:hover:border-white/10 transition-all duration-300 group"
            >
              {/* Timeline */}
              <div className="flex items-center sm:flex-col sm:items-center gap-4 sm:gap-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground dark:text-background font-black text-lg flex-shrink-0 shadow-lg shadow-primary/20"
                >
                  {step.number}
                </motion.div>
                {index < steps.length - 1 && (
                  <>
                    <div className="h-1 w-12 bg-gradient-to-r from-accent to-primary/20 rounded-full sm:hidden"></div>
                    <div className="hidden sm:block w-0.5 h-16 bg-gradient-to-b from-accent to-primary/20 mt-2"></div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="pt-1 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors font-display">{step.title}</h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
