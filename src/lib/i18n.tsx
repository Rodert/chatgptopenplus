import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Language = 'zh-CN' | 'en' | 'ru'

export const languageOptions: Array<{ value: Language; label: string }> = [
  { value: 'zh-CN', label: '简体中文' },
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Русский' },
]

const messages = {
  'zh-CN': {
    nav: { purchase: '购买充值', claude: 'Claude 充值', blog: '博客', selfRecharge: '自助充值', help: '帮助中心', partners: '代理合作', support: '支持', recharge: '立即充值', privacy: '隐私保护', terms: '用户协议' },
    common: { backHome: '返回首页', email: '邮箱', contact: '联系我们' },
    home: {
      badge: 'CHATGPT SUBSCRIPTION SERVICE', title: 'ChatGPT 订阅服务', titleAccent: '清晰选择，安心交付',
      intro: '选择适合你的订阅方案，在合作支付页完成付款后按订单指引联系交付。本站和客服不会要求你提供 ChatGPT 账号密码。',
      recharge: '立即充值', viewPlans: '查看三种套餐', popular: '热门方案', standardPlan: '标准订阅方案',
      featured: '自有账号 · 人工交付 · 30 天质保', featuredBenefits: ['适合日常对话、创作与学习使用', '支付后按订单页面说明完成交付', '遇到订单问题可联系支持邮箱'], allPlans: '查看全部方案',
      assurances: [['合作支付', '点击下单后，在合作支付页完成付款。'], ['无需账号密码', '请勿向本站、客服或任何第三方提供 ChatGPT 密码。'], ['人工交付', '付款后按订单页面指引联系交付。'], ['30 天质保', '订单问题请保留凭证并联系支持邮箱核查。']],
      highlights: [['自有账号', '无需提供账号密码'], ['方案清晰', '价格与套餐一目了然'], ['售后支持', '订单问题可邮件咨询'], ['支付跳转', '在合作支付页完成付款']],
      plansEyebrow: 'PLANS', plansTitle: '选择你的订阅方案', plansText: '确认套餐后进入合作支付页面。价格与实际支付页面展示为准。', recommended: '推荐选择', subscription: '订阅方案',
      howEyebrow: 'HOW IT WORKS', howTitle: '三步完成订阅', steps: [['选择方案', '按你的使用需求挑选订阅档位。'], ['完成支付', '前往合作支付页完成下单。'], ['联系交付', '按支付页指引完成后续开通。']],
      faqTitle: '常见问题', faq: [
        ['购买后多久能用？', '支付完成后，请按支付页指引联系客服交付。具体时效以客服响应与账号情况为准。'],
        ['开通流程怎么走？', '在本站选择方案并跳转支付，完成付款后按支付页说明联系客服。无需提供账号密码。'],
        ['我的支付安全吗？', '付款在合作支付站点完成，请通过本站官方按钮跳转，勿轻信陌生私聊链接。'],
        ['充值失败怎么办？', '请保留支付凭证与订单信息，发送邮件至支持邮箱说明情况。我们会协助核查处理。'],
        ['可以批量购买吗？', '可以。团队或多账号需求可选择数量，最终以合作支付页支持的数量与价格为准。'],
        ['需要提供 ChatGPT 密码吗？', '不需要。请勿向任何渠道泄露账号密码。'],
      ],
      finalTitle: '从选择方案开始', finalText: '三种套餐均在下一步清晰展示。',
    },
    order: {
      badge: 'ORDER CENTER', title: '选择套餐并开始下单', intro: '无需注册。确认套餐和数量后，将前往合作支付页完成购买。',
      plan: '选择套餐', quantity: '选择数量', quantityText: '多份订单将按相同套餐计算。', decrease: '减少数量', increase: '增加数量',
      payments: '支持支付方式', paymentText: '付款将在合作支付页完成。实际可用方式以该页面展示为准。', confirmation: '订单确认', total: '应付总额', unit: '单价', begin: '开始下单', notice: '点击“开始下单”将打开合作支付站点。付款与支付信息均由该站点处理。',
    },
    footer: { tagline: 'ChatGPT 订阅代充服务' },
    agents: { title: '代理合作', desc: '若你拥有稳定流量或渠道资源，欢迎邮件申请成为合作代理。', perks: [['长期合作', '面向内容、社群与渠道伙伴，提供稳定对接与售后协同。'], ['协商分成', '按量或周期结算，细则以邮件书面确认为准。'], ['物料支持', '可提供落地页链接与基础说明，便于你的转化投放。']], apply: '申请方式', applySteps: ['介绍渠道类型、大致体量与合作意向', '发送邮件至商务邮箱', '确认分成与结算后开通对接'], send: '发送申请邮件' },
    support: { title: '支持', desc: '如需帮助，请通过邮件联系。我们会在受理后尽快回复。', suggested: '邮件中建议附上：', items: ['支付订单号或付款截图', '下单时使用的联系邮箱', '问题说明与期望处理方式'] },
    privacy: { title: '隐私保护', desc: 'ChatGPTOpenPlus 如何收集、使用与保护你的信息。', updated: '最近更新：2026-08-31。', sections: [['1. 概述', '我们重视你的隐私。本站主要为服务介绍与跳转引导，支付与订单履约由合作支付站点处理。请同时阅读合作站点的隐私政策。'], ['2. 我们可能收集的信息', '你主动通过客服渠道提供的联系方式与沟通内容；基础访问日志，用于安全与站点运维。'], ['3. 信息如何使用', '用于响应支持请求、改进网站、防范滥用，以及履行适用法律法规要求。我们不会出售你的个人信息。'], ['4. 第三方与跳转', '点击“立即充值”将离开本站进入合作支付站点。该站点独立运营，其数据处理适用其自身政策。请勿在不明页面输入账号密码等敏感凭据。'], ['5. 联系我们', '隐私相关问题请发送邮件至支持邮箱。']] },
    terms: { title: '用户协议', desc: '使用 ChatGPTOpenPlus 前，请仔细阅读本协议。', updated: '最近更新：2026-08-31。', sections: [['1. 服务说明', '本站提供 ChatGPT Plus 相关的信息展示与跳转入口。点击充值后，你将前往指定合作支付站点完成下单与支付。商品履约、退款与售后规则以支付站及双方沟通确认为准。'], ['2. 用户义务', '请提供真实、有效的联系方式；不得利用本服务从事违法、欺诈或侵害第三方权益的行为；请妥善保管自身账号与会话凭证。'], ['3. 免责声明', '因第三方平台规则变更、网络故障、不可抗力或用户自身操作失误导致的损失，本站在法律允许范围内不承担责任。展示价格与套餐可能调整，以支付站实际页面为准。'], ['4. 知识产权', '本站文案、设计与标识归运营方所有。ChatGPT、OpenAI 等为相应权利人商标，本站与其无隶属关系。'], ['5. 协议变更', '我们可能更新本协议。更新后继续使用本站即视为接受修订内容。']] },
  },
  en: {
    nav: { purchase: 'Purchase', claude: 'Claude recharge', blog: 'Blog', selfRecharge: 'Self service', help: 'Help center', partners: 'Partners', support: 'Support', recharge: 'Recharge now', privacy: 'Privacy', terms: 'Terms' }, common: { backHome: 'Back to home', email: 'Email', contact: 'Contact us' },
    home: { badge: 'CHATGPT SUBSCRIPTION SERVICE', title: 'ChatGPT subscription service', titleAccent: 'Clear choices, thoughtful delivery', intro: 'Choose a subscription that fits your needs, pay on our partner checkout, then follow the order instructions for fulfillment. Neither this site nor support will ask for your ChatGPT password.', recharge: 'Recharge now', viewPlans: 'View three plans', popular: 'Popular plan', standardPlan: 'Standard subscription', featured: 'Your account · Assisted delivery · 30-day coverage', featuredBenefits: ['For everyday chat, creation, and learning', 'Follow the order instructions after payment', 'Email support is available for order questions'], allPlans: 'View all plans', assurances: [['Partner checkout', 'Payment is completed after you continue to our partner checkout.'], ['No account password', 'Never give your ChatGPT password to this site, support, or another third party.'], ['Assisted delivery', 'Follow the order instructions after payment to contact fulfillment.'], ['30-day coverage', 'Keep your order details and contact support to review an order issue.']], highlights: [['Your account', 'No account password required'], ['Clear plans', 'Prices and plans at a glance'], ['Order support', 'Email us about order issues'], ['Payment redirect', 'Pay on our partner checkout']], plansEyebrow: 'PLANS', plansTitle: 'Choose your subscription plan', plansText: 'Select a plan before entering the partner checkout. Prices shown on the checkout page prevail.', recommended: 'Recommended', subscription: 'SUBSCRIPTION PLAN', howEyebrow: 'HOW IT WORKS', howTitle: 'Three steps to subscribe', steps: [['Choose a plan', 'Select the tier that fits your needs.'], ['Complete payment', 'Place the order on our partner checkout.'], ['Follow fulfillment', 'Complete activation using the order instructions.']], faqTitle: 'Frequently asked questions', faq: [['When can I use it?', 'After payment, follow the checkout instructions to contact support. Timing depends on support response and account status.'], ['How does activation work?', 'Choose a plan here, complete payment, then follow the checkout instructions. No account password is required.'], ['Is payment secure?', 'Payment is completed on the partner checkout. Please use only the official links from this site.'], ['What if an order fails?', 'Keep the payment receipt and order details, then email support so we can review it.'], ['Can I buy in bulk?', 'Yes. You can select a quantity; supported quantity and final pricing are determined by the partner checkout.'], ['Do you need my password?', 'No. Never share your account password with any channel.']], finalTitle: 'Start by choosing a plan', finalText: 'All three plans are clearly presented on the next page.' },
    order: { badge: 'ORDER CENTER', title: 'Choose a plan and start your order', intro: 'No registration required. Confirm the plan and quantity, then continue to our partner checkout.', plan: 'Choose a plan', quantity: 'Choose quantity', quantityText: 'Multiple units are calculated using the same plan.', decrease: 'Decrease quantity', increase: 'Increase quantity', payments: 'Accepted payment methods', paymentText: 'Payment is completed on the partner checkout. Available methods are shown there.', confirmation: 'Order confirmation', total: 'Estimated total', unit: 'Unit price', begin: 'Start order', notice: '“Start order” opens the partner checkout. Payment and payment details are handled there.' },
    footer: { tagline: 'ChatGPT subscription service' }, agents: { title: 'Partner program', desc: 'If you have reliable traffic or channel resources, apply by email to become a partner.', perks: [['Long-term collaboration', 'For content, community, and channel partners with fulfillment support.'], ['Revenue sharing', 'Volume or periodic settlement; details are confirmed in writing.'], ['Marketing materials', 'We can provide a landing-page link and essential product information.']], apply: 'How to apply', applySteps: ['Describe your channel, approximate reach, and interest', 'Send an email to our business contact', 'Confirm terms and begin collaboration'], send: 'Send application email' }, support: { title: 'Support', desc: 'For help, please contact us by email. We will respond after receiving your request.', suggested: 'Please include:', items: ['Payment order number or receipt', 'Email used when placing the order', 'A description of the issue and preferred outcome'] }, privacy: { title: 'Privacy', desc: 'How ChatGPTOpenPlus collects, uses, and protects information.', updated: 'Last updated: 2026-08-31.', sections: [['1. Overview', 'We value your privacy. This site primarily presents services and directs you to checkout; payment and fulfillment are handled by the partner checkout.'], ['2. Information we may collect', 'Contact details and communications you voluntarily provide through support, plus basic access logs for security and operations.'], ['3. How information is used', 'To respond to support requests, improve the site, prevent misuse, and meet applicable legal obligations. We do not sell personal information.'], ['4. Third parties and redirects', '“Recharge now” takes you to an independently operated partner checkout. Its data practices are governed by its own policy. Do not enter account passwords on unfamiliar pages.'], ['5. Contact us', 'For privacy requests, email our support address.']] }, terms: { title: 'Terms of service', desc: 'Please read these terms before using ChatGPTOpenPlus.', updated: 'Last updated: 2026-08-31.', sections: [['1. Service description', 'This site provides information and redirect links related to ChatGPT Plus. After selecting recharge, you complete ordering and payment on a designated partner checkout. Fulfillment, refunds, and support are subject to that checkout and written communication.'], ['2. User responsibilities', 'Provide valid contact details, do not use the service for unlawful or fraudulent activity, and protect your own account and session credentials.'], ['3. Disclaimer', 'To the extent permitted by law, we are not liable for losses caused by third-party rule changes, network failures, force majeure, or user error. Checkout pricing prevails.'], ['4. Intellectual property', 'Site copy, design, and branding belong to the operator. ChatGPT and OpenAI are trademarks of their respective owners; this site is not affiliated with them.'], ['5. Changes', 'We may update these terms. Continued use after an update constitutes acceptance.']] },
  },
  ru: {
    nav: { purchase: 'Пополнить', claude: 'Пополнить Claude', blog: 'Блог', selfRecharge: 'Самообслуживание', help: 'Центр помощи', partners: 'Партнерам', support: 'Поддержка', recharge: 'Пополнить', privacy: 'Конфиденциальность', terms: 'Условия' }, common: { backHome: 'На главную', email: 'Почта', contact: 'Связаться с нами' },
    home: { badge: 'CHATGPT SUBSCRIPTION SERVICE', title: 'Подписка ChatGPT', titleAccent: 'Понятный выбор, внимательное сопровождение', intro: 'Выберите подходящую подписку, оплатите ее на партнерской странице и следуйте инструкциям в заказе. Ни этот сайт, ни поддержка не запрашивают пароль от ChatGPT.', recharge: 'Пополнить', viewPlans: 'Посмотреть три тарифа', popular: 'Популярный тариф', standardPlan: 'Стандартная подписка', featured: 'Ваш аккаунт · Помощь с подключением · 30 дней поддержки', featuredBenefits: ['Для повседневного общения, творчества и учебы', 'После оплаты следуйте инструкциям заказа', 'По вопросам заказа доступна поддержка по почте'], allPlans: 'Все тарифы', assurances: [['Партнерская оплата', 'Оплата выполняется после перехода на страницу партнера.'], ['Без пароля', 'Не передавайте пароль ChatGPT этому сайту, поддержке или третьим лицам.'], ['Сопровождение', 'После оплаты следуйте инструкции заказа для связи по подключению.'], ['30 дней поддержки', 'Сохраните данные заказа и напишите в поддержку по вопросу заказа.']], highlights: [['Ваш аккаунт', 'Пароль не требуется'], ['Понятные тарифы', 'Цены и условия наглядны'], ['Поддержка заказа', 'Напишите нам по вопросам заказа'], ['Переход к оплате', 'Оплата на партнерском сайте']], plansEyebrow: 'ТАРИФЫ', plansTitle: 'Выберите тариф подписки', plansText: 'После выбора тарифа вы перейдете на страницу партнера. Приоритет имеют цены на странице оплаты.', recommended: 'Рекомендуем', subscription: 'ТАРИФ ПОДПИСКИ', howEyebrow: 'КАК ЭТО РАБОТАЕТ', howTitle: 'Три шага к подписке', steps: [['Выберите тариф', 'Выберите уровень под свои задачи.'], ['Оплатите заказ', 'Оформите заказ на партнерской странице.'], ['Следуйте инструкциям', 'Завершите подключение по инструкции заказа.']], faqTitle: 'Частые вопросы', faq: [['Когда я смогу пользоваться?', 'После оплаты следуйте инструкции на странице оплаты для связи с поддержкой. Срок зависит от ответа поддержки и статуса аккаунта.'], ['Как проходит подключение?', 'Выберите тариф здесь, оплатите заказ и следуйте инструкции на странице оплаты. Пароль не требуется.'], ['Безопасна ли оплата?', 'Оплата проходит на партнерской странице. Используйте только официальные ссылки этого сайта.'], ['Что делать при проблеме с заказом?', 'Сохраните чек и детали заказа, затем напишите в поддержку.'], ['Можно купить несколько подписок?', 'Да. Выберите количество; доступное количество и финальная цена определяются партнерской страницей.'], ['Нужен ли пароль?', 'Нет. Никогда не передавайте пароль от аккаунта третьим лицам.']], finalTitle: 'Начните с выбора тарифа', finalText: 'На следующей странице представлены все три тарифа.' },
    order: { badge: 'ЦЕНТР ЗАКАЗОВ', title: 'Выберите тариф и начните заказ', intro: 'Регистрация не нужна. Подтвердите тариф и количество, затем перейдите к оплате у партнера.', plan: 'Выберите тариф', quantity: 'Выберите количество', quantityText: 'Несколько единиц рассчитываются по одному тарифу.', decrease: 'Уменьшить количество', increase: 'Увеличить количество', payments: 'Доступные способы оплаты', paymentText: 'Оплата проходит на странице партнера. Доступные способы указаны там.', confirmation: 'Подтверждение заказа', total: 'Расчетная сумма', unit: 'Цена за единицу', begin: 'Начать заказ', notice: '«Начать заказ» откроет страницу оплаты партнера. Оплата и платежные данные обрабатываются там.' },
    footer: { tagline: 'Сервис подписки ChatGPT' }, agents: { title: 'Партнерская программа', desc: 'Если у вас есть стабильный трафик или каналы, подайте заявку по почте.', perks: [['Долгосрочное сотрудничество', 'Для контентных, комьюнити- и канальных партнеров с поддержкой выполнения заказов.'], ['Вознаграждение', 'Расчеты по объему или периоду; детали подтверждаются письменно.'], ['Маркетинговые материалы', 'Мы можем предоставить ссылку на лендинг и основную информацию.']], apply: 'Как подать заявку', applySteps: ['Опишите свой канал, примерный охват и интерес', 'Отправьте письмо в деловой контакт', 'Согласуйте условия и начните сотрудничество'], send: 'Отправить заявку' }, support: { title: 'Поддержка', desc: 'Если нужна помощь, напишите нам по почте. Мы ответим после получения обращения.', suggested: 'Укажите в письме:', items: ['Номер заказа или чек', 'Почту, использованную при заказе', 'Описание проблемы и желаемый результат'] }, privacy: { title: 'Конфиденциальность', desc: 'Как ChatGPTOpenPlus собирает, использует и защищает информацию.', updated: 'Обновлено: 2026-08-31.', sections: [['1. Обзор', 'Мы ценим вашу конфиденциальность. Этот сайт представляет сервис и направляет к оплате; платеж и выполнение заказа обрабатываются партнерской страницей.'], ['2. Какие данные мы можем собирать', 'Контакты и сообщения, добровольно отправленные в поддержку, а также базовые журналы доступа для безопасности и работы сайта.'], ['3. Как используются данные', 'Для обработки обращений, улучшения сайта, предотвращения злоупотреблений и выполнения требований закона. Мы не продаем персональные данные.'], ['4. Третьи стороны и переходы', '«Пополнить» ведет на независимую страницу оплаты партнера. Ее обработка данных регулируется собственной политикой. Не вводите пароль на незнакомых страницах.'], ['5. Связь с нами', 'По вопросам конфиденциальности напишите в поддержку.']] }, terms: { title: 'Условия использования', desc: 'Пожалуйста, прочитайте условия перед использованием ChatGPTOpenPlus.', updated: 'Обновлено: 2026-08-31.', sections: [['1. Описание сервиса', 'Этот сайт предоставляет информацию и ссылки, связанные с ChatGPT Plus. После выбора пополнения заказ и оплата происходят на странице партнера. Выполнение, возврат и поддержка регулируются этой страницей и письменным общением.'], ['2. Обязанности пользователя', 'Предоставляйте действительные контакты, не используйте сервис незаконно или мошеннически и защищайте данные своего аккаунта.'], ['3. Отказ от ответственности', 'В рамках закона мы не отвечаем за потери из-за изменений правил третьих сторон, сбоев сети, форс-мажора или ошибок пользователя. Приоритет имеют цены на странице оплаты.'], ['4. Интеллектуальная собственность', 'Тексты, дизайн и брендинг сайта принадлежат оператору. ChatGPT и OpenAI являются товарными знаками соответствующих владельцев; сайт не связан с ними.'], ['5. Изменения', 'Мы можем обновлять условия. Продолжение использования означает принятие обновлений.']] },
  },
} as const

type Messages = (typeof messages)[Language]
type I18nValue = { language: Language; setLanguage: (language: Language) => void; t: Messages }

const I18nContext = createContext<I18nValue | null>(null)

function isLanguage(value: string | null): value is Language {
  return languageOptions.some((option) => option.value === value)
}

function languageFromBrowser(): Language {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language]
  if (languages.some((value) => value.toLowerCase().startsWith('ru'))) return 'ru'
  if (languages.some((value) => value.toLowerCase().startsWith('zh'))) return 'zh-CN'
  return 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const requested = new URLSearchParams(window.location.search).get('lang')
    const saved = localStorage.getItem('language')
    return isLanguage(requested) ? requested : isLanguage(saved) ? saved : languageFromBrowser()
  })
  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
    const url = new URL(window.location.href)
    if (language === 'zh-CN') url.searchParams.delete('lang')
    else url.searchParams.set('lang', language)
    window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`)
  }, [language])
  const value = useMemo(() => ({ language, setLanguage, t: messages[language] }), [language])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const value = useContext(I18nContext)
  if (!value) throw new Error('useI18n must be used within I18nProvider')
  return value
}
