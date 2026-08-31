import { PageHero } from '../components/PageHero'
import { site } from '../config/site'
import { useI18n } from '../lib/i18n'

export function AgentsPage() {
  const { t } = useI18n()
  const agents = t.agents
  return (
    <>
      <PageHero
        title={agents.title}
        description={agents.desc}
      />
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {agents.perks.map((perk) => (
            <div key={perk[0]}>
              <h2 className="font-display text-base font-semibold text-ink">{perk[0]}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{perk[1]}</p>
            </div>
          ))}
        </div>

        <section className="mt-14 border-t border-line pt-12">
          <h2 className="font-display text-xl font-semibold text-ink">{agents.apply}</h2>
          <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted">
            {agents.applySteps.map((step) => <li key={step}>{step}</li>)}
          </ol>

          <a
            href={`mailto:${site.agents.contact}?subject=${encodeURIComponent('代理合作申请')}`}
            className="mt-8 inline-flex bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep"
          >
            {agents.send}
          </a>

          <p className="mt-5 text-sm text-muted">{site.agents.contact}</p>
        </section>
      </div>
    </>
  )
}
