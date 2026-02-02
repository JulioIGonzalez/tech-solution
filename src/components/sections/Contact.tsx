/**
 * Contacto - Animaciones con React Awesome Reveal
 */
import { useState, type FormEvent } from 'react'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from '@/i18n/LanguageContext'
import { SEO_CONFIG } from '@/config/seo'
import { getWhatsAppUrl, getCustomWhatsAppUrl } from '@/utils/whatsapp'
import { EVENTS } from '@/utils/analytics'

const { business } = SEO_CONFIG

interface FormData {
  nombre: string
  telefono: string
  servicio: string
  mensaje: string
}

const initialFormData: FormData = {
  nombre: '',
  telefono: '',
  servicio: '',
  mensaje: '',
}

export function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const servicioOptions = [
    { value: '', label: t.contact.form.serviceOptions.select },
    { value: 'celulares', label: t.contact.form.serviceOptions.phones },
    { value: 'computadoras', label: t.contact.form.serviceOptions.computers },
    { value: 'web', label: t.contact.form.serviceOptions.web },
    { value: 'camaras', label: t.contact.form.serviceOptions.cameras },
    { value: 'accesorios', label: t.contact.form.serviceOptions.accessories },
    { value: 'otro', label: t.contact.form.serviceOptions.other },
  ]

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const servicioLabel = servicioOptions.find(s => s.value === formData.servicio)?.label || 'Consulta'
    const message = `¡Hola! 👋 Me contacto desde la web de ${business.name}.

*Nombre:* ${formData.nombre}
*Teléfono:* ${formData.telefono}
*Servicio:* ${servicioLabel}

*Mensaje:*
${formData.mensaje}`

    EVENTS.formSubmit('contact_form')
    window.open(getCustomWhatsAppUrl(message), '_blank')
    setIsSubmitting(false)
    setFormData(initialFormData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section
      id="contacto"
      className="section-padding bg-dark-950 tech-bg"
      aria-labelledby="contact-title"
    >
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Fade direction="up" triggerOnce fraction={0.2} duration={500}>
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-cyber-400 sm:mb-4 sm:text-sm">
              {t.contact.label}
            </span>
            <h2 id="contact-title" className="mb-3 font-display text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl">
              {t.contact.title}
            </h2>
            <p className="text-sm text-dark-400 sm:text-base lg:text-lg">{t.contact.description}</p>
          </div>
        </Fade>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Info de contacto - primero en móvil; max-width y márgenes para que no ocupen toda la pantalla */}
          <div className="order-1 mx-auto w-full max-w-md space-y-3 px-2 sm:max-w-lg sm:space-y-4 sm:px-0 lg:order-2 lg:max-w-none lg:px-0">
            {/* WhatsApp */}
            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => EVENTS.whatsappClick('contact_section')}
              className="group flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-4 transition-all hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/10 sm:gap-4 sm:rounded-2xl sm:p-5"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white sm:h-12 sm:w-12">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="block truncate font-display text-sm font-semibold text-white sm:text-base">{t.contact.whatsapp}</span>
                <span className="block truncate text-xs text-dark-400 sm:text-sm">{t.contact.whatsappDesc}</span>
              </div>
              <span className="text-green-400 transition-transform group-hover:translate-x-1">→</span>
            </a>

            {/* Telegram */}
            <a
              href={`https://t.me/+${business.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-sky-500/30 bg-sky-500/10 p-4 transition-all hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-500/10 sm:gap-4 sm:rounded-2xl sm:p-5"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500 text-white sm:h-12 sm:w-12">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="block truncate font-display text-sm font-semibold text-white sm:text-base">{t.contact.telegram}</span>
                <span className="block truncate text-xs text-dark-400 sm:text-sm">{t.contact.telegramDesc}</span>
              </div>
              <span className="text-sky-400 transition-transform group-hover:translate-x-1">→</span>
            </a>

            {/* Teléfono */}
            <a
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              onClick={() => EVENTS.phoneClick()}
              className="group flex items-center gap-3 rounded-xl border border-dark-700/50 bg-dark-800/50 p-4 transition-all hover:border-cyber-500/30 hover:shadow-cyber sm:gap-4 sm:rounded-2xl sm:p-5"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyber-500/20 text-cyber-400 sm:h-12 sm:w-12">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="block truncate font-display text-sm font-semibold text-white sm:text-base">{t.contact.phone}</span>
                <span className="block truncate text-xs text-dark-400 sm:text-sm">{business.phone}</span>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${business.email}`}
              onClick={() => EVENTS.emailClick()}
              className="group flex items-center gap-3 rounded-xl border border-dark-700/50 bg-dark-800/50 p-4 transition-all hover:border-accent-500/30 hover:shadow-accent sm:gap-4 sm:rounded-2xl sm:p-5"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-400 sm:h-12 sm:w-12">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="block truncate font-display text-sm font-semibold text-white sm:text-base">{t.contact.email}</span>
                <span className="block truncate text-xs text-dark-400 sm:text-sm">{business.email}</span>
              </div>
            </a>

            {/* Tip */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 sm:rounded-2xl sm:p-5">
              <p className="text-xs text-amber-200 sm:text-sm">
                <strong>💡 Tip:</strong> {t.contact.tip}
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className="order-2 rounded-xl border border-dark-700/50 bg-dark-900/50 p-4 backdrop-blur-sm sm:rounded-2xl sm:p-6 lg:order-1 lg:p-8">
            <h3 className="mb-4 font-display text-lg font-semibold text-white sm:mb-6 sm:text-xl">
              {t.contact.form.title}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="nombre" className="mb-1.5 block text-xs font-medium text-dark-300 sm:mb-2 sm:text-sm">
                  {t.contact.form.name} *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-dark-600 bg-dark-800 px-3 py-2.5 text-sm text-white placeholder-dark-500 transition-colors focus:border-cyber-500 focus:outline-none focus:ring-2 focus:ring-cyber-500/20 sm:px-4 sm:py-3 sm:text-base"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="telefono" className="mb-1.5 block text-xs font-medium text-dark-300 sm:mb-2 sm:text-sm">
                  {t.contact.form.phone} *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-dark-600 bg-dark-800 px-3 py-2.5 text-sm text-white placeholder-dark-500 transition-colors focus:border-cyber-500 focus:outline-none focus:ring-2 focus:ring-cyber-500/20 sm:px-4 sm:py-3 sm:text-base"
                  placeholder={t.contact.form.phonePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="servicio" className="mb-1.5 block text-xs font-medium text-dark-300 sm:mb-2 sm:text-sm">
                  {t.contact.form.service} *
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-dark-600 bg-dark-800 px-3 py-2.5 text-sm text-white transition-colors focus:border-cyber-500 focus:outline-none focus:ring-2 focus:ring-cyber-500/20 sm:px-4 sm:py-3 sm:text-base"
                >
                  {servicioOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="mb-1.5 block text-xs font-medium text-dark-300 sm:mb-2 sm:text-sm">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-lg border border-dark-600 bg-dark-800 px-3 py-2.5 text-sm text-white placeholder-dark-500 transition-colors focus:border-cyber-500 focus:outline-none focus:ring-2 focus:ring-cyber-500/20 sm:px-4 sm:py-3 sm:text-base"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-gradient-to-r from-cyber-500 to-cyber-600 px-6 py-3 text-sm font-semibold text-white shadow-cyber transition-all hover:from-cyber-400 hover:to-cyber-500 hover:shadow-cyber-lg disabled:cursor-not-allowed disabled:opacity-50 sm:py-3.5 sm:text-base"
              >
                {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
              </button>

              <p className="text-center text-[10px] text-dark-500 sm:text-xs">{t.contact.form.disclaimer}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
