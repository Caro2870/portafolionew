'use client'

import { motion } from 'framer-motion'
import { FaReact, FaVuejs, FaLaravel, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiPhp, SiMysql, SiPostgresql, SiRedis, SiGraphql, SiNestjs, SiAngular, SiFlutter } from 'react-icons/si'

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: FaReact },
      { name: 'Vue.js', icon: FaVuejs },
      { name: 'Angular', icon: SiAngular },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Flutter', icon: SiFlutter }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Laravel', icon: FaLaravel },
      { name: 'PHP', icon: SiPhp },
      { name: 'Nest.js', icon: SiNestjs },
      { name: 'GraphQL', icon: SiGraphql }
    ]
  },
  {
    category: 'Bases de Datos',
    items: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Redis', icon: SiRedis }
    ]
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'AWS', icon: FaAws },
      { name: 'Docker', icon: FaDocker },
      { name: 'Git', icon: FaGitAlt }
    ]
  }
]

export default function SkillsSection() {
  return (
    <div className="section bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-background-dark">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
            Habilidades Técnicas
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Tecnologías y herramientas que utilizo en mi trabajo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                {skillGroup.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <skill.icon className="w-8 h-8 mb-2 text-primary-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 