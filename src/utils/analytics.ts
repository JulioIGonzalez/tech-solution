/**
 * Utilidades para tracking y analytics
 * Preparado para Google Analytics, Meta Pixel, etc.
 */

export type EventCategory = 'contact' | 'navigation' | 'conversion' | 'engagement'

export interface TrackingEvent {
  category: EventCategory
  action: string
  label?: string
  value?: number
}

/**
 * Trackea un evento (preparado para GA4)
 */
export function trackEvent({ category, action, label, value }: TrackingEvent): void {
  // Google Analytics 4
  if (typeof window !== 'undefined' && 'gtag' in window) {
    ;(window as unknown as { gtag: Function }).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }

  // Console log en desarrollo
  if (import.meta.env.DEV) {
    console.log('[Analytics]', { category, action, label, value })
  }
}

/**
 * Eventos predefinidos
 */
export const EVENTS = {
  whatsappClick: (service: string) =>
    trackEvent({
      category: 'contact',
      action: 'whatsapp_click',
      label: service,
    }),
  phoneClick: () =>
    trackEvent({
      category: 'contact',
      action: 'phone_click',
    }),
  emailClick: () =>
    trackEvent({
      category: 'contact',
      action: 'email_click',
    }),
  formSubmit: (formName: string) =>
    trackEvent({
      category: 'conversion',
      action: 'form_submit',
      label: formName,
    }),
  serviceClick: (serviceName: string) =>
    trackEvent({
      category: 'engagement',
      action: 'service_click',
      label: serviceName,
    }),
  ctaClick: (ctaName: string) =>
    trackEvent({
      category: 'conversion',
      action: 'cta_click',
      label: ctaName,
    }),
}
