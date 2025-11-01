'use client'

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Code, Layout, Users, CheckCircle2 } from 'lucide-react';
import {
  AnimateOnScroll,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/animate-on-scroll';

// Note: metadata moved to layout.tsx for use client component

export default function Leistungen() {
  const services = [
    {
      id: 'web-development',
      title: 'Custom Web Development',
      icon: Code,
      description: 'Moderne Webanwendungen mit Next.js, React und TypeScript. Wir setzen auf Server-Side Rendering für optimale Performance und SEO.',
      features: [
        'Responsive Design (Mobile-First)',
        'Progressive Web Apps (PWA)',
        'SEO-Optimierung',
        'Performance-Optimierung (Core Web Vitals)',
      ],
      bgColor: 'bg-mist',
      reversed: false,
    },
    {
      id: 'software-solutions',
      title: 'Software Solutions',
      icon: Layout,
      description: 'Business-Anwendungen, Dashboards und Datenbanklösungen für KMUs. Von der Architektur bis zum Deployment.',
      features: [
        'Custom Dashboards & Admin Panels',
        'Datenbankdesign & -integration',
        'API-Entwicklung (REST, GraphQL)',
        'Cloud-Deployment (AWS, Azure, Vercel)',
      ],
      bgColor: 'bg-white',
      reversed: true,
    },
    {
      id: 'consulting',
      title: 'Technical Consulting',
      icon: Users,
      description: 'Strategische Beratung für Technologie-Entscheidungen, Code-Reviews und Architektur-Design.',
      features: [
        'Technologie-Stack Evaluation',
        'Code-Quality & Best Practices',
        'Architektur-Design & Skalierung',
        'Performance-Audits',
      ],
      bgColor: 'bg-mist',
      reversed: false,
    },
  ];

  const technologies = [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'PostgreSQL',
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Analyse & Planung',
      description: 'Wir analysieren Ihre Anforderungen und erstellen einen detaillierten Projektplan.',
    },
    {
      number: 2,
      title: 'Design & Architektur',
      description: 'Wir designen die User Experience und definieren die technische Architektur.',
    },
    {
      number: 3,
      title: 'Entwicklung & Testing',
      description: 'Agile Entwicklung mit kontinuierlichen Tests und Code-Reviews.',
    },
    {
      number: 4,
      title: 'Deployment & Support',
      description: 'Professionelles Deployment und laufender Support nach Launch.',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* 1. Page Header */}
        <SectionContainer className="pt-20 pb-8">
          <PageHeader
            title="Unsere Leistungen"
            subtitle="Massgeschneiderte IT-Lösungen für Ihr Unternehmen"
          />
        </SectionContainer>

        {/* 2. Services Overview */}
        <SectionContainer className="bg-white py-16">
          <div className="max-w-4xl">
            <p className="text-lg text-muted-text leading-relaxed">
              Wir entwickeln digitale Produkte mit Schweizer Qualität – von einfachen Webseiten bis zu komplexen Softwarelösungen. Unser Fokus liegt auf modernen Technologien, sauberer Architektur und langfristiger Wartbarkeit.
            </p>
          </div>
        </SectionContainer>

        {/* 3. Service Pillars */}
        {services.map((service) => {
          const IconComponent = service.icon;
          const isReversed = service.reversed;

          return (
            <AnimateOnScroll key={service.id} animation="fadeUp">
              <section className={`${service.bgColor} py-20`}>
                <div className="max-w-6xl mx-auto px-6">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:auto-cols-max' : ''}`}>
                    {/* Text Content */}
                    <div className={isReversed ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-ink text-white p-3 rounded-lg">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-ink">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-lg text-muted-text mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-ink flex-shrink-0 mt-0.5" />
                            <span className="text-body text-ink">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link href="/kontakt">
                        <Button variant="brand-primary" size="lg">
                          Projekt besprechen
                        </Button>
                      </Link>
                    </div>

                    {/* Visual Placeholder */}
                    <div className={isReversed ? 'lg:order-1' : ''}>
                      <div className="bg-gradient-to-br from-ink/10 to-ink/20 rounded-xl aspect-square flex items-center justify-center min-h-96">
                        <div className="text-center">
                          <IconComponent className="w-24 h-24 text-ink/20 mx-auto mb-4" />
                          <p className="text-muted-text text-sm">Visual Placeholder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </AnimateOnScroll>
          );
        })}

        {/* 4. Technology Stack */}
        <SectionContainer className="bg-white py-20">
          <div className="text-center mb-12">
            <AnimateOnScroll animation="fadeUp">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-4">
                  Unsere Technologien
                </h2>
                <p className="text-lg text-muted-text max-w-2xl mx-auto">
                  Wir setzen auf bewährte, moderne Technologien für zukunftssichere Lösungen.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          <StaggerContainer delayChildren={0.05} staggerChildren={0.05}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <StaggerItem key={tech}>
                  <Card className="p-6 flex flex-col items-center justify-center text-center bg-mist border-0">
                    <h3 className="text-lg font-semibold text-ink">{tech}</h3>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </SectionContainer>

        {/* 5. Process Section */}
        <section className="bg-mist py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <AnimateOnScroll animation="fadeUp">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-4">
                  Unser Prozess
                </h2>
              </AnimateOnScroll>
            </div>

            <StaggerContainer delayChildren={0.1} staggerChildren={0.08}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step) => (
                  <StaggerItem key={step.number}>
                    <Card className="p-8 bg-white border-0 flex flex-col">
                      <div className="w-12 h-12 bg-ink text-white rounded-full flex items-center justify-center font-display font-bold text-lg mb-4">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-semibold text-ink mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-text text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* 6. Final CTA */}
        <section className="bg-ink py-20 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Lassen Sie uns Ihr Projekt besprechen
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
            </p>
            <Link href="/kontakt">
              <Button
                variant="brand-secondary"
                size="lg"
                className="bg-white text-ink border-white hover:bg-white"
              >
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
