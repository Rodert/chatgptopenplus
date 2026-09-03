import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { site, type CheckoutKey } from '../config/site'
import { openCheckout } from '../lib/checkout'
import { useI18n } from '../lib/i18n'

const plans: CheckoutKey[] = ['plus', 'pro5x', 'pro20x']
const paymentMethods = [
  { name: '支付宝', icon: '/payment-alipay.svg' },
  { name: '微信支付', icon: '/payment-wechat.svg' },
  { name: 'USDT', icon: '/payment-usdt.svg', maintenance: true },
]

function amountFor(key: CheckoutKey) {
  return Number(site.checkout[key].priceLabel.replace(/[^\d]/g, ''))
}

export function OrderPage() {
  const { language, t } = useI18n()
  const order = t.order
  const [searchParams] = useSearchParams()
  const initialPlan = searchParams.get('plan')
  const [selectedPlan, setSelectedPlan] = useState<CheckoutKey>(
    plans.includes(initialPlan as CheckoutKey) ? (initialPlan as CheckoutKey) : 'plus',
  )
  const [quantity, setQuantity] = useState(1)
  const plan = site.checkout[selectedPlan]
  const total = amountFor(selectedPlan) * quantity
  const maintenanceLabel = language === 'zh-CN' ? '维护中' : language === 'ru' ? 'На обслуживании' : 'Maintenance'

  return (
    <section className="min-h-[calc(100dvh-4.25rem)] bg-mint/45">
      <div className="mx-auto max-w-5xl px-5 pb-32 pt-14 sm:px-8 sm:pb-36 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-white px-3 py-1 text-xs font-semibold text-brand">
            <span className="h-2 w-2 rounded-full bg-brand" aria-hidden /> {order.badge}
          </p>
          <h1 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">{order.title}</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">{order.intro}</p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-lg border border-line bg-white p-5 shadow-[0_18px_45px_rgba(21,70,51,0.08)] sm:p-9">
          <section aria-labelledby="plan-heading">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-xs font-bold text-white">1</span>
              <h2 id="plan-heading" className="text-base font-semibold text-ink">{order.plan}</h2>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {plans.map((key) => {
                const item = site.checkout[key]
                const selected = key === selectedPlan
                return (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setSelectedPlan(key)}
                    className={`min-h-[148px] rounded-lg border p-5 text-left transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                      selected ? 'border-brand bg-mint shadow-[inset_0_0_0_1px_var(--color-brand)]' : 'border-line bg-white hover:-translate-y-0.5 hover:border-brand/60 hover:bg-mint/45 hover:shadow-[0_10px_24px_rgba(21,70,51,0.08)]'
                    }`}
                  >
                    <p className="font-display text-base font-semibold text-ink">{item.label}</p>
                    <p className="mt-1 text-sm text-muted">{item.subtitle}</p>
                    <p className="mt-6 font-display text-3xl font-semibold text-brand">{item.priceLabel}</p>
                  </button>
                )
              })}
            </div>
          </section>

          <section className="mt-9 border-t border-line pt-8" aria-labelledby="quantity-heading">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-xs font-bold text-white">2</span>
                  <h2 id="quantity-heading" className="text-base font-semibold text-ink">{order.quantity}</h2>
                </div>
                <p className="mt-2 text-sm text-muted">{order.quantityText}</p>
              </div>
              <div className="flex h-12 items-center rounded-lg border border-line bg-white" aria-label="购买数量">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="grid h-full w-12 place-items-center text-xl text-ink transition hover:bg-mint disabled:cursor-not-allowed disabled:text-muted" aria-label={order.decrease} disabled={quantity === 1}>-</button>
                <output className="grid h-full w-12 place-items-center border-x border-line text-sm font-semibold text-ink">{quantity}</output>
                <button type="button" onClick={() => setQuantity((value) => Math.min(99, value + 1))} className="grid h-full w-12 place-items-center text-xl text-ink transition hover:bg-mint" aria-label={order.increase}>+</button>
              </div>
            </div>
          </section>

          <section className="mt-9 border-t border-line pt-8" aria-labelledby="summary-heading">
            <div className="mb-9">
              <h2 className="text-base font-semibold text-ink">{order.payments}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className={`flex items-center gap-3 rounded-lg border px-4 py-3 transition duration-200 ${
                      method.maintenance
                        ? 'border-line bg-white opacity-65'
                        : 'group cursor-default border-line bg-white hover:-translate-y-0.5 hover:border-brand/60 hover:bg-mint/65 hover:shadow-[0_10px_22px_rgba(21,70,51,0.10)]'
                    }`}
                  >
                    <img src={method.icon} alt="" className={`h-7 w-7 shrink-0 transition duration-200 ${method.maintenance ? '' : 'group-hover:scale-110'}`} />
                    <span className="text-sm font-semibold text-ink">{method.name}</span>
                    {method.maintenance ? <span className="rounded-full border border-[#f4ca69] bg-[#fff9e9] px-2 py-0.5 text-[11px] font-semibold text-[#a86500]">{maintenanceLabel}</span> : null}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted">{order.paymentText}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-xs font-bold text-white">3</span>
              <h2 id="summary-heading" className="text-base font-semibold text-ink">{order.confirmation}</h2>
            </div>
            <div className="mt-5 rounded-lg border border-mint-line bg-mint p-6 sm:flex sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium text-brand">{order.total}</p>
                <p className="mt-2 font-display text-5xl font-semibold tracking-tight text-brand">¥{total}</p>
                <p className="mt-3 text-sm text-muted">{plan.label} × {quantity} · {order.unit} {plan.priceLabel}</p>
              </div>
              <button type="button" onClick={() => openCheckout(selectedPlan)} className="mt-6 w-full rounded-lg bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(12,166,111,0.22)] transition hover:bg-brand-deep sm:mt-0 sm:w-auto">{order.begin}</button>
            </div>
            <p className="mt-4 text-center text-xs leading-relaxed text-muted">{order.notice}</p>
          </section>
        </div>
        <div className="mt-7 text-center"><Link to="/" className="text-sm font-medium text-muted transition hover:text-brand">{t.common.backHome}</Link></div>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-4">
          <div className="min-w-0">
            <p className="truncate text-xs text-muted sm:text-sm">{plan.label} × {quantity}</p>
            <p className="mt-0.5 font-display text-2xl font-semibold text-brand sm:text-3xl">¥{total}</p>
          </div>
          <button type="button" onClick={() => openCheckout(selectedPlan)} className="shrink-0 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(12,166,111,0.22)] transition hover:bg-brand-deep sm:px-8 sm:py-3.5">{order.begin}</button>
        </div>
      </div>
    </section>
  )
}
