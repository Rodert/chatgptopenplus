import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { site } from '../config/site'
import { useI18n } from '../lib/i18n'

type Position = { x: number; y: number }

function initialPosition(): Position {
  const saved = localStorage.getItem('support-position')
  if (saved) {
    try { return JSON.parse(saved) as Position } catch { /* Use the default position. */ }
  }
  return { x: Math.max(16, window.innerWidth - 156), y: Math.round(window.innerHeight * 0.48) }
}

export function FloatingSupport() {
  const { language } = useI18n()
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState<Position>(initialPosition)
  const drag = useRef<{ pointerId: number; offsetX: number; offsetY: number; moved: boolean } | null>(null)
  const suppressClick = useRef(false)
  const label = language === 'zh-CN' ? '联系支持' : language === 'ru' ? 'Связаться' : 'Contact support'
  const subject = language === 'zh-CN' ? '咨询订单问题' : language === 'ru' ? 'Вопрос по заказу' : 'Order support request'
  const emailLabel = language === 'zh-CN' ? '邮件联系' : language === 'ru' ? 'Написать письмо' : 'Email support'
  const wechatLabel = language === 'zh-CN' ? '微信客服' : language === 'ru' ? 'Поддержка WeChat' : 'WeChat support'
  const qrHint = language === 'zh-CN' ? '点击查看大图扫码' : language === 'ru' ? 'Нажмите, чтобы увеличить QR-код' : 'Click to enlarge the QR code'

  useEffect(() => { localStorage.setItem('support-position', JSON.stringify(position)) }, [position])

  function startDrag(event: PointerEvent<HTMLButtonElement>) {
    drag.current = { pointerId: event.pointerId, offsetX: event.clientX - position.x, offsetY: event.clientY - position.y, moved: false }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function moveDrag(event: PointerEvent<HTMLButtonElement>) {
    if (!drag.current || drag.current.pointerId !== event.pointerId) return
    drag.current.moved = true
    setPosition({ x: Math.min(Math.max(12, event.clientX - drag.current.offsetX), window.innerWidth - 132), y: Math.min(Math.max(80, event.clientY - drag.current.offsetY), window.innerHeight - 56) })
  }

  function endDrag(event: PointerEvent<HTMLButtonElement>) {
    if (!drag.current || drag.current.pointerId !== event.pointerId) return
    suppressClick.current = drag.current.moved
    drag.current = null
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  return (
    <div className="fixed z-50" style={{ left: position.x, top: position.y }}>
      {open ? (
        <div className="absolute bottom-14 right-0 w-64 rounded-lg border border-line bg-white p-4 shadow-[0_16px_36px_rgba(21,70,51,0.18)]">
          <p className="text-sm font-semibold text-ink">{label}</p>
          <p className="mt-1 text-xs text-muted">{site.support.hours}</p>
          <a href={`mailto:${site.support.email}?subject=${encodeURIComponent(subject)}`} className="mt-4 block rounded-lg border border-brand/25 bg-mint px-3 py-2.5 text-center text-sm font-semibold text-brand transition hover:bg-brand hover:text-white">{emailLabel}</a>
          <p className="mt-3 break-all text-center text-xs text-muted">{site.support.email}</p>
          <div className="mt-4 border-t border-line pt-4 text-center">
            <p className="text-xs font-semibold text-ink">{wechatLabel}</p>
            <a href="/support-wechat.png" target="_blank" rel="noopener noreferrer" className="mx-auto mt-2 block w-28 overflow-hidden rounded-md border border-line bg-white transition hover:border-brand/50">
              <img src="/support-wechat.png" alt={wechatLabel} className="block w-full" />
            </a>
            <p className="mt-2 text-xs text-muted">{qrHint}</p>
          </div>
        </div>
      ) : null}
      <button type="button" onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={endDrag} onClick={() => { if (suppressClick.current) { suppressClick.current = false; return }; setOpen((value) => !value) }} aria-expanded={open} className="touch-none select-none inline-flex cursor-grab items-center gap-2 rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(12,166,111,0.24)] transition hover:bg-brand-deep active:cursor-grabbing focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"><span className="grid h-5 w-5 place-items-center rounded-full bg-white/20 text-xs" aria-hidden>@</span>{label}</button>
    </div>
  )
}
