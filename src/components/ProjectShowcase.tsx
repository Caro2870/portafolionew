const projects = [
  {
    name: 'Plataforma de IA',
    description: 'Solución de inteligencia artificial para personalización de contenido',
    technologies: ['Python', 'OpenAI', 'React'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop'
  },
  {
    name: 'Sistema ERP',
    description: 'Aplicación de gestión empresarial con microservicios',
    technologies: ['Node.js', 'Docker', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop'
  }
]

export default function ProjectShowcase() {
  return (
    <section
      id="projects"
      className="py-12 md:py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-neutral-800 dark:text-neutral-200">
          Proyectos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 md:h-48 lg:h-56 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-primary">
                  {project.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 md:px-3 md:py-1 bg-blue-50 text-blue-600 rounded-full text-xs md:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}