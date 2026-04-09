import { useEffect, useState } from 'react'
import { cn } from '../../lib/cn'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Icon from '../ui/Icon'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import Logo from '../ui/Logo'

function Navbar({
  businessConfig,
  copy,
  language,
  onLanguageChange,
  phoneHref,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLanguageChange = (nextLanguage) => {
    setIsMenuOpen(false)
    onLanguageChange(nextLanguage)
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const linkClassName =
    'text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white'

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[rgba(8,20,33,0.82)] backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <a aria-label={copy.brand.homeLabel} href="#top">
          <Logo businessConfig={businessConfig} copy={copy} language={language} />
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 md:flex"
          data-testid="primary-nav"
        >
          {copy.nav.links.map((link) => (
            <a className={linkClassName} href={`#${link.sectionId}`} key={link.sectionId}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher
            currentLanguage={language}
            label={copy.nav.languageLabel}
            onChange={handleLanguageChange}
          />
          <Button href={phoneHref} icon="phone" iconPosition="start" variant="primary">
            {copy.nav.cta}
          </Button>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? copy.nav.closeMenu : copy.nav.openMenu}
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white transition-colors hover:bg-white/10 md:hidden"
          data-testid="nav-toggle"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <Icon name={isMenuOpen ? 'close' : 'menu'} />
        </button>
      </Container>

      <div
        className={cn(
          'fixed inset-x-0 top-20 z-50 border-b border-white/8 bg-[rgba(8,20,33,0.96)] shadow-[0_24px_60px_-40px_rgba(2,10,18,0.95)] backdrop-blur-xl transition-all duration-200 md:hidden',
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        id="mobile-navigation"
      >
        <Container className="flex flex-col gap-6 py-6">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-4">
            {copy.nav.links.map((link) => (
              <a
                className={cn(linkClassName, 'text-base')}
                href={`#${link.sectionId}`}
                key={link.sectionId}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-between gap-3">
            <LanguageSwitcher
              currentLanguage={language}
              label={copy.nav.languageLabel}
              onChange={handleLanguageChange}
            />
            <Button href={phoneHref} icon="phone" iconPosition="start" variant="primary">
              {copy.nav.cta}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Navbar
