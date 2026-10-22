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
    title: 'ChatGPT 与 Claude 使用、订阅及安全指南 | ChatGPT * OpenPlus',
    description: 'ChatGPT 与 Claude 套餐选择、订阅管理、支付失败排查、API 区别和第三方充值安全指南。',
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

const additionalArticles = [
  {
    slug: 'chatgpt-plus-vs-pro-plans',
    title: 'ChatGPT Plus 与 Pro 100/200/500 怎么选？先算清使用强度',
    seoTitle: 'ChatGPT Plus 与 Pro 100/200/500 怎么选？套餐对比指南',
    description: '对比 ChatGPT Plus、Pro 100、Pro 200 和 Pro 500 的适用人群、升级信号与选择方法，避免为用不到的额度付费。',
    faqs: [
      ['Plus 不够用就应该直接上 Pro 500 吗？', '不建议。先确认限制是否持续影响工作，再逐档比较；只有能量化高用量和速度价值时，Pro 500 才更合理。'],
      ['开通 Plus 会赠送 API 额度吗？', '不会。ChatGPT 订阅和 OpenAI API 是分开的计费体系。'],
    ],
  },
  {
    slug: 'chatgpt-subscription-renewal-status',
    title: 'ChatGPT Plus 怎么开通、续费？订阅状态在哪里检查',
    seoTitle: 'ChatGPT Plus 开通、续费与订阅状态检查教程',
    description: '从确认账号、完成付款到检查 ChatGPT Plus 状态、管理续费和处理已扣款未生效，按步骤排查订阅问题。',
    faqs: [
      ['卸载 ChatGPT 会取消续费吗？', '不会。取消续费需要回到原购买渠道的订阅管理页面操作。'],
      ['付款成功后为什么仍显示免费版？', '常见原因是登录了另一个账号、订单仍在处理，或应用未刷新订阅状态。先核对账号和订单，再恢复购买或联系原渠道。'],
    ],
  },
  {
    slug: 'chatgpt-plus-vs-openai-api',
    title: 'ChatGPT Plus 和 OpenAI API 有什么区别？费用、用途一次讲清',
    seoTitle: 'ChatGPT Plus 和 OpenAI API 的区别：会员不包含 API 额度',
    description: '说明 ChatGPT Plus 与 OpenAI API 在入口、用途、计费、API Key 和适用场景上的区别，避免开了会员却无法调用 API。',
    faqs: [
      ['ChatGPT Plus 包含 OpenAI API 额度吗？', '不包含。API 使用量需要按照 OpenAI API 的定价单独结算。'],
      ['只有聊天需求，需要创建 API Key 吗？', '通常不需要。直接使用 ChatGPT 产品即可，API 更适合程序化调用。'],
    ],
  },
  {
    slug: 'chatgpt-payment-failed',
    title: 'ChatGPT Plus 支付失败怎么办？按账号、订单、支付逐层排查',
    seoTitle: 'ChatGPT Plus 支付失败怎么办？扣款未生效排查指南',
    description: 'ChatGPT Plus 无法付款、支付失败或扣款后未生效时，按账号、订单、支付渠道和订阅状态逐步排查，避免重复扣款。',
    faqs: [
      ['支付失败后可以马上连续重试吗？', '不建议。先确认旧订单和交易状态，连续重试可能造成多个待处理订单或重复扣款。'],
      ['银行卡扣款了就代表 Plus 开通成功吗？', '不一定。还需要确认订单状态成功，并在正确的 ChatGPT 账号中看到套餐已经生效。'],
    ],
  },
  {
    slug: 'claude-pro-5x-kyc-guide',
    title: 'Claude Pro、5X、KYC 怎么选？先看清商品名称与交付边界',
    seoTitle: 'Claude Pro、Claude 5X、Claude KYC 区别与选择指南',
    description: '说明 Claude Pro、Claude 5X 和 Claude KYC 的命名边界、适用场景、交付与隐私检查方法，避免仅凭商品标签下单。',
    faqs: [
      ['Claude 5X 是 Anthropic 官方套餐名称吗？', '不是面向所有用户统一展示的标准套餐名称，它是本站合作商品的区分标签，具体权益以商品页为准。'],
      ['Claude KYC 一定需要提供身份证件吗？', '不能只凭名称判断。应先查看商品页并向处理方确认需要哪些资料、用途和隐私规则，无法确认时不要提交。'],
    ],
  },
  {
    slug: 'chatgpt-vs-claude',
    title: 'ChatGPT 和 Claude 怎么选？用真实任务做一次有效对比',
    seoTitle: 'ChatGPT 和 Claude 怎么选？写作、编程与长文档对比方法',
    description: '不靠模型榜单，用写作、编程、长文档和日常工作流的真实任务，对比 ChatGPT 与 Claude，找到更适合自己的工具。',
    faqs: [
      ['ChatGPT 和 Claude 哪个写作更好？', '没有对所有任务都成立的答案。应使用你自己的题材、语气和格式要求测试，并比较达到可交付结果的返工次数。'],
      ['需要同时订阅 ChatGPT 和 Claude 吗？', '多数个人用户不需要。先订阅覆盖主要工作流的一边，确认另一边能持续解决明确缺口后再考虑。'],
    ],
  },
  {
    slug: 'third-party-ai-recharge-safety',
    title: '第三方 AI 充值安全吗？下单前后的完整检查清单与 FAQ',
    seoTitle: '第三方 ChatGPT、Claude 充值安全检查清单与常见问题',
    description: '第三方 ChatGPT 或 Claude 充值前，检查账号归属、敏感凭据、支付主体、交付方式、续费与售后规则，降低账号和付款风险。',
    faqs: [
      ['第三方充值需要提供 ChatGPT 或 Claude 密码吗？', '不应提供。密码、验证码、API Key 和会话令牌都是敏感凭据。'],
      ['付款后一直没有交付怎么办？', '保存订单号和付款凭证，先查看承诺的交付时限，再通过原订单页或已验证的官方支持渠道处理。'],
    ],
  },
]

for (const article of additionalArticles) {
  const path = `/blog/${article.slug}`
  pages.push({
    path,
    title: `${article.seoTitle} | ChatGPT * OpenPlus`,
    description: article.description,
    type: 'article',
    publishedAt: '2026-10-22',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          headline: article.title,
          description: article.description,
          datePublished: '2026-10-22',
          dateModified: '2026-10-22',
          mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}${path}` },
          image: imageUrl,
          author: { '@type': 'Organization', name: 'ChatGPT * OpenPlus' },
          publisher: { '@type': 'Organization', name: 'ChatGPT * OpenPlus' },
          inLanguage: 'zh-CN',
        },
        {
          '@type': 'FAQPage',
          mainEntity: article.faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
        },
      ],
    },
  })
}

for (const page of pages) {
  const outputPath = new URL(`../dist${page.path}/index.html`, import.meta.url)
  await mkdir(new URL('.', outputPath), { recursive: true })
  await writeFile(outputPath, renderPage(page))
}
