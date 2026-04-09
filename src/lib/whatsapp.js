const nonDigitRegex = /\D/g

export const normalizePhoneNumber = (value) => value.replace(nonDigitRegex, '')

export const buildWhatsAppUrl = (phoneNumber, message) =>
  `https://wa.me/${normalizePhoneNumber(phoneNumber)}?text=${encodeURIComponent(message)}`

export const isConfigPlaceholder = (value) =>
  typeof value === 'string' && value.startsWith('TODO_')
