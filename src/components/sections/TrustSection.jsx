import Container from '../ui/Container'
import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'

function TrustSection({ copy }) {
  return (
    <section
      className="section-shell section-anchor overflow-hidden bg-[#081421] py-16 text-white sm:py-20 lg:py-24"
      id="trust"
    >
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <SectionHeading
          description={copy.trust.description}
          eyebrow={copy.trust.eyebrow}
          title={copy.trust.title}
          tone="light"
        />

        <div className="divide-y divide-white/10 rounded-[2rem] border border-white/10 bg-white/4">
          {copy.trust.items.map((item) => (
            <article className="flex gap-4 px-5 py-5 sm:px-7 sm:py-6" key={item.title}>
              <div className="mt-1 flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/8 text-[#8cbef8]">
                <Icon name={item.icon} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/68">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TrustSection
