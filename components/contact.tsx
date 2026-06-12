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
    budget: "$500 - $5,000",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = [
      "Hola Sistemas del Norte, quiero hacer una consulta desde el formulario web:",
      "",
      `Nombre: ${formData.name}`,
      `Email: ${formData.email}`,
      `Teléfono: ${formData.phone || "No informado"}`,
      `Tipo de proyecto: ${formData.projectType}`,
      `Presupuesto estimado: ${formData.budget}`,
      "",
      `Mensaje: ${formData.message}`,
    ].join("\n")

    window.open(`https://wa.me/543812165087?text=${encodeURIComponent(message)}`, "_blank")

    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "Sistema administrativo",
        budget: "$500 - $5,000",
        message: "",
      })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-primary rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-display">Empecemos tu Transformación Digital</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
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
              className="space-y-6 glass border border-white/5 p-8 rounded-2xl shadow-2xl relative"
            >
              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2">Nombre Completo *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900/40 border border-zinc-800 focus:border-accent focus:ring-2 focus:ring-accent/10 rounded-lg focus:outline-none text-white transition-all placeholder:text-zinc-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900/40 border border-zinc-800 focus:border-accent focus:ring-2 focus:ring-accent/10 rounded-lg focus:outline-none text-white transition-all placeholder:text-zinc-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2">Teléfono (Opcional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900/40 border border-zinc-800 focus:border-accent focus:ring-2 focus:ring-accent/10 rounded-lg focus:outline-none text-white transition-all placeholder:text-zinc-500"
                  placeholder="+54 381 XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2">Tipo de Proyecto *</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900/40 border border-zinc-800 focus:border-accent focus:ring-2 focus:ring-accent/10 rounded-lg focus:outline-none text-white transition-all"
                >
                  <option className="bg-zinc-905 text-white">Sistema administrativo</option>
                  <option className="bg-zinc-905 text-white">Catálogo digital</option>
                  <option className="bg-zinc-905 text-white">E-commerce</option>
                  <option className="bg-zinc-905 text-white">App web</option>
                  <option className="bg-zinc-905 text-white">Automatización</option>
                  <option className="bg-zinc-905 text-white">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2">Presupuesto Estimado (USD)</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900/40 border border-zinc-800 focus:border-accent focus:ring-2 focus:ring-accent/10 rounded-lg focus:outline-none text-white transition-all"
                >
                  <option className="bg-zinc-905 text-white">$500 - $5,000</option>
                  <option className="bg-zinc-905 text-white">$5,000 - $10,000</option>
                  <option className="bg-zinc-905 text-white">$10,000 - $20,000</option>
                  <option className="bg-zinc-905 text-white">$20,000 - $50,000</option>
                  <option className="bg-zinc-905 text-white">$50,000+</option>
                  <option className="bg-zinc-905 text-white">No definido aún</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2">Cuéntanos tu proyecto *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-900/40 border border-zinc-800 focus:border-accent focus:ring-2 focus:ring-accent/10 rounded-lg focus:outline-none text-white transition-all placeholder:text-zinc-500 resize-none"
                  placeholder="Cuéntanos qué necesitas y los desafíos de tu negocio..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-primary to-accent text-background rounded-lg font-bold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
              >
                Enviar Consulta <ArrowRight size={20} className="text-background" />
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg text-center font-medium"
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
            <div className="glass border border-white/5 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full mix-blend-screen filter blur-[80px] opacity-10 pointer-events-none"></div>
              <h3 className="text-2xl font-bold mb-6 text-white font-display">Contacto Directo</h3>

              {/* WhatsApp */}
              <a
                href="https://wa.me/543812165087?text=Hola%20Sistemas%20del%20Norte%2C%20quiero%20información%20sobre%20un%20sistema%20para%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl transition-all mb-4 group"
              >
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-accent flex-shrink-0" />
                </div>
                <div className="flex-1">
                  <p className="font-bold group-hover:text-accent transition-colors text-white">WhatsApp</p>
                  <p className="text-sm text-zinc-400">+54 381 216 5087</p>
                </div>
                <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
              </a>

              {/* Email */}
              <a
                href="mailto:sistemasdelnorte25@gmail.com?subject=Consulta%20sobre%20soluciones%20digitales"
                className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl transition-all mb-4 group"
              >
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                </div>
                <div className="flex-1">
                  <p className="font-bold group-hover:text-accent transition-colors text-white">Email</p>
                  <p className="text-sm text-zinc-400">sistemasdelnorte25@gmail.com</p>
                </div>
                <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/sistemasdelnorte_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl transition-all group"
              >
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Instagram className="w-6 h-6 text-accent flex-shrink-0" />
                </div>
                <div className="flex-1">
                  <p className="font-bold group-hover:text-accent transition-colors text-white">Instagram</p>
                  <p className="text-sm text-zinc-400">@sistemasdelnorte_</p>
                </div>
                <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
              </a>
            </div>

            {/* Horarios / Información adicional */}
            <div className="glass border border-white/5 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6 font-display">¿Por qué contactarnos?</h3>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg leading-tight">✓</span>
                  <span>Consulta inicial gratuita y sin compromiso</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg leading-tight">✓</span>
                  <span>Respuesta rápida (máximo 24 horas)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg leading-tight">✓</span>
                  <span>Expertos en PyMEs y comercios</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg leading-tight">✓</span>
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
