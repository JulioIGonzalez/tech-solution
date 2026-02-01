/**
 * Servicios de la empresa con contenido SEO optimizado
 * Cada servicio tiene keywords específicas para posicionamiento
 */

export interface Service {
  id: string
  slug: string
  title: string
  shortTitle: string
  description: string
  longDescription: string
  icon: string
  keywords: string[]
  features: string[]
  cta: string
}

export const SERVICES: Service[] = [
  {
    id: 'reparacion-celulares',
    slug: 'reparacion-celulares-puerto-iguazu',
    title: 'Reparación de Celulares en Puerto Iguazú',
    shortTitle: 'Reparación de Celulares',
    description:
      'Servicio técnico profesional para celulares Android e iPhone en Puerto Iguazú. Cambio de pantalla, batería, puerto de carga y más. Diagnóstico gratuito.',
    longDescription:
      'Somos especialistas en reparación de celulares en Puerto Iguazú con más de 5 años de experiencia. Reparamos todas las marcas: Samsung, Motorola, Xiaomi, iPhone, Huawei y más. Ofrecemos diagnóstico gratuito, repuestos de calidad y garantía en todos nuestros trabajos. Servicio rápido, la mayoría de las reparaciones se realizan en el día.',
    icon: '📱',
    keywords: [
      'reparación celulares Puerto Iguazú',
      'arreglo celulares Iguazú',
      'servicio técnico celulares Misiones',
      'cambio pantalla celular',
      'reparación iPhone Iguazú',
    ],
    features: [
      'Cambio de pantalla y display',
      'Reemplazo de batería',
      'Reparación de puerto de carga',
      'Solución de problemas de software',
      'Recuperación de datos',
      'Diagnóstico gratuito',
    ],
    cta: 'Consultá por tu celular',
  },
  {
    id: 'reparacion-computadoras',
    slug: 'reparacion-computadoras-puerto-iguazu',
    title: 'Reparación de Computadoras en Puerto Iguazú',
    shortTitle: 'Reparación de Computadoras',
    description:
      'Servicio técnico de computadoras y notebooks en Puerto Iguazú. Formateo, limpieza, upgrade de hardware, eliminación de virus. Atención a domicilio disponible.',
    longDescription:
      'Brindamos servicio técnico integral para computadoras de escritorio y notebooks en Puerto Iguazú y alrededores. Realizamos formateo, instalación de Windows y Linux, limpieza de virus, upgrade de memoria RAM y disco SSD, armado de PC a medida y mantenimiento preventivo. Atendemos tanto en nuestro local como a domicilio.',
    icon: '💻',
    keywords: [
      'reparación computadoras Puerto Iguazú',
      'técnico PC Iguazú',
      'formateo notebook Misiones',
      'servicio técnico computadoras',
      'arreglo PC Iguazú',
    ],
    features: [
      'Formateo e instalación de sistemas',
      'Limpieza y eliminación de virus',
      'Upgrade de RAM y disco SSD',
      'Reparación de hardware',
      'Armado de PC a medida',
      'Servicio a domicilio',
    ],
    cta: 'Consultá por tu computadora',
  },
  {
    id: 'desarrollo-web',
    slug: 'desarrollo-web-misiones',
    title: 'Desarrollo Web Profesional en Misiones',
    shortTitle: 'Desarrollo Web',
    description:
      'Diseño y desarrollo de páginas web profesionales en Misiones. Sitios modernos, rápidos y optimizados para Google. E-commerce, landing pages, sistemas web.',
    longDescription:
      'Creamos páginas web profesionales para empresas y emprendedores de Puerto Iguazú y toda la región de Misiones. Desarrollamos sitios web modernos, responsive y optimizados para SEO. Trabajamos con las últimas tecnologías: React, Node.js, WordPress. Ofrecemos hosting, dominio y mantenimiento. Potenciá tu negocio con presencia digital profesional.',
    icon: '🌐',
    keywords: [
      'desarrollo web Misiones',
      'páginas web Puerto Iguazú',
      'diseño web Iguazú',
      'programador web Misiones',
      'tienda online Iguazú',
    ],
    features: [
      'Diseño web moderno y responsive',
      'Optimización SEO incluida',
      'Sitios autoadministrables',
      'E-commerce y tiendas online',
      'Landing pages de alta conversión',
      'Hosting y mantenimiento',
    ],
    cta: 'Solicitá tu presupuesto web',
  },
  {
    id: 'camaras-seguridad',
    slug: 'instalacion-camaras-seguridad-puerto-iguazu',
    title: 'Instalación de Cámaras de Seguridad en Puerto Iguazú',
    shortTitle: 'Cámaras de Seguridad',
    description:
      'Instalación profesional de cámaras de seguridad y sistemas de videovigilancia en red en Puerto Iguazú. CCTV, cámaras IP, DVR/NVR. Monitoreo remoto desde el celular.',
    longDescription:
      'Instalamos sistemas de videovigilancia profesionales para hogares, comercios y empresas en Puerto Iguazú. Trabajamos con cámaras IP en red, sistemas CCTV analógicos y híbridos, DVR y NVR. Configuramos el acceso remoto para que puedas ver tus cámaras desde el celular en cualquier momento. Asesoramiento personalizado y garantía en todos los trabajos.',
    icon: '📹',
    keywords: [
      'cámaras de seguridad Puerto Iguazú',
      'instalación CCTV Iguazú',
      'cámaras IP Misiones',
      'videovigilancia Puerto Iguazú',
      'seguridad electrónica Iguazú',
    ],
    features: [
      'Cámaras IP en red',
      'Sistemas CCTV analógicos',
      'DVR y NVR con almacenamiento',
      'Monitoreo remoto desde celular',
      'Cámaras para exterior e interior',
      'Asesoramiento personalizado',
    ],
    cta: 'Consultá por cámaras',
  },
  {
    id: 'venta-accesorios',
    slug: 'accesorios-celulares-puerto-iguazu',
    title: 'Venta de Accesorios y Repuestos en Puerto Iguazú',
    shortTitle: 'Accesorios y Repuestos',
    description:
      'Venta de accesorios y repuestos para celulares en Puerto Iguazú. Fundas, vidrios templados, cargadores, auriculares, baterías y más. Calidad garantizada.',
    longDescription:
      'Contamos con un amplio stock de accesorios y repuestos para celulares de todas las marcas. Fundas, vidrios templados, cargadores originales y genéricos, auriculares, cables, baterías y más. Todos nuestros productos tienen garantía. Visitá nuestro local en el centro de Puerto Iguazú.',
    icon: '🔧',
    keywords: [
      'accesorios celulares Puerto Iguazú',
      'repuestos celulares Iguazú',
      'fundas celular Iguazú',
      'cargadores Misiones',
      'vidrio templado Puerto Iguazú',
    ],
    features: [
      'Fundas y protectores',
      'Vidrios templados',
      'Cargadores y cables',
      'Auriculares y parlantes',
      'Baterías de repuesto',
      'Productos con garantía',
    ],
    cta: 'Consultá disponibilidad',
  },
]

export const getServiceBySlug = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug)

export const getServiceById = (id: string): Service | undefined =>
  SERVICES.find((s) => s.id === id)
