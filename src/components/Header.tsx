import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { site } from '../config/site'
import { openCheckout } from '../lib/checkout'

const links = [
  { to: '/', label: '首页', end: true },
  { to: '/agents', label: '代理合作', end: false },
  { to: '/support', label: '支持', end: false },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-[#fbfcfd]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:px-8">
        <NavLink to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
            {site.name}
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="/#plans" className="text-[13px] font-medium text-muted transition hover:text-ink">
            方案
          </a>
          {links.slice(1).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[13px] font-medium transition hover:text-ink ${
                  isActive ? 'text-ink' : 'text-muted'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => openCheckout()}
            className="bg-brand px-4 py-2 text-[13px] font-semibold tracking-wide text-white transition hover:bg-brand-deep"
          >
            立即充值
          </button>
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
            <a href="/#plans" className="py-2.5 text-sm text-ink-soft" onClick={() => setOpen(false)}>
              方案
            </a>
            {[...links, { to: '/privacy', label: '隐私', end: false }, { to: '/terms', label: '协议', end: false }].map(
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
          </nav>
        </div>
      ) : null}
    </header>
  )
}
