import { ar } from './translations/ar'
import { tr } from './translations/tr'

export const translations = {
  tr,
  ar,
}

export const defaultLanguage = 'tr'
export const languageStorageKey = 'tec-language'

export const detectBrowserLanguage = () => {
  if (typeof window === 'undefined') {
    return defaultLanguage
  }

  return window.navigator.language?.toLowerCase().startsWith('ar') ? 'ar' : defaultLanguage
}
