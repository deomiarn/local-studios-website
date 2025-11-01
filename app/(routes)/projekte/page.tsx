'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { PageHeader } from '@/components/ui/page-header'
import { SectionContainer } from '@/components/ui/section-container'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { projects, type ProjectService } from '@/lib/projects-data'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/animate-on-scroll'

// Note: metadata moved to layout.tsx for use client component
// export const metadata = {
//   title: 'Projekte | Local Studios',
//   description: 'Erfolgreiche Projekte für Schweizer Unternehmen',
// }

const FILTER_OPTIONS: { label: string; value: 'all' | ProjectService }[] = [
  { label: 'Alle Projekte', value: 'all' },
  { label: 'Web Development', value: 'Web Development' },
  { label: 'Dashboard', value: 'Dashboard' },
  { label: 'Consulting', value: 'Consulting' }
]

export default function Projekte() {
  // TODO: Phase 2 - Implement filter logic with actual filtering
  const [activeFilter] = useState<'all' | ProjectService>('all')

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* 1. Page Header */}
        <SectionContainer className="pt-20 pb-8">
          <PageHeader
            title="Unsere Projekte"
            subtitle="Erfolgreiche Projekte für Schweizer Unternehmen"
          />
        </SectionContainer>

        {/* 2. Filter Bar */}
        <section className="bg-white py-8 border-t border-b border-mist">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="text-sm font-medium text-ink">Filter nach:</span>
              <div className="flex flex-wrap gap-3">
                {FILTER_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    disabled
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeFilter === option.value
                        ? 'bg-ink text-white'
                        : 'border border-ink text-ink hover:bg-mist'
                    } disabled:opacity-60 disabled:cursor-not-allowed`}
                    title="Filter functionality coming in Phase 2"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-text mt-4">
              Filter-Funktionalität wird in Phase 2 implementiert
            </p>
          </div>
        </section>

        {/* 3. Projects Grid */}
        <section className="bg-mist py-20">
          <div className="max-w-6xl mx-auto px-6">
            <StaggerContainer delayChildren={0.1} staggerChildren={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <StaggerItem key={project.id}>
                    <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full">
                      {/* Thumbnail Image */}
                      <div className="relative h-48 bg-gradient-to-br from-ink/5 to-ink/10 overflow-hidden">
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>

                      <CardContent className="flex-1 flex flex-col p-6">
                        {/* Industry Badge */}
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 bg-mist text-ink text-xs font-medium rounded-full">
                            {project.industry}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-display font-bold text-ink mb-3 line-clamp-2">
                          {project.title}
                        </h3>

                        {/* Challenge */}
                        <p className="text-sm text-muted-text mb-4 line-clamp-2 flex-grow">
                          {project.challenge}
                        </p>

                        {/* Technologies */}
                        <div className="mb-6 flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="inline-block px-2.5 py-1 bg-ink text-white text-xs rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="inline-block px-2.5 py-1 text-ink text-xs">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Details Link */}
                        <Link
                          href={`/projekte/${project.id}`}
                          className="inline-block text-sm font-medium text-ink hover:underline underline-offset-2 transition-all"
                        >
                          Details ansehen →
                        </Link>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* 4. CTA Section */}
        <section className="bg-white py-20 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-4">
              Haben Sie ein ähnliches Projekt?
            </h2>
            <p className="text-lg text-muted-text mb-8">
              Lassen Sie uns gemeinsam eine Lösung entwickeln.
            </p>
            <Link href="/kontakt">
              <Button variant="brand-primary" size="lg">
                Projekt starten
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
