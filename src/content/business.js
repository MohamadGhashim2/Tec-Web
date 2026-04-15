const addressText =
  'Cadde dükkanlar, Kayabaşı, Ulubatlı Hasan Cd a2 /4, 34494 Başakşehir/İstanbul'

const createGoogleMapsSearchUrl = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

export const businessConfig = {
  companyName: 'TEC',
  brand: {
    logoSrc: '/tec-logo.png',
    alt: {
      tr: 'TEC oto servis logosu',
      ar: 'شعار TEC لخدمة السيارات',
    },
  },
  assets: {
    whatsappIconSrc: '/whatsapp-icon.png',
  },
  ui: {
    heroRotationIntervalMs: 10_000,
  },
  location: {
    addressText,
    district: 'Başakşehir, İstanbul',
    city: 'İstanbul',
    region: 'İstanbul',
    postalCode: '34494',
    countryCode: 'TR',
    mapsDirectionsUrl: createGoogleMapsSearchUrl(addressText),
  },
  contact: {
    phoneDisplay: '0501 067 48 44',
    phoneHref: 'tel:+905010674844',
    whatsappNumber: '905010674844',
    instagramUrl: 'TODO_INSTAGRAM_URL',
  },
  credits: {
    footerPrefix: 'Design & development by',
    footerName: 'Mohamad Ghashim',
    footerUrl: 'https://www.instagram.com/m_gshim/',
  },
  whatsappMessages: {
    tr: 'Merhaba Bir sorum var',
    ar: 'مرحباً هل يمكنني الاستفسار',
  },
  media: {
    specialtyImages: {
      diagnostics: {
        imageUrl:
          'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1400&q=80',
      },
      education: {
        imageUrl:
          'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
      },
      serviceCenter: {
        imageUrl:
          'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1400&q=80',
      },
    },
  },
  rating: {
    value: 4.4,
    count: 27,
  },
  hours: [
    {
      key: 'weekdays',
      label: {
        tr: 'Pazartesi - Cumartesi',
        ar: 'الاثنين - السبت',
      },
      value: {
        tr: '08:30 - 19:30',
        ar: '08:30 - 19:30',
      },
    },
    {
      key: 'sunday',
      label: {
        tr: 'Pazar',
        ar: 'الأحد',
      },
      value: {
        tr: 'Kapalı',
        ar: 'مغلق',
      },
    },
  ],
  editableFields: {
    instagramUrl: 'TODO_INSTAGRAM_URL',
    mapsDirectionsUrlNote:
      'İsterseniz location.mapsDirectionsUrl değerini tam pin bağlantınızla değiştirebilirsiniz.',
    specialtyImageUrls:
      'media.specialtyImages içindeki imageUrl alanlarını kendi görsellerinizle değiştirebilirsiniz.',
    whatsappIcon:
      'assets.whatsappIconSrc değerini başka bir ikon dosyasıyla değiştirebilirsiniz.',
    heroRotationIntervalMs:
      'ui.heroRotationIntervalMs değerini değiştirerek hero başlık dönüş süresini ayarlayabilirsiniz.',
    footerCredit:
      'credits.footerPrefix, credits.footerName ve credits.footerUrl değerleriyle footer imzasını ve linkini güncelleyebilirsiniz.',
  },
}
