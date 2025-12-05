"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Juan García",
    business: "Comercio Electrónico",
    testimonial:
      "Con el sistema que desarrollaron pasamos de vender 10 productos por día a 50. El sistema es intuitivo y nos ahorró miles en horas de trabajo.",
    rating: 5,
  },
  {
    name: "María López",
    business: "Óptica - PyME",
    testimonial:
      "El catálogo digital que hicieron nos permitió vender online en una semana. Los clientes nos encontraron por Google y las ventas crecieron un 40%.",
    rating: 5,
  },
  {
    name: "Carlos Mendez",
    business: "Distribuidora",
    testimonial:
      "El sistema de gestión nos ordenó todo: pedidos, entregas, reportes. Ahora sé exactamente dónde está cada cosa y qué se vende.",
    rating: 5,
  },
  {
    name: "Patricia Rodríguez",
    business: "Consultoría",
    testimonial:
      "Excelente equipo. Entienden el negocio, no solo la tecnología. El soporte post-implementación fue profesional y muy ágil.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1B34] mb-4">Testimonios de Clientes</h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Lo que dicen nuestros clientes sobre trabajar con nosotros
          </p>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#2CA8FF] hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFC107" className="text-[#FFC107]" />
                ))}
              </div>
              <p className="text-[#0A1B34] mb-4 italic text-lg leading-relaxed">{`"${testimonial.testimonial}"`}</p>
              <div>
                <p className="font-bold text-[#0A1B34]">{testimonial.name}</p>
                <p className="text-sm text-[#6B7280]">{testimonial.business}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
