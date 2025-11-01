'use client'

import Link from 'next/link'
import { Code, Layout, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionContainer } from '@/components/ui/section-container'
import {
  AnimateOnScroll,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/animate-on-scroll'

/**
 * Hero Section
 *
 * Full-width hero with headline, subheadline and dual CTA buttons.
 * Swiss minimalism with generous whitespace and precision typography.
 * Staggered entrance animations for title, subtitle, and buttons.
 */
function HeroSection() {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <SectionContainer className="flex flex-col items-center text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-6xl font-medium text-ink leading-tight tracking-tight"
        >
          Präzise IT-Lösungen für Schweizer Unternehmen
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
          className="text-xl md:text-2xl text-muted-text max-w-3xl leading-relaxed"
        >
          Von massgeschneiderten Webapplikationen bis zu komplexen Softwarelösungen – wir entwickeln digitale Produkte mit Schweizer Qualität.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <Link href="/kontakt">
            <Button variant="brand-primary" size="lg">
              Projekt starten
            </Button>
          </Link>
          <Link href="/leistungen">
            <Button variant="brand-secondary" size="lg">
              Unsere Leistungen
            </Button>
          </Link>
        </motion.div>
      </SectionContainer>
    </section>
  )
}

/**
 * Services Section
 *
 * Grid of 3 service cards with icons, titles, descriptions.
 * Mist background for visual separation and focus.
 * Cards animate in with staggered fade-up effect on scroll.
 */
function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Massgeschneiderte Weblösungen mit modernen Technologien wie Next.js und React für maximale Performance.',
      href: '/leistungen',
    },
    {
      icon: Layout,
      title: 'Software Solutions',
      description: 'Komplexe Dashboards, Datenbanklösungen und Business-Anwendungen für Unternehmen von 1-100 Mitarbeitern.',
      href: '/leistungen',
    },
    {
      icon: Users,
      title: 'Technical Consulting',
      description: 'Strategische Beratung für Technologie-Entscheidungen, Architektur-Design und Skalierungsstrategien.',
      href: '/leistungen',
    },
  ]

  return (
    <section className="w-full bg-mist">
      <SectionContainer className="flex flex-col space-y-12 py-24 md:py-32">
        <AnimateOnScroll animation="fadeUp">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink">
            Unsere Leistungen
          </h2>
        </AnimateOnScroll>

        <StaggerContainer delayChildren={0.1} staggerChildren={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <StaggerItem key={service.title}>
                  <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <div className="mb-3 text-ink">
                        <IconComponent className="w-8 h-8" strokeWidth={1.5} />
                      </div>
                      <CardTitle className="text-ink font-medium text-xl">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <CardDescription className="text-muted-text mb-6">
                        {service.description}
                      </CardDescription>

                      <Link
                        href={service.href}
                        className="text-ink font-medium text-sm hover:text-muted-text transition-colors inline-flex items-center gap-1.5"
                      >
                        Mehr erfahren
                        <span>→</span>
                      </Link>
                    </CardContent>
                  </Card>
                </StaggerItem>
              )
            })}
          </div>
        </StaggerContainer>
      </SectionContainer>
    </section>
  )
}

/**
 * Process Section
 *
 * 2-column layout with process description and 4-step grid.
 * Emphasizes transparency and structured methodology.
 * Process steps animate in with staggered fade-up on scroll.
 */
function ProcessSection() {
  const processSteps = [
    'Analyse & Planung',
    'Design & Architektur',
    'Entwicklung & Testing',
    'Deployment & Support',
  ]

  return (
    <section className="w-full bg-white">
      <SectionContainer className="flex flex-col md:flex-row gap-12 md:gap-16 py-24 md:py-32">
        {/* Left column: Description */}
        <AnimateOnScroll animation="fadeUp" className="flex flex-col justify-start md:w-1/3">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink mb-6">
            Wie wir arbeiten
          </h2>

          <p className="text-lg text-muted-text leading-relaxed">
            Transparenz und Qualität stehen im Zentrum unserer Arbeit. Wir folgen bewährten Entwicklungsprozessen und setzen auf moderne Technologien, um zukunftssichere Lösungen zu schaffen.
          </p>
        </AnimateOnScroll>

        {/* Right column: Process steps */}
        <div className="flex-1">
          <StaggerContainer delayChildren={0.1} staggerChildren={0.08}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {processSteps.map((step, index) => (
                <StaggerItem key={index}>
                  <div className="flex flex-col items-start p-6 bg-mist rounded-lg hover:bg-opacity-80 transition-all duration-200">
                    <div className="text-2xl md:text-3xl font-display font-medium text-ink mb-3">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-display font-medium text-ink text-base md:text-lg">
                      {step}
                    </h3>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </SectionContainer>
    </section>
  )
}

/**
 * CTA Section
 *
 * Dark background with centered headline, subtext and call-to-action button.
 * Encourages final conversion or inquiry.
 * Content fades in with staggered animation on scroll.
 */
function CTASection() {
  return (
    <section className="w-full bg-ink">
      <SectionContainer className="flex flex-col items-center text-center py-20 md:py-24">
        <AnimateOnScroll animation="fadeUp">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-4 leading-tight">
            Bereit für Ihr Projekt?
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp" delay={0.1}>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl">
            Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp" delay={0.2}>
          <Link href="/kontakt">
            <Button
              variant="brand-primary"
              size="lg"
              className="bg-white text-ink hover:bg-mist hover:text-ink"
            >
              Kontakt aufnehmen
            </Button>
          </Link>
        </AnimateOnScroll>
      </SectionContainer>
    </section>
  )
}

/**
 * Homepage
 *
 * Production homepage with Swiss minimalism aesthetic.
 * Sections: Hero → Services → Process → CTA
 *
 * All sections responsive (mobile-first approach)
 * Semantic HTML with proper heading hierarchy
 * Brand-consistent styling with generous whitespace
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </>
  )
}
