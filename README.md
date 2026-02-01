# TechSolutions Iguazú - Web Empresarial

Web empresarial tecnológica de alto rendimiento para **TechSolutions Iguazú**, empresa de servicios tecnológicos ubicada en Puerto Iguazú, Misiones, Argentina.

## 🚀 Stack Tecnológico

- **React 18** + **TypeScript**
- **Vite** (build tool ultra rápido)
- **Tailwind CSS** (estilos utility-first)
- **Leaflet** (mapa interactivo)
- **SEO Avanzado** (Schema.org, meta tags, sitemap)

## 📁 Estructura del Proyecto

```
personal-web/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── Layout/          # Header, Footer, ThemeToggle
│   │   ├── sections/        # Hero, About, Services, TechStack, Location, Contact
│   │   └── ui/              # WhatsAppButton, otros componentes UI
│   ├── config/
│   │   ├── seo.ts           # Configuración SEO central (NAP, keywords)
│   │   ├── services.ts      # Servicios de la empresa
│   │   └── tech.ts          # Stack tecnológico
│   ├── hooks/
│   │   ├── useTheme.ts      # Modo claro/oscuro
│   │   └── usePastHero.ts   # Detecta scroll pasado el hero
│   ├── seo/
│   │   ├── SchemaOrg.tsx    # JSON-LD Schema.org
│   │   └── MetaTags.tsx     # Meta tags dinámicos
│   ├── utils/
│   │   ├── whatsapp.ts      # URLs y mensajes WhatsApp
│   │   └── analytics.ts     # Tracking de eventos
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 🎯 SEO Implementado

### SEO Técnico
- ✅ HTML semántico completo (h1-h6)
- ✅ Meta title y description optimizados
- ✅ Open Graph + Twitter Cards
- ✅ Sitemap.xml
- ✅ robots.txt
- ✅ Canonical URLs
- ✅ Lazy loading de imágenes y mapa

### SEO Local (Crítico)
- ✅ Schema.org LocalBusiness
- ✅ Datos NAP consistentes
- ✅ Geo meta tags
- ✅ Texto geolocalizado ("Puerto Iguazú", "Misiones")
- ✅ Preparado para Google Business Profile

### Keywords Objetivo
**Primarias:**
- reparación de celulares en Puerto Iguazú
- reparación de computadoras en Puerto Iguazú
- desarrollo web en Misiones

**Secundarias:**
- cambio de pantalla celular Iguazú
- técnico en computadoras Iguazú
- páginas web Puerto Iguazú

## 🛠️ Instalación

```bash
cd personal-web
npm install
```

## 💻 Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

## 🏗️ Build para Producción

```bash
npm run build
```

La carpeta `dist/` queda lista para deploy en Vercel, Netlify, etc.

## ⚙️ Personalización

### 1. Datos de la empresa
Editar `src/config/seo.ts`:
- Nombre de la empresa
- Dirección, teléfono, email
- Coordenadas del mapa
- Redes sociales
- Horarios

### 2. Servicios
Editar `src/config/services.ts`:
- Agregar/modificar servicios
- Keywords por servicio
- Descripciones SEO

### 3. Stack tecnológico
Editar `src/config/tech.ts`:
- Tecnologías
- Niveles de expertise

### 4. WhatsApp
El número se configura en `src/config/seo.ts` → `business.whatsapp`

## 📱 Automatización

- **WhatsApp:** Mensajes preconfigurados por servicio
- **Formulario:** Envía datos directamente a WhatsApp
- **Analytics:** Preparado para Google Analytics 4
- **Eventos:** Click tracking en CTAs

## 🎨 Diseño

- **Mobile-first** responsive
- **Modo claro/oscuro** persistente
- **Paleta profesional** azul + neutros
- **Tipografía:** Inter + Plus Jakarta Sans
- **Animaciones sutiles**

## 📊 Google Ads Ready

- CTAs claros y visibles
- Landing optimizada para Quality Score
- Textos orientados a conversión
- Estructura preparada para campañas

## 🔮 Preparado para Escalar

- Blog SEO (estructura lista)
- Landing pages locales
- Testimonios y casos de éxito
- Nuevos servicios
- Múltiples ubicaciones

## 📝 Licencia

Proyecto privado - TechSolutions Iguazú
