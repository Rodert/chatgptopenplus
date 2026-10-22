import { mkdir, readFile, writeFile } from 'node:fs/promises'

const siteUrl = 'https://chatgptopenplus.com'
const imageUrl = `${siteUrl}/og-image.png`
const source = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

function renderPage({ title, description, path, schema, type = 'website', publishedAt }) {
  const canonical = `${siteUrl}${path}`
  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}">`,
    '<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">',
    `<link rel="canonical" href="${canonical}">`,
    `<meta property="og:type" content="${type}">`,
    '<meta property="og:site_name" content="ChatGPT * OpenPlus">',
    `<meta property="og:title" content="${escapeHtml(title)}">`,
    `<meta property="og:description" content="${escapeHtml(description)}">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:image" content="${imageUrl}">`,
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    '<meta property="og:locale" content="zh_CN">',
    ...(publishedAt ? [`<meta property="article:published_time" content="${publishedAt}">`, `<meta property="article:modified_time" content="${publishedAt}">`] : []),
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${escapeHtml(title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(description)}">`,
    `<meta name="twitter:image" content="${imageUrl}">`,
    `<script id="website-schema" type="application/ld+json">${JSON.stringify(schema)}</script>`,
  ].join('\n    ')

  return source
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/<meta name="description"[^>]*>\s*/i, '')
    .replace(/<meta name="robots"[^>]*>\s*/i, '')
    .replace(/<meta property="og:type"[^>]*>\s*/i, '')
    .replace(/<meta property="og:site_name"[^>]*>\s*/i, '')
    .replace(/<meta property="og:title"[^>]*>\s*/i, '')
    .replace(/<meta property="og:description"[^>]*>\s*/i, '')
    .replace(/<meta property="og:url"[^>]*>\s*/i, '')
    .replace(/<meta property="og:image"[^>]*>\s*/i, '')
    .replace(/<meta property="og:image:width"[^>]*>\s*/i, '')
    .replace(/<meta property="og:image:height"[^>]*>\s*/i, '')
    .replace(/<meta property="og:locale"[^>]*>\s*/i, '')
    .replace(/<meta name="twitter:card"[^>]*>\s*/i, '')
    .replace(/<meta name="twitter:title"[^>]*>\s*/i, '')
    .replace(/<meta name="twitter:description"[^>]*>\s*/i, '')
    .replace(/<meta name="twitter:image"[^>]*>\s*/i, '')
    .replace(/<link rel="canonical"[^>]*>\s*/i, '')
    .replace('</head>', `    ${tags}\n  </head>`)
}

const pages = [
  {
    path: '/blog',
    title: 'ChatGPT 使用指南与订阅说明 | ChatGPT * OpenPlus',
    description: '围绕 ChatGPT 的日常使用、订阅选择与开通注意事项，整理清楚、可核对的内容。',
    schema: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'ChatGPT 使用指南与订阅说明', url: `${siteUrl}/blog`, inLanguage: 'zh-CN' },
  },
  {
    path: '/blog/chatgpt-plus-subscription-guide',
    title: 'ChatGPT Plus 怎么开通？套餐、API、Claude 与支付指南 | ChatGPT * OpenPlus',
    description: 'ChatGPT Plus 与 Pro 怎么选、如何开通续费、Plus 和 API 的区别、支付失败排查、Claude 套餐选择及第三方充值安全事项。',
    type: 'article',
    publishedAt: '2026-10-22',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          headline: 'ChatGPT Plus 怎么开通？套餐区别、API、Claude 与支付问题完整指南',
          description: 'ChatGPT Plus 与 Pro 怎么选、如何开通续费、Plus 和 API 的区别、支付失败排查、Claude 套餐选择及第三方充值安全事项。',
          datePublished: '2026-10-22',
          dateModified: '2026-10-22',
          mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/chatgpt-plus-subscription-guide` },
          image: imageUrl,
          author: { '@type': 'Organization', name: 'ChatGPT * OpenPlus' },
          publisher: { '@type': 'Organization', name: 'ChatGPT * OpenPlus' },
          inLanguage: 'zh-CN',
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            ['ChatGPT Plus 开通后可以使用 API 吗？', '不能直接抵扣 API 调用费用。ChatGPT 订阅与 OpenAI API 是两套计费体系，API Key 的用量需要按 API 价格单独结算。'],
            ['ChatGPT Plus、Pro 100、Pro 200 和 Pro 500 怎么选？', '先按真实使用频率选择。偶尔对话先用免费版；日常高频使用可看 Plus；只有在 Plus 的额度或速度持续影响工作时，再比较 Pro 档位。'],
            ['第三方充值需要提供 ChatGPT 密码吗？', '不应提供。密码、短信验证码、邮箱验证码、API Key 和会话令牌都属于敏感凭据。'],
          ].map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
        },
      ],
    },
  },
  {
    path: '/blog/chatgpt-plus-worth-it',
    title: 'ChatGPT Plus 到底值不值得开？免费版、Plus 与 API 的区别 | ChatGPT * OpenPlus',
    description: '免费版够不够用、ChatGPT Plus 真正的价值、适合人群，以及 Plus 与 API 的区别，一篇讲清楚。',
    type: 'article',
    publishedAt: '2026-09-04',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'ChatGPT Plus 到底值不值得开？用了这么久，我觉得很多人一开始就搞错了',
      description: '免费版够不够用、ChatGPT Plus 真正的价值、适合人群，以及 Plus 与 API 的区别，一篇讲清楚。',
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/chatgpt-plus-worth-it` },
      image: imageUrl,
      author: { '@type': 'Organization', name: 'ChatGPT * OpenPlus' },
      publisher: { '@type': 'Organization', name: 'ChatGPT * OpenPlus' },
      inLanguage: 'zh-CN',
    },
  },
]

for (const page of pages) {
  const outputPath = new URL(`../dist${page.path}/index.html`, import.meta.url)
  await mkdir(new URL('.', outputPath), { recursive: true })
  await writeFile(outputPath, renderPage(page))
}
