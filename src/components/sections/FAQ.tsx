/**
 * FAQ - Preguntas frecuentes locales (SEO + conversión)
 * Schema.org FAQPage ya inyectado; aquí el contenido visible para usuarios y Google
 */
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from '@/i18n/LanguageContext'
import { FAQ_LOCAL } from '@/config/faq'

export function FAQ() {
  const { t } = useTranslation()

  return (
    <section
      id="preguntas-frecuentes"
      className="section-padding bg-dark-900"
      aria-labelledby="faq-title"
    >
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <Fade direction="up" triggerOnce fraction={0.2} duration={500}>
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-cyber-400 sm:mb-4 sm:text-sm">
              {t.faq?.label ?? 'Preguntas frecuentes'}
            </span>
            <h2
              id="faq-title"
              className="mb-3 font-display text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl"
            >
              {t.faq?.title ?? 'Consultas sobre nuestro servicio en Puerto Iguazú'}
            </h2>
            <p className="text-sm text-dark-400 sm:text-base lg:text-lg">
              {t.faq?.description ?? 'Respuestas a las dudas más comunes de nuestros clientes en Puerto Iguazú y Misiones.'}
            </p>
          </div>
        </Fade>

        <div className="mx-auto max-w-3xl space-y-4 sm:space-y-6">
          {FAQ_LOCAL.map((item, index) => (
            <Fade key={index} direction="up" triggerOnce fraction={0.1} delay={index * 50} duration={400}>
              <article
                className="rounded-xl border border-dark-700/50 bg-dark-800/50 p-4 backdrop-blur-sm sm:rounded-2xl sm:p-6"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3 className="mb-2 font-display text-base font-semibold text-white sm:text-lg" itemProp="name">
                  {item.question}
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-sm leading-relaxed text-dark-300 sm:text-base" itemProp="text">
                    {item.answer}
                  </p>
                </div>
              </article>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}
