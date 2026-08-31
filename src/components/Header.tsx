import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import brandMark from '../assets/brand-mark.png'
import { site } from '../config/site'
import { languageOptions, useI18n } from '../lib/i18n'

export function Header() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage, t } = useI18n()

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:px-8">
        <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={brandMark} alt="" className="h-7 w-7 shrink-0 object-contain" />
          <span className="font-display text-[16px] font-semibold tracking-tight text-ink">
            {site.name}
          </span>
        </NavLink>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-6 md:flex">
            <NavLink to="/order" className="text-[13px] font-medium text-muted transition hover:text-ink">{t.nav.purchase}</NavLink>
            <NavLink to="/self-recharge" className="text-[13px] font-medium text-muted transition hover:text-ink">{t.nav.selfRecharge}</NavLink>
          </nav>
          <label className="sr-only" htmlFor="language-select">Language</label>
          <select id="language-select" value={language} onChange={(event) => setLanguage(event.target.value as typeof language)} className="hidden h-9 border-0 bg-transparent text-[13px] font-medium text-muted outline-none md:block">
            {languageOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
          <NavLink
            to="/order"
            className="rounded-lg bg-brand px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-brand-deep md:hidden"
          >
            {t.nav.purchase}
          </NavLink>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center border border-line text-ink md:hidden"
            aria-label={open ? '关闭菜单' : '打开菜单'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-3.5 flex-col gap-[3px]">
              <span className={`h-px bg-ink transition ${open ? 'translate-y-[4px] rotate-45' : ''}`} />
              <span className={`h-px bg-ink transition ${open ? 'opacity-0' : ''}`} />
              <span className={`h-px bg-ink transition ${open ? '-translate-y-[4px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-surface md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            <NavLink to="/order" className="py-2.5 text-sm text-ink-soft" onClick={() => setOpen(false)}>
              {t.nav.purchase}
            </NavLink>
            {[{ to: '/self-recharge', label: t.nav.selfRecharge, end: false }, { to: '/', label: site.name, end: true }, { to: '/agents', label: t.nav.partners, end: false }, { to: '/support', label: t.nav.support, end: false }, { to: '/privacy', label: t.nav.privacy, end: false }, { to: '/terms', label: t.nav.terms, end: false }].map(
              (link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm text-ink-soft"
                >
                  {link.label}
                </NavLink>
              ),
          )}
          <label className="mt-3 flex items-center justify-between border-t border-line pt-4 text-sm text-muted">Language
            <select value={language} onChange={(event) => setLanguage(event.target.value as typeof language)} className="bg-transparent text-sm text-ink outline-none">
              {languageOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </label>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
