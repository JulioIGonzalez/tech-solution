/**
 * FAQ para SEO Local - Schema.org FAQPage + contenido visible
 * Preguntas que buscan usuarios locales (Google "cerca de mí", intención local)
 */

export interface FAQItem {
  question: string
  answer: string
}

export const FAQ_LOCAL: FAQItem[] = [
  {
    question: '¿Dónde está TechSolutions Iguazú?',
    answer:
      'Estamos en Puerto Iguazú, Misiones, Argentina. Nuestro local está en Av. Victoria Aguirre 123, zona céntrica. Atendemos en local y también ofrecemos servicio técnico a domicilio en Puerto Iguazú y alrededores.',
  },
  {
    question: '¿Hacen reparación de celulares en Puerto Iguazú?',
    answer:
      'Sí. Reparamos celulares de todas las marcas (iPhone, Samsung, Motorola, Xiaomi, Huawei y más) en Puerto Iguazú. Incluimos cambio de pantalla, batería, puerto de carga, software y recuperación de datos. El diagnóstico es gratuito.',
  },
  {
    question: '¿Reparan computadoras y notebooks en Iguazú?',
    answer:
      'Sí. Brindamos servicio técnico de computadoras y notebooks en Puerto Iguazú: formateo, limpieza de virus, upgrade de RAM y disco SSD, reparación de hardware. Atendemos en nuestro local y a domicilio.',
  },
  {
    question: '¿Crean páginas web en Misiones?',
    answer:
      'Sí. Desarrollamos y creamos páginas web profesionales para empresas y emprendedores de Puerto Iguazú y Misiones. Incluimos diseño responsive, optimización para Google (SEO) y mantenimiento.',
  },
  {
    question: '¿El diagnóstico tiene costo?',
    answer:
      'No. El diagnóstico es gratuito. Revisamos tu equipo, te explicamos el problema y el presupuesto sin compromiso. Solo pagás si decidís que hagamos la reparación.',
  },
  {
    question: '¿Atienden a domicilio en Puerto Iguazú?',
    answer:
      'Sí. Para servicio técnico de computadoras y notebooks ofrecemos atención a domicilio en Puerto Iguazú y zona de influencia. Consultá por WhatsApp para coordinar.',
  },
]
