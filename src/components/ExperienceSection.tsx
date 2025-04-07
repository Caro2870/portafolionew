'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Full Stack Web Developer',
    company: 'La Confraternidad del Tenis',
    period: 'Ene 2024 - Presente',
    location: 'Miraflores, Lima',
    description: 'Desarrollo y mantenimiento de una aplicación web para gestión de torneos de tenis.',
    achievements: [
      'Diseño y desarrollo de aplicación web para gestión de torneos',
      'Implementación de backend con PHP (Laravel) y frontend con JavaScript',
      'Interfaz responsiva con HTML, CSS y prácticas modernas de desarrollo',
      'Gestión de bases de datos MySQL y optimización de consultas',
      'Implementación de CI/CD y despliegue de servidor'
    ],
    technologies: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'HTML', 'CSS']
  },
  {
    title: 'Full Stack Developer',
    company: 'Visma Latam HR',
    period: 'Ene 2022 - Dic 2023',
    location: 'San Isidro, Lima',
    description: 'Desarrollo de soluciones innovadoras para gestión de recursos humanos.',
    achievements: [
      'Integración de modelos de IA (GPT-3.5 Turbo, GPT-4) con Azure AI Services',
      'Optimización de bases de datos con AWS Redshift',
      'Desarrollo de red social corporativa con Angular y Nest.js',
      'Implementación de APIs con Nest.js y GraphQL',
      'Desarrollo de aplicaciones con React, Laravel, MySQL y Redis'
    ],
    technologies: ['Angular', 'Nest.js', 'React', 'Laravel', 'GraphQL', 'AWS', 'Azure AI']
  },
  {
    title: 'Tech Lead',
    company: 'AMG',
    period: 'Ene 2021 - Dic 2021',
    location: 'San Isidro, Lima',
    description: 'Liderazgo técnico y desarrollo de soluciones empresariales.',
    achievements: [
      'Liderazgo de equipos de desarrollo y gestión de proyectos full-stack',
      'Desarrollo de aplicaciones con Vue.js, Vuetify y Laravel',
      'Desarrollo de aplicaciones móviles con Flutter',
      'Implementación de CI/CD y Docker',
      'Despliegue en Apple App Store y servicios cloud'
    ],
    technologies: ['Vue.js', 'Laravel', 'Flutter', 'Docker', 'AWS', 'CI/CD']
  }
]

export default function ExperienceSection() {
  return (
    <div className="section bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-background-dark">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
            Experiencia Profesional
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Mi trayectoria profesional en desarrollo de software
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    {exp.title}
                  </h3>
                  <div className="text-primary-600 dark:text-primary-400 font-semibold">
                    {exp.company}
                  </div>
                </div>
                <div className="mt-2 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
                  <div>{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {exp.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  Logros Principales:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 