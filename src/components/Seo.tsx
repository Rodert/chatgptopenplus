import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../config/site'
import { languageOptions, useI18n } from '../lib/i18n'

function setMeta(selector: string, attribute: 'name' | 'property', value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }
  element.content = content
}

export function Seo() {
  const { pathname } = useLocation()
  const { language, t } = useI18n()
  const route = pathname === '/order' ? t.order : pathname === '/support' ? t.support : pathname === '/agents' ? t.agents : pathname === '/privacy' ? t.privacy : pathname === '/terms' ? t.terms : t.home
  const title = pathname === '/' ? `${t.home.title} | ${site.name}` : pathname === '/self-recharge' ? `${t.nav.selfRecharge} | ${site.name}` : pathname === '/help' ? `${t.nav.help} | ${site.name}` : `${route.title} | ${site.name}`
  const description = pathname === '/' ? t.home.intro
    : pathname === '/order' || pathname === '/self-recharge' || pathname === '/help' ? t.order.intro
      : pathname === '/support' ? t.support.desc
        : pathname === '/agents' ? t.agents.desc
          : pathname === '/privacy' ? t.privacy.desc
            : t.terms.desc
  const canonicalPath = `https://${site.domain}${pathname === '/' ? '/' : pathname}`
  const canonical = `${canonicalPath}${language === 'zh-CN' ? '' : `?lang=${language}`}`

  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalLink) { canonicalLink = document.createElement('link'); canonicalLink.rel = 'canonical'; document.head.appendChild(canonicalLink) }
    canonicalLink.href = canonical

    document.head.querySelectorAll('link[data-hreflang]').forEach((link) => link.remove())
    languageOptions.forEach((option) => {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hreflang = option.value === 'zh-CN' ? 'zh-Hans' : option.value
      link.href = `${canonicalPath}${option.value === 'zh-CN' ? '' : `?lang=${option.value}`}`
      link.dataset.hreflang = 'true'
      document.head.appendChild(link)
    })

    let schema = document.head.querySelector<HTMLScriptElement>('#website-schema')
    if (!schema) { schema = document.createElement('script'); schema.id = 'website-schema'; schema.type = 'application/ld+json'; document.head.appendChild(schema) }
    schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: canonical, inLanguage: language })
  }, [canonical, canonicalPath, description, language, title])

  return null
}
