# AIRDB Team

AIRDB Team 是一个基于 Astro 的静态团队网络站点，用于展示集团中的独立公司、前沿技术人才、能力领域与协作方式。

## 本地开发

```bash
pnpm install
pnpm dev
```

## 构建

```bash
pnpm build
```

构建产物输出到 `dist/`。

## 目录

- `src/pages/index.astro`：首页结构与交互
- `src/pages/404.astro`：品牌化 404 页
- `src/data/team.ts`：领域、成员和能力数据；创始人档案在 `founder` 对象（人设文案：motto / tags / terminal）
- `src/styles/global.css`：全局设计系统与响应式样式（含创始人特设卡的终端主题）
- `static/images/team/`：团队图像；`founder-dean.svg` 为创始人肖像
- `static/fonts/`：自托管 IBM Plex Mono（400/500/600，latin + latin-ext）
- `images/`：设计概念与视觉基准

创始人档案为真实成员；其余成员档案为示例数据，后续可以替换为 CMS 或数据库数据源。hero 区的网络规模数字是建设目标，有真实数据后请一并更新 `index.astro` 中的注记。
