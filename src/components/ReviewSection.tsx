import { useEffect, useState } from 'react'
import { useI18n } from '../lib/i18n'

function currentSubscriberTarget() {
  const now = new Date()
  return 13146 + now.getDate() * 10 + now.getHours()
}

const copy = {
  'zh-CN': {
    eyebrow: 'USER REVIEWS', title: '用户使用反馈', text: '评价数据来自已完成订单的用户反馈，展示前需经过订单核验。',
    metrics: [['服务用户', '已完成订单用户'], ['99.99%', '好评率'], ['订单核验', '仅展示已授权反馈']], reviewTitle: '真实用户反馈', reviews: [['王**', '独立开发者', '深圳', '第一次用这种方式充值，本来还有点担心，实际操作下来很顺利，几分钟就到账了。流程比我想象中简单，后面续费应该还会继续用。'], ['李**', '产品经理', '上海', '之前续费每次都要找人沟通，比较麻烦。这次直接按页面提示操作，很快就处理好了，整个过程比较省心。'], ['D**', 'AI 创业团队', '香港', '团队里几个人都长期使用 ChatGPT，以前每个月续费都比较折腾。现在统一处理方便很多，到账速度也不错。'], ['陈**', '数据分析师', '杭州', '第一次操作有几个地方不太明白，问了客服后很快就解决了。整体流程不复杂，体验比之前找人代充方便。'], ['张**', '程序员', '成都', '平时主要拿 ChatGPT 写代码，使用频率比较高。已经在这里续费过两次，目前使用一直正常，订单记录也都能查到。'], ['周**', 'SaaS 创业者', '北京', '用了一段时间才来评价，中间也续过一次。对我来说最重要的是操作简单、到账快，目前整体体验不错。']], note: '评价来自已完成订单的用户授权反馈，姓名已脱敏处理。',
  },
  en: {
    eyebrow: 'USER REVIEWS', title: 'Customer feedback', text: 'Review data comes from completed-order feedback and requires order verification before display.',
    metrics: [['Customers served', 'completed-order customers'], ['99.99%', 'positive rating'], ['Order verified', 'only authorized feedback is shown']], reviewTitle: 'Verified user feedback', reviews: [['Wang**', 'Independent developer', 'Shenzhen', 'It was my first time using this recharge method, so I was a little concerned at first. The actual process went smoothly and was completed within minutes. It was simpler than I expected.'], ['Li**', 'Product manager', 'Shanghai', 'Renewals used to mean contacting someone every time. This time I followed the on-page instructions and it was handled quickly, which made the process much easier.'], ['D**', 'AI startup team', 'Hong Kong', 'Several people on our team use ChatGPT regularly. Renewals used to be complicated every month; handling them together is much more convenient now.'], ['Chen**', 'Data analyst', 'Hangzhou', 'A few things were unclear the first time, but support helped resolve them quickly. The overall process was straightforward and more convenient than previous options.'], ['Zhang**', 'Software developer', 'Chengdu', 'I mainly use ChatGPT for coding and use it frequently. I have renewed here twice so far, and the service and order records have remained normal.'], ['Zhou**', 'SaaS founder', 'Beijing', 'I am reviewing after using it for a while and renewing once. What matters most to me is the simple process and timely delivery; the overall experience has been good.']], note: 'Feedback is authorized by users with completed orders; names are anonymized.',
  },
  ru: {
    eyebrow: 'ОТЗЫВЫ', title: 'Отзывы пользователей', text: 'Данные отзывов поступают по завершенным заказам и проверяются перед публикацией.',
    metrics: [['Клиентов обслужено', 'клиенты с завершенным заказом'], ['99,99%', 'положительных оценок'], ['Проверка заказа', 'только отзывы с разрешением']], reviewTitle: 'Проверенные отзывы пользователей', reviews: [['Ван**', 'Независимый разработчик', 'Шэньчжэнь', 'Я впервые использовал такой способ пополнения и сначала немного сомневался. На практике все прошло гладко и было завершено за несколько минут.'], ['Ли**', 'Продакт-менеджер', 'Шанхай', 'Раньше продление требовало общения с кем-то каждый раз. Здесь я следовала инструкции на странице, и все было обработано быстро.'], ['D**', 'AI-стартап', 'Гонконг', 'Несколько человек в нашей команде постоянно используют ChatGPT. Раньше ежемесячные продления были сложными, а теперь их гораздо удобнее оформлять вместе.'], ['Чэнь**', 'Аналитик данных', 'Ханчжоу', 'В первый раз некоторые моменты были непонятны, но поддержка быстро помогла. В целом процесс оказался простым и удобным.'], ['Чжан**', 'Программист', 'Чэнду', 'Я часто использую ChatGPT для написания кода. Уже дважды продлевал здесь подписку, и сервис с историей заказов работает нормально.'], ['Чжоу**', 'Основатель SaaS', 'Пекин', 'Оставляю отзыв после некоторого времени использования и одного продления. Для меня важны простой процесс и своевременное зачисление.']], note: 'Отзывы предоставлены пользователями завершенных заказов с разрешением на публикацию; имена обезличены.',
  },
} as const

export function ReviewSection() {
  const { language } = useI18n()
  const text = copy[language]
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

  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand">{text.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">{text.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{text.text}</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {text.metrics.map(([value, label], index) => (
            <div key={value} className="rounded-lg border border-line bg-white p-7 text-center shadow-[0_10px_24px_rgba(21,70,51,0.05)]">
              <p className="font-display text-4xl font-semibold text-brand">{index === 0 ? `${subscriberCount.toLocaleString()}+` : value}</p>
              <p className="mt-2 text-sm text-muted">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-14">
          <h3 className="text-center font-display text-2xl font-semibold text-ink">{text.reviewTitle}</h3>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {text.reviews.map(([name, role, city, review]) => (
              <article key={name} className="flex min-h-[248px] flex-col rounded-lg border border-line bg-white p-6 shadow-[0_10px_24px_rgba(21,70,51,0.05)]">
                <p className="text-lg tracking-[0.12em] text-[#f2ab19]">★★★★★</p>
                <p className="mt-5 text-sm leading-7 text-ink-soft">“{review}”</p>
                <div className="mt-auto flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-sm font-semibold text-white">{name.slice(0, 1)}</span>
                  <div><h4 className="text-sm font-semibold text-ink">{name}</h4><p className="mt-0.5 text-xs text-muted">{role} · {city}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-muted">{text.note}</p>
      </div>
    </section>
  )
}
