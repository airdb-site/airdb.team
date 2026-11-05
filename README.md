# AIRDB Team

人物与共同创造的展示站：各美其美、美人之美、美美与共。当前展示一位已确认身份的创始人 Dean，使用用户认可的 AI 编辑插画，不虚构其他成员或合作成果。

## 开发

Node 26，pnpm 11.9.0。`pnpm install --frozen-lockfile`，`pnpm dev`，`pnpm build`。

## 主要文件

- `src/data/people.ts`：人物介绍、关注方向与项目链接。
- `src/pages/index.astro`：首页，人物、欣赏差异、创造方向、协作与联系。
- `src/styles/people.css`：人物展示风格，在原有自托管字体与品牌基础上扩展。
- `static/images/team/dean-editorial-v1.png`：AI 艺术肖像，非真人还原。
- `src/data/team.ts`：历史招募数据，当前首页不使用；恢复使用前需重新确认岗位真实性与统计口径。

增加成员时需确认本人资料、形象授权与作品出处。没有真实资料时不生成虚构在职成员；合作故事只记录实际发生的协作。

首页保留 `#people`、`#capabilities`、`#about`、`#network` 兼容入口。联系使用邮件，不依赖表单后端。GitHub Pages 部署流程保持不变。
