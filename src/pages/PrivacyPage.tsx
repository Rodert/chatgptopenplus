import { PageHero } from '../components/PageHero'
import { site } from '../config/site'

export function PrivacyPage() {
  return (
    <>
      <PageHero
        title="隐私保护"
        description={`${site.name} 如何收集、使用与保护你的信息。`}
      />
      <article className="mx-auto max-w-3xl space-y-8 px-5 py-12 text-sm leading-7 text-ink-soft sm:px-8">
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">1. 概述</h2>
          <p className="mt-2">
            我们重视你的隐私。本站当前版本主要为服务介绍与跳转引导，支付与订单履约由合作支付站点处理。请同时阅读合作站点的隐私政策。
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">2. 我们可能收集的信息</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>你主动通过客服渠道提供的联系方式与沟通内容</li>
            <li>基础访问日志（如 IP、浏览器类型、访问时间），用于安全与站点运维</li>
            <li>Cookie 或类似技术可能用于基础统计与体验优化（若启用）</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">3. 信息如何使用</h2>
          <p className="mt-2">
            用于响应支持请求、改进网站、防范滥用，以及履行适用法律法规要求。我们不会出售你的个人信息。
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">4. 第三方与跳转</h2>
          <p className="mt-2">
            点击「立即充值」将离开本站进入合作支付站点。该站点独立运营，其数据处理适用其自身政策。请勿在不明页面输入账号密码等敏感凭据。
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">5. 联系我们</h2>
          <p className="mt-2">
            隐私相关问题请发送邮件至{' '}
            <a className="font-semibold text-accent underline-offset-2 hover:underline" href={`mailto:${site.support.email}`}>
              {site.support.email}
            </a>
            。
          </p>
        </section>
        <p className="text-xs text-muted">最近更新：2026-08-31。正式上线前可根据实际收集情况修订本页。</p>
      </article>
    </>
  )
}
