import { useI18n } from '../lib/i18n'

const copy = {
  'zh-CN': {
    eyebrow: 'USER REVIEWS', title: '5,000+ 用户评价', text: '评价数据来自已完成订单的用户反馈，展示前需经过订单核验。',
    metrics: [['5,000+', '用户评价'], ['99.99%', '好评率'], ['订单核验', '仅展示已授权反馈']], caseTitle: '常见使用场景', cases: [['内容创作', '为日常写作、选题和文案整理选择合适的订阅档位。'], ['学习研究', '用于课程笔记、资料梳理与语言练习等学习任务。'], ['团队协作', '按团队成员数量安排订阅，统一保留订单信息。'], ['产品设计', '在调研、需求拆解和原型文案阶段辅助工作。'], ['开发辅助', '用于代码阅读、技术资料整理和问题排查。'], ['个人效率', '处理日程规划、邮件草稿与信息归纳等日常事务。']], note: '以上为使用场景示例；真实评价内容可在接入订单与评价系统后展示。',
  },
  en: {
    eyebrow: 'USER REVIEWS', title: '5,000+ user reviews', text: 'Review data comes from completed-order feedback and requires order verification before display.',
    metrics: [['5,000+', 'user reviews'], ['99.99%', 'positive rating'], ['Order verified', 'only authorized feedback is shown']], caseTitle: 'Common use cases', cases: [['Content creation', 'Choose a suitable plan for everyday writing, ideation, and copy organization.'], ['Learning and research', 'Use it for course notes, source organization, and language practice.'], ['Team collaboration', 'Arrange subscriptions around team size and retain order details.'], ['Product design', 'Support research, requirement breakdown, and prototype copy.'], ['Development support', 'Use it for code reading, technical source organization, and troubleshooting.'], ['Personal productivity', 'Handle planning, email drafts, and day-to-day information organization.']], note: 'These are illustrative use cases. Individual verified reviews can be displayed after connecting an order and review system.',
  },
  ru: {
    eyebrow: 'ОТЗЫВЫ', title: '5 000+ отзывов пользователей', text: 'Данные отзывов поступают по завершенным заказам и проверяются перед публикацией.',
    metrics: [['5 000+', 'отзывов пользователей'], ['99,99%', 'положительных оценок'], ['Проверка заказа', 'только отзывы с разрешением']], caseTitle: 'Типичные сценарии', cases: [['Создание контента', 'Выберите подходящий тариф для текстов, идей и организации материалов.'], ['Учеба и исследования', 'Используйте для конспектов, работы с источниками и языковой практики.'], ['Работа в команде', 'Подбирайте подписки по размеру команды и сохраняйте детали заказа.'], ['Продуктовый дизайн', 'Помощь в исследованиях, декомпозиции требований и текстах прототипа.'], ['Разработка', 'Чтение кода, работа с техническими материалами и поиск проблем.'], ['Личная продуктивность', 'Планирование, черновики писем и организация повседневной информации.']], note: 'Это примеры сценариев. Проверенные отзывы можно показать после подключения системы заказов и отзывов.',
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
        <div className="mt-14">
          <h3 className="text-center font-display text-2xl font-semibold text-ink">{text.caseTitle}</h3>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {text.cases.map(([title, description], index) => (
              <article key={title} className="rounded-lg border border-line bg-white p-6">
                <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-mint px-2 text-xs font-semibold text-brand">{String(index + 1).padStart(2, '0')}</span>
                <h4 className="mt-5 text-base font-semibold text-ink">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-muted">{text.note}</p>
      </div>
    </section>
  )
}
