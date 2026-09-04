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
  const isBlog = pathname === '/blog'
  const isBlogArticle = pathname === '/blog/chatgpt-plus-worth-it'
  const route = pathname === '/order' ? t.order : pathname === '/support' ? t.support : pathname === '/agents' ? t.agents : pathname === '/privacy' ? t.privacy : pathname === '/terms' ? t.terms : t.home
  const title = isBlogArticle ? `ChatGPT Plus 到底值不值得开？免费版、Plus 与 API 的区别 | ${site.name}`
    : isBlog ? `ChatGPT 使用指南与订阅说明 | ${site.name}`
      : pathname === '/' ? `${t.home.title} | ${site.name}` : pathname === '/claude' ? `${t.nav.claude} | ${site.name}` : pathname === '/self-recharge' ? `${t.nav.selfRecharge} | ${site.name}` : pathname === '/help' ? `${t.nav.help} | ${site.name}` : `${route.title} | ${site.name}`
  const description = isBlogArticle ? '免费版够不够用、ChatGPT Plus 真正的价值、适合人群，以及 Plus 与 API 的区别，一篇讲清楚。'
    : isBlog ? '围绕 ChatGPT 的日常使用、订阅选择与开通注意事项，整理清楚、可核对的内容。'
    : pathname === '/' ? t.home.intro
    : pathname === '/order' || pathname === '/self-recharge' || pathname === '/help' ? t.order.intro
      : pathname === '/support' ? t.support.desc
        : pathname === '/agents' ? t.agents.desc
          : pathname === '/privacy' ? t.privacy.desc
            : t.terms.desc
  const canonicalPath = `https://${site.domain}${pathname === '/' ? '/' : pathname}`
  const canonical = isBlogArticle ? canonicalPath : `${canonicalPath}${language === 'zh-CN' ? '' : `?lang=${language}`}`

  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical)
    setMeta('meta[property="og:type"]', 'property', 'og:type', isBlogArticle ? 'article' : 'website')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)

    const publishedTime = document.head.querySelector<HTMLMetaElement>('meta[property="article:published_time"]')
    if (isBlogArticle) setMeta('meta[property="article:published_time"]', 'property', 'article:published_time', '2026-09-04')
    else publishedTime?.remove()

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalLink) { canonicalLink = document.createElement('link'); canonicalLink.rel = 'canonical'; document.head.appendChild(canonicalLink) }
    canonicalLink.href = canonical

    document.head.querySelectorAll('link[data-hreflang]').forEach((link) => link.remove())
    if (!isBlogArticle) {
      languageOptions.forEach((option) => {
        const link = document.createElement('link')
        link.rel = 'alternate'
        link.hreflang = option.value === 'zh-CN' ? 'zh-Hans' : option.value
        link.href = `${canonicalPath}${option.value === 'zh-CN' ? '' : `?lang=${option.value}`}`
        link.dataset.hreflang = 'true'
        document.head.appendChild(link)
      })
    }

    let schema = document.head.querySelector<HTMLScriptElement>('#website-schema')
    if (!schema) { schema = document.createElement('script'); schema.id = 'website-schema'; schema.type = 'application/ld+json'; document.head.appendChild(schema) }
    schema.textContent = JSON.stringify(isBlogArticle
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'ChatGPT Plus 到底值不值得开？用了这么久，我觉得很多人一开始就搞错了',
          description,
          datePublished: '2026-09-04',
          dateModified: '2026-09-04',
          mainEntityOfPage: canonical,
          author: { '@type': 'Organization', name: site.name },
          publisher: { '@type': 'Organization', name: site.name },
          inLanguage: 'zh-CN',
        }
      : { '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: canonical, inLanguage: language })
  }, [canonical, canonicalPath, description, isBlogArticle, language, title])

  return null
}
