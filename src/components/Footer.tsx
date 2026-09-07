import { Link } from 'react-router-dom'
import { site } from '../config/site'
import { useI18n } from '../lib/i18n'

export function Footer() {
  const year = new Date().getFullYear()
  const { language, t } = useI18n()
  const paymentLabel = language === 'zh-CN' ? '支持支付方式' : language === 'ru' ? 'Поддерживаемые способы оплаты' : 'Supported payment methods'
  const maintenanceLabel = language === 'zh-CN' ? '维护中' : language === 'ru' ? 'На обслуживании' : 'Maintenance'
  const wechatSupportLabel = language === 'zh-CN' ? '微信客服' : language === 'ru' ? 'Поддержка WeChat' : 'WeChat support'
  const footerLinks = [
    { to: '/blog', label: t.nav.blog }, { to: '/help', label: t.nav.help }, { to: '/privacy', label: t.nav.privacy }, { to: '/terms', label: t.nav.terms }, { to: '/support', label: t.nav.support }, { to: '/agents', label: t.nav.partners },
  ]

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-base font-semibold tracking-tight text-ink">{site.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{t.footer.tagline}</p>
          <div className="mt-5 flex flex-wrap items-start gap-4">
            <a
              href={`mailto:${site.support.email}`}
              className="pt-1 text-sm text-accent transition hover:text-accent-deep"
            >
              {site.support.email}
            </a>
            <figure className="w-24 shrink-0">
              <a href="/support-wechat.png" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-md border border-line bg-white transition hover:border-brand/50">
                <img src="/support-wechat.png" alt={wechatSupportLabel} className="block w-full" />
              </a>
              <figcaption className="mt-1 text-center text-xs text-muted">{wechatSupportLabel}</figcaption>
            </figure>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-muted transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-sm font-semibold text-ink">{paymentLabel}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted">
            {[['/payment-alipay.svg', '支付宝'], ['/payment-wechat.svg', '微信支付'], ['/payment-usdt.svg', 'USDT']].map(([icon, name]) => (
              <span key={name} className="inline-flex items-center gap-2"><img src={icon} alt="" className="h-5 w-5" />{name}{name === 'USDT' ? <span className="rounded-full border border-[#f4ca69] bg-[#fff9e9] px-1.5 py-0.5 text-[10px] font-semibold text-[#a86500]">{maintenanceLabel}</span> : null}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {site.name}
          </p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  )
}
