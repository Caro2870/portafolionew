import ContactSection from '@/components/Contacto'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProjectShowcase from '@/components/ProjectShowcase'
import ServicesSection from '@/components/ServicesSection'
// Importa otras secciones

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProjectShowcase />
      <ContactSection />
      {/* Otras secciones */}
    </div>
  )
}