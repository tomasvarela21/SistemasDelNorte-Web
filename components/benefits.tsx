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
    <section className="py-20 bg-background text-white relative overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-display">Por qué elegirnos</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
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
                className="text-center p-6 glass border border-white/5 rounded-2xl hover:border-accent/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full border border-primary/20">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>
                </div>
                <h3 className="text-4xl font-extrabold mb-2 text-white font-display">{benefit.stat}</h3>
                <p className="text-lg font-semibold mb-2 text-zinc-200">{benefit.label}</p>
                <p className="text-zinc-400">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Valores principales */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass border border-white/5 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-xl font-bold text-accent mb-2 font-display">✓ Tecnología</p>
              <p className="text-zinc-400">Herramientas modernas y escalables</p>
            </div>
            <div>
              <p className="text-xl font-bold text-accent mb-2 font-display">✓ Adaptación</p>
              <p className="text-zinc-400">Sistemas al flujo real de tu negocio</p>
            </div>
            <div>
              <p className="text-xl font-bold text-accent mb-2 font-display">✓ Acompañamiento</p>
              <p className="text-zinc-400">Soporte constante en la implementación</p>
            </div>
            <div>
              <p className="text-xl font-bold text-accent mb-2 font-display">✓ Enfoque PyME</p>
              <p className="text-zinc-400">No usamos soluciones genéricas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
