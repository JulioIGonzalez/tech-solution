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
  icon?: string
  level: 'expert' | 'advanced' | 'intermediate'
}

export const TECH_STACK: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Desarrollo Frontend',
    items: [
      { name: 'React', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'HTML5', level: 'expert' },
      { name: 'CSS3', level: 'expert' },
      { name: 'Tailwind CSS', level: 'expert' },
      { name: 'Next.js', level: 'advanced' },
    ],
  },
  {
    id: 'backend',
    title: 'Desarrollo Backend',
    items: [
      { name: 'Node.js', level: 'expert' },
      { name: 'Express', level: 'expert' },
      { name: 'Java', level: 'advanced' },
      { name: 'Spring Boot', level: 'advanced' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'GraphQL', level: 'intermediate' },
    ],
  },
  {
    id: 'database',
    title: 'Bases de Datos',
    items: [
      { name: 'MongoDB', level: 'expert' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'MySQL', level: 'advanced' },
      { name: 'Redis', level: 'intermediate' },
    ],
  },
  {
    id: 'tools',
    title: 'Herramientas & DevOps',
    items: [
      { name: 'Git', level: 'expert' },
      { name: 'Docker', level: 'advanced' },
      { name: 'Linux', level: 'expert' },
      { name: 'AWS', level: 'intermediate' },
      { name: 'Vercel', level: 'expert' },
    ],
  },
  {
    id: 'ai',
    title: 'Inteligencia Artificial',
    items: [
      { name: 'ChatGPT / OpenAI', level: 'expert' },
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

export const LANGUAGES = [
  { code: 'es', name: 'Español', level: 'Nativo', flag: '🇦🇷' },
  { code: 'en', name: 'Inglés', level: 'Avanzado', flag: '🇺🇸' },
  { code: 'pt', name: 'Portugués', level: 'Avanzado', flag: '🇧🇷' },
] as const
