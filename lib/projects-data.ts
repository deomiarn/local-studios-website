/**
 * Projects Data Structure
 *
 * Type-safe CMS collection structure for projects.
 * Phase 1: Static data. Phase 2: Connect to actual CMS.
 *
 * @example
 * ```ts
 * import { projects, type Project } from '@/lib/projects-data'
 *
 * // Filter by industry
 * const saasProjects = projects.filter(p => p.industry === 'SaaS')
 * ```
 */

export type ProjectIndustry = 'E-Commerce' | 'SaaS' | 'Consulting' | 'Manufacturing' | 'Other'
export type ProjectService = 'Web Development' | 'Dashboard' | 'Database' | 'Consulting'

export interface Project {
  id: string
  title: string
  client?: string // Optional (some clients may be confidential)
  industry: ProjectIndustry
  services: ProjectService[]
  challenge: string
  solution: string
  results: string
  technologies: string[]
  thumbnail: string // Placeholder: gradient or Unsplash URL
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    client: 'Vertraulich',
    industry: 'E-Commerce',
    services: ['Web Development', 'Database'],
    challenge: 'Ein Schweizer Retailer benötigte eine moderne E-Commerce-Plattform mit Echtzeit-Inventar.',
    solution: 'Next.js Storefront mit Headless CMS, PostgreSQL Backend und Stripe Integration.',
    results: '40% schnellere Ladezeiten, 25% höhere Conversion Rate nach Launch.',
    technologies: ['Next.js', 'React', 'PostgreSQL', 'Stripe'],
    thumbnail: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
    featured: true
  },
  {
    id: 'project-2',
    title: 'Dashboard für Logistik-Firma',
    industry: 'Manufacturing',
    services: ['Dashboard', 'Database'],
    challenge: 'Komplexe Lieferketten-Daten mussten in Echtzeit visualisiert werden.',
    solution: 'Custom React Dashboard mit PostgreSQL Backend und WebSocket-Integration.',
    results: 'Reduktion der Reaktionszeit um 60%, verbesserte Entscheidungsfindung.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    featured: true
  },
  {
    id: 'project-3',
    title: 'SaaS Platform Modernisierung',
    client: 'Tech Startup',
    industry: 'SaaS',
    services: ['Web Development', 'Consulting'],
    challenge: 'Legacy PHP-Anwendung musste modernisiert werden ohne Downtime.',
    solution: 'Schrittweise Migration zu Next.js mit API-Gateway Pattern für nahtlose Transition.',
    results: 'Zero Downtime Migration, 70% Performance-Verbesserung.',
    technologies: ['Next.js', 'TypeScript', 'API Gateway'],
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    featured: false
  }
]

/**
 * Get all unique industries from projects
 */
export function getUniqueIndustries(): ProjectIndustry[] {
  const industries = new Set(projects.map(p => p.industry))
  return Array.from(industries)
}

/**
 * Get all unique services from projects
 */
export function getUniqueServices(): ProjectService[] {
  const services = new Set<ProjectService>()
  projects.forEach(p => p.services.forEach(s => services.add(s)))
  return Array.from(services)
}

/**
 * Filter projects by service
 * TODO: Phase 2 - Wire up to filter UI
 */
export function filterProjectsByService(service: ProjectService): Project[] {
  return projects.filter(p => p.services.includes(service))
}

/**
 * Filter projects by industry
 * TODO: Phase 2 - Wire up to filter UI
 */
export function filterProjectsByIndustry(industry: ProjectIndustry): Project[] {
  return projects.filter(p => p.industry === industry)
}

/**
 * Get featured projects (shown on homepage, etc)
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured)
}
