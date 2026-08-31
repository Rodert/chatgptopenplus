import { site, type CheckoutKey } from '../config/site'
import { openCheckout } from '../lib/checkout'

const planOrder: CheckoutKey[] = ['plus', 'pro5x', 'pro20x']

const steps = [
  { n: '01', title: '选择方案', text: '确认适合你的订阅档位。' },
  { n: '02', title: '完成支付', text: '跳转合作支付页安全付款。' },
  { n: '03', title: '客服开通', text: '支付后按指引联系交付开通。' },
]

const faqs = [
  {
    q: '购买后多久能用？',
    a: '支付完成后，请按支付页指引联系客服交付。通常可较快完成开通；具体时效以客服响应与账号情况为准。',
  },
  {
    q: '开通流程怎么走？',
    a: '在本站选择方案并跳转支付 → 完成付款 → 按支付页说明联系客服 → 充值到你自己的 ChatGPT 账号。无需提供账号密码。',
  },
  {
    q: '我的支付安全吗？',
    a: '付款在合作支付站点完成，请通过本站官方按钮跳转，勿轻信陌生私聊链接。支付凭证请自行妥善保存，以便售后核对。',
  },
  {
    q: '充值失败怎么办？',
    a: `请保留支付凭证与订单信息，发送邮件至 ${site.support.email} 说明情况。我们会协助核查并对接处理。`,
  },
  {
    q: '可以批量购买吗？',
    a: '可以。团队或多账号需求可一次购买多份，或邮件联系我们说明数量与用途，便于优先安排交付。',
  },
  {
    q: '30 天内订阅掉了怎么办？',
    a: '商品含 30 天质保：订阅有效期内若掉订阅，将按已使用天数规则退款。若账号因自身原因被封禁，一般不在质保范围内。详情以支付页说明为准。',
  },
  {
    q: '需要提供 ChatGPT 密码吗？',
    a: '不需要。请勿向任何渠道泄露账号密码。开通方式以支付页与客服说明为准。',
  },
  {
    q: '使用时提示手机号验证怎么办？',
    a: '部分账号可能触发官方风控接码验证，需自行解决该验证问题，通常与订阅本身无关。',
  },
  {
    q: '支持哪些支付方式？',
    a: '以跳转后的支付页展示为准，常见为支付宝、微信等。',
  },
  {
    q: '如何联系客服？',
    a: `发送邮件至 ${site.support.email}，并附上支付凭证、联系邮箱与问题说明。${site.support.hours}。`,
  },
]

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="fade-up text-[12px] font-medium tracking-[0.22em] text-accent uppercase">
              {site.name}
            </p>
            <h1 className="fade-up-delay mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
              ChatGPT 订阅代充
              <span className="mt-2 block font-normal text-ink-soft">简约流程，正规交付</span>
            </h1>
            <p className="fade-up-delay-2 mx-auto mt-6 max-w-xl text-[15px] leading-7 text-muted sm:text-base">
              {site.description}
            </p>
            <div className="fade-up-delay-2 mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => openCheckout('plus')}
                className="bg-brand px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:bg-brand-deep"
              >
                立即充值
              </button>
              <a
                href="#plans"
                className="px-3 py-3.5 text-sm font-medium text-muted transition hover:text-ink"
              >
                查看方案 →
              </a>
            </div>
          </div>

          <div className="hero-panel mx-auto mt-20 max-w-4xl border border-line bg-surface/80 px-6 py-8 backdrop-blur-sm sm:px-10 sm:py-10">
            <div className="grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-line">
              {[
                { k: '自有账号', v: '充值到你本人账户' },
                { k: '客服交付', v: '支付后人工开通' },
                { k: '质保 30 天', v: '掉订阅按规则处理' },
              ].map((item) => (
                <div key={item.k} className="sm:px-8 first:sm:pl-0 last:sm:pr-0">
                  <p className="text-sm font-semibold text-ink">{item.k}</p>
                  <p className="mt-1.5 text-sm text-muted">{item.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="scroll-mt-24 border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                订阅方案
              </h2>
              <p className="mt-2 text-sm text-muted">价格与支付页保持一致</p>
            </div>
          </div>

          <div className="mt-12 divide-y divide-line border-y border-line">
            {planOrder.map((key) => {
              const meta = site.checkout[key]
              return (
                <div
                  key={key}
                  className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-semibold text-ink">{meta.label}</h3>
                    <p className="mt-1 text-sm text-muted">{meta.subtitle}</p>
                  </div>
                  <p className="font-display text-3xl font-semibold tracking-tight text-ink tabular-nums">
                    {meta.priceLabel}
                  </p>
                  <button
                    type="button"
                    onClick={() => openCheckout(key)}
                    className="shrink-0 border border-brand bg-brand px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-deep sm:min-w-[8.5rem]"
                  >
                    充值
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            开通流程
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <div key={step.n}>
                <p className="font-display text-xs font-medium tracking-[0.2em] text-accent">{step.n}</p>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            常见问题
          </h2>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {faqs.map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="cursor-pointer list-none text-[15px] font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-6">
                    {item.q}
                    <span className="text-muted transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                开始开通
              </h2>
              <p className="mt-2 text-sm text-muted">选择方案并跳转至支付页完成下单。</p>
            </div>
            <button
              type="button"
              onClick={() => openCheckout('plus')}
              className="bg-brand px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:bg-brand-deep"
            >
              立即充值
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
