import { useEffect } from 'react'
import { buildLocalBusinessSchema } from '../lib/schema'

const upsertMeta = (attribute, key, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

const upsertLink = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

const upsertStructuredData = (id, payload) => {
  let element = document.head.querySelector(`script[data-schema="${id}"]`)

  if (!element) {
    element = document.createElement('script')
    element.type = 'application/ld+json'
    element.dataset.schema = id
    document.head.appendChild(element)
  }

  element.textContent = JSON.stringify(payload)
}

export const useDocumentMetadata = ({ businessConfig, copy, language }) => {
  useEffect(() => {
    const pageUrl = window.location.href.split('#')[0]
    const imageUrl = new URL(businessConfig.brand.logoSrc, window.location.origin).href

    document.title = copy.seo.title

    upsertMeta('name', 'description', copy.seo.description)
    upsertMeta('name', 'robots', 'index,follow,max-image-preview:large')
    upsertMeta('name', 'theme-color', '#081421')
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', businessConfig.companyName)
    upsertMeta('property', 'og:title', copy.seo.title)
    upsertMeta('property', 'og:description', copy.seo.description)
    upsertMeta('property', 'og:url', pageUrl)
    upsertMeta('property', 'og:image', imageUrl)
    upsertMeta('property', 'og:locale', copy.seo.ogLocale)
    upsertMeta(
      'property',
      'og:locale:alternate',
      language === 'tr' ? 'ar_AR' : 'tr_TR',
    )
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', copy.seo.title)
    upsertMeta('name', 'twitter:description', copy.seo.description)
    upsertMeta('name', 'twitter:image', imageUrl)
    upsertLink('canonical', pageUrl)

    upsertStructuredData(
      'tec-auto-repair',
      buildLocalBusinessSchema({
        businessConfig,
        copy,
        pageUrl,
        imageUrl,
      }),
    )
  }, [businessConfig, copy, language])
}
