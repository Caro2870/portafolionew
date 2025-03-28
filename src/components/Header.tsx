'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Inicio' },
    { href: '#services', label: 'Servicios' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#about', label: 'Sobre Mí' },
    { href: '#contact', label: 'Contacto' }
  ]

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="#home" 
          className="text-xl md:text-2xl font-bold text-primary"
        >
          Carolina Villegas
        </Link>

        {/* Menú de navegación para pantallas grandes */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className="text-sm lg:text-base text-gray-600 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botón de contacto para pantallas grandes */}
        <Link 
          href="#contact"
          className="hidden md:block px-4 py-2 text-sm lg:text-base bg-primary text-white rounded-full hover:bg-opacity-90 transition-colors"
        >
          Contáctame
        </Link>

        {/* Menú móvil */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú de navegación"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 border-b text-center hover:bg-gray-50"
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-3 text-center bg-primary text-white hover:bg-opacity-90"
          >
            Contáctame
          </Link>
        </div>
      )}
    </header>
  )
}