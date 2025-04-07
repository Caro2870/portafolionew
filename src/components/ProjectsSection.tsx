'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'Sistema de Gestión de Torneos de Tenis',
    description: 'Aplicación web para la gestión y organización de torneos de tenis, incluyendo gestión de jugadores, partidos y resultados.',
    image: '/images/projects/tennis-tournament.svg',
    technologies: ['PHP', 'Laravel', 'JavaScript', 'MySQL'],
    category: 'Full Stack',
    link: '#'
  },
  {
    title: 'Red Social Corporativa',
    description: 'Plataforma de comunicación interna para empresas, facilitando la colaboración entre empleados y la gestión de recursos humanos.',
    image: '/images/projects/corporate-social.svg',
    technologies: ['Angular', 'Nest.js', 'GraphQL', 'PostgreSQL'],
    category: 'Full Stack',
    link: '#'
  },
  {
    title: 'Sistema ERP',
    description: 'Sistema integral de gestión empresarial con módulos para recursos humanos, inventario y finanzas.',
    image: '/images/projects/erp-system.svg',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
    category: 'Full Stack',
    link: '#'
  },
  {
    title: 'Aplicación Móvil de Gestión de Empleados',
    description: 'App móvil para la gestión y seguimiento de empleados, incluyendo control de asistencia y tareas.',
    image: '/images/projects/employee-app.svg',
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Firebase'],
    category: 'Mobile',
    link: '#'
  }
]

const categories = ['Todos', 'Full Stack', 'Mobile']

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredProjects = projects.filter(project => 
    activeCategory === 'Todos' ? true : project.category === activeCategory
  )

  return (
    <div className="section bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-background-dark">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Una selección de mis proyectos más relevantes
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-soft'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Ver Proyecto
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 