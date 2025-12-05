"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Zap } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    stat: "+50",
    label: "Proyectos Implementados",
    description: "Soluciones que funcionan en negocios reales",
  },
  {
    icon: Zap,
    stat: "+10,000",
    label: "Horas Ahorradas",
    description: "En tareas automatizadas por nuestros sistemas",
  },
  {
    icon: Users,
    stat: "+100",
    label: "Clientes Activos",
    description: "Confían en nosotros para sus soluciones digitales",
  },
]

export function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0A1B34] to-[#0F2847] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Por qué elegirnos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tecnología moderna pensada para escalar tu negocio, con un enfoque 100% en PyMEs y comercios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-[#2CA8FF]" />
                </div>
                <h3 className="text-4xl font-bold mb-2">{benefit.stat}</h3>
                <p className="text-lg font-semibold mb-2">{benefit.label}</p>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Valores principales */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-[#2CA8FF] mb-2">✓ Tecnología</p>
              <p className="text-gray-300">Herramientas modernas y escalables</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#2CA8FF] mb-2">✓ Adaptación</p>
              <p className="text-gray-300">Sistemas al flujo real de tu negocio</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#2CA8FF] mb-2">✓ Acompañamiento</p>
              <p className="text-gray-300">Soporte constante en la implementación</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#2CA8FF] mb-2">✓ Enfoque PyME</p>
              <p className="text-gray-300">No usamos soluciones genéricas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
