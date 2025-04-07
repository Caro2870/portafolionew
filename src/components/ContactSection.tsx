'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

const contactInfo = {
  email: 'carol.vi28@gmail.com',
  phone: '+51 920236307',
  location: 'Lima, Perú',
  social: {
    linkedin: 'https://linkedin.com/in/carolina-villegas',
    github: 'https://github.com/carolina-villegas'
  }
}

export default function ContactSection() {
  return (
    <div className="section bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-background-dark">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
            Contacto
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            ¿Interesado en trabajar juntos? ¡Contáctame!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Información de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaEnvelope className="w-5 h-5 mr-3 text-primary-500" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-primary-500 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaPhone className="w-5 h-5 mr-3 text-primary-500" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-primary-500 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaMapMarkerAlt className="w-5 h-5 mr-3 text-primary-500" />
                  <span>{contactInfo.location}</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  Redes Sociales
                </h4>
                <div className="flex space-x-4">
                  <a
                    href={contactInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={contactInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Formulario de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                Envíame un Mensaje
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 