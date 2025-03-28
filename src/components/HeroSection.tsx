import Link from 'next/link'  // Añade esta importación al inicio del archivo

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative gradient-bg"
    >
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Transformando Ideas en Soluciones Digitales
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Desarrolladora Full Stack especializada en crear experiencias web innovadoras y escalables.
          </p>
          <div className="flex space-x-4">
            <Link 
              href="#projects"
              className="px-6 py-3 bg-white text-primary rounded-full hover:bg-opacity-90 transition-colors"
            >
              Ver Proyectos
            </Link>
            <Link 
              href="#contact"
              className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-primary transition-colors"
            >
              Contáctame
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}