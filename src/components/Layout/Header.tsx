/**
 * Header empresarial - Siempre visible, pasa por detrás del hero
 */
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSelector } from '@/components/ui/LanguageSelector'
import { useTranslation } from '@/i18n/LanguageContext'
import { SEO_CONFIG } from '@/config/seo'

const { business } = SEO_CONFIG

interface HeaderProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

// Botón destacado de Portfolio con animación
function PortfolioButton({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useTranslation()
  
  return (
    <motion.a
      href="#portfolio"
      onClick={onNavigate}
      className="relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-cyber-500 to-accent-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-cyber-500/30 transition-all hover:shadow-cyber-500/50 hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Efecto de brillo animado */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'easeInOut',
        }}
      />
      {/* Icono de carpeta/portfolio */}
      <svg className="relative h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
      <span className="relative">{t.nav.portfolio}</span>
      {/* Indicador de "nuevo" o destacado */}
      <motion.span
        className="absolute -right-1 -top-1 flex h-3 w-3"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-500"></span>
      </motion.span>
    </motion.a>
  )
}

// Botón Ver servicios en la barra de navegación
function ServicesButton({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useTranslation()
  return (
    <a
      href="#servicios"
      onClick={onNavigate}
      className="inline-flex items-center gap-2 rounded-lg border-2 border-cyber-500/50 bg-dark-900/50 px-4 py-2 text-sm font-semibold text-cyber-400 transition-all hover:border-cyber-400 hover:bg-cyber-500/10 hover:text-cyber-300"
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
      {t.hero.ctaSecondary}
    </a>
  )
}

function NavLinks({
  onNavigate,
  className = '',
}: {
  onNavigate?: () => void
  className?: string
}) {
  const { t } = useTranslation()
  
  const navLinks = [
    { href: '#servicios', label: t.nav.services },
    { href: '#sobre-nosotros', label: t.nav.about },
    { href: '#tecnologias', label: t.nav.tech },
    { href: '#ubicacion', label: t.nav.location },
    { href: '#preguntas-frecuentes', label: t.nav.faq ?? 'Preguntas' },
    { href: '#contacto', label: t.nav.contact },
  ]

  return (
    <ul className={className}>
      {navLinks.map(({ href, label }) => (
        <li key={href}>
          <a
            href={href}
            onClick={onNavigate}
            className="block rounded-lg px-3 py-2 text-sm font-medium text-dark-300 transition-colors hover:bg-dark-800/50 hover:text-cyber-400 dark:text-dark-300 dark:hover:bg-dark-800/50 dark:hover:text-cyber-400 sm:inline-block"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useTranslation()

  const closeMenu = () => setMenuOpen(false)

  // Controles flotantes visibles desde el inicio para poder cambiar idioma y tema
  const showFloatingControls = true

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    if (menuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        role="banner"
        className="fixed left-0 right-0 top-0 z-50 border-b border-dark-700/50 bg-dark-950/95 shadow-lg backdrop-blur-md"
      >
        <div className="container-wide mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo TechSolutions IGUAZU */}
          <a
            href="#hero"
            className="group flex items-center gap-2 font-display text-lg font-bold transition-all duration-300"
          >
            <img
              src="/logo-techsolutions.png"
              alt="TechSolutions IGUAZU - Web • Repair • Parts"
              className="h-9 w-auto object-contain transition-all duration-300 group-hover:opacity-90"
            />
            <span className="hidden text-white sm:inline group-hover:text-cyber-300">
              {business.name}
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Navegación principal" className="hidden items-center gap-1 md:flex">
            <PortfolioButton />
            <ServicesButton />
            <div className="mx-2 h-5 w-px bg-dark-700" />
            <NavLinks className="flex items-center gap-0.5" />
          </nav>

          {/* Mobile: hamburger; tema e idioma también en barra flotante abajo */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="rounded-lg p-2 text-dark-300 transition-colors hover:bg-dark-800/50 hover:text-cyber-400"
            >
              <span className="relative block h-5 w-6">
                <span
                  className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0.5'
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45 opacity-100' : 'top-1/2 -translate-y-1/2'
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? 'opacity-0' : 'top-[calc(100%-2px)]'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`fixed inset-0 z-40 bg-dark-950/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile panel */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 max-w-[85vw] border-l border-dark-700/50 bg-dark-900 shadow-xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-16 items-center justify-between border-b border-dark-700/50 px-4">
          <span className="font-display font-semibold text-white">
            {t.nav.home}
          </span>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Cerrar menú"
            className="rounded-lg p-2 text-dark-400 hover:bg-dark-800 hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-3 p-4" aria-label="Navegación móvil">
          <div className="mb-2 flex flex-col gap-2">
            <PortfolioButton onNavigate={closeMenu} />
            <ServicesButton onNavigate={closeMenu} />
          </div>
          <NavLinks onNavigate={closeMenu} className="flex flex-col gap-1" />
        </nav>
      </aside>

      {/* Barra flotante abajo a la izquierda: tema e idioma (visible desde el inicio) */}
      <div
        id="floating-controls"
        role="complementary"
        aria-label="Controles de tema e idioma"
        className="fixed bottom-0 left-0 z-40 flex items-center gap-3 rounded-tr-2xl border border-b-0 border-r border-dark-700/50 bg-dark-900/95 px-5 py-3 shadow-lg backdrop-blur-md"
      >
        <LanguageSelector />
        <span className="h-6 w-px bg-dark-600" aria-hidden />
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </>
  )
}
