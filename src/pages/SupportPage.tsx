import { PageHero } from '../components/PageHero'
import { site } from '../config/site'
import { useI18n } from '../lib/i18n'

export function SupportPage() {
  const { t } = useI18n()
  const support = t.support
  return (
    <>
      <PageHero
        title={support.title}
        description={support.desc}
      />
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="border-y border-line py-10">
          <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">{t.common.email}</p>
          <a
            href={`mailto:${site.support.email}`}
            className="mt-4 block font-display text-2xl font-semibold tracking-tight text-ink transition hover:text-accent sm:text-3xl"
          >
            {site.support.email}
          </a>
          <p className="mt-4 text-sm text-muted">{site.support.hours}</p>
        </div>

        <div className="mt-10 space-y-4 text-sm leading-relaxed text-ink-soft">
          <p>{support.suggested}</p>
          <ul className="list-disc space-y-2 pl-5 text-muted">
            {support.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </>
  )
}
