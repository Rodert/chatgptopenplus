import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../lib/i18n'

const copy = {
  'zh-CN': { badge: 'SELF-SERVICE RECHARGE', title: '自助充值中心', intro: '输入订单中收到的 CDK，按步骤完成自助兑换。', step: '第一步：验证 CDK', label: 'CDK 卡密', placeholder: '例如 DLJ-****-****-HOQG', verify: '验证 CDK', help: 'CDK 由订单或客服提供。请勿向他人泄露完整卡密。', status: '当前仅进行本地格式校验；真实兑换需接入 CDK 验证服务。', empty: '请输入 CDK 卡密。', valid: '格式校验通过。兑换服务接入后可继续验证卡密状态。', back: '返回首页', steps: ['验证 CDK', '确认账号', '确认信息', '完成兑换'] },
  en: { badge: 'SELF-SERVICE RECHARGE', title: 'Self-service recharge', intro: 'Enter the CDK from your order and follow the steps to redeem it.', step: 'Step 1: verify CDK', label: 'CDK code', placeholder: 'Example: DLJ-****-****-HOQG', verify: 'Verify CDK', help: 'Your CDK is supplied in the order or by support. Do not share the full code.', status: 'This page currently validates format locally; live redemption requires a CDK verification service.', empty: 'Enter your CDK code.', valid: 'Format check passed. CDK status can be verified after the redemption service is connected.', back: 'Back to home', steps: ['Verify CDK', 'Confirm account', 'Confirm details', 'Redeem'] },
  ru: { badge: 'САМОСТОЯТЕЛЬНОЕ ПОПОЛНЕНИЕ', title: 'Центр самостоятельного пополнения', intro: 'Введите CDK из заказа и следуйте шагам для активации.', step: 'Шаг 1: проверка CDK', label: 'Код CDK', placeholder: 'Пример: DLJ-****-****-HOQG', verify: 'Проверить CDK', help: 'CDK предоставляется в заказе или поддержкой. Не передавайте полный код другим.', status: 'Сейчас выполняется только локальная проверка формата; для активации нужен сервис проверки CDK.', empty: 'Введите код CDK.', valid: 'Формат проверен. Статус CDK можно проверить после подключения сервиса активации.', back: 'На главную', steps: ['Проверить CDK', 'Подтвердить аккаунт', 'Подтвердить данные', 'Активировать'] },
} as const

export function SelfRechargePage() {
  const { language } = useI18n()
  const text = copy[language]
  const [code, setCode] = useState('')
  const [message, setMessage] = useState('')

  function verifyCode() {
    const normalized = code.trim()
    setMessage(normalized.length < 8 ? text.empty : text.valid)
  }

  return (
    <section className="min-h-[calc(100dvh-4.25rem)] bg-mint/45">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-white px-3 py-1 text-xs font-semibold text-brand"><span className="h-2 w-2 rounded-full bg-brand" aria-hidden />{text.badge}</p>
          <h1 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">{text.title}</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">{text.intro}</p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-line bg-white p-5 shadow-[0_18px_45px_rgba(21,70,51,0.08)] sm:p-9">
          <div className="grid gap-3 sm:grid-cols-4">
            {text.steps.map((step, index) => <div key={step} className={`rounded-lg border px-3 py-4 text-center text-sm font-semibold ${index === 0 ? 'border-brand bg-mint text-brand' : 'border-line text-muted'}`}><span className="mb-2 grid h-6 w-6 place-items-center rounded-full bg-current/10 text-xs mx-auto">{index + 1}</span>{step}</div>)}
          </div>
          <div className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-ink">{text.step}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{text.help}</p>
            <label className="mt-7 block text-sm font-semibold text-ink" htmlFor="cdk">{text.label}</label>
            <input id="cdk" value={code} onChange={(event) => setCode(event.target.value)} placeholder={text.placeholder} className="mt-2 h-12 w-full rounded-lg border border-line bg-white px-4 text-base text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-2 focus:ring-brand/15" />
            <button type="button" onClick={verifyCode} className="mt-4 w-full rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-deep">{text.verify}</button>
            <p className="mt-4 rounded-lg border border-mint-line bg-mint px-4 py-3 text-sm leading-relaxed text-ink-soft">{message || text.status}</p>
          </div>
        </div>
        <div className="mt-7 text-center"><Link to="/" className="text-sm font-medium text-muted transition hover:text-brand">{text.back}</Link></div>
      </div>
    </section>
  )
}
