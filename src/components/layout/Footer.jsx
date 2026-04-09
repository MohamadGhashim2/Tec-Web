import Button from '../ui/Button'
import Container from '../ui/Container'
import Logo from '../ui/Logo'

function Footer({
  businessConfig,
  copy,
  language,
  phoneHref,
  instagramUrl,
  instagramDisabled,
}) {
  return (
    <footer className="section-shell border-t border-[var(--color-line)] bg-[#081421] text-white">
      <Container className="grid gap-10 py-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="max-w-md">
          <Logo businessConfig={businessConfig} compact copy={copy} language={language} />
          <p className="mt-4 text-sm leading-7 text-white/72">{copy.footer.description}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/72">
            {copy.footer.quickLinksLabel}
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/78">
            {copy.nav.links.map((link) => (
              <a href={`#${link.sectionId}`} key={link.sectionId}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/72">
            {copy.footer.contactLabel}
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/78">
            <a className="block" href={phoneHref}>
              {businessConfig.contact.phoneDisplay}
            </a>
            <p>{businessConfig.location.addressText}</p>
            <Button
              aria-label={copy.accessibility.instagramCta}
              className="mt-2"
              disabled={instagramDisabled}
              href={instagramUrl}
              icon="instagram"
              iconPosition="start"
              size="md"
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              {copy.contact.instagramLabel}
            </Button>
          </div>
        </div>
      </Container>

      <Container className="border-t border-white/8 py-5 text-sm text-white/56">
        <p>
          © {new Date().getFullYear()} {businessConfig.companyName}. {copy.footer.rights}
        </p>
      </Container>
    </footer>
  )
}

export default Footer
