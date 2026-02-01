/**
 * Meta tags dinámicos para SEO
 * Open Graph + Twitter Cards
 */

import { SEO_CONFIG } from '@/config/seo'

interface MetaTagsProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
}

const { business, siteUrl, pages } = SEO_CONFIG

export function MetaTags({
  title = pages.home.title,
  description = pages.home.description,
  keywords = pages.home.keywords,
  image = '/og-image.jpg',
  url = siteUrl,
  type = 'website',
}: MetaTagsProps) {
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={business.name} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="geo.region" content="AR-N" />
      <meta name="geo.placename" content="Puerto Iguazú, Misiones" />
      <meta
        name="geo.position"
        content={`${business.address.coordinates.lat};${business.address.coordinates.lng}`}
      />
      <meta
        name="ICBM"
        content={`${business.address.coordinates.lat}, ${business.address.coordinates.lng}`}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:site_name" content={business.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Alternate languages */}
      <link rel="alternate" hrefLang="es-AR" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
    </>
  )
}

/**
 * Genera el contenido para el head en index.html
 */
export function generateStaticMetaTags(): string {
  return `
    <!-- Primary Meta Tags -->
    <title>${pages.home.title}</title>
    <meta name="title" content="${pages.home.title}" />
    <meta name="description" content="${pages.home.description}" />
    <meta name="keywords" content="${pages.home.keywords}" />
    <meta name="author" content="${business.name}" />
    <meta name="robots" content="index, follow" />
    
    <!-- Geo Meta Tags -->
    <meta name="geo.region" content="AR-N" />
    <meta name="geo.placename" content="Puerto Iguazú, Misiones" />
    <meta name="geo.position" content="${business.address.coordinates.lat};${business.address.coordinates.lng}" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${siteUrl}" />
    <meta property="og:title" content="${pages.home.title}" />
    <meta property="og:description" content="${pages.home.description}" />
    <meta property="og:image" content="${siteUrl}/og-image.jpg" />
    <meta property="og:locale" content="es_AR" />
    <meta property="og:site_name" content="${business.name}" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${pages.home.title}" />
    <meta name="twitter:description" content="${pages.home.description}" />
    <meta name="twitter:image" content="${siteUrl}/og-image.jpg" />
    
    <!-- Canonical -->
    <link rel="canonical" href="${siteUrl}" />
  `.trim()
}
