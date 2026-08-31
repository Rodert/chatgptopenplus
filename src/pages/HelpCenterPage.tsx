import { Link } from 'react-router-dom'
import { site } from '../config/site'
import { useI18n } from '../lib/i18n'

const copy = {
  'zh-CN': {
    title: '帮助中心', description: '购买、订单与自助充值的常见问题，都可以在这里找到答案。',
    guides: [['购买充值', '选择套餐后，确认数量并进入合作支付页完成购买。', '/order'], ['自助充值', '使用订单提供的 CDK，按步骤进入自助兑换流程。', '/self-recharge'], ['订单支持', '保留订单号和支付凭证，方便支持人员协助核查。', '/support']],
    faqTitle: '常见问题', faq: [['如何选择套餐？', '可在购买充值页比较三种套餐的价格与说明，再选择适合自己的方案。'], ['支付在哪里完成？', '点击开始下单后会跳转至合作支付页。实际支持的支付方式和最终价格以该页面为准。'], ['需要提供 ChatGPT 密码吗？', '不需要。请勿将账号密码提供给任何人。'], ['CDK 为什么不能直接兑换？', '当前自助充值页提供格式校验。真实 CDK 状态验证和兑换需要对应服务端接口支持。'], ['订单遇到问题怎么办？', `请发送订单号或支付凭证至 ${site.support.email}，并说明需要协助的问题。`]],
    contact: '仍然需要帮助？', contactText: '通过支持邮箱联系我们，我们会在受理后回复。', email: '邮件联系',
  },
  en: {
    title: 'Help center', description: 'Find answers to common questions about purchases, orders, and self-service recharge.',
    guides: [['Purchase', 'Choose a plan, confirm the quantity, then complete the order on the partner checkout.', '/order'], ['Self service', 'Use the CDK supplied with your order and follow the self-service redemption flow.', '/self-recharge'], ['Order support', 'Keep your order number and payment receipt to help support review your case.', '/support']],
    faqTitle: 'Frequently asked questions', faq: [['How do I choose a plan?', 'Compare the price and details of all three plans on the purchase page, then select the one that fits your needs.'], ['Where is payment completed?', '“Start order” redirects to the partner checkout. Available methods and final pricing are shown there.'], ['Do you need my ChatGPT password?', 'No. Never share your account password with anyone.'], ['Why can’t my CDK be redeemed directly?', 'The self-service page currently validates the format. Live CDK verification and redemption require a corresponding server-side service.'], ['What if I have an order issue?', `Email your order number or payment receipt to ${site.support.email}, along with a description of the issue.`]],
    contact: 'Still need help?', contactText: 'Email support and we will respond after reviewing your request.', email: 'Email support',
  },
  ru: {
    title: 'Центр помощи', description: 'Здесь собраны ответы на вопросы о покупке, заказах и самостоятельном пополнении.',
    guides: [['Покупка', 'Выберите тариф, подтвердите количество и завершите заказ на странице оплаты партнера.', '/order'], ['Самообслуживание', 'Используйте CDK из заказа и следуйте шагам самостоятельной активации.', '/self-recharge'], ['Поддержка заказа', 'Сохраните номер заказа и чек, чтобы поддержка могла быстрее проверить обращение.', '/support']],
    faqTitle: 'Частые вопросы', faq: [['Как выбрать тариф?', 'Сравните цены и детали трех тарифов на странице покупки и выберите подходящий.'], ['Где проходит оплата?', 'После начала заказа вы перейдете на страницу оплаты партнера. Доступные способы и финальная цена указаны там.'], ['Нужен пароль от ChatGPT?', 'Нет. Никогда не передавайте пароль от аккаунта другим лицам.'], ['Почему CDK нельзя активировать сразу?', 'Страница самообслуживания пока проверяет формат. Для проверки статуса и активации CDK нужен серверный сервис.'], ['Что делать при проблеме с заказом?', `Отправьте номер заказа или чек на ${site.support.email} и опишите проблему.`]],
    contact: 'Нужна дополнительная помощь?', contactText: 'Напишите в поддержку, и мы ответим после рассмотрения обращения.', email: 'Написать в поддержку',
  },
} as const

export function HelpCenterPage() {
  const { language } = useI18n()
  const text = copy[language]

  return (
    <>
      <section className="border-b border-mint-line bg-mint/45">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand">HELP CENTER</p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">{text.title}</h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{text.description}</p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-4 md:grid-cols-3">
            {text.guides.map(([title, description, to]) => <Link key={to} to={to} className="rounded-lg border border-line bg-white p-6 transition hover:border-brand/50 hover:bg-mint/40"><h2 className="text-lg font-semibold text-ink">{title}</h2><p className="mt-2 text-sm leading-relaxed text-muted">{description}</p></Link>)}
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="font-display text-2xl font-semibold text-ink">{text.faqTitle}</h2>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {text.faq.map(([question, answer]) => <details key={question} className="group py-5"><summary className="cursor-pointer list-none text-sm font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden"><span className="flex items-center justify-between gap-5">{question}<span className="text-muted transition group-open:rotate-45">+</span></span></summary><p className="mt-3 text-sm leading-relaxed text-muted">{answer}</p></details>)}
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-mint-line bg-mint">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div><h2 className="font-display text-2xl font-semibold text-ink">{text.contact}</h2><p className="mt-2 text-sm text-muted">{text.contactText}</p></div>
          <a href={`mailto:${site.support.email}`} className="rounded-lg bg-brand px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-deep">{text.email}</a>
        </div>
      </section>
    </>
  )
}
