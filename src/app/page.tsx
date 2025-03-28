import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
// Importa otras secciones

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      {/* Otras secciones */}
    </div>
  )
}