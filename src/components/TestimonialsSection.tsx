'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Carlos Rodríguez',
    role: 'CTO en La Confraternidad del Tenis',
    image: '/images/testimonials/person1.svg',
    content: 'Carolina demostró un excepcional dominio técnico en el desarrollo de nuestra plataforma de gestión de torneos. Su capacidad para entender nuestras necesidades y traducirlas en soluciones efectivas fue fundamental para el éxito del proyecto.'
  },
  {
    name: 'Ana Martínez',
    role: 'Product Manager en Visma Latam HR',
    image: '/images/testimonials/person2.svg',
    content: 'Trabajar con Carolina fue una experiencia extraordinaria. Su expertise en desarrollo full-stack y su capacidad para integrar tecnologías de IA mejoraron significativamente nuestra plataforma de recursos humanos.'
  },
  {
    name: 'Miguel Torres',
    role: 'CEO en AMG',
    image: '/images/testimonials/person3.svg',
    content: 'Como Tech Lead, Carolina demostró un liderazgo excepcional. Su capacidad para gestionar equipos y entregar proyectos de alta calidad, junto con su conocimiento técnico, fue invaluable para nuestra organización.'
  }
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoplay])

  return (
    <div className="section bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-background-dark">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
            Testimonios
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Lo que dicen mis clientes y colegas
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative"
             onMouseEnter={() => setAutoplay(false)}
             onMouseLeave={() => setAutoplay(true)}
        >
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="card h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6 relative">
                    <Image
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <blockquote className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 italic">
                    "{testimonials[current].content}"
                  </blockquote>
                  <div>
                    <cite className="not-italic font-semibold text-gray-800 dark:text-gray-100">
                      {testimonials[current].name}
                    </cite>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? 'bg-primary-500 w-6'
                    : 'bg-gray-300 dark:bg-gray-700 hover:bg-primary-400 dark:hover:bg-primary-600'
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 