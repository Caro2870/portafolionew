export default function ProjectShowcase() {
    const projects = [
      {
        name: "AI Content Personalization Platform",
        description: "Developed a machine learning solution using GPT-3.5",
        technologies: ["Python", "OpenAI", "React"],
        impact: "Increased user engagement by 40%",
        image: "/images/project1.png"
      },
      {
        name: "Cloud-Native Microservices",
        description: "Scalable microservices ecosystem with containerization",
        technologies: ["Kubernetes", "Docker", "AWS"],
        impact: "Reduced infrastructure costs by 35%",
        image: "/images/project2.png"
      }
    ]
  
    return (
      <section className="bg-gray-100 py-16">
        <h2 className="text-4xl text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 container mx-auto">
          {projects.map((project) => (
            <div 
              key={project.name} 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="font-semibold text-green-600">
                  Impact: {project.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }