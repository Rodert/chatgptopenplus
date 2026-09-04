import { Link } from 'react-router-dom'

const article = {
  slug: 'chatgpt-plus-worth-it',
  title: 'ChatGPT Plus 到底值不值得开？用了这么久，我觉得很多人一开始就搞错了',
  description: '免费版够不够用、Plus 真正的价值、适合人群，以及 Plus 与 API 的区别，一篇讲清楚。',
  date: '2026-09-04',
  readingTime: '8 分钟阅读',
}

export function BlogPage() {
  return (
    <>
      <section className="border-b border-line bg-mint/45">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand">BLOG</p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">使用指南与订阅说明</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">围绕 ChatGPT 的日常使用、订阅选择与开通注意事项，整理清楚、可核对的内容。</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <article className="max-w-3xl border-t border-line py-8">
          <p className="text-xs font-medium text-muted">{article.date} · {article.readingTime}</p>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
            <Link to={`/blog/${article.slug}`} className="transition hover:text-brand">{article.title}</Link>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{article.description}</p>
          <Link to={`/blog/${article.slug}`} className="mt-6 inline-flex text-sm font-semibold text-brand transition hover:text-brand-deep">阅读全文</Link>
        </article>
      </section>
    </>
  )
}
