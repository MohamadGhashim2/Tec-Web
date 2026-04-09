import { cn } from '../../lib/cn'
import Icon from './Icon'

const variantClasses = {
  primary:
    'bg-[var(--color-accent)] text-white shadow-[0_20px_50px_-26px_rgba(15,103,207,0.9)] hover:bg-[var(--color-accent-strong)]',
  secondary:
    'border border-white/18 bg-white/10 text-white hover:bg-white/16',
  outline:
    'border border-[var(--color-line-strong)] bg-white/90 text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
  dark: 'bg-[var(--color-charcoal)] text-white hover:bg-[#050c16]',
  whatsapp: 'bg-[var(--color-whatsapp)] text-white hover:bg-[#12833d]',
}

const sizeClasses = {
  md: 'min-h-11 px-5 text-sm',
  lg: 'min-h-12 px-6 text-sm sm:text-[0.95rem]',
}

function Button({
  children,
  className,
  disabled = false,
  href,
  icon,
  iconPosition = 'end',
  size = 'md',
  target,
  rel,
  variant = 'primary',
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]',
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'cursor-not-allowed opacity-55 hover:translate-y-0',
    className,
  )

  const content = (
    <>
      {icon && iconPosition === 'start' ? <Icon className="size-4.5" name={icon} /> : null}
      <span>{children}</span>
      {icon && iconPosition === 'end' ? <Icon className="size-4.5" name={icon} /> : null}
    </>
  )

  if (href && !disabled) {
    return (
      <a className={classes} href={href} rel={rel} target={target} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} disabled={disabled} type="button" {...props}>
      {content}
    </button>
  )
}

export default Button
