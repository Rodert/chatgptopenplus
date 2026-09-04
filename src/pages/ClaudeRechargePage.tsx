import { useI18n } from '../lib/i18n'
import { site } from '../config/site'

const copy = {
  'zh-CN': {
    badge: 'CLAUDE RECHARGE',
    title: 'Claude 充值',
    accent: '独立入口，现已开放',
    intro: 'Claude 充值使用独立页面和独立流程，不与 ChatGPT 订单混合。选择 Claude Pro 后将在合作支付页完成下单。',
    panelLabel: 'CLAUDE',
    panelTitle: '为专注创作准备',
    panelText: '选择适合你的 Claude 订阅方案。',
    sectionLabel: 'RECHARGE OPTIONS',
    sectionTitle: 'Claude 充值入口',
    sectionText: '选择 Claude Pro 后，将在合作支付页完成订单。实际价格与可用支付方式以该页面展示为准。',
    productText: '适合需要更高使用额度与更完整 Claude 使用体验的用户。',
    productAction: '开始 Claude Pro 充值',
    notes: [['独立充值页面', 'Claude 商品、价格与交付说明单独展示。'], ['合作支付', '点击后在合作支付页完成订单。'], ['订单支持', '下单后请保留订单信息，便于后续核查。']],
  },
  en: {
    badge: 'CLAUDE RECHARGE',
    title: 'Claude recharge',
    accent: 'A dedicated entry, now open',
    intro: 'Claude recharge has its own page and flow, separate from ChatGPT orders. Select Claude Pro to continue to the partner checkout.',
    panelLabel: 'CLAUDE',
    panelTitle: 'Made for focused work',
    panelText: 'Choose the Claude plan that fits your work.',
    sectionLabel: 'RECHARGE OPTIONS',
    sectionTitle: 'Claude recharge entry',
    sectionText: 'Select Claude Pro to continue to the partner checkout. Final pricing and available payment methods are shown there.',
    productText: 'For users who need higher usage limits and a fuller Claude experience.',
    productAction: 'Recharge Claude Pro',
    notes: [['A dedicated page', 'Claude products, pricing, and fulfillment details are presented separately.'], ['Partner checkout', 'Complete your order on the partner checkout after continuing.'], ['Order support', 'Keep your order information for any follow-up review.']],
  },
  ru: {
    badge: 'ПОПОЛНЕНИЕ CLAUDE',
    title: 'Пополнение Claude',
    accent: 'Отдельный вход уже доступен',
    intro: 'Для Claude создана отдельная страница и процесс, не смешанный с заказами ChatGPT. Выберите Claude Pro, чтобы перейти к оплате у партнера.',
    panelLabel: 'CLAUDE',
    panelTitle: 'Для сосредоточенной работы',
    panelText: 'Выберите подходящий тариф Claude.',
    sectionLabel: 'ВАРИАНТЫ ПОПОЛНЕНИЯ',
    sectionTitle: 'Вход для пополнения Claude',
    sectionText: 'Выберите Claude Pro, чтобы перейти к оплате у партнера. Итоговая цена и доступные способы оплаты указаны там.',
    productText: 'Для пользователей, которым нужны более высокие лимиты и полный доступ к Claude.',
    productAction: 'Пополнить Claude Pro',
    notes: [['Отдельная страница', 'Товары Claude, цены и условия выполнения показаны отдельно.'], ['Оплата у партнера', 'После перехода заказ оформляется на странице партнера.'], ['Поддержка заказа', 'Сохраните данные заказа для последующей проверки.']],
  },
} as const

export function ClaudeRechargePage() {
  const { language } = useI18n()
  const text = copy[language]

  return (
    <div className="bg-[#fff7f3] text-[#2c2522]">
      <section className="border-b border-[#f0d4c9]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#df7153]/30 bg-white px-3 py-1 text-xs font-semibold text-[#c64e31]">
              <span className="h-2 w-2 rounded-full bg-[#df7153]" aria-hidden />
              {text.badge}
            </p>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.12] sm:text-5xl lg:text-[3.6rem]">
              {text.title}
              <span className="mt-2 block text-[#d65738]">{text.accent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#6f5d56] sm:text-base">{text.intro}</p>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-lg bg-[#2c2522] p-7 text-white shadow-[0_20px_45px_rgba(83,48,38,0.18)] sm:p-9">
            <div className="absolute inset-y-0 right-0 w-[46%] bg-[#e16b4b]" aria-hidden />
            <div className="absolute bottom-0 right-[18%] h-[68%] w-20 border-x border-t border-white/35" aria-hidden />
            <div className="absolute bottom-10 right-[10%] h-16 w-32 border-y border-white/35" aria-hidden />
            <div className="relative flex h-full min-h-[228px] flex-col justify-between">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#ffb19b]">{text.panelLabel}</p>
              <div className="max-w-[16rem]">
                <h2 className="font-display text-3xl font-semibold leading-tight">{text.panelTitle}</h2>
                <p className="mt-3 text-sm leading-6 text-white/70">{text.panelText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#f0d4c9] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#c64e31]">{text.sectionLabel}</p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">{text.sectionTitle}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#6f5d56]">{text.sectionText}</p>
            </div>
          </div>
          <div className="mt-10 flex min-h-40 flex-col items-start justify-between gap-6 rounded-lg border border-[#e5ae9d] bg-[#fff7f3] p-7 sm:flex-row sm:items-end sm:p-9">
            <div>
              <p className="font-display text-2xl font-semibold text-[#2c2522]">{site.claude.pro.label}</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#6f5d56]">{text.productText}</p>
            </div>
            <a href={site.claude.pro.url} target="_blank" rel="noreferrer" className="shrink-0 rounded-lg bg-[#df7153] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c9573a]">{text.productAction}</a>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-px bg-[#f0d4c9] px-5 sm:grid-cols-3 sm:px-8">
          {text.notes.map(([title, description]) => (
            <div key={title} className="bg-[#fff7f3] py-9 sm:px-7 sm:first:pl-0">
              <p className="text-sm font-semibold">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#6f5d56]">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
