import { PageHero } from '../components/PageHero'
import { site } from '../config/site'

const perks = [
  {
    title: '长期合作',
    text: '面向内容、社群与渠道伙伴，提供稳定对接与售后协同。',
  },
  {
    title: '协商分成',
    text: '按量或周期结算，细则以邮件书面确认为准。',
  },
  {
    title: '物料支持',
    text: '可提供落地页链接与基础说明，便于你的转化投放。',
  },
]

export function AgentsPage() {
  return (
    <>
      <PageHero
        title="代理合作"
        description="若你拥有稳定流量或渠道资源，欢迎邮件申请成为合作代理。"
      />
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {perks.map((p) => (
            <div key={p.title}>
              <h2 className="font-display text-base font-semibold text-ink">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </div>
          ))}
        </div>

        <section className="mt-14 border-t border-line pt-12">
          <h2 className="font-display text-xl font-semibold text-ink">申请方式</h2>
          <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted">
            <li>介绍渠道类型、大致体量与合作意向</li>
            <li>发送邮件至商务邮箱</li>
            <li>确认分成与结算后开通对接</li>
          </ol>

          <a
            href={`mailto:${site.agents.contact}?subject=${encodeURIComponent('代理合作申请')}`}
            className="mt-8 inline-flex bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep"
          >
            发送申请邮件
          </a>

          <p className="mt-5 text-sm text-muted">{site.agents.contact}</p>
        </section>
      </div>
    </>
  )
}
