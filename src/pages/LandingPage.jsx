import MainLayout from "../components/layout/MainLayout";
import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
import ReviewsSection from "../components/sections/ReviewsSection";
import ServicesSection from "../components/sections/ServicesSection";
import SpecialtiesSection from "../components/sections/SpecialtiesSection";
import TrustSection from "../components/sections/TrustSection";
import { buildWhatsAppUrl } from "../lib/whatsapp";

function LandingPage({ businessConfig, copy, language, onLanguageChange }) {
  const whatsappHref = buildWhatsAppUrl(
    businessConfig.contact.whatsappNumber,
    businessConfig.whatsappMessages[language],
  );

  return (
    <MainLayout
      businessConfig={businessConfig}
      copy={copy}
      language={language}
      onLanguageChange={onLanguageChange}
    >
      <HeroSection
        businessConfig={businessConfig}
        callHref={businessConfig.contact.phoneHref}
        copy={copy}
        language={language}
        whatsappHref={whatsappHref}
      />
      <SpecialtiesSection businessConfig={businessConfig} copy={copy} />

      <ServicesSection copy={copy} />
      <TrustSection copy={copy} />
      <ReviewsSection businessConfig={businessConfig} copy={copy} />
      <ContactSection
        businessConfig={businessConfig}
        copy={copy}
        directionsUrl={businessConfig.location.mapsDirectionsUrl}
        instagramUrl={businessConfig.contact.instagramUrl}
        whatsappHref={whatsappHref}
      />
    </MainLayout>
  );
}

export default LandingPage;
