/**
 * Schema.org JSON-LD para SEO Local
 * LocalBusiness + Service + FAQPage + Organization + WebSite
 * Optimizado para Google Maps + búsqueda "cerca de mí"
 */

import { SEO_CONFIG } from '@/config/seo'
import { SERVICES } from '@/config/services'
import { FAQ_LOCAL } from '@/config/faq'

const { business, siteUrl } = SEO_CONFIG

/**
 * Schema LocalBusiness para SEO local (NAP consistente, ciudad, zona)
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#localbusiness`,
    name: business.name,
    legalName: business.legalName,
    description: business.description,
    url: siteUrl,
    telephone: business.phone,
    email: business.email,
    foundingDate: business.foundingYear.toString(),
    image: [`${siteUrl}/og-image.jpg`, `${siteUrl}/logo.svg`],
    logo: `${siteUrl}/logo.svg`,
    priceRange: '$$',
    currenciesAccepted: 'ARS',
    paymentAccepted: 'Efectivo, Transferencia, Mercado Pago',
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.address.coordinates.lat,
      longitude: business.address.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: business.phone,
      contactType: 'customer service',
      areaServed: { '@type': 'City', name: 'Puerto Iguazú', sameAs: 'https://www.wikidata.org/wiki/Q201953' },
      availableLanguage: ['Spanish', 'English', 'Portuguese'],
      url: `https://wa.me/${business.whatsapp}`,
    },
    sameAs: [
      business.social.instagram,
      business.social.facebook,
      business.social.linkedin,
    ],
    serviceType: [
      'Reparación de celulares',
      'Reparación de computadoras',
      'Servicio técnico informático',
      'Creación y desarrollo de páginas web',
      'Instalación de cámaras de seguridad',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios en Puerto Iguazú',
      itemListElement: SERVICES.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          areaServed: { '@type': 'City', name: 'Puerto Iguazú' },
        },
        position: index + 1,
      })),
    },
    areaServed: [
      { '@type': 'City', name: 'Puerto Iguazú', '@id': 'https://www.wikidata.org/wiki/Q201953' },
      { '@type': 'State', name: 'Misiones' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

/**
 * Schema FAQPage para rich results y búsqueda local
 */
export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_LOCAL.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

/**
 * Schema WebSite para sitelinks en Google (búsqueda local)
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: business.name,
    description: business.description,
    inLanguage: 'es-AR',
    publisher: { '@id': `${siteUrl}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/#servicios?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  }
}

/**
 * Schema Organization
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: business.name,
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: business.phone,
      contactType: 'customer service',
      areaServed: { '@type': 'City', name: 'Puerto Iguazú' },
      availableLanguage: ['Spanish', 'English', 'Portuguese'],
    },
    sameAs: [
      business.social.instagram,
      business.social.facebook,
      business.social.linkedin,
    ],
  }
}

/**
 * Schema BreadcrumbList
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Componente que inyecta los schemas en el head
 */
export function SchemaOrg() {
  const schemas = [
    getLocalBusinessSchema(),
    getFAQSchema(),
    getWebSiteSchema(),
    getOrganizationSchema(),
  ]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
