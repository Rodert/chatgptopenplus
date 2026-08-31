import { PageHero } from '../components/PageHero'
import { useI18n } from '../lib/i18n'

export function TermsPage() {
  const { t } = useI18n()
  const terms = t.terms
  return (
    <>
      <PageHero
        title={terms.title}
        description={terms.desc}
      />
      <article className="mx-auto max-w-3xl space-y-8 px-5 py-12 text-sm leading-7 text-ink-soft sm:px-8">
        {terms.sections.map(([title, text]) => <section key={title}><h2 className="font-display text-lg font-semibold text-ink">{title}</h2><p className="mt-2">{text}</p></section>)}
        <p className="text-xs text-muted">{terms.updated}</p>
      </article>
    </>
  )
}
