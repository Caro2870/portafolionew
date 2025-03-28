export default function OpenSourceContributions() {
    const contributions = [
      {
        project: "TensorFlow",
        description: "Contributed performance optimization patches",
        link: "https://github.com/tensorflow/tensorflow"
      },
      {
        project: "Next.js",
        description: "Improved documentation and type definitions",
        link: "https://github.com/vercel/next.js"
      }
    ]
  
    return (
      <section className="bg-white py-16">
        <h2 className="text-4xl text-center mb-12">Open Source Contributions</h2>
        <div className="container mx-auto">
          {contributions.map((contrib) => (
            <div 
              key={contrib.project} 
              className="bg-gray-100 p-6 rounded-lg mb-4"
            >
              <h3 className="text-2xl font-semibold">{contrib.project}</h3>
              <p className="mt-2">{contrib.description}</p>
              <a 
                href={contrib.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Contribution
              </a>
            </div>
          ))}
        </div>
      </section>
    )
  }