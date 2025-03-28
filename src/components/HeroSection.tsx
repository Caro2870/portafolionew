import Link from 'next/link'

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative gradient-bg"
    >
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-full md:max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Transformando Ideas en Soluciones Digitales
          </h1>
          <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90">
            Desarrolladora Full Stack especializada en crear experiencias web innovadoras y escalables.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="#projects"
              className="px-4 py-2 md:px-6 md:py-3 bg-white text-primary rounded-full text-center hover:bg-opacity-90 transition-colors"
            >
              Ver Proyectos
            </Link>
            <Link 
              href="#contact"
              className="px-4 py-2 md:px-6 md:py-3 border border-white rounded-full text-center hover:bg-white hover:text-primary transition-colors"
            >
              Contáctame
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}