import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { AboutMe } from '@/components/about-me'
import { CaseStudiesPreview } from '@/components/case-studies-preview'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <Navigation />
      <Hero />
      <AboutMe />
      <CaseStudiesPreview />
      <ContactSection />
      <Footer />
    </main>
  )
}

