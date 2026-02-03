/**
 * Ubicación - Animaciones con React Awesome Reveal + Reloj interactivo
 */
import { useEffect, useState, lazy, Suspense } from 'react'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from '@/i18n/LanguageContext'
import { SEO_CONFIG } from '@/config/seo'

const { business } = SEO_CONFIG

const MapComponent = lazy(() => import('./Map').then((mod) => ({ default: mod.Map })))

export function Location() {
  const { t } = useTranslation()
  const [showMap, setShowMap] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMap(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    const element = document.getElementById('ubicacion')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Reloj en tiempo real
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-AR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
  }

  const isOpenNow = () => {
    const hour = currentTime.getHours()
    const day = currentTime.getDay()
    // Lunes a Viernes: 9-18, Sábado: 9-13, Domingo: cerrado
    if (day === 0) return false
    if (day === 6) return hour >= 9 && hour < 13
    return hour >= 9 && hour < 18
  }

  return (
    <section
      id="ubicacion"
      className="section-padding bg-dark-900"
      aria-labelledby="location-title"
    >
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Fade direction="up" triggerOnce fraction={0.2} duration={500}>
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-cyber-400 sm:mb-4 sm:text-sm">
              {t.location.label}
            </span>
            <h2
              id="location-title"
              className="mb-3 font-display text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl"
            >
              {t.location.title}{' '}
              <span className="text-gradient-cyber">Puerto Iguazú</span>
            </h2>
            <p className="text-sm text-dark-400 sm:text-base lg:text-lg">
              {t.location.description}
            </p>
          </div>
        </Fade>

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          {/* Info de ubicación - compacta y llamativa */}
          <div className="order-2 space-y-3 lg:order-1 lg:space-y-4">
            {/* Dirección */}
            <div className="group relative overflow-hidden rounded-xl border border-cyber-500/40 bg-dark-800/80 p-4 backdrop-blur-sm transition-all hover:border-cyber-400 hover:shadow-cyber sm:p-5">
              {/* Efecto reflejo */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <h3 className="relative mb-4 flex items-center gap-3 border-b border-cyber-500/30 pb-3 font-display text-base font-bold sm:text-lg" style={{ color: '#22d3ee' }}>
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyber-500/20 text-xl">📍</span>
                {t.location.address}
              </h3>
              <address className="relative space-y-2 not-italic text-sm sm:text-base">
                <p className="text-lg font-bold" style={{ color: '#ffffff' }}>{business.name}</p>
                <div className="space-y-1.5">
                  <p className="flex items-center gap-2 rounded-lg bg-dark-900/70 px-3 py-2 font-medium" style={{ color: '#ffffff' }}>
                    <span style={{ color: '#22d3ee' }}>→</span> {business.address.street}
                  </p>
                  <p className="flex items-center gap-2 rounded-lg bg-dark-900/70 px-3 py-2 font-medium" style={{ color: '#ffffff' }}>
                    <span style={{ color: '#22d3ee' }}>→</span> {business.address.city}, {business.address.state}
                  </p>
                  <p className="flex items-center gap-2 rounded-lg bg-dark-900/70 px-3 py-2" style={{ color: '#ffffff' }}>
                    <span style={{ color: '#22d3ee' }}>→</span> {business.address.country} - CP {business.address.postalCode}
                  </p>
                </div>
              </address>
            </div>

            {/* Horarios + Reloj interactivo */}
            <div className="group relative overflow-hidden rounded-xl border border-cyber-500/40 bg-dark-800/80 p-4 backdrop-blur-sm transition-all hover:border-cyber-400 hover:shadow-cyber sm:p-5">
              {/* Efecto reflejo */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <div className="relative mb-4 flex items-center justify-between border-b border-cyber-500/30 pb-3">
                <h3 className="flex items-center gap-3 font-display text-base font-bold sm:text-lg" style={{ color: '#22d3ee' }}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyber-500/20 text-xl">🕐</span>
                  {t.location.hours}
                </h3>
                {/* Reloj digital compacto */}
                <div className="rounded-lg bg-dark-900/80 px-3 py-1.5 font-mono text-base font-bold" style={{ color: '#67e8f9' }}>
                  {formatTime(currentTime)}
                </div>
              </div>
              
              {/* Indicador de estado */}
              <div className="relative mb-3">
                <span 
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${
                    isOpenNow() ? 'bg-green-500/20' : 'bg-red-500/20'
                  }`}
                  style={{ color: isOpenNow() ? '#86efac' : '#fca5a5' }}
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${isOpenNow() ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
                  {isOpenNow() ? 'Abierto ahora' : 'Cerrado'}
                </span>
              </div>

              <dl className="relative space-y-1.5 text-sm sm:text-base">
                <div className="flex items-center justify-between rounded-lg bg-dark-900/70 px-3 py-2">
                  <dt className="font-medium" style={{ color: '#ffffff' }}>{t.location.days.weekdays}</dt>
                  <dd className="font-bold" style={{ color: '#67e8f9' }}>{business.hours.weekdays}</dd>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-dark-900/70 px-3 py-2">
                  <dt className="font-medium" style={{ color: '#ffffff' }}>{t.location.days.saturday}</dt>
                  <dd className="font-bold" style={{ color: '#67e8f9' }}>{business.hours.saturday}</dd>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-dark-900/70 px-3 py-2">
                  <dt className="font-medium" style={{ color: '#ffffff' }}>{t.location.days.sunday}</dt>
                  <dd className="font-semibold" style={{ color: '#f87171' }}>{t.location.days.closed}</dd>
                </div>
              </dl>
            </div>

            {/* Zonas - compacta */}
            <div className="rounded-xl border border-dark-600/30 bg-dark-800/50 p-3 backdrop-blur-sm sm:p-4">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold sm:text-base" style={{ color: '#ffffff' }}>
                <span className="text-lg">🚗</span>
                {t.location.homeService}
              </h3>
              <p className="text-xs sm:text-sm" style={{ color: '#e2e8f0' }}>
                {t.location.homeServiceDesc}
              </p>
            </div>
          </div>

          {/* Mapa - más compacto */}
          <div className="order-1 lg:order-2">
            <div className="h-[240px] overflow-hidden rounded-xl border border-dark-700/50 shadow-lg sm:h-[300px] lg:h-full lg:min-h-[400px]">
              {showMap ? (
                <Suspense
                  fallback={
                    <div className="flex h-full items-center justify-center bg-dark-800">
                      <div className="text-center">
                        <div className="mx-auto mb-2 h-6 w-6 animate-spin rounded-full border-4 border-dark-600 border-t-cyber-500 sm:h-8 sm:w-8" />
                        <p className="text-xs text-dark-400 sm:text-sm">{t.location.loadingMap}</p>
                      </div>
                    </div>
                  }
                >
                  <MapComponent
                    center={[business.address.coordinates.lat, business.address.coordinates.lng]}
                    zoom={16}
                    markerTitle={business.name}
                    markerDescription={`${business.address.street}, ${business.address.city}`}
                    howToGetText={t.location.howToGet}
                  />
                </Suspense>
              ) : (
                <div className="flex h-full items-center justify-center bg-dark-800">
                  <p className="text-sm text-dark-400">{t.location.loadingMap}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
