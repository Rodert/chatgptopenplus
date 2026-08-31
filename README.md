# ChatGPT * OpenPlus

营销站前端（第一版）：展示套餐并跳转外部支付站。域名：[chatgptopenplus.com](https://chatgptopenplus.com)

## 技术栈

- Vite + React + TypeScript + Tailwind CSS v4
- React Router
- 部署目标：GitHub + Cloudflare Pages

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

产物在 `dist/`。Cloudflare Pages 配置建议：

| 项 | 值 |
|---|---|
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |

SPA 回退已放在 `public/_redirects`。

## 配置

支付跳转、客服与招代理联系方式在 `src/config/site.ts`。上线前替换占位 URL。

## 第一版范围

- 落地页、套餐、FAQ
- 隐私保护 / 用户协议 / 支持方式 / 招收代理
- 充值按钮跳转外部支付站

不含：站内支付、订单查询、自助充值、管理后台。
