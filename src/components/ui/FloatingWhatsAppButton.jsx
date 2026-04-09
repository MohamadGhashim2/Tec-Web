import Button from './Button'

function FloatingWhatsAppButton({ href, label, ariaLabel }) {
  return (
    <div className="fixed bottom-5 right-4 z-50 sm:bottom-6 sm:right-6">
      <Button
        aria-label={ariaLabel}
        className="pr-4 shadow-[0_24px_55px_-28px_rgba(23,159,76,0.95)]"
        data-testid="floating-whatsapp"
        href={href}
        icon="whatsapp"
        iconPosition="start"
        size="lg"
        variant="whatsapp"
      >
        <span className="hidden sm:inline">{label}</span>
      </Button>
    </div>
  )
}

export default FloatingWhatsAppButton
