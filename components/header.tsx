"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Servicios", href: "#services" },
    { label: "Proyectos", href: "#projects" },
    { label: "Cómo Trabajamos", href: "#process" },
    { label: "Contacto", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/80 glass shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16">
              <Image
                src={isScrolled ? "/images/logo-dark.png" : "/images/logo-white.png"}
                alt="Sistemas del Norte"
                fill
                className="object-contain transition-all duration-300"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span
                className={`font-bold text-lg leading-tight transition-all duration-300 ${
                  isScrolled ? "text-[#0A1B34]" : "text-white"
                } group-hover:text-[#2CA8FF]`}
              >
                Sistemas del Norte
              </span>
              <span
                className={`text-xs font-medium transition-all duration-300 ${
                  isScrolled ? "text-[#6B7280]" : "text-gray-200"
                }`}
              >
                Soluciones Digitales
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-all hover:text-[#2CA8FF] ${
                  isScrolled ? "text-[#0A1B34]" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#2CA8FF] to-[#1e88d4] text-white rounded-lg font-bold hover:shadow-lg hover:shadow-[#2CA8FF]/40 transition-all duration-300 hover:scale-105 mx-0 py-2 leading-6 tracking-tighter px-1 shadow-md"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-[#0A1B34]" : "text-white"}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <nav className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-[#0A1B34] hover:text-[#2CA8FF] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-4 py-2 bg-gradient-to-r from-[#2CA8FF] to-[#1e88d4] text-white rounded-lg font-medium hover:shadow-lg transition-all text-center"
                onClick={() => setIsOpen(false)}
              >
                Agendar Consulta
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
