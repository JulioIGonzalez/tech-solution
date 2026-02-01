/**
 * Servicios - Optimizado para móviles
 */
import { useTranslation } from '@/i18n/LanguageContext'
import { SERVICES } from '@/config/services'
import { getWhatsAppUrl, type WhatsAppService } from '@/utils/whatsapp'
import { EVENTS } from '@/utils/analytics'

const serviceToWhatsApp: Record<string, WhatsAppService> = {
  'reparacion-celulares': 'celulares',
  'reparacion-computadoras': 'computadoras',
  'desarrollo-web': 'web',
  'camaras-seguridad': 'camaras',
  'venta-accesorios': 'accesorios',
}

export function Services() {
  const { t } = useTranslation()

  const handleServiceClick = (serviceId: string) => {
    EVENTS.serviceClick(serviceId)
    EVENTS.whatsappClick(serviceId)
  }

  const getServiceTranslation = (serviceId: string) => {
    const items = t.services.items as Record<string, {
      title: string
      shortTitle: string
      description: string
      cta: string
      features: readonly string[]
    }>
    return items[serviceId]
  }

  return (
    <section
      id="servicios"
      className="section-padding bg-dark-900"
      aria-labelledby="services-title"
    >
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-cyber-400 sm:mb-4 sm:text-sm">
            {t.services.title}
          </span>
          <h2
            id="services-title"
            className="mb-3 font-display text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl"
          >
            {t.services.subtitle}{' '}
            <span className="text-gradient-cyber">Puerto Iguazú</span>
          </h2>
          <p className="text-sm text-dark-400 sm:text-base lg:text-lg">
            {t.services.description}
          </p>
        </div>

        {/* Grid de servicios - 1 col en móvil, 2 en tablet, 3 en desktop */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const serviceT = getServiceTranslation(service.id)
            if (!serviceT) return null

            return (
              <article
                key={service.id}
                id={service.slug}
                className="group relative overflow-hidden rounded-xl border border-dark-700/50 bg-dark-800/50 p-4 backdrop-blur-sm transition-all hover:border-cyber-500/50 hover:shadow-cyber sm:rounded-2xl sm:p-6"
              >
                {/* Icono */}
                <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyber-500/20 to-accent-500/20 text-xl sm:mb-4 sm:h-14 sm:w-14 sm:rounded-xl sm:text-2xl">
                  {service.icon}
                </span>

                {/* Título */}
                <h3 className="mb-2 font-display text-lg font-bold text-white sm:mb-3 sm:text-xl">
                  {serviceT.shortTitle}
                </h3>

                {/* Descripción */}
                <p className="mb-3 text-xs text-dark-400 sm:mb-4 sm:text-sm">
                  {serviceT.description}
                </p>

                {/* Features - mostrar solo 2 en móvil */}
                <ul className="mb-4 space-y-1.5 sm:mb-6 sm:space-y-2">
                  {serviceT.features.slice(0, 3).map((feature, idx) => (
                    <li 
                      key={feature} 
                      className={`flex items-center gap-2 text-xs text-dark-300 sm:text-sm ${idx >= 2 ? 'hidden sm:flex' : ''}`}
                    >
                      <svg className="h-3.5 w-3.5 flex-shrink-0 text-cyber-400 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={getWhatsAppUrl(serviceToWhatsApp[service.id] || 'general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleServiceClick(service.id)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyber-500 to-cyber-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:from-cyber-400 hover:to-cyber-500 hover:shadow-cyber sm:w-auto sm:px-5"
                >
                  {serviceT.cta}
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                {/* Glow effect */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyber-500/0 transition-all group-hover:bg-cyber-500/10" />
              </article>
            )
          })}
        </div>

        {/* CTA adicional */}
        <div className="mt-8 text-center sm:mt-12">
          <p className="mb-3 text-sm text-dark-400 sm:mb-4 sm:text-base">
            {t.services.notFound} <strong className="text-white">{t.services.askUs}</strong>
          </p>
          <a
            href={getWhatsAppUrl('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-semibold text-cyber-400 transition-colors hover:text-cyber-300 sm:text-lg"
          >
            💬 {t.services.makeQuery}
          </a>
        </div>
      </div>
    </section>
  )
}
