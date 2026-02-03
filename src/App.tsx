/**
 * App principal - Web empresarial TechSolutions Iguazú
 * Paleta Cyberpunk, SEO optimizado
 * Secciones inferiores con lazy loading para carga más rápida
 */
import { lazy, Suspense } from 'react'
import { useTheme } from '@/hooks/useTheme'
import { LanguageProvider } from '@/i18n/LanguageContext'
import { SchemaOrg } from '@/seo/SchemaOrg'
import { Header } from '@/components/Layout/Header'
import { Footer } from '@/components/Layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

const Portfolio = lazy(() => import('@/components/sections/Portfolio').then((m) => ({ default: m.Portfolio })))
const About = lazy(() => import('@/components/sections/About').then((m) => ({ default: m.About })))
const Services = lazy(() => import('@/components/sections/Services').then((m) => ({ default: m.Services })))
const TechStack = lazy(() => import('@/components/sections/TechStack').then((m) => ({ default: m.TechStack })))
const Location = lazy(() => import('@/components/sections/Location').then((m) => ({ default: m.Location })))
const FAQ = lazy(() => import('@/components/sections/FAQ').then((m) => ({ default: m.FAQ })))
const Contact = lazy(() => import('@/components/sections/Contact').then((m) => ({ default: m.Contact })))

function AppContent() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <SchemaOrg />

      <a href="#hero" className="skip-link">
        Saltar al contenido principal
      </a>

      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main id="main">
        <Hero />
        <Suspense fallback={null}>
          <Portfolio />
          <About />
          <Services />
          <TechStack />
          <Location />
          <FAQ />
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
