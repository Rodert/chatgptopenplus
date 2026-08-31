import { PageHero } from '../components/PageHero'
import { site } from '../config/site'

export function TermsPage() {
  return (
    <>
      <PageHero
        title="用户协议"
        description={`使用 ${site.name}（${site.domain}）前，请仔细阅读本协议。`}
      />
      <article className="mx-auto max-w-3xl space-y-8 px-5 py-12 text-sm leading-7 text-ink-soft sm:px-8">
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">1. 服务说明</h2>
          <p className="mt-2">
            本站提供 ChatGPT Plus 代充相关的信息展示与跳转入口。点击充值后，你将前往指定合作支付站点完成下单与支付。商品履约、退款与售后规则以支付站及双方沟通确认为准。
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">2. 用户义务</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>提供真实、有效的联系方式（如邮箱），以便接收开通指引或售后沟通</li>
            <li>不得利用本服务从事违法、欺诈或侵害第三方权益的行为</li>
            <li>妥善保管自身账号与会话凭证，勿向他人泄露密码</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">3. 免责声明</h2>
          <p className="mt-2">
            因第三方平台规则变更、网络故障、不可抗力或用户自身操作失误导致的损失，本站在法律允许范围内不承担责任。展示价格与套餐可能调整，以支付站实际页面为准。
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">4. 知识产权</h2>
          <p className="mt-2">
            本站文案、设计与标识归运营方所有。ChatGPT、OpenAI 等为相应权利人商标，本站与其无隶属关系。
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">5. 协议变更</h2>
          <p className="mt-2">
            我们可能更新本协议。更新后继续使用本站即视为接受修订内容。如有疑问，请通过支持渠道联系我们。
          </p>
        </section>
        <p className="text-xs text-muted">最近更新：2026-08-31。</p>
      </article>
    </>
  )
}
