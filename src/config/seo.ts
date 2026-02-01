/**
 * Configuración SEO central de la empresa
 * Keywords, datos NAP, y configuración para SEO local
 */

export const SEO_CONFIG = {
  // Datos de la empresa (NAP - Name, Address, Phone)
  business: {
    name: 'TechSolutions Iguazú',
    legalName: 'TechSolutions Iguazú',
    slogan: 'Soluciones Tecnológicas Profesionales',
    description:
      'Empresa de tecnología en Puerto Iguazú fundada por Julio González y Gabriel, especializada en reparación de celulares, computadoras, instalación de cámaras de seguridad en red y desarrollo web profesional. Servicio técnico certificado con garantía.',
    foundingYear: 2020,
    email: 'contacto@techsolutionsiguazu.com',
    phone: '+54 9 3757 60-4112',
    whatsapp: '5493757604112',
    telegram: '5493757604112',
    address: {
      street: 'Av. Victoria Aguirre 123',
      city: 'Puerto Iguazú',
      state: 'Misiones',
      country: 'Argentina',
      postalCode: '3370',
      coordinates: {
        lat: -25.5972,
        lng: -54.5786,
      },
    },
    hours: {
      weekdays: '09:00 - 19:00',
      saturday: '09:00 - 13:00',
      sunday: 'Cerrado',
    },
    social: {
      instagram: 'https://instagram.com/techsolutionsiguazu',
      facebook: 'https://facebook.com/techsolutionsiguazu',
      linkedin: 'https://linkedin.com/company/techsolutionsiguazu',
    },
  },

  // Keywords SEO
  keywords: {
    primary: [
      'reparación de celulares en Puerto Iguazú',
      'reparación de computadoras en Puerto Iguazú',
      'desarrollo web en Misiones',
      'instalación cámaras de seguridad Puerto Iguazú',
      'servicio técnico celulares Iguazú',
      'arreglo de celulares Puerto Iguazú',
    ],
    secondary: [
      'cambio de pantalla celular Iguazú',
      'reparación iPhone Puerto Iguazú',
      'reparación Android Misiones',
      'técnico en computadoras Iguazú',
      'páginas web Puerto Iguazú',
      'diseño web Misiones',
      'aplicaciones web Argentina',
      'cámaras IP Puerto Iguazú',
      'CCTV Misiones',
      'videovigilancia Iguazú',
    ],
    local: [
      'cerca de mí',
      'Puerto Iguazú',
      'Misiones',
      'Triple Frontera',
      'zona centro Iguazú',
      'barrio centro Puerto Iguazú',
    ],
    lsi: [
      'servicio técnico',
      'garantía',
      'profesional',
      'rápido',
      'confiable',
      'presupuesto sin cargo',
      'diagnóstico gratuito',
    ],
  },

  // Meta tags por página
  pages: {
    home: {
      title:
        'Reparación de Celulares y Computadoras en Puerto Iguazú | Desarrollo Web | TechSolutions',
      description:
        'Servicio técnico profesional de celulares y computadoras en Puerto Iguazú, Misiones. Reparación de iPhone, Android, notebooks. Desarrollo web a medida. Diagnóstico gratuito.',
      keywords:
        'reparación celulares Puerto Iguazú, servicio técnico computadoras Iguazú, desarrollo web Misiones, arreglo iPhone, reparación Android',
    },
  },

  // URLs
  siteUrl: 'https://techsolutionsiguazu.com',
  locale: 'es_AR',
  language: 'es',
} as const

export type SeoConfig = typeof SEO_CONFIG
