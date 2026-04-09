import { buildWhatsAppUrl, isConfigPlaceholder } from '../../lib/whatsapp'
import Footer from './Footer'
import Navbar from './Navbar'
import FloatingWhatsAppButton from '../ui/FloatingWhatsAppButton'

function MainLayout({ businessConfig, children, copy, language, onLanguageChange }) {
  const whatsappHref = buildWhatsAppUrl(
    businessConfig.contact.whatsappNumber,
    businessConfig.whatsappMessages[language],
  )
  const instagramDisabled = isConfigPlaceholder(businessConfig.contact.instagramUrl)

  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--color-ink)]"
        href="#content"
      >
        {copy.accessibility.skipToContent}
      </a>

      <Navbar
        businessConfig={businessConfig}
        copy={copy}
        language={language}
        onLanguageChange={onLanguageChange}
        phoneHref={businessConfig.contact.phoneHref}
      />

      <main id="content">{children}</main>

      <Footer
        businessConfig={businessConfig}
        copy={copy}
        instagramDisabled={instagramDisabled}
        instagramUrl={businessConfig.contact.instagramUrl}
        language={language}
        phoneHref={businessConfig.contact.phoneHref}
      />

      <FloatingWhatsAppButton
        ariaLabel={copy.accessibility.floatingWhatsapp}
        href={whatsappHref}
        label={copy.contact.whatsappLabel}
      />
    </>
  )
}

export default MainLayout
