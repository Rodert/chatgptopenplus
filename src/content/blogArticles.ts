export type ArticleTable = {
  headers: string[]
  rows: string[][]
}

export type ArticleSection = {
  id: string
  title: string
  paragraphs?: string[]
  bullets?: string[]
  steps?: string[]
  callout?: string
  table?: ArticleTable
}

export type BlogArticle = {
  slug: string
  title: string
  seoTitle: string
  description: string
  date: string
  readingTime: string
  intro: string
  sections: ArticleSection[]
  faqs: Array<[string, string]>
  relatedSlugs: string[]
  sources?: Array<[string, string]>
}

export type BlogMeta = Pick<BlogArticle, 'slug' | 'title' | 'seoTitle' | 'description' | 'date' | 'readingTime'>

export const legacyArticles: BlogMeta[] = [
  {
    slug: 'chatgpt-plus-subscription-guide',
    title: 'ChatGPT Plus 怎么开通？套餐区别、API、Claude 与支付问题完整指南',
    seoTitle: 'ChatGPT Plus 怎么开通？套餐、API、Claude 与支付指南',
    description: 'ChatGPT Plus 与 Pro 怎么选、如何开通续费、Plus 和 API 的区别、支付失败排查、Claude 套餐选择及第三方充值安全事项。',
    date: '2026-10-22',
    readingTime: '12 分钟阅读',
  },
  {
    slug: 'chatgpt-plus-worth-it',
    title: 'ChatGPT Plus 到底值不值得开？用了这么久，我觉得很多人一开始就搞错了',
    seoTitle: 'ChatGPT Plus 到底值不值得开？免费版、Plus 与 API 的区别',
    description: '免费版够不够用、ChatGPT Plus 真正的价值、适合人群，以及 Plus 与 API 的区别，一篇讲清楚。',
    date: '2026-09-04',
    readingTime: '8 分钟阅读',
  },
]

