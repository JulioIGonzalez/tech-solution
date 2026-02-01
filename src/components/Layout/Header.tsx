/**
 * Header empresarial - Siempre visible, pasa por detrás del hero
 */
import { useState, useEffect } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSelector } from '@/components/ui/LanguageSelector'
import { useTranslation } from '@/i18n/LanguageContext'
import { SEO_CONFIG } from '@/config/seo'

const { business } = SEO_CONFIG

interface HeaderProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
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
  const [scrolled, setScrolled] = useState(false)
  const { t } = useTranslation()

  const closeMenu = () => setMenuOpen(false)

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        className={`
          fixed left-0 right-0 top-0 z-50
          transition-all duration-500
          ${scrolled 
            ? 'border-b border-dark-700/50 bg-dark-950/90 shadow-lg backdrop-blur-md' 
            : 'bg-transparent'
          }
        `}
      >
        <div className="container-wide mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 font-display text-lg font-bold transition-colors"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyber-500 to-accent-500 text-sm font-bold text-white shadow-cyber">
              TS
            </span>
            <span className={`hidden transition-colors sm:inline ${scrolled ? 'text-white' : 'text-white/90'}`}>
              {business.name}
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Navegación principal" className="hidden items-center gap-1 md:flex">
            <NavLinks className="flex items-center gap-0.5" />
            <div className="mx-2 h-5 w-px bg-dark-700" />
            <LanguageSelector />
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            <LanguageSelector />
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
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
        <nav className="flex flex-col gap-1 p-4" aria-label="Navegación móvil">
          <NavLinks onNavigate={closeMenu} className="flex flex-col gap-1" />
        </nav>
      </aside>
    </>
  )
}
