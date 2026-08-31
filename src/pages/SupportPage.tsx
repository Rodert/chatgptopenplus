import { PageHero } from '../components/PageHero'
import { site } from '../config/site'

export function SupportPage() {
  return (
    <>
      <PageHero
        title="支持"
        description="如需帮助，请通过邮件联系。我们会在受理后尽快回复。"
      />
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="border-y border-line py-10">
          <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">Email</p>
          <a
            href={`mailto:${site.support.email}`}
            className="mt-4 block font-display text-2xl font-semibold tracking-tight text-ink transition hover:text-accent sm:text-3xl"
          >
            {site.support.email}
          </a>
          <p className="mt-4 text-sm text-muted">{site.support.hours}</p>
        </div>

        <div className="mt-10 space-y-4 text-sm leading-relaxed text-ink-soft">
          <p>邮件中建议附上：</p>
          <ul className="list-disc space-y-2 pl-5 text-muted">
            <li>支付订单号或付款截图</li>
            <li>下单时使用的联系邮箱</li>
            <li>问题说明与期望处理方式</li>
          </ul>
        </div>
      </div>
    </>
  )
}
