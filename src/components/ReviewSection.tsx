import { useI18n } from '../lib/i18n'

const copy = {
  'zh-CN': {
    eyebrow: 'USER REVIEWS', title: '5,000+ 用户评价', text: '评价数据来自已完成订单的用户反馈，展示前需经过订单核验。',
    metrics: [['5,000+', '用户评价'], ['99.99%', '好评率'], ['订单核验', '仅展示已授权反馈']], note: '真实评价内容可在接入订单与评价系统后展示。',
  },
  en: {
    eyebrow: 'USER REVIEWS', title: '5,000+ user reviews', text: 'Review data comes from completed-order feedback and requires order verification before display.',
    metrics: [['5,000+', 'user reviews'], ['99.99%', 'positive rating'], ['Order verified', 'only authorized feedback is shown']], note: 'Individual verified reviews can be displayed after connecting an order and review system.',
  },
  ru: {
    eyebrow: 'ОТЗЫВЫ', title: '5 000+ отзывов пользователей', text: 'Данные отзывов поступают по завершенным заказам и проверяются перед публикацией.',
    metrics: [['5 000+', 'отзывов пользователей'], ['99,99%', 'положительных оценок'], ['Проверка заказа', 'только отзывы с разрешением']], note: 'Отдельные проверенные отзывы можно показать после подключения системы заказов и отзывов.',
  },
} as const

export function ReviewSection() {
  const { language } = useI18n()
  const text = copy[language]

  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand">{text.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">{text.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{text.text}</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {text.metrics.map(([value, label]) => (
            <div key={value} className="rounded-lg border border-line bg-white p-7 text-center shadow-[0_10px_24px_rgba(21,70,51,0.05)]">
              <p className="font-display text-4xl font-semibold text-brand">{value}</p>
              <p className="mt-2 text-sm text-muted">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted">{text.note}</p>
      </div>
    </section>
  )
}
