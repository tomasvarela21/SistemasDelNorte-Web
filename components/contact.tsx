"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MessageCircle, Instagram, ArrowRight } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Sistema administrativo",
    budget: "$500 - $5,000", // Cambié el presupuesto por defecto a la opción nueva
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "Sistema administrativo",
        budget: "$500 - $5,000", // Actualicé el reset del formulario con el nuevo valor
        message: "",
      })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1B34] mb-4">Empecemos tu Transformación Digital</h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Contacta con nosotros para conocer cómo podemos escalar tu negocio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-xl border border-gray-200 shadow-lg"
            >
              <div>
                <label className="block text-sm font-semibold text-[#0A1B34] mb-2">Nombre Completo *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2CA8FF] focus:ring-2 focus:ring-[#2CA8FF]/20 transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0A1B34] mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2CA8FF] focus:ring-2 focus:ring-[#2CA8FF]/20 transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0A1B34] mb-2">Teléfono (Opcional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2CA8FF] focus:ring-2 focus:ring-[#2CA8FF]/20 transition-all"
                  placeholder="+54 381 XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0A1B34] mb-2">Tipo de Proyecto *</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2CA8FF] focus:ring-2 focus:ring-[#2CA8FF]/20 transition-all"
                >
                  <option>Sistema administrativo</option>
                  <option>Catálogo digital</option>
                  <option>E-commerce</option>
                  <option>App web</option>
                  <option>Automatización</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0A1B34] mb-2">Presupuesto Estimado (USD)</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2CA8FF] focus:ring-2 focus:ring-[#2CA8FF]/20 transition-all"
                >
                  <option>$500 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $20,000</option>
                  <option>$20,000 - $50,000</option>
                  <option>$50,000+</option>
                  <option>No definido aún</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0A1B34] mb-2">Cuéntanos tu proyecto *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2CA8FF] focus:ring-2 focus:ring-[#2CA8FF]/20 transition-all resize-none"
                  placeholder="Cuéntanos qué necesitas y los desafíos de tu negocio..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-[#2CA8FF] text-white rounded-lg font-bold hover:bg-[#1e88d4] transition-all flex items-center justify-center gap-2"
              >
                Enviar Consulta <ArrowRight size={20} />
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg text-center font-medium"
                >
                  ¡Gracias! Tu consulta ha sido enviada. Nos contactaremos pronto.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-gradient-to-br from-[#0A1B34] to-[#0F2847] text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Contacto Directo</h3>

              {/* WhatsApp */}
              <a
                href="https://wa.me/543816832948?text=Hola%20Sistemas%20del%20Norte%2C%20quiero%20información%20sobre%20un%20sistema%20para%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-all mb-4 group"
              >
                <MessageCircle className="w-8 h-8 text-[#2CA8FF] flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-bold group-hover:text-[#2CA8FF] transition-colors">WhatsApp</p>
                  <p className="text-sm text-gray-300">+54 381 683 2948</p>
                </div>
                <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Email */}
              <a
                href="mailto:sistemasdelnorte25@gmail.com?subject=Consulta%20sobre%20soluciones%20digitales"
                className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-all mb-4 group"
              >
                <Mail className="w-8 h-8 text-[#2CA8FF] flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-bold group-hover:text-[#2CA8FF] transition-colors">Email</p>
                  <p className="text-sm text-gray-300">sistemasdelnorte25@gmail.com</p>
                </div>
                <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/sistemasdelnorte_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-all group"
              >
                <Instagram className="w-8 h-8 text-[#2CA8FF] flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-bold group-hover:text-[#2CA8FF] transition-colors">Instagram</p>
                  <p className="text-sm text-gray-300">@sistemasdelnorte_</p>
                </div>
                <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Horarios / Información adicional */}
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-[#0A1B34] mb-4">¿Por qué contactarnos?</h3>
              <ul className="space-y-3 text-[#6B7280]">
                <li className="flex items-start gap-3">
                  <span className="text-[#2CA8FF] font-bold text-lg leading-tight">✓</span>
                  <span>Consulta inicial gratuita y sin compromiso</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2CA8FF] font-bold text-lg leading-tight">✓</span>
                  <span>Respuesta rápida (máximo 24 horas)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2CA8FF] font-bold text-lg leading-tight">✓</span>
                  <span>Expertos en PyMEs y comercios</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2CA8FF] font-bold text-lg leading-tight">✓</span>
                  <span>Soporte personalizado desde el primer día</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
