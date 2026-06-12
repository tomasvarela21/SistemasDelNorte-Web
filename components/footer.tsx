"use client"

import { Mail, Phone, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-white/5 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image src="/images/logo-white.png" alt="Sistemas del Norte" fill className="object-contain" />
              </div>
              <span className="font-bold font-display">Sistemas del Norte</span>
            </div>
            <p className="text-zinc-400 text-sm">Desarrollamos sistemas que ordenan y escalan tu negocio.</p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-bold mb-4 text-accent font-display">Navegación</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#hero" className="hover:text-accent transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-bold mb-4 text-accent font-display">Servicios</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Sistemas Personalizados
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Automatización
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Apps Web
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold mb-4 text-accent font-display">Contacto</h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <a
                href="https://wa.me/543812165087"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone size={16} /> +54 381 216 5087
              </a>
              <a
                href="mailto:sistemasdelnorte25@gmail.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail size={16} /> sistemasdelnorte25@gmail.com
              </a>
              <a
                href="https://www.instagram.com/sistemasdelnorte_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Instagram size={16} /> @sistemasdelnorte_
              </a>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-zinc-400">
            <p>&copy; {currentYear} Sistemas del Norte. Todos los derechos reservados.</p>
            <p>Desarrollamos sistemas que ordenan y escalan tu negocio.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
