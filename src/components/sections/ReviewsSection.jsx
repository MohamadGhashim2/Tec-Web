import Container from '../ui/Container'
import ReviewStars from '../ui/ReviewStars'
import SectionHeading from '../ui/SectionHeading'

function ReviewsSection({ businessConfig, copy }) {
  return (
    <section className="section-shell section-anchor section-space" id="reviews">
      <Container className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="surface-panel rounded-[2rem] p-7 sm:p-8">
          <SectionHeading
            description={copy.reviews.description}
            eyebrow={copy.reviews.eyebrow}
            title={copy.reviews.title}
          />

          <div className="mt-8 rounded-[1.5rem] bg-[var(--color-ink)] p-6 text-white">
            <ReviewStars />
            <p className="mt-5 text-5xl font-semibold leading-none">
              {businessConfig.rating.value}
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-white/58">
              {copy.reviews.ratingLabel}
            </p>
            <p className="mt-4 text-sm text-white/72">
              {businessConfig.rating.count}{' '}
              {copy.code === 'ar' ? 'مراجعة على Google' : 'Google değerlendirme'}
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          {copy.reviews.items.map((item) => (
            <article
              className="surface-panel rounded-[1.75rem] border-l-4 border-l-[var(--color-accent)] p-6 sm:p-7"
              key={item.quote}
            >
              <ReviewStars />
              <blockquote className="mt-4 text-lg leading-8 text-[var(--color-ink)]">
                “{item.quote}”
              </blockquote>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-muted)]">
                {item.author}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ReviewsSection
