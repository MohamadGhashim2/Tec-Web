function Logo({ businessConfig, copy, language, compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <img
        alt={businessConfig.brand.alt[language]}
        className={compact ? 'h-10 w-10 rounded-2xl object-cover' : 'h-12 w-12 rounded-[1.15rem] object-cover'}
        src={businessConfig.brand.logoSrc}
      />
      <div className="min-w-0">
        <p className="text-base font-semibold tracking-[0.16em] text-white">{businessConfig.companyName}</p>
        <p className="text-xs text-white/68">{copy.brand.descriptor}</p>
      </div>
    </div>
  )
}

export default Logo
