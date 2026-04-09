import { cn } from '../../lib/cn'

function SectionHeading({ eyebrow, title, description, tone = 'dark' }) {
  const textTone =
    tone === 'light'
      ? {
          eyebrow: 'text-white/80',
          title: 'text-white',
          description: 'text-white/72',
        }
      : {
          eyebrow: 'text-[var(--color-accent)]',
          title: 'text-[var(--color-ink)]',
          description: 'text-[var(--color-muted)]',
        }

  return (
    <div className="max-w-2xl">
      <p className={cn('mb-4 text-sm font-semibold uppercase tracking-[0.18em]', textTone.eyebrow)}>
        {eyebrow}
      </p>
      <h2 className={cn('text-balance text-3xl font-semibold sm:text-4xl', textTone.title)}>
        {title}
      </h2>
      <p className={cn('mt-4 text-base leading-7 sm:text-lg', textTone.description)}>
        {description}
      </p>
    </div>
  )
}

export default SectionHeading
