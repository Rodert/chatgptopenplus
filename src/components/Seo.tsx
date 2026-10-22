import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../config/site'
import { findBlogMeta, findGuideArticle } from '../content/blogArticles'
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
  const articleSlug = pathname.startsWith('/blog/') ? pathname.slice('/blog/'.length) : undefined
  const articleMeta = findBlogMeta(articleSlug)
  const guideArticle = findGuideArticle(articleSlug)
  const isBlogArticle = articleMeta !== undefined
  const isBlogContent = isBlog || isBlogArticle
  const socialImage = `https://${site.domain}/og-image.png`
  const route = pathname === '/order' ? t.order : pathname === '/support' ? t.support : pathname === '/agents' ? t.agents : pathname === '/privacy' ? t.privacy : pathname === '/terms' ? t.terms : t.home
  const title = articleMeta ? `${articleMeta.seoTitle} | ${site.name}`
    : isBlog ? `ChatGPT 与 Claude 使用、订阅及安全指南 | ${site.name}`
      : pathname === '/' ? `${t.home.title} | ${site.name}` : pathname === '/claude' ? `${t.nav.claude} | ${site.name}` : pathname === '/self-recharge' ? `${t.nav.selfRecharge} | ${site.name}` : pathname === '/help' ? `${t.nav.help} | ${site.name}` : `${route.title} | ${site.name}`
  const description = articleMeta ? articleMeta.description
    : isBlog ? 'ChatGPT 与 Claude 套餐选择、订阅管理、支付失败排查、API 区别和第三方充值安全指南。'
    : pathname === '/' ? t.home.intro
    : pathname === '/order' || pathname === '/self-recharge' || pathname === '/help' ? t.order.intro
      : pathname === '/support' ? t.support.desc
        : pathname === '/agents' ? t.agents.desc
          : pathname === '/privacy' ? t.privacy.desc
            : t.terms.desc
  const canonicalPath = `https://${site.domain}${pathname === '/' ? '/' : pathname}`
  const canonical = isBlogContent ? canonicalPath : `${canonicalPath}${language === 'zh-CN' ? '' : `?lang=${language}`}`

  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical)
    setMeta('meta[property="og:type"]', 'property', 'og:type', isBlogArticle ? 'article' : 'website')
    setMeta('meta[property="og:image"]', 'property', 'og:image', socialImage)
    setMeta('meta[property="og:image:width"]', 'property', 'og:image:width', '1200')
    setMeta('meta[property="og:image:height"]', 'property', 'og:image:height', '630')
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', language === 'zh-CN' ? 'zh_CN' : language)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', socialImage)
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')

    const publishedTime = document.head.querySelector<HTMLMetaElement>('meta[property="article:published_time"]')
    const modifiedTime = document.head.querySelector<HTMLMetaElement>('meta[property="article:modified_time"]')
    if (articleMeta) {
      setMeta('meta[property="article:published_time"]', 'property', 'article:published_time', articleMeta.date)
      setMeta('meta[property="article:modified_time"]', 'property', 'article:modified_time', articleMeta.date)
    } else {
      publishedTime?.remove()
      modifiedTime?.remove()
    }

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalLink) { canonicalLink = document.createElement('link'); canonicalLink.rel = 'canonical'; document.head.appendChild(canonicalLink) }
    canonicalLink.href = canonical

    document.head.querySelectorAll('link[data-hreflang]').forEach((link) => link.remove())
    if (!isBlogContent) {
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
    const legacyGuideFaqs = articleSlug === 'chatgpt-plus-subscription-guide'
      ? [
          ['ChatGPT Plus 开通后可以使用 API 吗？', '不能直接抵扣 API 调用费用。ChatGPT 订阅与 OpenAI API 是两套计费体系，API Key 的用量需要按 API 价格单独结算。'],
          ['ChatGPT Plus、Pro 100、Pro 200 和 Pro 500 怎么选？', '先按真实使用频率选择。偶尔对话先用免费版；日常高频使用可看 Plus；只有在 Plus 的额度或速度持续影响工作时，再比较 Pro 档位。'],
          ['第三方充值需要提供 ChatGPT 密码吗？', '不应提供。密码、短信验证码、邮箱验证码、API Key 和会话令牌都属于敏感凭据。'],
        ] as Array<[string, string]>
      : undefined
    const articleFaqs = guideArticle?.faqs ?? legacyGuideFaqs

    schema.textContent = JSON.stringify(articleMeta
      ? {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BlogPosting',
              headline: articleMeta.title,
              description,
              datePublished: articleMeta.date,
              dateModified: articleMeta.date,
              mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
              image: socialImage,
              author: { '@type': 'Organization', name: site.name },
              publisher: { '@type': 'Organization', name: site.name },
              inLanguage: 'zh-CN',
            },
            ...(articleFaqs ? [{
              '@type': 'FAQPage',
              mainEntity: articleFaqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
            }] : []),
          ],
        }
      : isBlog
          ? { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'ChatGPT 使用指南与订阅说明', url: canonical, inLanguage: 'zh-CN' }
          : { '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: canonical, inLanguage: language })
  }, [articleMeta, articleSlug, canonical, canonicalPath, description, guideArticle, isBlog, isBlogArticle, isBlogContent, language, socialImage, title])

  return null
}
