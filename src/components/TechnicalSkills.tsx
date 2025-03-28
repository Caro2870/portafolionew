export default function TechnicalSkills() {
    const skills = [
      { 
        category: "Languages", 
        items: ["TypeScript", "Python", "JavaScript"] 
      },
      { 
        category: "Frameworks", 
        items: ["React", "Next.js", "Node.js"] 
      },
      { 
        category: "Cloud", 
        items: ["AWS", "Azure", "Google Cloud"] 
      },
      { 
        category: "AI/ML", 
        items: ["TensorFlow", "GPT Models", "Machine Learning"] 
      }
    ]
  
    return (
      <section className="bg-white py-16">
        <h2 className="text-4xl text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 container mx-auto">
          {skills.map((skillGroup) => (
            <div 
              key={skillGroup.category} 
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">
                {skillGroup.category}
              </h3>
              <ul>
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="mb-2">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }