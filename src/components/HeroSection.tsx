'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <div className="section min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-200 via-white to-accent-200 dark:from-gray-900 dark:via-background-dark dark:to-gray-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,135,255,0.2),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,230,184,0.2),transparent_70%)]"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
                Carolina Villegas
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Software Engineer | Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Apasionada por la tecnología y con un enfoque proactivo en la resolución de problemas. 
              Experta en el diseño e implementación de soluciones innovadoras para enfrentar desafíos 
              empresariales complejos.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="mailto:carol.vi28@gmail.com"
                className="btn-primary"
              >
                Contáctame
              </a>
              <a
                href="#projects"
                className="btn-secondary"
              >
                Ver Proyectos
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/carolina-villegas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/carolina-villegas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:carol.vi28@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/images/profile/profile.svg"
                alt="Carolina Villegas"
                fill
                className="object-cover rounded-2xl shadow-soft-lg"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-soft-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Disponible para proyectos
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}