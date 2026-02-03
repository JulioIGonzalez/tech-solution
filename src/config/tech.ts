/**
 * Stack tecnológico y conocimientos de la empresa
 */

export interface TechCategory {
  id: string
  title: string
  items: TechItem[]
}

export interface TechItem {
  name: string
  /** Slug para CDN Simple Icons (cdn.simpleicons.org) - ligero, sin añadir peso al bundle */
  icon?: string
  /** Color original de la marca en hex (sin #) */
  color?: string
  level: 'expert' | 'advanced' | 'intermediate'
}

/** Colores oficiales de cada tecnología para los iconos */
const TECH_COLORS: Record<string, string> = {
  react: '61DAFB',
  typescript: '3178C6',
  javascript: 'F7DF1E',
  html5: 'E34F26',
  css3: '1572B6',
  tailwindcss: '06B6D4',
  nextdotjs: '000000',
  nodedotjs: '5FA04E',
  express: '000000',
  openjdk: '437291',
  springboot: '6DB33F',
  graphql: 'E10098',
  mongodb: '47A248',
  postgresql: '4169E1',
  mysql: '4479A1',
  redis: 'DC382D',
  git: 'F05032',
  docker: '2496ED',
  linux: 'FCC624',
  amazonwebservices: 'FF9900', // AWS slug correcto
  vercel: '000000',
  openai: '412991',
}

export const TECH_STACK: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Desarrollo Frontend',
    items: [
      { name: 'React', icon: 'react', level: 'expert' },
      { name: 'TypeScript', icon: 'typescript', level: 'expert' },
      { name: 'JavaScript', icon: 'javascript', level: 'expert' },
      { name: 'HTML5', icon: 'html5', level: 'expert' },
      { name: 'CSS3', icon: 'css3', level: 'expert' },
      { name: 'Tailwind CSS', icon: 'tailwindcss', level: 'expert' },
      { name: 'Next.js', icon: 'nextdotjs', level: 'advanced' },
    ],
  },
  {
    id: 'backend',
    title: 'Desarrollo Backend',
    items: [
      { name: 'Node.js', icon: 'nodedotjs', level: 'expert' },
      { name: 'Express', icon: 'express', level: 'expert' },
      { name: 'Java', icon: 'openjdk', level: 'advanced' },
      { name: 'Spring Boot', icon: 'springboot', level: 'advanced' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'GraphQL', icon: 'graphql', level: 'intermediate' },
    ],
  },
  {
    id: 'database',
    title: 'Bases de Datos',
    items: [
      { name: 'MongoDB', icon: 'mongodb', level: 'expert' },
      { name: 'PostgreSQL', icon: 'postgresql', level: 'advanced' },
      { name: 'MySQL', icon: 'mysql', level: 'advanced' },
      { name: 'Redis', icon: 'redis', level: 'intermediate' },
    ],
  },
  {
    id: 'tools',
    title: 'Herramientas & DevOps',
    items: [
      { name: 'Git', icon: 'git', level: 'expert' },
      { name: 'Docker', icon: 'docker', level: 'advanced' },
      { name: 'Linux', icon: 'linux', level: 'expert' },
      { name: 'AWS', icon: 'amazonwebservices', level: 'intermediate' },
      { name: 'Vercel', icon: 'vercel', level: 'expert' },
    ],
  },
  {
    id: 'ai',
    title: 'Inteligencia Artificial',
    items: [
      { name: 'ChatGPT / OpenAI', icon: 'openai', level: 'expert' },
      { name: 'Cursor AI', level: 'expert' },
      { name: 'Automatizaciones IA', level: 'advanced' },
      { name: 'Prompt Engineering', level: 'advanced' },
    ],
  },
  {
    id: 'hardware',
    title: 'Hardware & Redes',
    items: [
      { name: 'Reparación de celulares', level: 'expert' },
      { name: 'Reparación de PC/Notebooks', level: 'expert' },
      { name: 'Redes y conectividad', level: 'advanced' },
      { name: 'Microsoldadura', level: 'intermediate' },
    ],
  },
]

/** URL del icono en CDN con color original de la marca */
export function getTechIconUrl(slug: string): string {
  const color = TECH_COLORS[slug] || 'FFFFFF'
  return `https://cdn.simpleicons.org/${slug}/${color}`
}

export const LANGUAGES = [
  { code: 'es', name: 'Español', level: 'Nativo', flag: '🇦🇷' },
  { code: 'en', name: 'Inglés', level: 'Avanzado', flag: '🇺🇸' },
  { code: 'pt', name: 'Portugués', level: 'Avanzado', flag: '🇧🇷' },
] as const
