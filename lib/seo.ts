import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Local Studios',
  description: 'Schweizer IT-Dienstleistungen: Custom Web Development, Software Solutions und Technical Consulting für KMUs in Zürich',
  url: 'https://localstudios.ch',
  locale: 'de-CH',
  ogImage: '/og-image.png',
};

interface PageMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = '',
  ogImage,
  noIndex = false,
}: PageMetadataProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage || siteConfig.ogImage;
  const absoluteImageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`;

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: url,
      languages: {
        'de-CH': url,
      },
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteImageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}

// Page-specific metadata configurations
export const pageMetadata = {
  home: generatePageMetadata({
    title: 'Local Studios - Schweizer Web Development & IT Lösungen',
    description: 'Massgeschneiderte IT-Lösungen für Schweizer Unternehmen. Custom Web Development, Software Solutions und Technical Consulting mit Next.js, React und TypeScript.',
    keywords: [
      'Schweizer Web Development',
      'Custom Software Schweiz',
      'IT Lösungen Zürich',
      'Next.js Entwicklung',
      'Dashboard Entwicklung',
      'Web Entwicklung Schweiz',
      'Software Entwicklung Zürich',
      'React Entwicklung',
      'TypeScript Entwicklung',
      'KMU IT Services',
    ],
    path: '/',
  }),

  services: generatePageMetadata({
    title: 'Leistungen | Local Studios - Web Development & Software Solutions',
    description: 'Professionelle IT-Dienstleistungen: Custom Web Development mit Next.js, Business Software Solutions, Dashboards und Technical Consulting für Schweizer KMUs.',
    keywords: [
      'Web Development Services',
      'Custom Software Solutions',
      'Dashboard Development',
      'Technical Consulting',
      'Next.js Development',
      'React Development',
      'PostgreSQL Development',
      'API Development',
      'Cloud Deployment',
      'SEO Optimierung',
    ],
    path: '/leistungen',
  }),

  projects: generatePageMetadata({
    title: 'Projekte | Local Studios - Erfolgreiche IT-Projekte',
    description: 'Erfolgreiche Web Development und Software-Projekte für Schweizer Unternehmen. Referenzen aus Dashboard-Entwicklung, E-Commerce und Business-Anwendungen.',
    keywords: [
      'Web Development Projekte',
      'Software Projekte Schweiz',
      'Dashboard Referenzen',
      'E-Commerce Projekte',
      'Business Applications',
      'Portfolio Web Development',
      'Schweizer IT Projekte',
    ],
    path: '/projekte',
  }),

  about: generatePageMetadata({
    title: 'Über uns | Local Studios - Schweizer IT-Expertise',
    description: 'Local Studios verbindet Schweizer Qualität mit modernen Technologien. Erfahren Sie mehr über unsere Werte, unser Team und unseren Ansatz für IT-Projekte.',
    keywords: [
      'IT Unternehmen Schweiz',
      'Web Development Team',
      'Schweizer IT Firma',
      'Softwareentwicklung Zürich',
      'IT Expertise Schweiz',
      'Agile Development',
    ],
    path: '/ueber-uns',
  }),

  contact: generatePageMetadata({
    title: 'Kontakt | Local Studios - Ihr IT-Projekt besprechen',
    description: 'Kontaktieren Sie Local Studios für Ihr nächstes Web Development oder Software-Projekt. Kostenlose Erstberatung. Antwortzeit: 24 Stunden.',
    keywords: [
      'IT Beratung Schweiz',
      'Web Development Anfrage',
      'Software Projekt anfragen',
      'IT Consulting Zürich',
      'Kostenlose Erstberatung',
    ],
    path: '/kontakt',
  }),

  privacy: generatePageMetadata({
    title: 'Datenschutzerklärung | Local Studios',
    description: 'Datenschutzerklärung von Local Studios. Informationen zum Umgang mit persönlichen Daten gemäss Schweizer DSG und EU GDPR.',
    path: '/datenschutz',
    noIndex: true,
  }),

  imprint: generatePageMetadata({
    title: 'Impressum | Local Studios',
    description: 'Impressum und rechtliche Informationen von Local Studios. Kontaktdaten, Geschäftsinformationen und Haftungsausschlüsse.',
    path: '/impressum',
    noIndex: true,
  }),
};
