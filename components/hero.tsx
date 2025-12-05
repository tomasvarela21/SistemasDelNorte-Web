"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-[#0A1B34] via-[#0F2847] to-[#041019] text-white pt-32 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#2CA8FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-0 -left-32 w-96 h-96 bg-[#2CA8FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-glow"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#1e88d4] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#2CA8FF]" />
              <span className="text-sm font-semibold text-[#2CA8FF]">Transformación Digital para tu Negocio</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance bg-gradient-to-r from-white via-white to-[#2CA8FF] bg-clip-text text-transparent"
            >
              Soluciones digitales que ordenan y escalan tu negocio
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8 text-balance leading-relaxed">
              Sistemas personalizados, plataformas web y automatización administrativa para PyMEs y comercios que
              quieren crecer sin complicaciones.
            </motion.p>

            {/* Beneficios rápidos */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-3 mb-10">
              {[
                "Sistemas a medida para tu PyME",
                "Plataformas web y catálogos digitales",
                "Automatización y reportes en tiempo real",
              ].map((benefit, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#2CA8FF] flex-shrink-0 mt-1" />
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/543816832948?text=Hola%20Sistemas%20del%20Norte%2C%20quiero%20información%20sobre%20un%20sistema%20para%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[#2CA8FF] to-[#1e88d4] text-white rounded-lg font-bold hover:shadow-2xl hover:shadow-[#2CA8FF]/50 transition-all hover:scale-105 flex items-center justify-center gap-2 group"
              >
                Hablamos por WhatsApp
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-[#2CA8FF] text-[#2CA8FF] rounded-lg font-bold hover:bg-[#2CA8FF]/10 transition-all hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm group"
              >
                Ver Proyectos
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Visual - Mockup moderno con efectos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2CA8FF]/20 to-[#0A1B34] rounded-3xl opacity-50 blur-3xl"></div>

              {/* Mockup dashboard con glassmorphism */}
              <div className="relative glass-dark rounded-2xl p-6 shadow-2xl border border-[#2CA8FF]/20">
                <div className="bg-[#0A1B34]/60 rounded-lg p-4 space-y-3 backdrop-blur-md">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gradient-to-r from-[#2CA8FF] to-[#1e88d4] rounded w-3/4"></div>
                    <div className="h-2 bg-gray-700 rounded w-full opacity-50"></div>
                    <div className="h-2 bg-gray-700 rounded w-5/6 opacity-50"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-[#2CA8FF]/15 rounded-lg p-3 border border-[#2CA8FF]/40 backdrop-blur-sm">
                    <div className="h-2 bg-[#2CA8FF] rounded mb-2 opacity-80"></div>
                    <div className="h-2 bg-gray-700 rounded w-5/6 opacity-50"></div>
                  </div>
                  <div className="bg-[#2CA8FF]/15 rounded-lg p-3 border border-[#2CA8FF]/40 backdrop-blur-sm">
                    <div className="h-2 bg-[#2CA8FF] rounded mb-2 opacity-80"></div>
                    <div className="h-2 bg-gray-700 rounded w-4/6 opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
