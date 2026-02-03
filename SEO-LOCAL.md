# SEO Local - TechSolutions Iguazú | Puerto Iguazú, Misiones

Documento de referencia para búsquedas locales (Google Search + Google Maps) y checklist de implementación.

---

## Ciudad objetivo

**Puerto Iguazú, Misiones, Argentina**

---

## Keywords locales principales (prioridad alta)

| Keyword | Intención |
|--------|-----------|
| reparación de celulares en Puerto Iguazú | Transaccional local |
| reparación de computadoras en Puerto Iguazú | Transaccional local |
| servicio técnico informático Puerto Iguazú | Transaccional local |
| creación y desarrollo de páginas web Puerto Iguazú | Transaccional local |
| desarrollo web en Misiones | Transaccional regional |
| instalación cámaras de seguridad Puerto Iguazú | Transaccional local |
| servicio técnico celulares Iguazú | Transaccional local |
| arreglo de celulares Puerto Iguazú | Transaccional local |

---

## Keywords secundarias

- cambio de pantalla celular Iguazú  
- reparación iPhone Puerto Iguazú  
- reparación Android Misiones  
- técnico en computadoras Iguazú  
- páginas web Puerto Iguazú  
- diseño web Misiones  
- cámaras IP Puerto Iguazú  
- CCTV Misiones  
- videovigilancia Iguazú  

---

## Señales geográficas ("cerca de mí")

- Puerto Iguazú  
- Misiones  
- Triple Frontera  
- zona centro Iguazú  
- barrio centro Puerto Iguazú  
- servicio técnico cerca de mí  

---

## Estructura ideal de la página local (implementada)

1. **H1 único:** Servicio Técnico y Reparación de Celulares en **Puerto Iguazú** (ciudad en H1).
2. **H2 por sección:** Incluir "Puerto Iguazú" o "en Puerto Iguazú" donde corresponda (Servicios, Sobre nosotros, Ubicación, Contacto, FAQ).
3. **Contenido semántico:** Texto con NAP (TechSolutions Iguazú, dirección, teléfono) y ciudad en párrafos.
4. **Mapa embebido:** Ubicación exacta + dirección en texto.
5. **FAQ visible:** Preguntas con respuestas que incluyen "Puerto Iguazú" y servicios.
6. **CTAs locales:** "Consultá por WhatsApp desde Puerto Iguazú", "Atendemos en Puerto Iguazú".

---

## NAP (Name, Address, Phone) - Consistencia

En todo el sitio debe aparecer **exactamente igual**:

- **Nombre:** TechSolutions Iguazú  
- **Dirección:** Av. Victoria Aguirre 123, Puerto Iguazú, Misiones, Argentina, CP 3370  
- **Teléfono:** +54 9 3757 60-4112  

Dónde se usa: `src/config/seo.ts`, Schema.org LocalBusiness/Organization, Footer, Contacto, FAQ.

---

## Schema.org implementado

- **LocalBusiness:** NAP, geo, openingHours, serviceType, areaServed (Puerto Iguazú, Misiones), ContactPoint (WhatsApp), hasOfferCatalog (Service por servicio).
- **FAQPage:** Preguntas frecuentes locales (Dónde están, reparación celulares, computadoras, páginas web, diagnóstico, domicilio).
- **WebSite:** name, url, inLanguage, potentialAction (SearchAction).
- **Organization:** name, logo, contactPoint, sameAs.

---

## Checklist SEO local final

### On-page
- [x] Title con ciudad + servicios principales (Puerto Iguazú).
- [x] Meta description con intención local y "cerca de vos".
- [x] H1 con ciudad objetivo.
- [x] H2 con señales geográficas en secciones.
- [x] Contenido con "Puerto Iguazú" y "Misiones" en texto visible.
- [x] NAP consistente en footer, contacto y schema.

### Técnico
- [x] Schema.org LocalBusiness + Service (hasOfferCatalog) + FAQPage.
- [x] Geo meta tags (geo.region, geo.position, ICBM).
- [x] Canonical y hreflang (es-AR, x-default).
- [x] Sitemap y robots.txt con dominio correcto.
- [x] Mapa embebido (Leaflet) con dirección y coordenadas.

### Conversión local
- [x] WhatsApp visible (flotante + contacto) con aria-label local.
- [x] CTAs con copy local ("Consultá por WhatsApp desde Puerto Iguazú").
- [x] Copy de confianza y cercanía (diagnóstico gratuito, garantía, a domicilio).
- [x] Sección FAQ para dudas típicas de clientes locales.

### Performance (Core Web Vitals)
- [x] Caché y headers en Vercel para estáticos.
- [x] Imagen Hero en WebP y prioridad LCP.
- [x] Lazy loading del mapa (IntersectionObserver).
- [x] Code splitting (vendor, motion, reveal, leaflet).

---

## Próximos pasos recomendados

1. **Google Business Profile:** Crear/reclamar perfil con mismo NAP y sitio web.
2. **Reseñas:** Pedir reseñas en Google (mejora ranking local y rich results).
3. **og-image.jpg:** Añadir imagen 1200×630 con logo y "Puerto Iguazú" para redes.
4. **Blog/landings:** Artículos por servicio + ciudad (ej. "Reparación de celulares en Puerto Iguazú: guía 2025") para long-tail local.
