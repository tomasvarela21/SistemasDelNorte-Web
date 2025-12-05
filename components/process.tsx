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
    <section id="process" className="py-20 bg-gradient-to-b from-white to-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1B34] mb-4">Cómo Trabajamos</h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Un proceso claro, transparente y enfocado en resultados
          </p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white/60 sm:bg-transparent rounded-xl p-4 sm:p-0 shadow-sm sm:shadow-none"
            >
              {/* Timeline */}
              <div className="flex items-center sm:flex-col sm:items-center gap-4 sm:gap-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0A1B34] to-[#2CA8FF] flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg"
                >
                  {step.number}
                </motion.div>
                {index < steps.length - 1 && (
                  <>
                    <div className="h-1 w-12 bg-gradient-to-r from-[#2CA8FF] to-[#2CA8FF]/30 rounded-full sm:hidden"></div>
                    <div className="hidden sm:block w-1 h-16 bg-gradient-to-b from-[#2CA8FF] to-[#2CA8FF]/30 mt-2"></div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="pb-4 sm:pb-8 pt-1 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A1B34] mb-2">{step.title}</h3>
                <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
