"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

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
        isScrolled ? "bg-background/70 glass shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16">
              <Image
                src="/images/logo-dark.png"
                alt="Sistemas del Norte"
                fill
                sizes="64px"
                className="object-contain transition-all duration-300 group-hover:scale-105 dark:hidden"
              />
              <Image
                src="/images/logo-white.png"
                alt="Sistemas del Norte"
                fill
                sizes="64px"
                className="hidden object-contain transition-all duration-300 group-hover:scale-105 dark:block"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span
                className="font-bold text-base sm:text-lg leading-tight transition-all duration-300 truncate text-foreground group-hover:text-accent font-display"
              >
                Sistemas del Norte
              </span>
              <span
                className="text-[10px] sm:text-xs font-medium transition-all duration-300 truncate text-muted-foreground"
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
                className="text-sm font-medium transition-all text-muted-foreground hover:text-accent hover:translate-y-[-1px]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#contact"
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground dark:text-background rounded-lg font-bold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 py-2 leading-6 px-4 shadow-md text-sm"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-dark border border-border rounded-xl mt-2 overflow-hidden shadow-2xl animate-fade-in-up">
            <nav className="flex flex-col gap-4 p-4">
              <ThemeToggle />
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground dark:text-background rounded-lg font-medium hover:shadow-lg transition-all text-center"
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
