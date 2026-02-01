/**
 * Ubicación - Optimizado para móviles
 */
import { useEffect, useState, lazy, Suspense } from 'react'
import { useTranslation } from '@/i18n/LanguageContext'
import { SEO_CONFIG } from '@/config/seo'

const { business } = SEO_CONFIG

const MapComponent = lazy(() => import('./Map').then((mod) => ({ default: mod.Map })))

export function Location() {
  const { t } = useTranslation()
  const [showMap, setShowMap] = useState(false)

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

  return (
    <section
      id="ubicacion"
      className="section-padding bg-dark-900"
      aria-labelledby="location-title"
    >
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          {/* Mapa - primero en móvil */}
          <div className="order-1 lg:order-2 lg:col-span-3">
            <div className="h-[280px] overflow-hidden rounded-xl border border-dark-700/50 shadow-cyber sm:h-[350px] sm:rounded-2xl lg:h-full lg:min-h-[400px]">
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

          {/* Info de ubicación */}
          <div className="order-2 space-y-4 sm:space-y-6 lg:order-1 lg:col-span-2">
            {/* Dirección */}
            <div className="rounded-xl border border-dark-700/50 bg-dark-800/50 p-4 backdrop-blur-sm sm:rounded-2xl sm:p-6">
              <h3 className="mb-3 flex items-center gap-2 font-display text-base font-semibold text-white sm:mb-4 sm:text-lg">
                <span className="text-lg sm:text-xl">📍</span>
                {t.location.address}
              </h3>
              <address className="not-italic text-sm text-dark-300 sm:text-base">
                <p className="font-medium text-white">{business.name}</p>
                <p>{business.address.street}</p>
                <p>{business.address.city}, {business.address.state}</p>
                <p>{business.address.country} - CP {business.address.postalCode}</p>
              </address>
            </div>

            {/* Horarios */}
            <div className="rounded-xl border border-dark-700/50 bg-dark-800/50 p-4 backdrop-blur-sm sm:rounded-2xl sm:p-6">
              <h3 className="mb-3 flex items-center gap-2 font-display text-base font-semibold text-white sm:mb-4 sm:text-lg">
                <span className="text-lg sm:text-xl">🕐</span>
                {t.location.hours}
              </h3>
              <dl className="space-y-2 text-sm text-dark-300 sm:text-base">
                <div className="flex justify-between">
                  <dt>{t.location.days.weekdays}</dt>
                  <dd className="font-medium text-white">{business.hours.weekdays}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>{t.location.days.saturday}</dt>
                  <dd className="font-medium text-white">{business.hours.saturday}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>{t.location.days.sunday}</dt>
                  <dd className="font-medium text-dark-500">{t.location.days.closed}</dd>
                </div>
              </dl>
            </div>

            {/* Zonas */}
            <div className="rounded-xl border border-dark-700/50 bg-dark-800/50 p-4 backdrop-blur-sm sm:rounded-2xl sm:p-6">
              <h3 className="mb-3 flex items-center gap-2 font-display text-base font-semibold text-white sm:mb-4 sm:text-lg">
                <span className="text-lg sm:text-xl">🚗</span>
                {t.location.homeService}
              </h3>
              <p className="text-xs text-dark-400 sm:text-sm">
                {t.location.homeServiceDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
