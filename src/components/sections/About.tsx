/**
 * Sobre Nosotros - Animaciones con React Awesome Reveal
 */
import { Fade, Slide } from 'react-awesome-reveal'
import { useTranslation } from '@/i18n/LanguageContext'

export function About() {
  const { t } = useTranslation()

  const highlights = [
    { icon: '🏆', ...t.about.highlights.experience },
    { icon: '✅', ...t.about.highlights.clients },
    { icon: '⚡', ...t.about.highlights.fast },
    { icon: '🛡️', ...t.about.highlights.warranty },
  ]

  return (
    <section
      id="sobre-nosotros"
      className="section-padding bg-dark-950 tech-bg"
      aria-labelledby="about-title"
    >
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Contenido */}
          <Fade direction="up" triggerOnce fraction={0.2} duration={500}>
            <div>
              <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-cyber-400 sm:mb-4 sm:text-sm">
                {t.about.label}
              </span>
              <h2
                id="about-title"
                className="mb-4 font-display text-2xl font-bold text-white sm:mb-6 sm:text-3xl md:text-4xl"
              >
                {t.about.title}{' '}
                <span className="text-gradient-cyber">Puerto Iguazú</span>
              </h2>

              <div className="space-y-3 text-sm text-dark-300 sm:space-y-4 sm:text-base">
                <p className="leading-relaxed sm:text-lg">
                  {t.about.description1}
                </p>
                
                <p className="leading-relaxed">
                  {t.about.description2}
                </p>

                <p className="leading-relaxed">
                  {t.about.description3}
                </p>
              </div>

              <div className="mt-6 sm:mt-8">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyber-400 transition-colors hover:text-cyber-300 sm:text-base"
                >
                  {t.about.cta}
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </Fade>

          {/* Highlights - 2x2 grid con cascade */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {highlights.map((item, index) => (
              <Slide key={item.title} direction="up" triggerOnce fraction={0.2} delay={index * 80} duration={400}>
                <article
                  className="rounded-xl border border-dark-700/50 bg-dark-900/50 p-4 backdrop-blur-sm transition-all hover:border-cyber-500/30 hover:shadow-cyber sm:rounded-2xl sm:p-6"
                >
                  <span className="mb-2 block text-2xl sm:mb-3 sm:text-3xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white sm:text-xl lg:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-dark-400 sm:text-sm">
                    {item.description}
                  </p>
                </article>
              </Slide>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
