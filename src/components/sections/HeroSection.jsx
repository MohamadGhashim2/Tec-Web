import { useRotatingItems } from '../../hooks/useRotatingItems'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Icon from '../ui/Icon'

function HeroSection({ businessConfig, callHref, copy, language, whatsappHref }) {
  const rotatingTitles = copy.hero.rotatingTitles
  const { activeIndex, activeItem } = useRotatingItems(
    rotatingTitles,
    businessConfig.ui.heroRotationIntervalMs,
  )
  const featuredThemes = copy.specialties.items
  const displayedTitle = activeItem?.title ?? copy.hero.title
  const displayedDescription = activeItem?.description ?? copy.hero.description

  return (
    <section
      className="section-shell section-anchor relative isolate overflow-hidden bg-[var(--color-hero)] text-white"
      id="top"
    >
      <div className="hero-grid-lines absolute inset-0 opacity-45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,167,255,0.3),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050d17] to-transparent" />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-xl fade-up">
            <span className="eyebrow">{copy.hero.eyebrow}</span>
            <div className="mt-6 min-h-[11.5rem] sm:min-h-[12.5rem]">
              <h1
                data-testid="hero-rotating-title"
                className="fade-up text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
                key={activeItem?.key ?? 'hero-title'}
              >
                {displayedTitle}
              </h1>
            </div>

            <div className="mt-3 flex gap-2">
              {rotatingTitles.map((item, index) => (
                <span
                  aria-hidden="true"
                  className={
                    index === activeIndex
                      ? 'h-1.5 w-12 rounded-full bg-[#58a7ff]'
                      : 'h-1.5 w-7 rounded-full bg-white/18'
                  }
                  key={item.key}
                />
              ))}
            </div>

            <p className="mt-5 max-w-lg text-base leading-7 text-white/76 sm:text-lg">
              {displayedDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                aria-label={copy.accessibility.phoneCta}
                data-testid="hero-call-cta"
                href={callHref}
                icon="phone"
                iconPosition="start"
                size="lg"
                variant="primary"
              >
                {copy.hero.primaryCta}
              </Button>
              <Button
                aria-label={copy.accessibility.whatsappCta}
                data-testid="hero-whatsapp-cta"
                href={whatsappHref}
                icon="whatsapp"
                iconPosition="start"
                size="lg"
                variant="secondary"
              >
                {copy.hero.secondaryCta}
              </Button>
            </div>

            <ul className="mt-8 grid gap-3 text-sm text-white/78 sm:grid-cols-3">
              {copy.hero.badges.map((badge) => (
                <li
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-3 backdrop-blur"
                  key={badge.label}
                >
                  <Icon
                    className={badge.icon === 'star' ? 'text-[#f5b847]' : 'text-[#8cbef8]'}
                    name={badge.icon}
                  />
                  <span>{badge.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-up fade-up-delay">
            <div className="float-slow relative mx-auto flex max-w-[28rem] items-center justify-center">
              <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(15,103,207,0.42),transparent_68%)] blur-3xl" />
              <div className="absolute inset-4 rounded-[2rem] border border-white/8" />
              <div className="metal-panel octagon-panel relative w-full p-8 sm:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                      {copy.hero.visualLabel}
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-[0.16em]">
                      {businessConfig.companyName}
                    </p>
                    <p className="mt-2 max-w-[14rem] text-sm leading-6 text-white/68">
                      {copy.brand.descriptor}
                    </p>
                  </div>

                  <img
                    alt={businessConfig.brand.alt[language]}
                    className="h-16 w-16 rounded-[1.5rem] object-cover shadow-[0_16px_34px_-20px_rgba(255,255,255,0.65)]"
                    src={businessConfig.brand.logoSrc}
                  />
                </div>

                <div className="mt-10 grid gap-4">
                  {featuredThemes.map((item, index) => (
                    <div
                      className={
                        index === activeIndex
                          ? 'flex items-center justify-between gap-4 rounded-[1.4rem] border border-[#58a7ff]/40 bg-[rgba(15,103,207,0.2)] px-4 py-4'
                          : 'flex items-center justify-between gap-4 rounded-[1.4rem] border border-white/10 bg-black/16 px-4 py-4'
                      }
                      key={item.key}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={
                            index === activeIndex
                              ? 'flex size-11 items-center justify-center rounded-2xl bg-white/16 text-white'
                              : 'flex size-11 items-center justify-center rounded-2xl bg-white/10 text-[#8cbef8]'
                          }
                        >
                          <Icon name={item.icon} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{item.title}</p>
                          <p className="text-xs text-white/55">{businessConfig.location.district}</p>
                        </div>
                      </div>
                      <Icon className="text-white/42" name="arrowUpRight" />
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-end justify-between gap-6 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/48">
                      {copy.reviews.ratingLabel}
                    </p>
                    <p className="mt-2 text-3xl font-semibold">
                      {businessConfig.rating.value} / 5
                    </p>
                  </div>
                  <p className="max-w-[8rem] text-right text-sm leading-6 text-white/62">
                    {businessConfig.rating.count} {copy.code === 'ar' ? 'مراجعة' : 'değerlendirme'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
