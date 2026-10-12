/** Site config */
export const site = {
  name: 'ChatGPT * OpenPlus',
  domain: 'chatgptopenplus.com',
  tagline: 'ChatGPT 订阅代充服务',
  description:
    '面向个人与团队的 ChatGPT 订阅代充通道。选择方案后跳转支付，由专业客服完成开通。',

  checkout: {
    plus: {
      label: 'ChatGPT Plus',
      subtitle: '标准订阅 · 质保 30 天',
      priceLabel: '¥135',
      url: 'https://wzyp.cn/item/mfu1l8',
    },
    pro5x: {
      label: 'ChatGPT Pro 100 美元',
      subtitle: '更高额度 · 质保 30 天',
      priceLabel: '¥700',
      url: 'https://wzyp.cn/item/cjmxxw',
    },
    pro20x: {
      label: 'ChatGPT Pro 200 美元',
      subtitle: '旗舰额度 · 质保 30 天',
      priceLabel: '¥1400',
      url: 'https://wzyp.cn/item/1t7aee',
    },
  },

  claude: {
    pro: {
      label: 'Claude Pro',
      url: 'https://wzyp.cn/item/195ckl',
    },
  },

  support: {
    email: 'support@chatgptopenplus.com',
    hours: '工作日与周末均受理 · 通常 24 小时内回复',
  },

  agents: {
    contact: 'support@chatgptopenplus.com',
  },
} as const

export type CheckoutKey = keyof typeof site.checkout
