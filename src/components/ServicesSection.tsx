const services = [
    {
      title: 'Desarrollo Web',
      description: 'Creación de sitios web modernos y responsivos',
      icon: '💻'
    },
    {
      title: 'Aplicaciones Móviles',
      description: 'Desarrollo de apps nativas e híbridas',
      icon: '📱'
    },
    {
      title: 'Consultoría Cloud',
      description: 'Soluciones de infraestructura y migración',
      icon: '☁️'
    }
  ]
  
  export default function ServicesSection() {
    return (
      <section 
        id="services" 
        className="py-12 md:py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Mis Servicios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {services.map((service) => (
              <div 
                key={service.title}
                className="bg-white p-4 md:p-6 rounded-lg shadow-md hover-lift text-center"
              >
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }