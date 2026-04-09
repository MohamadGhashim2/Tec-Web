import { cn } from '../../lib/cn'

const languageOptions = [
  { code: 'tr', label: 'TR', ariaLabel: 'Türkçe' },
  { code: 'ar', label: 'AR', ariaLabel: 'العربية' },
]

function LanguageSwitcher({ currentLanguage, label, onChange }) {
  return (
    <div
      aria-label={label}
      className="inline-flex items-center gap-1 rounded-full border border-white/12 bg-white/6 p-1 backdrop-blur"
      role="group"
    >
      {languageOptions.map((option) => {
        const isActive = option.code === currentLanguage

        return (
          <button
            aria-label={option.ariaLabel}
            aria-pressed={isActive}
            className={cn(
              'rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors',
              isActive ? 'bg-white text-[var(--color-hero)]' : 'text-white/78 hover:text-white',
            )}
            key={option.code}
            onClick={() => onChange(option.code)}
            type="button"
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher
