/**
 * Utilidades para integración con WhatsApp
 * Mensajes preconfigurados y tracking
 */

import { SEO_CONFIG } from '@/config/seo'

const { business } = SEO_CONFIG

export type WhatsAppService =
  | 'celulares'
  | 'computadoras'
  | 'web'
  | 'camaras'
  | 'accesorios'
  | 'general'

const MESSAGES: Record<WhatsAppService, string> = {
  celulares: `¡Hola! 👋 Me contacto desde la web de ${business.name}.\n\nNecesito consultar por *reparación de celular*.\n\nMarca/Modelo: \nProblema: `,
  computadoras: `¡Hola! 👋 Me contacto desde la web de ${business.name}.\n\nNecesito consultar por *reparación de computadora/notebook*.\n\nTipo de equipo: \nProblema: `,
  web: `¡Hola! 👋 Me contacto desde la web de ${business.name}.\n\nEstoy interesado/a en *desarrollo web*.\n\nTipo de proyecto: \nDescripción breve: `,
  camaras: `¡Hola! 👋 Me contacto desde la web de ${business.name}.\n\nEstoy interesado/a en *cámaras de seguridad*.\n\nTipo de instalación (hogar/comercio): \nCantidad estimada de cámaras: `,
  accesorios: `¡Hola! 👋 Me contacto desde la web de ${business.name}.\n\nQuiero consultar por *accesorios/repuestos*.\n\nProducto: \nModelo de celular: `,
  general: `¡Hola! 👋 Me contacto desde la web de ${business.name}.\n\nQuisiera realizar una consulta.`,
}

/**
 * Genera URL de WhatsApp con mensaje preconfigurado
 */
export function getWhatsAppUrl(service: WhatsAppService = 'general'): string {
  const message = encodeURIComponent(MESSAGES[service])
  return `https://wa.me/${business.whatsapp}?text=${message}`
}

/**
 * Abre WhatsApp con mensaje preconfigurado
 */
export function openWhatsApp(service: WhatsAppService = 'general'): void {
  window.open(getWhatsAppUrl(service), '_blank', 'noopener,noreferrer')
}

/**
 * Genera mensaje personalizado
 */
export function getCustomWhatsAppUrl(customMessage: string): string {
  const message = encodeURIComponent(customMessage)
  return `https://wa.me/${business.whatsapp}?text=${message}`
}
