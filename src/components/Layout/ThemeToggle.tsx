/**
 * Interruptor día/noche - Switch interactivo
 */
interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Modo noche activo. Clic para modo día' : 'Modo día activo. Clic para modo noche'}
      onClick={onToggle}
      className={`group relative flex h-9 w-16 cursor-pointer items-center rounded-full border-2 p-1 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyber-500 focus:ring-offset-2 ${
        isDark
          ? 'border-dark-600 bg-dark-800 hover:border-cyber-500/50 hover:shadow-md hover:shadow-cyber-500/20 focus:ring-offset-dark-950'
          : 'border-dark-300 bg-dark-100 hover:border-cyber-500/60 hover:shadow-md hover:shadow-cyber-500/15 focus:ring-offset-white'
      }`}
    >
      {/* Track con gradiente sutil */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/10 to-cyber-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Iconos día/noche fijos */}
      <span className={`absolute left-2 transition-colors duration-300 ${isDark ? 'text-dark-500' : 'text-amber-400'}`}>
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className={`absolute right-2 transition-colors duration-300 ${isDark ? 'text-cyber-400' : 'text-dark-500'}`}>
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </span>
      
      {/* Thumb que se desliza */}
      <span
        className={`relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full shadow-lg transition-all duration-300 ease-out ${
          isDark
            ? 'translate-x-7 bg-white shadow-cyber-500/30'
            : 'translate-x-0 bg-amber-50 shadow-dark-300/40'
        }`}
      >
        {isDark ? (
          <svg className="h-3.5 w-3.5 text-dark-800" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg className="h-3.5 w-3.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </span>
    </button>
  )
}
