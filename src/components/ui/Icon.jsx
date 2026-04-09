import { businessConfig } from '../../content/business'
import { cn } from '../../lib/cn'

const iconMap = {
  phone: (
    <>
      <path d="M6.9 3.5h2.8l1.3 4.1-1.7 1.8a16.7 16.7 0 0 0 5.3 5.3l1.8-1.7 4.1 1.3v2.8c0 .7-.5 1.3-1.2 1.4-.6.1-1.3.2-2 .2A15.5 15.5 0 0 1 4.5 6.7c0-.7.1-1.4.2-2 .1-.7.7-1.2 1.4-1.2Z" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 20a7.8 7.8 0 0 0 3.9-1l4.1 1-1.1-4A8 8 0 1 0 12 20Z" />
      <path d="M9.5 8.6c.2-.4.4-.4.7-.4h.6c.2 0 .4 0 .5.4l.8 1.8c.1.2.1.4 0 .6l-.6 1c-.1.1-.1.3 0 .5.3.5 1.1 1.8 2.7 2.4.2.1.4.1.5 0l.9-.9c.2-.2.4-.2.6-.1l1.8.8c.3.1.4.3.4.5v.6c0 .3-.1.5-.4.7-.5.3-1 .5-1.7.5-.8 0-1.7-.2-2.7-.8a9.3 9.3 0 0 1-4.2-5.4c-.2-.8-.1-1.5.1-2Z" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  arrowDown: (
    <>
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </>
  ),
  location: (
    <>
      <path d="M12 20s6-4.8 6-10a6 6 0 1 0-12 0c0 5.2 6 10 6 10Z" />
      <path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 2.5" />
    </>
  ),
  instagram: (
    <>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.3" />
      <path d="M16.8 7.6h.01" />
    </>
  ),
  book: (
    <>
      <path d="M6 5.5A2.5 2.5 0 0 1 8.5 3H19v16H8.5A2.5 2.5 0 0 0 6 21V5.5Z" />
      <path d="M6 5.5A2.5 2.5 0 0 1 8.5 8H19" />
      <path d="M10 7h5" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.7 5.1a3.3 3.3 0 0 0 4.2 4.2l-7.4 7.4a1.8 1.8 0 0 1-2.5-2.5l7.4-7.4a3.3 3.3 0 0 0-1.7-1.7Z" />
      <path d="m7 14-2 2" />
    </>
  ),
  gear: (
    <>
      <path d="m12 8.3.9-1.8 2 .4.4 2 1.8.9-1 1.7 1 1.7-1.8.9-.4 2-2 .4L12 15.7l-1.8.8-2-.4-.4-2-1.8-.9 1-1.7-1-1.7 1.8-.9.4-2 2-.4L12 8.3Z" />
      <circle cx="12" cy="12" r="2.3" />
    </>
  ),
  diagnostics: (
    <>
      <path d="M5 16a7 7 0 1 1 14 0" />
      <path d="m12 12 3.5-3.5" />
      <path d="M12 16h.01" />
      <path d="M6.5 16h11" />
    </>
  ),
  oil: (
    <>
      <path d="M12 3.8c2.9 3.8 4.4 6 4.4 8a4.4 4.4 0 1 1-8.8 0c0-2 1.5-4.2 4.4-8Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.8 18 6v4.8c0 4-2.4 6.6-6 8.4-3.6-1.8-6-4.4-6-8.4V6l6-2.2Z" />
      <path d="m9.4 12 1.7 1.7 3.5-3.6" />
    </>
  ),
  spark: (
    <>
      <path d="m13.2 3.8-4.9 7h3.2l-.7 5.4 5-7.1h-3.1l.5-5.3Z" />
    </>
  ),
  accessibility: (
    <>
      <circle cx="12" cy="5.5" r="1.8" />
      <path d="M12 8v5.4" />
      <path d="M12 10.2H9.1" />
      <path d="m12 13.4 3.4 2.6" />
      <path d="m12 13.4-2.6 4" />
      <path d="M10.8 20a5.5 5.5 0 1 1 5-8" />
    </>
  ),
  garage: (
    <>
      <path d="M4 10.5 12 4l8 6.5v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8Z" />
      <path d="M8 19v-4.5h8V19" />
      <path d="M9 11h6" />
    </>
  ),
  card: (
    <>
      <rect x="3.8" y="6" width="16.4" height="12" rx="2.2" />
      <path d="M3.8 10.2h16.4" />
      <path d="M7.4 14.5h3.2" />
    </>
  ),
  scale: (
    <>
      <path d="M12 5v14" />
      <path d="M7 8h10" />
      <path d="M6.5 19h11" />
      <path d="m7.3 8-3 4.5h6L7.3 8Z" />
      <path d="m16.7 8-3 4.5h6L16.7 8Z" />
    </>
  ),
  star: (
    <>
      <path
        d="m12 3.8 2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8L12 3.8Z"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),
}

function Icon({ name, className }) {
  if (name === 'whatsapp') {
    return (
      <img
        alt=""
        aria-hidden="true"
        className={cn('size-5 shrink-0 object-contain brightness-0 invert', className)}
        src={businessConfig.assets.whatsappIconSrc}
      />
    )
  }

  return (
    <svg
      aria-hidden="true"
      className={cn('size-5 shrink-0', className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {iconMap[name]}
    </svg>
  )
}

export default Icon
