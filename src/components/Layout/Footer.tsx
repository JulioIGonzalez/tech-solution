/**
 * Footer - Optimizado para móviles
 */
import { useTranslation } from '@/i18n/LanguageContext'
import { SEO_CONFIG } from '@/config/seo'
import { SERVICES } from '@/config/services'

const { business } = SEO_CONFIG

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const getServiceShortTitle = (serviceId: string) => {
    const translations = t.services.items as Record<string, { shortTitle: string }>
    return translations[serviceId]?.shortTitle || serviceId
  }

  const footerLinks = {
    servicios: SERVICES.map((s) => ({
      label: getServiceShortTitle(s.id),
      href: `#${s.slug}`,
    })),
    empresa: [
      { label: t.nav.about, href: '#sobre-nosotros' },
      { label: t.nav.tech, href: '#tecnologias' },
      { label: t.nav.location, href: '#ubicacion' },
      { label: t.nav.contact, href: '#contacto' },
    ],
  }

  return (
    <footer className="border-t border-dark-800 bg-dark-950" role="contentinfo">
      <div className="container-wide mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* Grid principal - 2 cols en móvil, 4 en desktop */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {/* Branding + NAP - ocupa 2 cols en móvil */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#hero" className="mb-3 inline-flex items-center gap-2 font-display text-lg font-bold sm:mb-4 sm:text-xl">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyber-500 to-accent-500 text-xs font-bold text-white sm:h-8 sm:w-8 sm:text-sm">
                TS
              </span>
              <span className="text-white">{business.name}</span>
            </a>
            <p className="mb-3 text-xs text-dark-400 sm:mb-4 sm:text-sm">{business.slogan}</p>
            
            <address className="not-italic text-xs text-dark-400 sm:text-sm">
              <p className="mb-1">📍 {business.address.street}</p>
              <p className="mb-1">{business.address.city}, {business.address.state}</p>
              <p className="mb-1">
                📞 <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="hover:text-cyber-400">{business.phone}</a>
              </p>
              <p>
                ✉️ <a href={`mailto:${business.email}`} className="hover:text-cyber-400 break-all">{business.email}</a>
              </p>
            </address>

            {/* Redes sociales */}
            <div className="mt-4 flex gap-2 sm:mt-6 sm:gap-3">
              <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-lg bg-dark-800 text-dark-400 transition-all hover:bg-cyber-500/20 hover:text-cyber-400 sm:h-10 sm:w-10">
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
              </a>
              <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-lg bg-dark-800 text-dark-400 transition-all hover:bg-cyber-500/20 hover:text-cyber-400 sm:h-10 sm:w-10">
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={`https://t.me/+${business.telegram}`} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="flex h-9 w-9 items-center justify-center rounded-lg bg-dark-800 text-dark-400 transition-all hover:bg-sky-500/20 hover:text-sky-400 sm:h-10 sm:w-10">
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="mb-3 font-display text-sm font-semibold text-white sm:mb-4 sm:text-base">{t.footer.services}</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-xs text-dark-400 transition-colors hover:text-cyber-400 sm:text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="mb-3 font-display text-sm font-semibold text-white sm:mb-4 sm:text-base">{t.footer.company}</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-xs text-dark-400 transition-colors hover:text-cyber-400 sm:text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Horarios - oculto en móvil pequeño */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h3 className="mb-3 font-display text-sm font-semibold text-white sm:mb-4 sm:text-base">{t.footer.hours}</h3>
            <dl className="space-y-1.5 text-xs text-dark-400 sm:space-y-2 sm:text-sm">
              <div className="flex justify-between gap-2">
                <dt>{t.location.days.weekdays}</dt>
                <dd className="text-dark-300">{business.hours.weekdays}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>{t.location.days.saturday}</dt>
                <dd className="text-dark-300">{business.hours.saturday}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>{t.location.days.sunday}</dt>
                <dd className="text-dark-500">{t.location.days.closed}</dd>
              </div>
            </dl>

            <a
              href="#contacto"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyber-500 to-cyber-600 px-3 py-2 text-xs font-medium text-white transition-all hover:from-cyber-400 hover:to-cyber-500 sm:mt-6 sm:px-4 sm:text-sm"
            >
              {t.footer.contact}
              <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-dark-800 pt-6 sm:mt-12 sm:pt-8">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">
            <p className="text-[10px] text-dark-500 sm:text-xs">© {currentYear} {business.name}. {t.footer.rights}</p>
            <p className="text-[10px] text-dark-500 sm:text-xs">
              {t.footer.location} <span className="text-cyber-400">Puerto Iguazú</span>, <span className="text-accent-400">Misiones</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
