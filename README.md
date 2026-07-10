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
- `src/data/team.ts`：领域、成员和能力示例数据
- `src/styles/global.css`：全局设计系统与响应式样式
- `static/images/team/`：站点使用的团队图像
- `images/`：设计概念与视觉基准

第一版成员档案为示例数据，后续可以替换为 CMS 或数据库数据源。
