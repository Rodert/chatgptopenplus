import { Link } from 'react-router-dom'
import { site } from '../config/site'

const footerLinks = [
  { to: '/privacy', label: '隐私保护' },
  { to: '/terms', label: '用户协议' },
  { to: '/support', label: '支持' },
  { to: '/agents', label: '代理合作' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-base font-semibold tracking-tight text-ink">{site.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{site.tagline}</p>
          <a
            href={`mailto:${site.support.email}`}
            className="mt-5 inline-block text-sm text-accent transition hover:text-accent-deep"
          >
            {site.support.email}
          </a>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-muted transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {site.name}
          </p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  )
}
