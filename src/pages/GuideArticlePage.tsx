import { Link, Navigate, useParams } from 'react-router-dom'
import { blogCatalog, findGuideArticle } from '../content/blogArticles'

export function GuideArticlePage() {
  const { slug } = useParams()
  const article = findGuideArticle(slug)

  if (!article) return <Navigate to="/blog" replace />

  const related = article.relatedSlugs
    .map((relatedSlug) => blogCatalog.find((item) => item.slug === relatedSlug))
    .filter((item) => item !== undefined)

  return (
    <article className="bg-white">
      <header className="border-b border-line bg-mint/45">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <Link to="/blog" className="text-xs font-semibold tracking-[0.16em] text-brand transition hover:text-brand-deep">BLOG</Link>
          <h1 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">{article.title}</h1>
          <p className="mt-6 text-base leading-7 text-muted">{article.intro}</p>
          <p className="mt-6 text-sm text-muted">发布于 <time dateTime={article.date}>{article.date}</time> · {article.readingTime}</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <nav aria-label="文章目录" className="border-y border-line py-6">
          <p className="text-sm font-semibold text-ink">本文目录</p>
          <ol className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2">
            {article.sections.map((section, index) => (
              <li key={section.id}><a className="transition hover:text-brand" href={`#${section.id}`}>{index + 1}. {section.title}</a></li>
            ))}
            <li><a className="transition hover:text-brand" href="#faq">{article.sections.length + 1}. 常见问题</a></li>
          </ol>
        </nav>

        <div className="mt-10 space-y-10 text-[16px] leading-8 text-ink-soft">
          {article.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-5">{paragraph}</p>)}
              {section.callout && <blockquote className="mt-5 border-l-2 border-brand bg-mint/45 px-5 py-4 font-medium text-ink">{section.callout}</blockquote>}
              {section.bullets && (
                <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-brand">
                  {section.bullets.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              {section.steps && (
                <ol className="mt-5 list-decimal space-y-3 pl-6 marker:font-semibold marker:text-brand">
                  {section.steps.map((item) => <li key={item}>{item}</li>)}
                </ol>
              )}
              {section.table && (
                <div className="mt-6 overflow-x-auto border-y border-line">
                  <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                    <thead><tr className="border-b border-line bg-surface text-ink">{section.table.headers.map((header) => <th key={header} className="px-4 py-3 font-semibold">{header}</th>)}</tr></thead>
                    <tbody className="divide-y divide-line">{section.table.rows.map((row) => <tr key={row.join('|')}>{row.map((cell, index) => <td key={cell} className={`px-4 py-4 align-top ${index === 0 ? 'font-medium text-ink' : ''}`}>{cell}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          <section id="faq" className="scroll-mt-24">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">常见问题</h2>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {article.faqs.map(([question, answer]) => (
                <details key={question} className="group py-5">
                  <summary className="cursor-pointer list-none font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-5">{question}<span className="text-muted transition group-open:rotate-45">+</span></span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-muted">{answer}</p>
                </details>
              ))}
            </div>
          </section>

          {article.sources && (
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink">资料来源</h2>
              <p className="mt-4 text-sm leading-7 text-muted">产品价格、能力和界面可能调整，购买或使用前请再次核对官方页面。</p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm">
                {article.sources.map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noreferrer" className="font-semibold text-brand transition hover:text-brand-deep">{label}</a></li>)}
              </ul>
            </section>
          )}

          <section className="border-t border-line pt-8">
            <h2 className="font-display text-xl font-semibold text-ink">继续阅读</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <Link key={item.slug} to={`/blog/${item.slug}`} className="border-l-2 border-brand bg-mint/45 px-5 py-4 transition hover:bg-mint">
                  <span className="text-sm font-semibold leading-6 text-ink">{item.title}</span>
                </Link>
              ))}
            </div>
          </section>

          <div className="border-y border-mint-line bg-mint/45 px-5 py-8 text-ink">
            <p className="font-display text-xl font-semibold">已经确认自己的需求？</p>
            <p className="mt-2 text-sm leading-7 text-ink-soft">先核对商品、账号归属与交付说明，再进入对应页面。</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/order" className="rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep">查看 ChatGPT 套餐</Link>
              <Link to="/claude" className="rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-brand/50 hover:text-brand">查看 Claude 套餐</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
