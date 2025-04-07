'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const education = [
  {
    title: 'Bachiller en Ingeniería de Software',
    institution: 'Universidad Peruana de Ciencias Aplicadas',
    period: '2023',
    description: 'Especialización en Desarrollo de Software y Sistemas Distribuidos',
    achievements: [
      'Coautora del artículo "Aplicación del Método Few-Shot Learning al Modelo GPT-3.5 para la Personalización del Contenido en Redes Sociales" en CISCI 2024',
      'Investigación en IA y PLN - Desarrollo de aplicación web con Few-Shot Learning y GPT-3.5',
      'Especialización en desarrollo de software y sistemas distribuidos'
    ]
  }
]

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    institution: 'Amazon Web Services',
    date: '2023',
    image: '/images/certifications/aws-architect.svg'
  },
  {
    title: 'Professional Cloud Developer',
    institution: 'Google Cloud',
    date: '2022',
    image: '/images/certifications/gcp-developer.svg'
  },
  {
    title: 'Meta Frontend Developer',
    institution: 'Meta (Facebook)',
    date: '2022',
    image: '/images/certifications/meta-frontend.svg'
  }
]

const languages = [
  {
    name: 'English',
    level: 'C1 (Avanzado)'
  },
  {
    name: 'Spanish',
    level: 'Nativo'
  }
]

export default function EducationSection() {
  return (
    <div className="section bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-background-dark">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
            Educación y Certificaciones
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Formación académica y certificaciones profesionales
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Educación */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100">
              Educación
            </h3>
            {education.map((edu) => (
              <div key={edu.title} className="card mb-6">
                <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
                  {edu.title}
                </h4>
                <div className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                  {edu.institution}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {edu.period}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {edu.description}
                </p>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Certificaciones e Idiomas */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100">
                Certificaciones
              </h3>
              <div className="grid gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card flex items-center p-4"
                  >
                    <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {cert.title}
                      </h4>
                      <div className="text-primary-600 dark:text-primary-400">
                        {cert.institution}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {cert.date}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100">
                Idiomas
              </h3>
              <div className="grid gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card p-4"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {lang.name}
                      </h4>
                      <span className="text-primary-600 dark:text-primary-400">
                        {lang.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 