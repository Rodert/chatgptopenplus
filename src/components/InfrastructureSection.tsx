import { useI18n } from '../lib/i18n'

const copy = {
  'zh-CN': {
    eyebrow: 'CLOUDFLARE EDGE NETWORK', title: '更快、更稳、更安心的访问体验',
    text: '站点通过 Cloudflare 全球边缘网络提供服务，以性能与安全能力守护每一次访问。',
    items: [['全球边缘网络', '通过靠近用户的边缘节点提供更快速、稳定的页面访问。'], ['DDoS 防护', '依托 Cloudflare 的网络防护能力，应对异常流量与常见攻击。'], ['HTTPS 加密', '采用 TLS 加密连接，减少传输过程中信息被窃取或篡改的风险。']],
  },
  en: {
    eyebrow: 'CLOUDFLARE EDGE NETWORK', title: 'Faster, steadier, more secure access',
    text: 'The site is served through Cloudflare’s global edge network, with performance and security features for every visit.',
    items: [['Global edge network', 'Edge locations closer to visitors help deliver fast and reliable page access.'], ['DDoS protection', 'Cloudflare network defenses help address abnormal traffic and common attacks.'], ['HTTPS encryption', 'TLS-encrypted connections reduce the risk of data interception or tampering in transit.']],
  },
  ru: {
    eyebrow: 'CLOUDFLARE EDGE NETWORK', title: 'Быстрый, стабильный и защищенный доступ',
    text: 'Сайт работает через глобальную edge-сеть Cloudflare с функциями производительности и безопасности для каждого посещения.',
    items: [['Глобальная edge-сеть', 'Близкие к пользователю узлы помогают обеспечить быстрый и надежный доступ.'], ['Защита от DDoS', 'Сетевая защита Cloudflare помогает противодействовать аномальному трафику и распространенным атакам.'], ['HTTPS-шифрование', 'TLS-соединения снижают риск перехвата или подмены данных при передаче.']],
  },
} as const

export function InfrastructureSection() {
  const { language } = useI18n()
  const text = copy[language]

  return (
    <section className="border-t border-mint-line bg-mint/45">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand">{text.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">{text.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">{text.text}</p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {text.items.map(([title, description], index) => (
            <div key={title} className="border-t border-mint-line pt-5">
              <p className="font-display text-xs font-semibold tracking-[0.18em] text-brand">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
