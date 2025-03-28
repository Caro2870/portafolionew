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
        <Link 
          href="#home" 
          className="text-2xl font-bold text-primary"
        >
          Carolina Villegas
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link 
          href="#contact"
          className="hidden md:block px-4 py-2 bg-primary text-white rounded-full hover:bg-opacity-90 transition-colors"
        >
          Contáctame
        </Link>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 border-b hover:bg-gray-50"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}