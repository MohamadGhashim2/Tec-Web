import { isConfigPlaceholder } from './whatsapp'

export const buildLocalBusinessSchema = ({ businessConfig, copy, pageUrl, imageUrl }) => {
  const sameAs = []

  if (!isConfigPlaceholder(businessConfig.contact.instagramUrl)) {
    sameAs.push(businessConfig.contact.instagramUrl)
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${pageUrl}#organization`,
    name: businessConfig.companyName,
    image: imageUrl,
    url: pageUrl,
    telephone: businessConfig.contact.phoneHref.replace('tel:', ''),
    description: copy.seo.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessConfig.location.addressText,
      addressLocality: businessConfig.location.city,
      addressRegion: businessConfig.location.region,
      postalCode: businessConfig.location.postalCode,
      addressCountry: businessConfig.location.countryCode,
    },
    areaServed: businessConfig.location.district,
    availableLanguage: ['tr', 'ar'],
    paymentAccepted: ['Credit Card', 'Debit Card'],
    openingHoursSpecification: businessConfig.hours.map((item) => {
      if (item.key === 'sunday') {
        return {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'https://schema.org/Sunday',
          opens: '00:00',
          closes: '00:00',
        }
      }

      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'https://schema.org/Monday',
          'https://schema.org/Tuesday',
          'https://schema.org/Wednesday',
          'https://schema.org/Thursday',
          'https://schema.org/Friday',
          'https://schema.org/Saturday',
        ],
        opens: '08:30',
        closes: '19:30',
      }
    }),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: businessConfig.rating.value,
      reviewCount: businessConfig.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: copy.services.title,
      itemListElement: copy.services.items.map((item, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: item.title,
          description: item.description,
        },
      })),
    },
    amenityFeature: copy.trust.items.map((item) => ({
      '@type': 'LocationFeatureSpecification',
      name: item.title,
      value: true,
    })),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  }
}
