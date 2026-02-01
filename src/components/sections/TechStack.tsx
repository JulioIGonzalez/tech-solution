/**
 * Stack Tecnológico - Optimizado para móviles
 */
import { useTranslation } from '@/i18n/LanguageContext'
import { TECH_STACK } from '@/config/tech'

export function TechStack() {
  const { t } = useTranslation()

  const categoryTranslations: Record<string, string> = {
    frontend: t.tech.categories.frontend,
    backend: t.tech.categories.backend,
    database: t.tech.categories.database,
    tools: t.tech.categories.tools,
    ai: t.tech.categories.ai,
    hardware: t.tech.categories.hardware,
  }

  return (
    <section
      id="tecnologias"
      className="section-padding bg-dark-950 tech-bg"
      aria-labelledby="tech-title"
    >
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-cyber-400 sm:mb-4 sm:text-sm">
            {t.tech.label}
          </span>
          <h2
            id="tech-title"
            className="mb-3 font-display text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl"
          >
            {t.tech.title}
          </h2>
          <p className="text-sm text-dark-400 sm:text-base lg:text-lg">
            {t.tech.description}
          </p>
        </div>

        {/* Tech Grid - 1 col móvil, 2 tablet, 3 desktop */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {TECH_STACK.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border border-dark-700/50 bg-dark-900/50 p-4 backdrop-blur-sm transition-all hover:border-cyber-500/30 hover:shadow-cyber sm:rounded-2xl sm:p-6"
            >
              <h3 className="mb-3 font-display text-base font-semibold text-white sm:mb-4 sm:text-lg">
                {categoryTranslations[category.id] || category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.items.map((tech) => (
                  <span
                    key={tech.name}
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium transition-all sm:px-3 sm:py-1.5 sm:text-sm ${
                      tech.level === 'expert'
                        ? 'bg-cyber-500/20 text-cyber-300 hover:bg-cyber-500/30'
                        : tech.level === 'advanced'
                        ? 'bg-accent-500/20 text-accent-300 hover:bg-accent-500/30'
                        : 'bg-dark-700/50 text-dark-300 hover:bg-dark-700'
                    }`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
