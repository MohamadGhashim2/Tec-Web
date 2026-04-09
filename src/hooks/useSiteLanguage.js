import { startTransition, useEffect, useState } from 'react'
import {
  defaultLanguage,
  detectBrowserLanguage,
  languageStorageKey,
  translations,
} from '../i18n'

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return defaultLanguage
  }

  const storedLanguage = window.localStorage.getItem(languageStorageKey)

  if (storedLanguage && translations[storedLanguage]) {
    return storedLanguage
  }

  return detectBrowserLanguage()
}

export const useSiteLanguage = () => {
  const [language, setLanguageState] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = translations[language].dir
    window.localStorage.setItem(languageStorageKey, language)
  }, [language])

  const setLanguage = (nextLanguage) => {
    if (!translations[nextLanguage] || nextLanguage === language) {
      return
    }

    startTransition(() => {
      setLanguageState(nextLanguage)
    })
  }

  return {
    language,
    setLanguage,
    copy: translations[language],
  }
}
