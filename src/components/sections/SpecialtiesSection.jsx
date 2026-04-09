import { cn } from '../../lib/cn'
import Container from '../ui/Container'
import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'

function SpecialtiesSection({ businessConfig, copy }) {
  const items = copy.specialties.items.map((item) => ({
    ...item,
    imageUrl: businessConfig.media.specialtyImages[item.key]?.imageUrl,
  }))

  return (
    <section className="section-shell section-anchor section-space" id="specialties">
      <Container>
        <SectionHeading
          eyebrow={copy.specialties.eyebrow}
        />

        <div className="mt-6 flex items-center gap-3 md:hidden">
          <span className="h-px flex-1 bg-[var(--color-line)]" />
          <p className="text-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
            {copy.specialties.scrollHint}
          </p>
          <div className="scroll-cue flex size-9 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
            <Icon className="size-4" name="arrowDown" />
          </div>
        </div>

        <div className="mt-10 space-y-6 sm:space-y-8">
          {items.map((item, index) => {
            const isEven = index % 2 === 0

            return (
              <article
                className="surface-panel overflow-hidden rounded-[2rem] sm:rounded-[2.25rem]"
                key={item.key}
              >
                <div
                  className={cn(
                    'grid overflow-hidden lg:min-h-[28rem] lg:grid-cols-[0.98fr_1.02fr]',
                    !isEven && 'lg:grid-cols-[1.02fr_0.98fr]',
                  )}
                >
                  <div className={cn('relative min-h-[18rem] overflow-hidden', !isEven && 'lg:order-2')}>
                    <img
                      alt={item.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      loading="lazy"
                      src={item.imageUrl}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,20,33,0.72)] via-transparent to-[rgba(8,20,33,0.08)]" />
                    <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3">
                      <span className="rounded-full border border-white/16 bg-[rgba(8,20,33,0.45)] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                        {item.label}
                      </span>
                      <span className="rounded-full border border-white/16 bg-white/10 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/86 backdrop-blur">
                        TEC
                      </span>
                    </div>
                    <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                      <p className="max-w-[16rem] text-xl font-semibold leading-snug text-white sm:text-2xl">
                        {item.title}
                      </p>
                      <div className="hidden size-11 items-center justify-center rounded-full border border-white/14 bg-white/10 text-white md:flex">
                        <Icon name="arrowUpRight" />
                      </div>
                    </div>
                  </div>

                  <div className={cn('p-6 sm:p-8 lg:p-10', !isEven && 'lg:order-1')}>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      {item.label}
                    </p>
                    <h3 className="mt-4 text-balance text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                      {item.description}
                    </p>

                    <ul className="mt-6 grid gap-3">
                      {item.bullets.map((bullet) => (
                        <li
                          className="flex items-start gap-3 rounded-[1.2rem] border border-[var(--color-line)] bg-white/70 px-4 py-3"
                          key={bullet}
                        >
                          <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                            <Icon className="size-4" name="shield" />
                          </div>
                          <span className="text-sm leading-7 text-[var(--color-ink)]">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex items-center gap-3 md:hidden">
                      <span className="h-px flex-1 bg-[var(--color-line)]" />
                      <div className="scroll-cue flex size-8 items-center justify-center rounded-full bg-[var(--color-ink)] text-white">
                        <Icon className="size-4" name="arrowDown" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default SpecialtiesSection
