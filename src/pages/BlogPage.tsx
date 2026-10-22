import { Link } from 'react-router-dom'
import { blogCatalog } from '../content/blogArticles'

export function BlogPage() {
  return (
    <>
      <section className="border-b border-line bg-mint/45">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand">BLOG</p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">使用指南与订阅说明</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">围绕 ChatGPT 与 Claude 的套餐选择、订阅管理、支付排查和账号安全，整理清楚、可核对、能直接照着处理的指南。</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="max-w-3xl divide-y divide-line border-y border-line">
          {blogCatalog.map((article) => (
            <article key={article.slug} className="py-8">
              <p className="text-xs font-medium text-muted"><time dateTime={article.date}>{article.date}</time> · {article.readingTime}</p>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                <Link to={`/blog/${article.slug}`} className="transition hover:text-brand">{article.title}</Link>
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{article.description}</p>
              <Link to={`/blog/${article.slug}`} className="mt-6 inline-flex text-sm font-semibold text-brand transition hover:text-brand-deep">阅读全文</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
