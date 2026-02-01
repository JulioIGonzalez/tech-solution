/**
 * App principal - Web empresarial TechSolutions Iguazú
 * Paleta Cyberpunk, SEO optimizado
 */
import { useTheme } from '@/hooks/useTheme'
import { LanguageProvider } from '@/i18n/LanguageContext'
import { SchemaOrg } from '@/seo/SchemaOrg'
import { Header } from '@/components/Layout/Header'
import { Footer } from '@/components/Layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { TechStack } from '@/components/sections/TechStack'
import { Location } from '@/components/sections/Location'
import { Contact } from '@/components/sections/Contact'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

function AppContent() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <SchemaOrg />

      <a href="#hero" className="skip-link">
        Saltar al contenido principal
      </a>

      {/* Header siempre visible, pasa por detrás del hero */}
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main id="main">
        <Hero />
        <Services />
        <About />
        <TechStack />
        <Location />
        <Contact />
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