export const guideArticles: BlogArticle[] = [
  {
    slug: 'chatgpt-plus-vs-pro-plans',
    title: 'ChatGPT Plus 与 Pro 100/200/500 怎么选？先算清使用强度',
    seoTitle: 'ChatGPT Plus 与 Pro 100/200/500 怎么选？套餐对比指南',
    description: '对比 ChatGPT Plus、Pro 100、Pro 200 和 Pro 500 的适用人群、升级信号与选择方法，避免为用不到的额度付费。',
    date: '2026-10-22',
    readingTime: '9 分钟阅读',
    intro: '选套餐不是找“最强的一档”，而是找能覆盖真实工作流的最低档。下面用使用频率、任务强度和升级信号，帮你把选择缩小到一个可验证的范围。',
    sections: [
      {
        id: 'official-pricing',
        title: '先看清官方价格与命名',
        paragraphs: [
          '根据发布日可访问的 OpenAI 官方资料，ChatGPT Plus 为 20 美元/月；Pro 提供 100、200 和 500 美元/月档位。具体可用模型、速度和额度会随产品调整，购买前应以自己账户中的套餐页为准。',
          '套餐价格高，不代表每一次回答都必然更好。更高档位主要解决的是高频使用、复杂任务和工作流被限制打断的问题。',
        ],
        callout: '最稳妥的原则：先使用当前套餐，记录一周内被额度、速度或功能阻断的次数，再决定是否升级。',
      },
      {
        id: 'plan-comparison',
        title: '四档套餐分别适合谁？',
        table: {
          headers: ['方案', '适合场景', '升级信号'],
          rows: [
            ['Plus', '日常写作、文件分析、学习、编程和稳定高频使用', '免费版限制已经多次打断完整任务'],
            ['Pro 100', '每天长时间使用，任务量明显高于普通个人用户', 'Plus 的可用量持续影响交付'],
            ['Pro 200', '多项目并行、长上下文或高强度专业工作', '较低 Pro 档仍频繁触及限制'],
            ['Pro 500', '能够量化高速度、高用量带来业务回报的重度工作流', '节省的时间价值明确高于升级成本'],
          ],
        },
        paragraphs: ['如果只是担心“以后可能不够”，先不要提前购买更高档。额度是否够用与模型、任务复杂度、上下文长度和工具调用都有关，别人的使用感受不能直接替代你的数据。'],
      },
      {
        id: 'decision-method',
        title: '用 3 个问题做最终选择',
        steps: [
          '过去 7 天，你有几次因为额度或速度无法继续完成正在做的任务？',
          '这些中断是否造成了可计算的时间、收入或交付损失？',
          '更高档位解决的是稳定发生的问题，还是你尚未验证的想象需求？',
        ],
        paragraphs: ['没有稳定痛点时选 Plus；已经有稳定且可量化的瓶颈，再逐档升级。不要从 Pro 500 往下猜，而要从当前方案往上验证。'],
      },
      {
        id: 'before-buying',
        title: '付款前再检查 4 件事',
        bullets: [
          '确认购买的是 ChatGPT 订阅，不是 OpenAI API 余额。',
          '确认登录账号、结算周期和最终支付金额。',
          '确认是否自动续费，以及由网页、App Store 还是 Google Play 管理。',
          '通过第三方购买时，确认交付方式、账号归属和售后边界。',
        ],
      },
    ],
    faqs: [
      ['Plus 不够用就应该直接上 Pro 500 吗？', '不建议。先确认限制是否持续影响工作，再逐档比较；只有能量化高用量和速度价值时，Pro 500 才更合理。'],
      ['Pro 100、200、500 的权益会一直不变吗？', '不会保证不变。模型、功能和额度可能调整，实际权益应以购买时账户套餐页显示为准。'],
      ['开通 Plus 会赠送 API 额度吗？', '不会。ChatGPT 订阅和 OpenAI API 是分开的计费体系。'],
    ],
    relatedSlugs: ['chatgpt-plus-worth-it', 'chatgpt-plus-vs-openai-api', 'chatgpt-subscription-renewal-status'],
    sources: [['OpenAI Docs：ChatGPT 与 Codex 套餐价格', 'https://learn.chatgpt.com/docs/pricing']],
  },
  {
    slug: 'chatgpt-subscription-renewal-status',
    title: 'ChatGPT Plus 怎么开通、续费？订阅状态在哪里检查',
    seoTitle: 'ChatGPT Plus 开通、续费与订阅状态检查教程',
    description: '从确认账号、完成付款到检查 ChatGPT Plus 状态、管理续费和处理已扣款未生效，按步骤排查订阅问题。',
    date: '2026-10-22',
    readingTime: '8 分钟阅读',
    intro: '订阅问题最常见的根因不是“没有付款”，而是买错账号、在错误渠道管理续费，或只看扣款通知却没有核对订单状态。按下面顺序操作，可以减少重复付款。',
    sections: [
      {
        id: 'before-subscribe',
        title: '开通前：先固定正确账号',
        steps: [
          '打开 ChatGPT 的账户设置，记录当前登录邮箱和登录方式。',
          '确认这就是之后长期使用的账号，尤其注意 Apple、Google 登录与邮箱登录可能对应不同账号。',
          '进入升级页，核对套餐名称、结算周期、币种和最终金额。',
          '付款后保存订单号或应用商店收据，再回到同一个账号检查状态。',
        ],
        callout: '不要只凭“银行卡已经扣款”判断订阅成功。扣款、订单成功和会员生效是三个需要分别确认的状态。',
      },
      {
        id: 'check-status',
        title: '如何确认会员已经生效',
        bullets: [
          '刷新网页或完全退出后重新登录，确认账号邮箱没有变化。',
          '到账户设置或套餐页面查看当前方案，而不是只看模型列表。',
          '通过 iOS 或 Android 购买时，同时查看对应应用商店的订阅记录。',
          '保留付款时间、订单号、金额和购买渠道，出现异常时便于核查。',
        ],
      },
      {
        id: 'renewal',
        title: '续费和取消续费应该去哪里操作',
        table: {
          headers: ['购买渠道', '管理位置', '重点检查'],
          rows: [
            ['ChatGPT 网页', 'ChatGPT 账户中的套餐或订阅管理入口', '续费日期、付款方式、取消状态'],
            ['Apple App Store', 'Apple ID 的订阅管理', '使用的 Apple ID 与到期日'],
            ['Google Play', 'Google Play 的付款和订阅', '使用的 Google 账号与续费状态'],
            ['第三方平台', '原订单页与平台售后渠道', '是否一次性交付、是否自动续费、质保期'],
          ],
        },
        paragraphs: ['在哪个渠道购买，就优先回哪个渠道管理。仅删除 App、退出账号或不再使用，都不等于已经取消自动续费。'],
      },
      {
        id: 'charged-not-active',
        title: '已扣款但没有生效怎么办',
        steps: [
          '停止重复支付，先查看订单是处理中、成功、失败还是已退款。',
          '确认当前登录账号与付款时使用的账号完全一致。',
          '在原购买渠道尝试恢复购买或刷新订阅状态。',
          '仍未恢复时，向原购买渠道提交订单号、付款时间和问题截图；不要发送密码或验证码。',
        ],
      },
    ],
    faqs: [
      ['卸载 ChatGPT 会取消续费吗？', '不会。取消续费需要回到原购买渠道的订阅管理页面操作。'],
      ['付款成功后为什么仍显示免费版？', '常见原因是登录了另一个账号、订单仍在处理，或应用未刷新订阅状态。先核对账号和订单，再恢复购买或联系原渠道。'],
      ['取消自动续费后还能继续使用吗？', '通常可以使用到当前已付费周期结束，具体到期时间以订阅管理页显示为准。'],
    ],
    relatedSlugs: ['chatgpt-payment-failed', 'chatgpt-plus-vs-pro-plans', 'third-party-ai-recharge-safety'],
  },
  {
    slug: 'chatgpt-plus-vs-openai-api',
    title: 'ChatGPT Plus 和 OpenAI API 有什么区别？费用、用途一次讲清',
    seoTitle: 'ChatGPT Plus 和 OpenAI API 的区别：会员不包含 API 额度',
    description: '说明 ChatGPT Plus 与 OpenAI API 在入口、用途、计费、API Key 和适用场景上的区别，避免开了会员却无法调用 API。',
    date: '2026-10-22',
    readingTime: '8 分钟阅读',
    intro: '一句话结论：ChatGPT Plus 是面向 ChatGPT 产品的订阅；OpenAI API 是让程序调用模型的开发接口。两者入口、账单和用量独立，开通 Plus 不会自动获得 API 余额。',
    sections: [
      {
        id: 'core-difference',
        title: '先用一张表分清楚',
        table: {
          headers: ['比较项', 'ChatGPT Plus', 'OpenAI API'],
          rows: [
            ['使用方式', '在 ChatGPT 网页或客户端直接使用', '通过 API Key 让程序或服务器调用'],
            ['主要用途', '聊天、写作、研究、文件和内置工具', '自动化、Agent、批处理、网站或 SaaS'],
            ['计费方式', '按月订阅', '按 API 定价与实际用量计费'],
            ['凭据', 'ChatGPT 账号', '项目与 API Key'],
            ['关系', '不包含 API 余额', '不附带 ChatGPT Plus 会员'],
          ],
        },
      },
      {
        id: 'choose-plus',
        title: '什么情况应该选择 Plus',
        bullets: [
          '你主要在 ChatGPT 页面里完成对话、写作、翻译或资料分析。',
          '你需要上传文件、使用内置工具，并希望减少免费额度带来的中断。',
          '你不准备写程序，也不需要让后台任务自动调用模型。',
        ],
        paragraphs: ['此时你购买的是产品使用体验。即使某些模型同时出现在 API 中，两边的额度和账单也不会合并。'],
      },
      {
        id: 'choose-api',
        title: '什么情况应该选择 API',
        bullets: [
          '你要在自己的网页、App、脚本、工作流或 SaaS 中接入模型。',
          '你需要批量处理内容，或由服务器自动发起请求。',
          '你需要按项目管理密钥、用量和开发成本。',
        ],
        callout: 'API Key 等同于敏感凭据。不要粘贴到公开网页、截图、代码仓库或交给第三方客服。',
      },
      {
        id: 'common-mistakes',
        title: '三个最常见的误区',
        steps: [
          '“我开了 Plus，API 应该免费”——错误，两套计费独立。',
          '“我有 API Key，就能登录 Plus”——错误，API 账户用量不等于 ChatGPT 订阅。',
          '“API 的模型单价能推算 Plus 能用多少次”——不准确，订阅限制和 API token 计费不是同一套规则。',
        ],
      },
      {
        id: 'cost-control',
        title: '使用 API 时如何避免意外费用',
        bullets: [
          '为项目设置预算与用量提醒，并定期查看账单。',
          '服务端保存 API Key，不要在浏览器前端或公开仓库中硬编码。',
          '限制单次输入、输出长度和重试次数，避免异常循环。',
          '开发和生产环境使用不同项目或密钥，便于定位用量。',
        ],
      },
    ],
    faqs: [
      ['ChatGPT Plus 包含 OpenAI API 额度吗？', '不包含。API 使用量需要按照 OpenAI API 的定价单独结算。'],
      ['只有聊天需求，需要创建 API Key 吗？', '通常不需要。直接使用 ChatGPT 产品即可，API 更适合程序化调用。'],
      ['API 余额可以用来续费 Plus 吗？', '不能按同一余额直接抵扣，两套产品的账单与用量独立。'],
    ],
    relatedSlugs: ['chatgpt-plus-vs-pro-plans', 'chatgpt-plus-worth-it', 'third-party-ai-recharge-safety'],
    sources: [
      ['OpenAI Docs：ChatGPT 与 Codex 套餐价格', 'https://learn.chatgpt.com/docs/pricing'],
      ['OpenAI Docs：API 定价', 'https://developers.openai.com/api/docs/pricing'],
    ],
  },
  {
    slug: 'chatgpt-payment-failed',
    title: 'ChatGPT Plus 支付失败怎么办？按账号、订单、支付逐层排查',
    seoTitle: 'ChatGPT Plus 支付失败怎么办？扣款未生效排查指南',
    description: 'ChatGPT Plus 无法付款、支付失败或扣款后未生效时，按账号、订单、支付渠道和订阅状态逐步排查，避免重复扣款。',
    date: '2026-10-22',
    readingTime: '8 分钟阅读',
    intro: '支付失败时最重要的不是马上再付一次，而是判断问题发生在账号、订单、支付渠道还是会员状态。下面的顺序可以把重复扣款和错充账号的风险降到最低。',
    sections: [
      {
        id: 'stop-and-record',
        title: '第一步：停止重复支付，保留信息',
        bullets: [
          '记录付款时间、金额、订单号和页面提示。',
          '保存支付渠道的交易状态，但不要公开完整卡号或敏感信息。',
          '确认当前登录邮箱以及使用的登录方式。',
          '如果页面仍在处理中，先等待订单状态明确，不要连续创建新订单。',
        ],
        callout: '银行显示“预授权”或“扣款中”不一定代表订阅已经成功；最终应同时核对订单状态和 ChatGPT 账户套餐。',
      },
      {
        id: 'diagnose',
        title: '根据现象定位问题',
        table: {
          headers: ['现象', '优先检查', '下一步'],
          rows: [
            ['付款页直接拒绝', '账单信息、支付限额、渠道提示', '按页面提示核对信息，不反复尝试'],
            ['显示扣款但订单失败', '交易是完成、待处理还是预授权', '联系原支付渠道核查'],
            ['订单成功但会员未生效', '登录账号、购买渠道、订阅状态', '刷新或恢复购买后再提交订单信息'],
            ['第三方订单未交付', '订单号、交付时限、售后规则', '只通过原订单页或已验证客服处理'],
          ],
        },
      },
      {
        id: 'account-check',
        title: '账号错配是最容易漏掉的一层',
        paragraphs: ['使用 Apple、Google 或邮箱登录时，看起来相同的邮箱也可能对应不同登录路径。付款后先退出，再用购买时完全相同的方式登录，并到设置页确认套餐。'],
        steps: [
          '核对付款前后显示的账号邮箱。',
          '确认没有在浏览器另一个配置、无痕窗口或 App 中登录其他账号。',
          '通过应用商店购买时，确认当前商店账号就是付款账号。',
        ],
      },
      {
        id: 'contact-support',
        title: '联系支持时应该提供什么',
        bullets: [
          '订单号或交易号、付款日期、金额和购买渠道。',
          '错误提示的完整文字或已遮挡敏感信息的截图。',
          '准备使用的账号邮箱，以及已经完成的排查步骤。',
          '不要提供密码、短信验证码、邮箱验证码、API Key 或会话令牌。',
        ],
      },
    ],
    faqs: [
      ['支付失败后可以马上连续重试吗？', '不建议。先确认旧订单和交易状态，连续重试可能造成多个待处理订单或重复扣款。'],
      ['银行卡扣款了就代表 Plus 开通成功吗？', '不一定。还需要确认订单状态成功，并在正确的 ChatGPT 账号中看到套餐已经生效。'],
      ['客服需要我的 ChatGPT 密码怎么办？', '不要提供。正规排查通常只需要订单信息、账号邮箱和错误描述，不应索取密码或验证码。'],
    ],
    relatedSlugs: ['chatgpt-subscription-renewal-status', 'third-party-ai-recharge-safety', 'chatgpt-plus-vs-pro-plans'],
  },
  {
    slug: 'claude-pro-5x-kyc-guide',
    title: 'Claude Pro、5X、KYC 怎么选？先看清商品名称与交付边界',
    seoTitle: 'Claude Pro、Claude 5X、Claude KYC 区别与选择指南',
    description: '说明 Claude Pro、Claude 5X 和 Claude KYC 的命名边界、适用场景、交付与隐私检查方法，避免仅凭商品标签下单。',
    date: '2026-10-22',
    readingTime: '8 分钟阅读',
    intro: 'Claude Pro 是常见的订阅称呼；“Claude 5X”和“Claude KYC”则是本站合作商品的区分标签，不应被理解为 Anthropic 对所有用户统一展示的官方套餐名称。选择前必须回到商品页核对具体交付。',
    sections: [
      {
        id: 'name-boundary',
        title: '先区分官方套餐与商品标签',
        table: {
          headers: ['名称', '应该如何理解', '下单前重点确认'],
          rows: [
            ['Claude Pro', '面向个人使用的订阅需求', '订阅周期、绑定账号、续费方式'],
            ['Claude 5X', '合作商品的区分标签', '“5X”对应的实际权益、限制和有效期'],
            ['Claude KYC', '涉及特定验证或交付条件的商品标签', '需要哪些资料、谁处理、保存多久、失败如何处理'],
          ],
        },
        callout: '不要从“5X”或“KYC”几个字自行推断额度、账号类型或成功率，一切以商品页的明确说明为准。',
      },
      {
        id: 'choose',
        title: '按真实需求选择',
        bullets: [
          '只需要常规个人订阅：优先了解 Claude Pro 的周期、账号归属和续费方式。',
          '明确需要更高使用强度：再核对 Claude 5X 商品页到底增加了什么，以及限制条件。',
          '商品涉及身份验证：只有在能够确认资料用途、处理方和隐私边界后，才考虑 Claude KYC。',
          '无法确认交付内容：先咨询并保留书面答复，不要仅凭商品标题付款。',
        ],
      },
      {
        id: 'kyc-safety',
        title: 'KYC 场景必须问清的 5 个问题',
        steps: [
          '需要提交哪些信息，是否包含证件、人脸或地址资料？',
          '信息由平台、商家还是其他服务方处理？',
          '信息用于什么目的，保存多长时间，是否可以删除？',
          '验证失败后如何处理，费用是否退还？',
          '能否使用信息更少、风险更低的替代方案？',
        ],
        paragraphs: ['如果这些问题没有清晰答案，就不应提交敏感身份资料。'],
      },
      {
        id: 'delivery-check',
        title: '交付后立即检查',
        bullets: [
          '确认会员实际绑定的账号与约定一致。',
          '确认套餐名称、有效期和可用状态。',
          '修改属于自己的登录凭据并开启可用的安全设置。',
          '保存订单、商品说明和售后承诺，出现异常时从原渠道处理。',
        ],
      },
    ],
    faqs: [
      ['Claude 5X 是 Anthropic 官方套餐名称吗？', '不是面向所有用户统一展示的标准套餐名称，它是本站合作商品的区分标签，具体权益以商品页为准。'],
      ['Claude KYC 一定需要提供身份证件吗？', '不能只凭名称判断。应先查看商品页并向处理方确认需要哪些资料、用途和隐私规则，无法确认时不要提交。'],
      ['Claude 套餐可以和 ChatGPT 套餐混用吗？', '不可以。两者属于不同产品与账号体系，应分别购买和管理。'],
    ],
    relatedSlugs: ['chatgpt-vs-claude', 'third-party-ai-recharge-safety', 'chatgpt-plus-subscription-guide'],
  },
  {
    slug: 'chatgpt-vs-claude',
    title: 'ChatGPT 和 Claude 怎么选？用真实任务做一次有效对比',
    seoTitle: 'ChatGPT 和 Claude 怎么选？写作、编程与长文档对比方法',
    description: '不靠模型榜单，用写作、编程、长文档和日常工作流的真实任务，对比 ChatGPT 与 Claude，找到更适合自己的工具。',
    date: '2026-10-22',
    readingTime: '9 分钟阅读',
    intro: 'ChatGPT 和 Claude 都会持续更新，单次榜单很快过时。更可靠的办法，是拿你每周都会重复做的任务测试两边，并比较结果质量、返工次数、速度和工具适配。',
    sections: [
      {
        id: 'dont-start-with-ranking',
        title: '先别问谁“绝对更强”',
        paragraphs: ['模型表现与提示、文件类型、任务长度、可用工具和产品版本有关。别人说某个模型写作好，不代表它能更好地处理你的行业术语、格式要求或代码仓库。'],
        callout: '选择标准应该是：谁能在你的固定任务中，更稳定地减少时间和返工。',
      },
      {
        id: 'test-set',
        title: '准备一组公平的真实测试',
        steps: [
          '选一个你熟悉答案的写作或分析任务，用来判断事实与表达质量。',
          '选一个真实长文档，要求提取信息并标出依据，检查是否遗漏。',
          '选一个需要严格格式的任务，例如表格、JSON、邮件模板或代码修改。',
          '两边使用相同材料、相同要求和相近的对话轮次，不临时偏袒其中一方。',
        ],
      },
      {
        id: 'scorecard',
        title: '按 5 个维度记录结果',
        table: {
          headers: ['维度', '怎么判断', '建议权重'],
          rows: [
            ['准确性', '事实、引用和计算是否可靠', '高'],
            ['返工量', '达到可交付结果需要修改几轮', '高'],
            ['工具适配', '文件、搜索、图片、代码等是否覆盖工作流', '高'],
            ['速度与稳定性', '高峰期是否影响连续工作', '中'],
            ['成本', '月费是否低于节省的时间价值', '中'],
          ],
        },
        paragraphs: ['把每项按 1 到 5 分记录，并写一句原因。三到五个任务后，结果通常比任何泛化榜单更有参考价值。'],
      },
      {
        id: 'common-scenarios',
        title: '不同人群怎么做初选',
        bullets: [
          '内容创作者：重点比较选题到成稿的返工轮数，以及图片、搜索等配套工具。',
          '程序员：用真实代码、报错和仓库上下文测试，不要只比较一道算法题。',
          '学生与研究者：重点检查长文档提取、引用定位和不确定性表达。',
          '日常办公：测试邮件、表格、会议材料与已有软件流程是否顺手。',
        ],
      },
      {
        id: 'one-or-both',
        title: '需要同时订阅两个吗？',
        paragraphs: ['大多数个人用户不需要一开始就双订阅。先为主要工作流选择一个，连续使用一个结算周期；只有当另一个工具能解决明确且频繁的缺口时，再考虑同时保留。'],
      },
    ],
    faqs: [
      ['ChatGPT 和 Claude 哪个写作更好？', '没有对所有任务都成立的答案。应使用你自己的题材、语气和格式要求测试，并比较达到可交付结果的返工次数。'],
      ['程序员应该直接看模型排行榜吗？', '排行榜可作为参考，但更应该用真实仓库、报错和工具链测试，因为产品工具和上下文处理同样影响效率。'],
      ['需要同时订阅 ChatGPT 和 Claude 吗？', '多数个人用户不需要。先订阅覆盖主要工作流的一边，确认另一边能持续解决明确缺口后再考虑。'],
    ],
    relatedSlugs: ['claude-pro-5x-kyc-guide', 'chatgpt-plus-vs-pro-plans', 'chatgpt-plus-worth-it'],
  },
  {
    slug: 'third-party-ai-recharge-safety',
    title: '第三方 AI 充值安全吗？下单前后的完整检查清单与 FAQ',
    seoTitle: '第三方 ChatGPT、Claude 充值安全检查清单与常见问题',
    description: '第三方 ChatGPT 或 Claude 充值前，检查账号归属、敏感凭据、支付主体、交付方式、续费与售后规则，降低账号和付款风险。',
    date: '2026-10-22',
    readingTime: '10 分钟阅读',
    intro: '第三方充值的风险并不只在付款环节。账号交给谁、需要提供什么、会员如何交付、是否自动续费、异常后找谁处理，任何一项不清楚都可能产生后续问题。',
    sections: [
      {
        id: 'before-order',
        title: '下单前：先确认 6 个边界',
        bullets: [
          '账号归属：最终会员绑定到你的账号，还是交付一个独立账号。',
          '商品内容：套餐、有效期、数量和限制是否写清楚。',
          '交付方式：自动发货、卡密、邀请、账号或其他方式。',
          '续费机制：一次性交付还是自动续费，由谁管理。',
          '售后范围：质保时间、退款条件、异常处理和联系渠道。',
          '支付主体：收款平台、订单金额与商品名称是否一致。',
        ],
      },
      {
        id: 'never-share',
        title: '这些敏感信息不要提供',
        table: {
          headers: ['信息', '主要风险', '正确做法'],
          rows: [
            ['账号密码', '账号被接管或复用', '使用不需要交出密码的交付方式'],
            ['短信或邮箱验证码', '登录、改密或绑定被转移', '只在自己确认的官方页面输入'],
            ['API Key', '产生未授权调用和费用', '仅保存在自己的服务端环境'],
            ['会话令牌或 Cookie', '绕过正常登录访问账号', '不要截图、复制或交给客服'],
            ['完整证件资料', '身份信息被滥用', '先确认处理方、用途、期限和必要性'],
          ],
        },
        callout: '“为了充值必须把验证码发给客服”不是可以忽略的小步骤，而是需要立即停止并重新核实的风险信号。',
      },
      {
        id: 'payment',
        title: '付款时怎么留证据',
        steps: [
          '从官网或已确认的商品页进入，不使用陌生私聊发来的替代链接。',
          '核对商品名称、金额、收款平台和交付说明。',
          '保存订单号、付款时间、商品页面与售后规则截图。',
          '交付完成前不要删除订单记录，异常时只通过原平台联系。',
        ],
      },
      {
        id: 'after-delivery',
        title: '交付后立即完成安全检查',
        bullets: [
          '确认会员绑定账号、套餐名称和有效期符合订单。',
          '如果交付的是独立账号，立即确认能否修改密码、恢复邮箱和安全设置。',
          '检查是否存在不认识的登录设备、绑定方式或自动续费。',
          '出现异常时先保留证据，不在多个渠道重复付款或发送敏感凭据。',
        ],
      },
      {
        id: 'red-flags',
        title: '遇到这些情况应暂停交易',
        bullets: [
          '价格明显异常，但无法说明交付来源和售后规则。',
          '要求离开订单平台私下转账，或临时更换收款链接。',
          '索取密码、验证码、API Key、Cookie 或远程控制权限。',
          '商品页只写“稳定”“永久”，却没有有效期和退款条件。',
          'KYC 资料用途、处理方与删除规则无法说明。',
        ],
      },
    ],
    faqs: [
      ['第三方充值需要提供 ChatGPT 或 Claude 密码吗？', '不应提供。密码、验证码、API Key 和会话令牌都是敏感凭据。'],
      ['订单页显示免注册，就完全没有风险吗？', '不是。免注册只代表下单流程不要求创建平台账号，仍需核对收款主体、交付内容、账号归属与售后规则。'],
      ['付款后一直没有交付怎么办？', '保存订单号和付款凭证，先查看承诺的交付时限，再通过原订单页或已验证的官方支持渠道处理。'],
      ['交付独立账号和给自己的账号充值有什么区别？', '独立账号的所有权、找回方式和历史来源需要额外确认；绑定到自己的账号则要确认操作过程不要求交出敏感凭据。'],
      ['涉及 KYC 时应该注意什么？', '确认资料类型、用途、处理方、保存期限、删除方式和失败后的退款规则；无法确认时不要提交。'],
    ],
    relatedSlugs: ['chatgpt-payment-failed', 'chatgpt-subscription-renewal-status', 'claude-pro-5x-kyc-guide'],
  },
]

export const blogCatalog: BlogMeta[] = [...guideArticles, ...legacyArticles]

export function findGuideArticle(slug: string | undefined) {
  return guideArticles.find((article) => article.slug === slug)
}

export function findBlogMeta(slug: string | undefined) {
  return blogCatalog.find((article) => article.slug === slug)
}
