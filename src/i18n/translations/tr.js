import { sectionIds } from '../../content/navigation'

export const tr = {
  code: 'tr',
  locale: 'tr-TR',
  dir: 'ltr',
  brand: {
    descriptor: 'Oto Servis ve Bakım',
    homeLabel: 'TEC ana sayfa',
  },
  nav: {
    links: [
      { label: 'Hizmetler', sectionId: sectionIds.services },
      { label: 'Neden Biz', sectionId: sectionIds.trust },
      { label: 'Yorumlar', sectionId: sectionIds.reviews },
      { label: 'İletişim', sectionId: sectionIds.contact },
    ],
    cta: 'Şimdi Ara',
    languageLabel: 'Dil seçimi',
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
  },
  hero: {
    eyebrow: 'Başakşehir oto servis deneyimi',
    title: 'AutoXpertiz destekli kapsamlı kontrol, eğitim ve bakım aynı merkezde.',
    description:
      'TEC, Başakşehir’de gelişmiş araç kontrol teknolojileri, mesleki otomotiv eğitimi ve entegre servis yaklaşımını aynı güven diliyle bir araya getirir.',
    rotatingTitles: [
      {
        key: 'diagnostics',
        title: 'AutoXpertiz destekli kapsamlı araç kontrol cihazlarıyla net teşhis yaklaşımı.',
        description:
          'Aracın genel durumunu daha görünür hale getiren profesyonel kontrol cihazlarıyla güven veren ilk değerlendirme süreci.',
      },
      {
        key: 'education',
        title: 'Otomotiv teknolojilerinde uygulamalı eğitim ve profesyonel teknik gelişim alanı.',
        description:
          'Yeni başlayanlardan uzmanlaşmak isteyenlere kadar uzanan, sahaya yakın ve anlaşılır eğitim kurgusu.',
      },
      {
        key: 'serviceCenter',
        title: 'Bakım, onarım ve düzenli servis akışını tek çatı altında sunan entegre merkez.',
        description:
          'Müşteriye net anlatım, düzenli süreç ve teknik bütünlük hissi veren güçlü servis yapısı.',
      },
    ],
    primaryCta: 'Şimdi Ara',
    secondaryCta: 'WhatsApp',
    visualLabel: 'Servis odağı',
    badges: [
      { icon: 'star', label: '4.4 / 5 Google puanı' },
      { icon: 'garage', label: 'Yerinde hizmet desteği' },
      { icon: 'card', label: 'Kartla ödeme kolaylığı' },
    ],
  },
  services: {
    eyebrow: 'Hizmetler',
    title: 'Araç bakım ve onarım ihtiyaçları için düzenli servis başlıkları',
    description:
      'Servis içerikleri tek bir kaynak dosyadan yönetilir; içerik büyüdüğünde yeni kartlar kolayca eklenebilir.',
    items: [
      {
        icon: 'wrench',
        title: 'Genel bakım',
        description:
          'Filtre, sıvı ve temel sistem kontrolleriyle günlük kullanım güvenliğini koruyan bakım desteği.',
      },
      {
        icon: 'gear',
        title: 'Mekanik onarım',
        description:
          'Motor, fren ve yürüyen aksam odaklı kontrollü onarım süreçleriyle sorunu netleştiren servis yaklaşımı.',
      },
      {
        icon: 'diagnostics',
        title: 'Araç arıza tespiti',
        description:
          'Uyarı lambalarını ve sistem hatalarını hızlı teşhisle görünür hale getiren kontrollü kontrol süreci.',
      },
      {
        icon: 'oil',
        title: 'Yağ değişimi',
        description:
          'Doğru viskozite ve zamanında değişim planıyla motor sağlığını korumaya odaklanan bakım adımı.',
      },
      {
        icon: 'shield',
        title: 'Periyodik kontrol',
        description:
          'Uzun yol öncesi veya rutin kullanım için sıralı genel kontrol ve önleyici bakım değerlendirmesi.',
      },
      {
        icon: 'spark',
        title: 'Temel oto elektrik',
        description:
          'Akü, aydınlatma ve temel elektrik bileşenleri için pratik ve açıklayıcı servis desteği.',
      },
    ],
  },
  specialties: {
    eyebrow: 'Öne Çıkan Alanlar',
    title: 'Üç ana uzmanlık alanı aynı landing page içinde net sırayla anlatılıyor',
    description:
      'Bu alanlar hero başlıklarıyla birebir hizalı olacak şekilde sıralandı: kapsamlı teşhis cihazları, otomotiv eğitimi ve entegre servis merkezi.',
    scrollHint: 'Aşağı kaydırın, sonraki bölüm sizi bekliyor',
    items: [
      {
        key: 'diagnostics',
        icon: 'diagnostics',
        label: 'Diagnostik',
        title: 'AutoXpertiz destekli kapsamlı araç kontrol sistemleri',
        description:
          'Gelişmiş kontrol cihazlarıyla aracı daha detaylı analiz eden, ekspertiz mantığını servis deneyimiyle birleştiren profesyonel teşhis alanı.',
        bullets: [
          'AutoXpertiz odaklı kapsamlı genel kontrol mantığı',
          'Arızayı daha net görünür hale getiren cihaz destekli okuma',
          'Müşteriye güven veren profesyonel ilk değerlendirme akışı',
        ],
        imageAlt: 'TEC kapsamlı araç kontrol ve diagnostik hizmetini temsil eden görsel',
      },
      {
        key: 'education',
        icon: 'book',
        label: 'Eğitim',
        title: 'Otomotiv teknolojileri için eğitim ve mesleki gelişim',
        description:
          'Teknoloji odaklı otomotiv eğitimlerini daha kurumsal ve profesyonel sunan bu alan, öğrenmeyi sahaya yakın bir dille anlatır.',
        bullets: [
          'Uygulamalı ve anlaşılır eğitim anlatımı',
          'Mesleki gelişime uygun yapılandırılmış içerik',
          'Atölye pratiğine yakın profesyonel öğrenme deneyimi',
        ],
        imageAlt: 'TEC eğitim ve mesleki otomotiv gelişim alanını temsil eden görsel',
      },
      {
        key: 'serviceCenter',
        icon: 'garage',
        label: 'Servis Merkezi',
        title: 'Entegre araç bakım, onarım ve servis merkezi',
        description:
          'Bakım, teknik onarım ve araç kabul sürecini tek merkez algısıyla sunan bu bölüm, TEC’in servis tarafını daha güçlü konumlandırır.',
        bullets: [
          'Tek çatı altında bakım ve teknik destek yaklaşımı',
          'Müşteriye düzenli süreç ve profesyonel teslim hissi',
          'Büyümeye açık, kurumsal servis merkezi sunumu',
        ],
        imageAlt: 'TEC entegre araç servis merkezi hizmetini temsil eden görsel',
      },
    ],
  },
  trust: {
    eyebrow: 'Neden TEC',
    title: 'Yerel güven, erişilebilir alanlar ve düzenli servis iletişimi',
    description:
      'Başakşehir’deki servis noktasını tercih eden sürücüler için öne çıkan güven sinyalleri tek bakışta görünür.',
    items: [
      {
        icon: 'garage',
        title: 'Yerinde hizmet desteği',
        description: 'Atölye içinde hızlı kabul ve araç ihtiyaçlarına göre düzenli servis akışı.',
      },
      {
        icon: 'accessibility',
        title: 'Erişilebilir servis alanı',
        description: 'Tekerlekli sandalye erişimine uygun otopark ve oturma alanıyla rahat ziyaret deneyimi.',
      },
      {
        icon: 'card',
        title: 'Kart ile ödeme',
        description: 'Kredi kartı ve banka kartı ile kolay ödeme akışı.',
      },
      {
        icon: 'shield',
        title: 'Profesyonel yaklaşım',
        description: 'Kontrollü iş planı, net anlatım ve düzenli bilgilendirme odaklı servis süreci.',
      },
      {
        icon: 'scale',
        title: 'Adil fiyat yaklaşımı',
        description: 'İş kapsamını görünür kılan, gereksiz karmaşa yaratmayan net servis iletişimi.',
      },
      {
        icon: 'location',
        title: 'Başakşehir’de yerel atölye',
        description: 'Kayabaşı tarafında kolay ulaşım sağlayan güvenilir mahalle servisi hissi.',
      },
    ],
  },
  reviews: {
    eyebrow: 'Yorum özeti',
    title: '27 değerlendirmeden çıkan güven hissi',
    description:
      'Google üzerindeki 4.4 / 5 ortalama puan, hızlı iletişim ve düzenli servis deneyimi beklentisini destekliyor.',
    ratingLabel: 'Google değerlendirme ortalaması',
    items: [
      {
        quote: 'Düzenli iletişim ve hızlı kontrol süreci müşterilerin dikkatini çekiyor.',
        author: 'Başakşehir müşteri izlenimi',
      },
      {
        quote: 'Bakım ve yağ değişimi işlemlerinde net ve pratik bir servis akışı öne çıkıyor.',
        author: 'Servis geri bildirim özeti',
      },
      {
        quote: 'Mahalle içinde ulaşılabilir bir servis noktası olarak güven veren bir algı oluşturuyor.',
        author: 'Yerel değerlendirme özeti',
      },
    ],
  },
  contact: {
    eyebrow: 'Konum ve iletişim',
    title: 'Başakşehir’de kolay ulaşılabilir servis noktası',
    description:
      'Arayın, WhatsApp üzerinden yazın veya adresi haritada açın. Tüm iletişim alanları tek dosyada güncellenebilir yapıdadır.',
    addressLabel: 'Adres',
    phoneLabel: 'Telefon',
    hoursLabel: 'Çalışma saatleri',
    directionsLabel: 'Yol tarifi al',
    instagramLabel: 'Instagram',
    whatsappLabel: 'WhatsApp',
    instagramPlaceholder: 'Instagram bağlantısı eklendiğinde burada aktif olur.',
  },
  footer: {
    description:
      'TEC, Başakşehir’de araç bakım, teşhis ve yağ değişimi için net iletişim odaklı servis deneyimi sunar.',
    quickLinksLabel: 'Hızlı bağlantılar',
    contactLabel: 'İletişim',
    rights: 'Tüm hakları saklıdır.',
  },
  accessibility: {
    phoneCta: 'TEC servis hattını ara',
    whatsappCta: 'TEC ile WhatsApp üzerinden yazış',
    directionsCta: 'TEC konumunu haritada aç',
    instagramCta: 'TEC Instagram profilini aç',
    floatingWhatsapp: 'WhatsApp sohbetini aç',
    skipToContent: 'İçeriğe geç',
  },
  seo: {
    title: 'TEC Oto Servis | Başakşehir İstanbul Araç Bakım ve Onarım',
    description:
      'TEC Oto Servis, Başakşehir İstanbul’da araç bakım, mekanik onarım, arıza tespiti ve yağ değişimi için güvenilir, erişilebilir ve profesyonel servis desteği sunar.',
    ogLocale: 'tr_TR',
  },
}
