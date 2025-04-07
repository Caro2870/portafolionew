const services = [
  {
    title: 'Desarrollo Full Stack',
    description: 'Especializada en React, Next.js, Node.js y bases de datos SQL/NoSQL. Desarrollo de aplicaciones web escalables y de alto rendimiento.',
    icon: '⚡'
  },
  {
    title: 'Arquitectura Cloud',
    description: 'Implementación de soluciones en AWS y Azure. Experiencia en microservicios, Docker y CI/CD para despliegues automatizados.',
    icon: '☁️'
  },
  {
    title: 'UI/UX Design',
    description: 'Diseño de interfaces modernas y accesibles. Experiencia con Figma y principios de diseño centrado en el usuario.',
    icon: '🎨'
  },
  {
    title: 'Optimización Web',
    description: 'Mejora de rendimiento, SEO y accesibilidad. Experiencia en Core Web Vitals y mejores prácticas de Google.',
    icon: '🚀'
  },
  {
    title: 'APIs RESTful',
    description: 'Diseño e implementación de APIs escalables y seguras. Documentación con Swagger y autenticación JWT.',
    icon: '🔌'
  },
  {
    title: 'Testing & QA',
    description: 'Implementación de pruebas unitarias, de integración y E2E. Experiencia con Jest, React Testing Library y Cypress.',
    icon: '🎯'
  }
]

export default function ServicesSection() {
  return (
    <section 
      id="services" 
      className="section bg-gradient-to-b from-background-light to-gray-50/50 dark:from-background-dark dark:to-gray-900/50"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
            Especialidades
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Desarrollo soluciones digitales completas con las tecnologías más demandadas del mercado
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="card group hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="text-5xl md:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-primary-500/10 to-accent-500/10 dark:from-primary-400/10 dark:to-accent-400/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}