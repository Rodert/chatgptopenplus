import { site, type CheckoutKey } from '../config/site'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../lib/i18n'
import { ReviewSection } from '../components/ReviewSection'

const planOrder: CheckoutKey[] = ['plus', 'pro5x', 'pro20x']

function currentSubscriberTarget() {
  const now = new Date()
  return 13146 + now.getDate() * 10 + now.getHours()
}

export function HomePage() {
  const { language, t } = useI18n()
  const home = t.home
  const [subscriberCount, setSubscriberCount] = useState(0)

  useEffect(() => {
    const target = currentSubscriberTarget()
    const duration = 1500
    const startedAt = performance.now()
    let animationFrame = 0

    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      setSubscriberCount(Math.floor(target * (1 - (1 - progress) ** 3)))
      if (progress < 1) animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    const refreshTimer = window.setInterval(() => setSubscriberCount(currentSubscriberTarget()), 60_000)
    return () => {
      cancelAnimationFrame(animationFrame)
      window.clearInterval(refreshTimer)
    }
  }, [])

  const subscriberLabel = language === 'zh-CN'
    ? `已服务 ${subscriberCount.toLocaleString()}+ 人 · 好评率 99.99%`
    : language === 'ru'
      ? `${subscriberCount.toLocaleString()}+ клиентов · 99,99% положительных отзывов`
      : `${subscriberCount.toLocaleString()}+ customers served · 99.99% positive`
  return (
    <>
      <section className="border-b border-mint-line bg-mint">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:py-24">
          <div>
            <p className="fade-up inline-flex items-center gap-2 rounded-full border border-brand/25 bg-white/70 px-3 py-1 text-xs font-semibold text-brand">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              {subscriberLabel}
            </p>
            <h1 className="fade-up-delay mt-6 font-display text-4xl font-semibold leading-[1.12] text-ink sm:text-5xl lg:text-[3.6rem]">
              {home.title}
              <span className="mt-2 block text-brand">{home.titleAccent}</span>
            </h1>
            <p className="fade-up-delay-2 mt-6 max-w-xl text-[15px] leading-7 text-muted sm:text-base">
              {home.intro}
            </p>
            <div className="fade-up-delay-2 mt-9 flex flex-wrap items-center gap-5">
              <Link
                to="/order"
                className="rounded-lg bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(12,166,111,0.22)] transition hover:bg-brand-deep"
              >
                {home.recharge}
              </Link>
              <Link
                to="/order"
                className="text-sm font-semibold text-ink transition hover:text-brand"
              >
                {home.viewPlans}
              </Link>
            </div>
          </div>

          <div className="hero-panel relative rounded-lg border border-mint-line bg-white p-7 shadow-[0_18px_45px_rgba(21,70,51,0.10)] sm:p-9">
            <span className="absolute -top-3 right-7 rounded-full border border-[#f4ca69] bg-[#fff9e9] px-3 py-1 text-xs font-semibold text-[#b26d00]">
              {home.popular}
            </span>
            <p className="text-sm text-muted">ChatGPT Plus</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Plus 月卡 · 30 天</h2>
            <div className="mt-6 flex items-end gap-3">
              <p className="font-display text-5xl font-semibold tracking-tight text-brand">¥145</p>
              <p className="pb-2 text-sm text-muted">{home.standardPlan}</p>
            </div>
            <p className="mt-5 inline-flex rounded-md border border-brand/25 bg-mint px-3 py-1.5 text-sm font-medium text-brand">
              {home.featured}
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink-soft">
              {home.featuredBenefits.map((benefit) => <li key={benefit} className="flex gap-3"><span className="font-bold text-brand">✓</span>{benefit}</li>)}
            </ul>
            <Link to="/order" className="mt-7 inline-flex text-sm font-semibold text-brand transition hover:text-brand-deep">
              {home.allPlans}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl divide-y divide-line px-5 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-8 lg:grid-cols-4">
          {home.highlights.map((item) => (
            <div key={item[0]} className="py-7 sm:px-6 sm:first:pl-0 lg:py-8">
              <p className="text-sm font-semibold text-ink">{item[0]}</p>
              <p className="mt-1 text-sm text-muted">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <ReviewSection />

      <section id="plans" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">{home.plansEyebrow}</p>
            <div>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {home.plansTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{home.plansText}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {planOrder.map((key) => {
              const meta = site.checkout[key]
              return (
                <div
                  key={key}
                  className={`relative flex min-h-[278px] flex-col rounded-lg border p-7 ${
                    key === 'plus' ? 'border-brand bg-mint/60 shadow-[0_12px_28px_rgba(21,70,51,0.08)]' : 'border-line bg-white'
                  }`}
                >
                  {key === 'plus' ? <span className="mb-5 text-xs font-semibold text-brand">{home.recommended}</span> : <span className="mb-5 text-xs font-semibold text-muted">{home.subscription}</span>}
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{meta.label}</h3>
                    <p className="mt-1 text-sm text-muted">{meta.subtitle}</p>
                  </div>
                  <p className="mt-7 font-display text-4xl font-semibold tracking-tight text-brand tabular-nums">
                    {meta.priceLabel}
                  </p>
                  <Link
                    to={`/order?plan=${key}`}
                    className="mt-auto w-full rounded-lg bg-brand px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-deep"
                  >
                    {home.recharge}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-mint/45">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">{home.howEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {home.howTitle}
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {home.steps.map((step, index) => (
              <div key={step[0]} className="border-t border-mint-line pt-5">
                <p className="font-display text-xs font-semibold tracking-[0.2em] text-brand">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{step[0]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {home.faqTitle}
          </h2>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {home.faq.map((item) => (
              <details key={item[0]} className="group py-6">
                <summary className="cursor-pointer list-none text-[15px] font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-6">
                    {item[0]}
                    <span className="text-muted transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{item[1]}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-mint-line bg-mint">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                {home.finalTitle}
              </h2>
              <p className="mt-2 text-sm text-muted">{home.finalText}</p>
            </div>
            <Link
              to="/order"
              className="rounded-lg bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(12,166,111,0.22)] transition hover:bg-brand-deep"
            >
              {home.recharge}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
