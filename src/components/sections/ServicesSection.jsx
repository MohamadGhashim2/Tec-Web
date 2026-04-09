import Container from '../ui/Container'
import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'

function ServicesSection({ copy }) {
  return (
    <section className="section-shell section-anchor section-space" id="services">
      <Container>
        <SectionHeading
          description={copy.services.description}
          eyebrow={copy.services.eyebrow}
          title={copy.services.title}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {copy.services.items.map((service) => (
            <article
              className="surface-panel rounded-[var(--radius-panel)] p-6 sm:p-7"
              key={service.title}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Icon name={service.icon} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  TEC
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[var(--color-ink)]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ServicesSection
