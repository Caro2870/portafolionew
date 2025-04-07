'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="section bg-gradient-to-b from-white to-gray-50/50 dark:from-background-dark dark:to-gray-900/50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src="/images/profile/profile.svg"
                alt="Carolina Villegas"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
              Sobre Mí
            </h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-lg">
                Soy una desarrolladora Full Stack apasionada por crear soluciones digitales innovadoras y escalables. Con más de 5 años de experiencia en el desarrollo web, me especializo en tecnologías modernas como React, Next.js y Node.js.
              </p>
              
              <p className="text-lg">
                Mi enfoque se centra en construir aplicaciones web de alto rendimiento que no solo sean técnicamente sólidas, sino también intuitivas y accesibles para los usuarios.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  Tecnologías Principales
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                      React & Next.js
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                      TypeScript
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                      Node.js
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                      AWS & Azure
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                      PostgreSQL
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                      Docker
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="/cv.pdf" 
                  target="_blank"
                  className="btn-primary inline-flex items-center"
                >
                  Descargar CV
                  <svg 
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 