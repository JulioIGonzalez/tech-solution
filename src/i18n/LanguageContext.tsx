/**
 * Context de idioma para i18n
 * Persiste la preferencia en localStorage
 */
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { translations, type Language } from './translations'

// Tipo más flexible para las traducciones
type TranslationsType = typeof translations.es | typeof translations.en | typeof translations.pt

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationsType
}

const LanguageContext = createContext<LanguageContextType | null>(null)

const STORAGE_KEY = 'preferred-language'

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'es'
  
  // Primero revisar localStorage
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null
  if (stored && ['es', 'en', 'pt'].includes(stored)) {
    return stored
  }
  
  // Detectar idioma del navegador
  const browserLang = navigator.language.split('-')[0]
  if (browserLang === 'pt') return 'pt'
  if (browserLang === 'en') return 'en'
  
  return 'es' // Default español
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem(STORAGE_KEY, lang)
    // Actualizar el atributo lang del HTML
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'en' ? 'en' : 'es'
  }

  useEffect(() => {
    // Establecer idioma inicial en el HTML
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language === 'en' ? 'en' : 'es'
  }, [])

  const t = translations[language] as TranslationsType

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export function useTranslation() {
  const { t, language } = useLanguage()
  return { t, language }
}
