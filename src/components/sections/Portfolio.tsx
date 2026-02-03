/**
 * Portfolio Section - Muestra trabajos realizados
 */
import { motion } from 'framer-motion'
import { useTranslation } from '@/i18n/LanguageContext'

// Configura aquí tus proyectos en producción
const PROJECTS = [
  {
    id: 1,
    title: 'E-commerce Ejemplo',
    description: 'Tienda online completa con carrito y pagos',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=75',
    url: 'https://ejemplo1.com',
    tags: ['E-commerce', 'React', 'Node.js'],
  },
  {
    id: 2,
    title: 'Landing Page Empresa',
    description: 'Sitio corporativo moderno y responsive',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=75',
    url: 'https://ejemplo2.com',
    tags: ['Landing Page', 'Diseño Web'],
  },
  {
    id: 3,
    title: 'Sistema de Gestión',
    description: 'Aplicación web para administración de negocios',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=75',
    url: 'https://ejemplo3.com',
    tags: ['Dashboard', 'Full Stack'],
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export function Portfolio() {
  const { t } = useTranslation()

  return (
    <section
      id="portfolio"
      className="relative bg-dark-950 pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-28"
      aria-labelledby="portfolio-title"
    >
      {/* Efecto de fondo */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-cyber-500/10 blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-accent-500/10 blur-[100px]" />
      </div>

      <div className="container-wide relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="mb-3 inline-block rounded-full border border-cyber-500/30 bg-cyber-500/10 px-4 py-1.5 text-sm font-medium text-cyber-400">
            {t.portfolio.label}
          </span>
          <h2
            id="portfolio-title"
            className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            {t.portfolio.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-dark-400 sm:text-lg">
            {t.portfolio.description}
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-dark-700/50 bg-dark-900/50 backdrop-blur-sm transition-all duration-300 hover:border-cyber-500/50 hover:shadow-lg hover:shadow-cyber-500/10"
            >
              {/* Imagen */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-60" />
              </div>

              {/* Contenido */}
              <div className="relative p-5 sm:p-6">
                <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-cyber-400 sm:text-xl">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-dark-400">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-dark-800 px-3 py-1 text-xs font-medium text-dark-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Icono de enlace */}
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyber-500/20 text-cyber-400 opacity-0 transition-all group-hover:opacity-100">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center sm:mt-16"
        >
          <p className="mb-4 text-dark-400">
            {t.portfolio.cta}
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-cyber-500/50 bg-dark-900/50 px-6 py-3 font-semibold text-cyber-400 backdrop-blur-sm transition-all hover:border-cyber-400 hover:bg-cyber-500/10 hover:text-cyber-300"
          >
            {t.portfolio.ctaButton}
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
