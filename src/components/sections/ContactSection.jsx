import { isConfigPlaceholder } from '../../lib/whatsapp'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'

function ContactSection({ businessConfig, copy, directionsUrl, instagramUrl, whatsappHref }) {
  const instagramDisabled = isConfigPlaceholder(instagramUrl)

  return (
    <section className="section-shell section-anchor section-space" id="contact">
      <Container className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr]">
        <div>
          <SectionHeading
            description={copy.contact.description}
            eyebrow={copy.contact.eyebrow}
            title={copy.contact.title}
          />

          <div className="mt-8 grid gap-4">
            <article className="surface-panel rounded-[1.5rem] p-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Icon name="location" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    {copy.contact.addressLabel}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-ink)]">
                    {businessConfig.location.addressText}
                  </p>
                </div>
              </div>
            </article>

            <article className="surface-panel rounded-[1.5rem] p-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Icon name="phone" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    {copy.contact.phoneLabel}
                  </p>
                  <a
                    className="mt-2 inline-block text-base font-semibold text-[var(--color-ink)]"
                    href={businessConfig.contact.phoneHref}
                  >
                    {businessConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="surface-panel rounded-[2rem] p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[var(--color-ink)] text-white">
                  <Icon name="clock" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    {copy.contact.hoursLabel}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-[var(--color-ink)]">
                    {businessConfig.companyName}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {businessConfig.hours.map((entry) => (
                  <div
                    className="flex items-center justify-between gap-4 rounded-[1.25rem] border border-[var(--color-line)] bg-white/80 px-4 py-4"
                    key={entry.key}
                  >
                    <span className="text-sm font-medium text-[var(--color-ink)]">
                      {entry.label[copy.code]}
                    </span>
                    <span className="text-sm text-[var(--color-muted)]">{entry.value[copy.code]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.6rem] bg-[var(--color-ink)] p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/52">
                {businessConfig.location.district}
              </p>
              <p className="mt-3 text-2xl font-semibold">{businessConfig.companyName}</p>
              <p className="mt-4 text-sm leading-7 text-white/72">{copy.brand.descriptor}</p>
              <div className="mt-6 flex flex-col gap-3">
                <Button
                  aria-label={copy.accessibility.directionsCta}
                  href={directionsUrl}
                  icon="location"
                  iconPosition="start"
                  rel="noreferrer"
                  target="_blank"
                  variant="primary"
                >
                  {copy.contact.directionsLabel}
                </Button>
                <Button
                  aria-label={copy.accessibility.instagramCta}
                  disabled={instagramDisabled}
                  href={instagramUrl}
                  icon="instagram"
                  iconPosition="start"
                  rel="noreferrer"
                  target="_blank"
                  variant="secondary"
                >
                  {copy.contact.instagramLabel}
                </Button>
                <Button
                  aria-label={copy.accessibility.whatsappCta}
                  href={whatsappHref}
                  icon="whatsapp"
                  iconPosition="start"
                  variant="whatsapp"
                >
                  {copy.contact.whatsappLabel}
                </Button>
              </div>
              {instagramDisabled ? (
                <p className="mt-4 text-xs leading-6 text-white/52">{copy.contact.instagramPlaceholder}</p>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection
