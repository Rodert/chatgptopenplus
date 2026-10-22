import { Link } from 'react-router-dom'

const publishedAt = '2026-10-22'

const faqs = [
  ['ChatGPT Plus 开通后可以使用 API 吗？', '不能直接抵扣 API 调用费用。ChatGPT 订阅与 OpenAI API 是两套计费体系，API Key 的用量需要按 API 价格单独结算。'],
  ['ChatGPT Plus、Pro 100、Pro 200 和 Pro 500 怎么选？', '先按真实使用频率选择。偶尔对话先用免费版；日常高频使用可看 Plus；只有在 Plus 的额度或速度持续影响工作时，再比较 Pro 档位。具体权益与限制以官方账户页面实时展示为准。'],
  ['为什么付款成功后仍显示免费版？', '先确认付款账号与当前登录账号是否一致，再检查订单状态、App Store 或 Google Play 的订阅状态。如果通过第三方下单，应保留订单号并联系对应售后渠道核查。'],
  ['第三方充值需要提供 ChatGPT 密码吗？', '不应提供。密码、短信验证码、邮箱验证码、API Key 和会话令牌都属于敏感凭据。本站及客服不会要求你提供 ChatGPT 密码。'],
  ['Claude 5X 和 Claude KYC 是官方套餐名称吗？', '它们不是 Anthropic 面向所有用户统一展示的标准订阅名称，而是本站合作商品的区分标签。购买前应在商品页确认账号归属、交付内容、有效期与售后规则。'],
] as const

export function ChatGPTSubscriptionGuidePage() {
  return (
    <article className="bg-white">
      <header className="border-b border-line bg-mint/45">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <Link to="/blog" className="text-xs font-semibold tracking-[0.16em] text-brand transition hover:text-brand-deep">BLOG</Link>
          <h1 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">ChatGPT Plus 怎么开通？套餐区别、API、Claude 与支付问题完整指南</h1>
          <p className="mt-6 text-base leading-7 text-muted">从套餐选择到付款、续费、API 区别和账号安全，把第一次订阅最容易卡住的问题一次讲清楚。</p>
          <p className="mt-6 text-sm text-muted">发布于 <time dateTime={publishedAt}>{publishedAt}</time> · 12 分钟阅读</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <nav aria-label="文章目录" className="border-y border-line py-6">
          <p className="text-sm font-semibold text-ink">本文解决 7 个问题</p>
          <ol className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2">
            <li><a className="transition hover:text-brand" href="#choose-chatgpt-plan">1. ChatGPT 套餐怎么选</a></li>
            <li><a className="transition hover:text-brand" href="#subscribe-and-renew">2. 怎么开通、续费和查看状态</a></li>
            <li><a className="transition hover:text-brand" href="#plus-vs-api">3. Plus 与 API 有什么区别</a></li>
            <li><a className="transition hover:text-brand" href="#payment-failed">4. 支付失败怎么排查</a></li>
            <li><a className="transition hover:text-brand" href="#choose-claude-plan">5. Claude 套餐怎么选</a></li>
            <li><a className="transition hover:text-brand" href="#chatgpt-vs-claude">6. ChatGPT 和 Claude 怎么选</a></li>
            <li><a className="transition hover:text-brand" href="#safety-checklist">7. 第三方充值安全清单</a></li>
          </ol>
        </nav>

        <div className="mt-10 space-y-6 text-[16px] leading-8 text-ink-soft">
          <p>第一次准备订阅 AI 服务时，最容易犯的错误不是“选错了最强模型”，而是没有先确认自己的使用场景、购买账号和交付方式。套餐越多，越应该先做减法。</p>
          <p>如果你还没确定自己是否需要付费，可以先看<Link to="/blog/chatgpt-plus-worth-it" className="font-semibold text-brand transition hover:text-brand-deep">《ChatGPT Plus 到底值不值得开？》</Link>，再回到本文选择具体方案。</p>
          <blockquote className="border-l-2 border-brand bg-mint/45 px-5 py-4 font-medium text-ink">先判断免费版哪里不够，再选择能够解决这个限制的最低档套餐。</blockquote>

          <section id="choose-chatgpt-plan" className="scroll-mt-24">
            <h2 className="pt-6 font-display text-2xl font-semibold text-ink sm:text-3xl">ChatGPT Plus、Pro 100、Pro 200、Pro 500 怎么选？</h2>
            <p className="mt-5">根据 OpenAI 官方资料，ChatGPT Plus 为 20 美元/月，Pro 提供 100、200 和 500 美元/月档位。不同档位的具体模型、功能和额度可能调整，因此不要只看套餐名称，购买前还要核对账户内的实时说明。</p>
            <div className="mt-6 overflow-x-auto border-y border-line">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-line bg-surface text-ink">
                    <th className="px-4 py-3 font-semibold">方案</th>
                    <th className="px-4 py-3 font-semibold">更适合谁</th>
                    <th className="px-4 py-3 font-semibold">升级信号</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  <tr><td className="px-4 py-4 font-medium text-ink">免费版</td><td className="px-4 py-4">偶尔问答、翻译、简单写作和轻量体验</td><td className="px-4 py-4">先用到明确遇到额度或功能限制</td></tr>
                  <tr><td className="px-4 py-4 font-medium text-ink">Plus</td><td className="px-4 py-4">每天使用，处理文档、内容、学习或编程任务</td><td className="px-4 py-4">免费额度频繁打断完整工作流</td></tr>
                  <tr><td className="px-4 py-4 font-medium text-ink">Pro 100</td><td className="px-4 py-4">使用频率明显高于 Plus 的个人用户</td><td className="px-4 py-4">Plus 限制已稳定影响交付效率</td></tr>
                  <tr><td className="px-4 py-4 font-medium text-ink">Pro 200</td><td className="px-4 py-4">长时间、多任务、高强度使用者</td><td className="px-4 py-4">较低档位仍无法覆盖日常峰值</td></tr>
                  <tr><td className="px-4 py-4 font-medium text-ink">Pro 500</td><td className="px-4 py-4">确有极高使用量和速度要求的专业工作流</td><td className="px-4 py-4">能算清升级带来的时间或业务收益</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-5">如果你无法描述“升级后具体解决哪个限制”，先不要买更高档。高价格本身不会自动提高提问质量，也不能代替清晰的任务拆解。</p>
          </section>

          <section id="subscribe-and-renew" className="scroll-mt-24">
            <h2 className="pt-6 font-display text-2xl font-semibold text-ink sm:text-3xl">ChatGPT Plus 怎么开通、续费和查看到期状态？</h2>
            <p className="mt-5">官方订阅通常从当前登录的 ChatGPT 账号进入升级入口，确认套餐和付款信息后完成购买。购买后不要只看扣款通知，应回到账户设置或套餐页面确认会员状态。</p>
            <ol className="mt-5 list-decimal space-y-3 pl-6">
              <li>确认当前登录的邮箱或登录方式，避免给错误账号购买。</li>
              <li>在账户的套餐或升级页面确认产品名称、结算周期和最终金额。</li>
              <li>付款完成后刷新账户状态，并保留订单或支付凭证。</li>
              <li>需要管理续费时，到原购买渠道查看。通过 iOS 或 Android 购买的订阅，通常由对应应用商店管理。</li>
              <li>准备停止续费时，提前在原购买渠道取消自动续订；取消入口名称可能随界面更新而变化。</li>
            </ol>
            <p className="mt-5">通过本站购买时，先在<Link to="/order" className="font-semibold text-brand transition hover:text-brand-deep">套餐页面</Link>选择方案，再进入合作支付页。请以支付页展示的商品、金额和交付说明为准。</p>
          </section>

          <section id="plus-vs-api" className="scroll-mt-24">
            <h2 className="pt-6 font-display text-2xl font-semibold text-ink sm:text-3xl">ChatGPT Plus 和 OpenAI API 有什么区别？</h2>
            <p className="mt-5">这是最容易混淆的一点：<strong className="text-ink">ChatGPT 订阅和 OpenAI API 是不同的产品与计费体系</strong>。Plus 主要面向在 ChatGPT 产品中直接使用；API 面向程序、自动化、Agent 或 SaaS，通过 API Key 发起调用并按 API 规则计费。</p>
            <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2">
              <div className="bg-white p-5"><h3 className="font-display text-lg font-semibold text-ink">选择 ChatGPT 订阅</h3><p className="mt-2 text-sm leading-7">你主要在网页或客户端聊天、上传文件、写作、研究和使用内置工具。</p></div>
              <div className="bg-white p-5"><h3 className="font-display text-lg font-semibold text-ink">选择 API</h3><p className="mt-2 text-sm leading-7">你要让自己的程序、工作流或服务器自动调用模型。</p></div>
            </div>
            <p className="mt-5">开通 Plus 不代表获得一笔可用于 API 的余额；拥有 API Key 也不等于获得 ChatGPT Plus。少数功能可能同时出现在不同产品中，但账单、额度和入口仍要分别确认。</p>
          </section>

          <section id="payment-failed" className="scroll-mt-24">
            <h2 className="pt-6 font-display text-2xl font-semibold text-ink sm:text-3xl">支付失败、订阅失败，应该怎么排查？</h2>
            <p className="mt-5">不要连续重复付款。先判断失败发生在哪一层，能避免重复扣款和账号错配。</p>
            <ul className="mt-5 list-disc space-y-3 pl-6">
              <li><strong className="text-ink">账号层：</strong>确认当前账号、付款账号和准备使用的账号一致。</li>
              <li><strong className="text-ink">订单层：</strong>查看订单是待支付、处理中、成功还是已关闭，不要仅凭银行卡或支付宝提示判断。</li>
              <li><strong className="text-ink">支付层：</strong>检查余额、支付限额、账单信息和支付渠道提示；不要通过陌生私聊链接再次付款。</li>
              <li><strong className="text-ink">交付层：</strong>付款成功但未交付时，保存订单号、付款时间和支付凭证，通过原订单页面或官方支持渠道核查。</li>
              <li><strong className="text-ink">状态层：</strong>交付后仍未生效，先退出并重新登录，再确认是不是登录了另一个账号。</li>
            </ul>
            <p className="mt-5">本站订单问题可通过<Link to="/support" className="font-semibold text-brand transition hover:text-brand-deep">支持页面</Link>联系。邮件中提供订单号和问题描述即可，不要发送密码、验证码或完整会话凭据。</p>
          </section>

          <section id="choose-claude-plan" className="scroll-mt-24">
            <h2 className="pt-6 font-display text-2xl font-semibold text-ink sm:text-3xl">Claude Pro、Claude 5X、Claude KYC 分别适合什么需求？</h2>
            <p className="mt-5">先说明边界：Claude 5X 和 Claude KYC 不是 Anthropic 面向所有用户统一展示的标准套餐名称，而是本站合作商品的区分标签。因此不能只凭名称推断额度或交付形式，必须查看对应商品页。</p>
            <ul className="mt-5 space-y-4">
              <li className="border-t border-line pt-4"><strong className="text-ink">Claude Pro：</strong>适合明确需要 Claude 订阅入口的用户，购买前确认订阅周期、账号归属与续费方式。</li>
              <li className="border-t border-line pt-4"><strong className="text-ink">Claude 5X：</strong>适合商品页所描述的更高使用需求；“5X”具体对应什么权益，应以支付页说明为准。</li>
              <li className="border-t border-line pt-4"><strong className="text-ink">Claude KYC：</strong>涉及身份验证或特定交付条件时，先确认需要提交的信息、处理主体和隐私边界，再决定是否购买。</li>
            </ul>
            <p className="mt-5"><Link to="/claude" className="font-semibold text-brand transition hover:text-brand-deep">Claude 充值页</Link>将三种商品分开呈现，避免与 ChatGPT 套餐混淆。</p>
          </section>

          <section id="chatgpt-vs-claude" className="scroll-mt-24">
            <h2 className="pt-6 font-display text-2xl font-semibold text-ink sm:text-3xl">ChatGPT Plus 和 Claude Pro 怎么选？</h2>
            <p className="mt-5">不要用一条模型榜单替你做决定。最有效的方法，是拿你自己的三类真实任务分别试用免费版本：一个长文档任务、一个日常高频任务、一个对格式要求严格的任务。</p>
            <ul className="mt-5 list-disc space-y-3 pl-6">
              <li>比较结果质量，也比较完成同一任务需要修改多少轮。</li>
              <li>检查你依赖的文件、搜索、图片、编程或工作流功能是否可用。</li>
              <li>确认使用地区、设备和付款渠道是否稳定。</li>
              <li>如果两边都只是偶尔用，不必同时订阅；先购买更能覆盖主要工作流的一边。</li>
            </ul>
            <p className="mt-5">真正的选择标准不是“谁永远更强”，而是<strong className="text-ink">谁能在你的固定任务里更稳定地减少时间和返工</strong>。</p>
          </section>

          <section id="safety-checklist" className="scroll-mt-24">
            <h2 className="pt-6 font-display text-2xl font-semibold text-ink sm:text-3xl">第三方充值前，必须确认哪些安全事项？</h2>
            <div className="mt-6 border-y border-mint-line bg-mint/45 px-5 py-6">
              <ul className="space-y-3 text-sm leading-7 text-ink-soft">
                <li><strong className="text-ink">账号归属：</strong>最终会员绑定到谁的账号，交付的是订阅、卡密还是独立账号。</li>
                <li><strong className="text-ink">敏感凭据：</strong>不要提供密码、短信验证码、邮箱验证码、API Key 或会话令牌。</li>
                <li><strong className="text-ink">支付主体：</strong>确认收款平台、订单金额和商品名称，保存订单页面与付款凭证。</li>
                <li><strong className="text-ink">续费机制：</strong>确认是一次性交付还是自动续费，续费由谁管理。</li>
                <li><strong className="text-ink">售后边界：</strong>确认质保时长、退款条件、异常处理方式和联系渠道。</li>
                <li><strong className="text-ink">KYC 与隐私：</strong>若商品涉及身份验证，先确认收集哪些信息、用途和处理方；无法确认时不要提交。</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="pt-6 font-display text-2xl font-semibold text-ink sm:text-3xl">常见问题</h2>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group py-5">
                  <summary className="cursor-pointer list-none font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-5">{question}<span className="text-muted transition group-open:rotate-45">+</span></span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-muted">{answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="pt-6">
            <h2 className="font-display text-2xl font-semibold text-ink">资料核对与更新说明</h2>
            <p className="mt-5">本文涉及 OpenAI 套餐价格与 API 计费关系的内容，依据发布日可访问的 OpenAI 官方资料整理。产品能力、额度和界面会调整，实际购买前请再次核对官方页面和支付页。</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-sm">
              <li><a href="https://learn.chatgpt.com/docs/pricing" target="_blank" rel="noreferrer" className="font-semibold text-brand transition hover:text-brand-deep">OpenAI Docs：ChatGPT 与 Codex 套餐价格</a></li>
              <li><a href="https://developers.openai.com/api/docs/pricing" target="_blank" rel="noreferrer" className="font-semibold text-brand transition hover:text-brand-deep">OpenAI Docs：API 定价</a></li>
            </ul>
          </section>

          <div className="mt-10 border-y border-mint-line bg-mint/45 px-5 py-8 text-ink">
            <p className="font-display text-xl font-semibold">已经确认适合自己的方案？</p>
            <p className="mt-2 text-sm leading-7 text-ink-soft">先核对商品与交付说明，再进入对应的合作支付页。</p>
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
