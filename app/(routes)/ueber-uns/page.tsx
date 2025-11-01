'use client'

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Award,
  Zap,
  MessageSquare,
  Handshake,
} from 'lucide-react';
import {
  AnimateOnScroll,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/animate-on-scroll';

// Note: metadata moved to layout.tsx for use client component

export default function UeberUns() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Section 1: Page Header */}
        <SectionContainer className="py-16 md:py-24 bg-white">
          <PageHeader
            title="Über uns"
            subtitle="Schweizer Qualität trifft moderne Technologie"
          />
        </SectionContainer>

        {/* Section 2: Philosophy */}
        <SectionContainer className="max-w-4xl bg-white">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-ink">
              Unsere Philosophie
            </h2>
            <div className="space-y-4 text-muted-text leading-relaxed">
              <p>
                Local Studios wurde mit der Vision gegründet, Schweizer Unternehmen mit modernsten Technologien zu unterstützen. Wir kombinieren Schweizer Präzision mit agiler Softwareentwicklung.
              </p>
              <p>
                Unser Fokus liegt auf langfristigen Partnerschaften statt einmaligen Projekten. Wir entwickeln nicht nur Software – wir entwickeln Lösungen, die mit Ihrem Unternehmen wachsen.
              </p>
              <p>
                Qualität, Transparenz und technische Exzellenz sind die Grundpfeiler unserer Arbeit.
              </p>
            </div>
          </div>
        </SectionContainer>

        {/* Section 3: Values */}
        <SectionContainer className="bg-mist">
          <div className="space-y-12">
            <AnimateOnScroll animation="fadeUp">
              <h2 className="text-3xl font-display font-bold text-ink">
                Unsere Werte
              </h2>
            </AnimateOnScroll>
            <StaggerContainer delayChildren={0.1} staggerChildren={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Value 1: Swiss Quality */}
                <StaggerItem>
                  <Card className="border-0 shadow-none bg-white">
                    <CardHeader className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-ink flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-ink">
                        Schweizer Qualität
                      </h3>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-text leading-relaxed">
                      Präzision, Zuverlässigkeit und Liebe zum Detail in jedem Projekt.
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Value 2: Modern Technology */}
                <StaggerItem>
                  <Card className="border-0 shadow-none bg-white">
                    <CardHeader className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-ink flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-ink">
                        Moderne Technologie
                      </h3>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-text leading-relaxed">
                      Wir setzen auf bewährte, moderne Tech-Stacks für zukunftssichere Lösungen.
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Value 3: Transparent Communication */}
                <StaggerItem>
                  <Card className="border-0 shadow-none bg-white">
                    <CardHeader className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-ink flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-ink">
                        Transparente Kommunikation
                      </h3>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-text leading-relaxed">
                      Klare Prozesse, regelmässige Updates und offene Zusammenarbeit.
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Value 4: Long-term Partnerships */}
                <StaggerItem>
                  <Card className="border-0 shadow-none bg-white">
                    <CardHeader className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-ink flex items-center justify-center">
                        <Handshake className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-ink">
                        Langfristige Partnerschaften
                      </h3>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-text leading-relaxed">
                      Wir begleiten Sie von der Idee bis zum Launch – und darüber hinaus.
                    </CardContent>
                  </Card>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </SectionContainer>

        {/* Section 4: Team Placeholder */}
        <SectionContainer className="max-w-6xl bg-white">
          <div className="space-y-12">
            <AnimateOnScroll animation="fadeUp">
              <div>
                <h2 className="text-3xl font-display font-bold text-ink">
                  Unser Team
                </h2>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeUp" delay={0.1}>
              <p className="text-muted-text leading-relaxed max-w-2xl">
                Unser Team besteht aus erfahrenen Entwicklern, Designern und Consultants mit Fokus auf moderne Web-Technologien und Software-Architektur.
              </p>
            </AnimateOnScroll>

            {/* Placeholder Team Grid */}
            {/* TODO: Add team member cards when team info available (name, role, photo, expertise) */}
            <StaggerContainer delayChildren={0.1} staggerChildren={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Placeholder Card 1 */}
                <StaggerItem>
                  <Card className="border-0 shadow-md overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-ink to-muted-text" />
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold text-ink mb-1">
                        Team Member
                      </h3>
                      <p className="text-sm text-muted-text mb-4">
                        Full-Stack Developer
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-3 py-1 bg-mist text-ink rounded-full">
                          React
                        </span>
                        <span className="text-xs px-3 py-1 bg-mist text-ink rounded-full">
                          Next.js
                        </span>
                        <span className="text-xs px-3 py-1 bg-mist text-ink rounded-full">
                          Node.js
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Placeholder Card 2 */}
                <StaggerItem>
                  <Card className="border-0 shadow-md overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-muted-text to-ink" />
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold text-ink mb-1">
                        Team Member
                      </h3>
                      <p className="text-sm text-muted-text mb-4">
                        Full-Stack Developer
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-3 py-1 bg-mist text-ink rounded-full">
                          React
                        </span>
                        <span className="text-xs px-3 py-1 bg-mist text-ink rounded-full">
                          Next.js
                        </span>
                        <span className="text-xs px-3 py-1 bg-mist text-ink rounded-full">
                          Node.js
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </SectionContainer>

        {/* Section 5: Swiss Market Emphasis */}
        <SectionContainer className="max-w-4xl bg-mist text-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold text-ink">
              Lokale Präsenz, globale Standards
            </h2>
            <p className="text-muted-text leading-relaxed">
              Als Schweizer Unternehmen verstehen wir die Anforderungen des lokalen Marktes. Wir sprechen Deutsch, kennen die Schweizer Geschäftskultur und sind in Ihrer Zeitzone erreichbar.
            </p>

            {/* Key Points */}
            <div className="flex flex-col md:flex-row justify-center gap-8 pt-4">
              <div className="space-y-2">
                <div className="text-2xl">🇨🇭</div>
                <p className="font-semibold text-ink">Swiss Based</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🕐</div>
                <p className="font-semibold text-ink">CET Timezone</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">💬</div>
                <p className="font-semibold text-ink">Deutsch & English</p>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* Section 6: Approach */}
        <SectionContainer className="max-w-4xl bg-white">
          <div className="space-y-12">
            <h2 className="text-3xl font-display font-bold text-ink">
              Unser Ansatz
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <article className="space-y-4">
                <h3 className="text-xl font-semibold text-ink">
                  Kollaborativ, nicht transaktional
                </h3>
                <p className="text-muted-text leading-relaxed">
                  Wir arbeiten eng mit Ihnen zusammen und betrachten uns als Teil Ihres Teams. Ihre Ziele sind unsere Ziele.
                </p>
              </article>

              {/* Right Column */}
              <article className="space-y-4">
                <h3 className="text-xl font-semibold text-ink">
                  Qualität vor Quantität
                </h3>
                <p className="text-muted-text leading-relaxed">
                  Wir nehmen nur Projekte an, bei denen wir echten Mehrwert liefern können. Fokus auf Qualität statt Masse.
                </p>
              </article>
            </div>
          </div>
        </SectionContainer>

        {/* Section 7: CTA */}
        <SectionContainer className="bg-ink text-center text-white">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-display font-bold">
              Lernen Sie uns kennen
            </h2>
            <p className="text-gray-200 leading-relaxed">
              Lassen Sie uns bei einem unverbindlichen Gespräch Ihre Anforderungen besprechen.
            </p>
            <Link href="/kontakt">
              <Button variant="brand-secondary" size="lg">
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </>
  );
}
