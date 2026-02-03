/**
 * Hero Section - Animaciones con Framer Motion
 */
import { motion } from 'framer-motion'
import { useTranslation } from '@/i18n/LanguageContext'
import { getWhatsAppUrl } from '@/utils/whatsapp'
import { EVENTS } from '@/utils/analytics'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export function Hero() {
  const { t } = useTranslation()

  const handleWhatsAppClick = () => {
    EVENTS.whatsappClick('hero')
    EVENTS.ctaClick('hero_whatsapp')
  }

  const handleWebWhatsAppClick = () => {
    EVENTS.whatsappClick('web')
    EVENTS.ctaClick('hero_web_whatsapp')
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-dark-950"
      aria-labelledby="hero-title"
    >
      {/* Imagen de fondo: WebP, prioridad LCP, sin bloquear render */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            type="image/webp"
            srcSet="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=75&fm=webp 1200w, https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=75&fm=webp 800w"
            sizes="100vw"
          />
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=75"
            alt=""
            className="h-full w-full object-cover opacity-20"
            width={1200}
            height={800}
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
        </picture>
        <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/90 to-dark-950" />
      </div>

      {/* Grid pattern overlay */}
      <div className="hero-grid-pattern absolute inset-0 z-0 bg-tech-grid opacity-30" />

      {/* Efectos de luz cyber */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-20 top-1/4 h-48 w-48 rounded-full bg-cyber-500/20 blur-[80px] sm:-left-40 sm:h-96 sm:w-96 sm:blur-[100px]" />
        <div className="absolute -right-20 top-1/2 h-40 w-40 rounded-full bg-accent-500/15 blur-[80px] sm:-right-40 sm:h-80 sm:w-80 sm:blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-32 w-[300px] -translate-x-1/2 rounded-full bg-cyber-500/10 blur-[60px] sm:h-64 sm:w-[600px] sm:blur-[80px]" />
      </div>

      {/* Contenido principal - Framer Motion stagger */}
      <motion.div
        className="container-wide relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 pb-8 pt-20 sm:px-6 sm:py-16 sm:pb-10 lg:px-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          id="hero-title"
          variants={item}
          className="mb-4 max-w-5xl text-center font-display text-2xl font-extrabold leading-tight tracking-tight xs:text-3xl sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          <span className="text-white">{t.hero.title}</span>{' '}
          <span className="text-gradient-cyber">
            {t.hero.titleHighlight}
          </span>
        </motion.h1>

        <motion.p variants={item} className="mb-3 max-w-3xl text-center text-base font-medium text-dark-300 sm:mb-4 sm:text-xl md:text-2xl lg:text-3xl">
          {t.hero.subtitle}
        </motion.p>

        <motion.p variants={item} className="mb-6 hidden max-w-2xl text-center text-sm text-dark-400 sm:mb-8 sm:block sm:text-base lg:text-lg">
          {t.hero.description}
        </motion.p>

        {/* Bloque desarrollo web profesional + CTA WhatsApp */}
        <motion.div
          variants={item}
          className="hero-web-block mb-6 flex max-w-xl flex-col items-center gap-3 rounded-xl border-2 border-cyber-500/50 bg-dark-900/90 px-5 py-5 shadow-cyber backdrop-blur-sm sm:mb-8 sm:flex-row sm:justify-between sm:gap-5 sm:px-7 sm:py-5"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyber-500/25 ring-2 ring-cyber-400/40">
              <svg className="h-8 w-8 text-cyber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <p className="hero-web-title text-base font-bold leading-tight sm:text-lg">
                <span className="hero-web-title-text">{t.hero.webHighlight}</span>{' '}
                <span className="hero-web-price">{t.hero.webPrice}</span>
              </p>
              <p className="hero-web-subtext mt-1 text-xs text-dark-300 sm:text-sm">{t.hero.webSubtext}</p>
            </div>
          </div>
          <a
            href={getWhatsAppUrl('web')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWebWhatsAppClick}
            className="hero-whatsapp-btn group/btn relative inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-cyber-500/60 bg-gradient-to-r from-cyber-600 to-cyber-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyber-500/25 transition-all duration-300 hover:border-cyber-400 hover:shadow-cyber hover:shadow-cyber-500/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
            <svg className="relative h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="relative">{t.hero.webCta}</span>
          </a>
        </motion.div>

        <motion.div variants={item} className="mb-6 flex flex-wrap items-center justify-center gap-2 text-xs text-dark-400 sm:mb-10 sm:gap-4 sm:text-sm md:gap-6">
          <div className="flex items-center gap-1.5 rounded-full border border-dark-700 bg-dark-900/50 px-2.5 py-1.5 backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2">
            <span className="text-sm sm:text-lg">⭐</span>
            <span><strong className="text-cyber-400">4.9</strong> <span className="hidden xs:inline">{t.hero.trust.rating}</span></span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-dark-700 bg-dark-900/50 px-2.5 py-1.5 backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2">
            <span className="text-sm sm:text-lg">✅</span>
            <span><strong className="text-cyber-400">+500</strong> <span className="hidden xs:inline">{t.hero.trust.clients}</span></span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-dark-700 bg-dark-900/50 px-2.5 py-1.5 backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2">
            <span className="text-sm sm:text-lg">🛡️</span>
            <span className="hidden xs:inline">{t.hero.trust.warranty}</span>
            <span className="xs:hidden">Garantía</span>
          </div>
        </motion.div>

        <motion.div variants={item} className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 sm:bottom-8 sm:block">
          <a href="#servicios" aria-label="Ir a servicios" className="block text-dark-500 transition-colors hover:text-cyber-400">
            <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
