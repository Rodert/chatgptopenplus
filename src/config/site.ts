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
      priceLabel: '¥145',
      url: 'https://pay.ldxp.cn/item/mfu1l8',
    },
    pro5x: {
      label: 'ChatGPT Pro 5x',
      subtitle: '更高额度 · 质保 30 天',
      priceLabel: '¥750',
      url: 'https://pay.ldxp.cn/item/cjmxxw',
    },
    pro20x: {
      label: 'ChatGPT Pro 20x',
      subtitle: '旗舰额度 · 质保 30 天',
      priceLabel: '¥1450',
      url: 'https://pay.ldxp.cn/item/1t7aee',
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
