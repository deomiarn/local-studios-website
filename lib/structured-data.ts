import { siteConfig } from './seo';

// Organization Schema (for root layout)
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CH',
      addressRegion: 'Zürich',
      addressLocality: 'Zürich',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+41-XX-XXX-XX-XX',
      contactType: 'Customer Service',
      email: 'info@localstudios.ch',
      areaServed: 'CH',
      availableLanguage: ['de', 'en'],
    },
    sameAs: [
      // Social media profiles (to be added when available)
      // 'https://www.linkedin.com/company/localstudios',
      // 'https://github.com/localstudios',
    ],
  };
}

// LocalBusiness Schema (emphasizes Swiss market presence)
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}#localbusiness`,
    name: siteConfig.name,
    image: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: '+41-XX-XXX-XX-XX',
    email: 'info@localstudios.ch',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CH',
      addressRegion: 'Zürich',
      addressLocality: 'Zürich',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Coordinates for Zürich, Switzerland (approximate)
      latitude: 47.3769,
      longitude: 8.5417,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'CHF',
    paymentAccepted: 'Invoice, Bank Transfer',
  };
}

// WebSite Schema with SearchAction
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: 'de-CH',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// Service Schema (for services page)
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Switzerland',
    },
    description: service.description,
    url: service.url,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${siteConfig.url}/kontakt`,
      servicePhone: '+41-XX-XXX-XX-XX',
      serviceLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'CH',
          addressRegion: 'Zürich',
        },
      },
    },
  };
}

// BreadcrumbList Schema (for pages with navigation hierarchy)
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

// WebPage Schema (for individual pages)
export function generateWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}${page.url}#webpage`,
    url: `${siteConfig.url}${page.url}`,
    name: page.name,
    description: page.description,
    inLanguage: 'de-CH',
    isPartOf: {
      '@id': `${siteConfig.url}#website`,
    },
    about: {
      '@id': `${siteConfig.url}#organization`,
    },
    datePublished: '2025-11-01',
    dateModified: new Date().toISOString().split('T')[0],
  };
}

// Helper function to render JSON-LD script
export function renderJsonLd(data: object) {
  return {
    __html: JSON.stringify(data),
  };
}
