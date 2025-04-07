import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectsSection from '@/components/ProjectsSection'
import ExperienceSection from '@/components/ExperienceSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import EducationSection from '@/components/EducationSection'
import ContactSection from '@/components/Contacto'

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <EducationSection />
      <ContactSection />
    </main>
  )
}