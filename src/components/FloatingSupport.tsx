import { site } from '../config/site'
import { useI18n } from '../lib/i18n'
import { useState } from 'react'

export function FloatingSupport() {
  const { language } = useI18n()
  const [open, setOpen] = useState(false)
  const label = language === 'zh-CN' ? '联系支持' : language === 'ru' ? 'Связаться' : 'Contact support'
  const subject = language === 'zh-CN' ? '咨询订单问题' : language === 'ru' ? 'Вопрос по заказу' : 'Order support request'
  const emailLabel = language === 'zh-CN' ? '邮件联系' : language === 'ru' ? 'Написать письмо' : 'Email support'

  return (
    <div className="fixed bottom-5 right-4 z-50 sm:right-6">
      {open ? (
        <div className="absolute bottom-14 right-0 w-64 rounded-lg border border-line bg-white p-4 shadow-[0_16px_36px_rgba(21,70,51,0.18)]">
          <p className="text-sm font-semibold text-ink">{label}</p>
          <p className="mt-1 text-xs text-muted">{site.support.hours}</p>
          <a href={`mailto:${site.support.email}?subject=${encodeURIComponent(subject)}`} className="mt-4 block rounded-lg border border-brand/25 bg-mint px-3 py-2.5 text-center text-sm font-semibold text-brand transition hover:bg-brand hover:text-white">
            {emailLabel}
          </a>
          <p className="mt-3 break-all text-center text-xs text-muted">{site.support.email}</p>
        </div>
      ) : null}
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(12,166,111,0.24)] transition hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20 text-xs" aria-hidden>@</span>
        {label}
      </button>
    </div>
  )
}
