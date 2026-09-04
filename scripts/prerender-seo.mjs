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
