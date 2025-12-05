"use client"

import { Mail, Phone, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A1B34] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image src="/images/logo-white.png" alt="Sistemas del Norte" fill className="object-contain" />
              </div>
              <span className="font-bold">Sistemas del Norte</span>
            </div>
            <p className="text-gray-400 text-sm">Desarrollamos sistemas que ordenan y escalan tu negocio.</p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-bold mb-4 text-[#2CA8FF]">Navegación</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#hero" className="hover:text-[#2CA8FF] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2CA8FF] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#2CA8FF] transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#2CA8FF] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-bold mb-4 text-[#2CA8FF]">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-[#2CA8FF] transition-colors">
                  Sistemas Personalizados
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2CA8FF] transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2CA8FF] transition-colors">
                  Automatización
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2CA8FF] transition-colors">
                  Apps Web
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold mb-4 text-[#2CA8FF]">Contacto</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <a
                href="https://wa.me/543816832948"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#2CA8FF] transition-colors"
              >
                <Phone size={16} /> +54 381 683 2948
              </a>
              <a
                href="mailto:sistemasdelnorte25@gmail.com"
                className="flex items-center gap-2 hover:text-[#2CA8FF] transition-colors"
              >
                <Mail size={16} /> sistemasdelnorte25@gmail.com
              </a>
              <a
                href="https://www.instagram.com/sistemasdelnorte_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#2CA8FF] transition-colors"
              >
                <Instagram size={16} /> @sistemasdelnorte_
              </a>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Sistemas del Norte. Todos los derechos reservados.</p>
            <p>Desarrollamos sistemas que ordenan y escalan tu negocio.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
