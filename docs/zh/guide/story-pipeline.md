# 共忆 → Markdown → 静态站

::: info 本页你将完成
- [ ] 在 Slisync 里编辑记忆片段
- [ ] HTTP 导出 Markdown 到本地目录
- [ ] 把文件交给自选的静态站或 CMS
:::

可演示链路：前两步约 **15 分钟**；第 3 步取决于你的建站工具。

## 1. 共忆（slisync）

```bash
cd ~/Documents/GitHub/slisync
nvm use 20 && npm install && npm run dev
```

另开终端：

```bash
npm run graph:seed
# 浏览器改标题/正文；可开第二窗口验证同步
```

可选：`npm run task:seed`（任务**不会**进入导出）。

详见 [多人一起写记忆](./scoped-memory.md)、[任务看板](./task-bus.md)。

## 2. 导出 Markdown

```bash
npm run export:chunks:http -- --room example-room --out ./markdown/chunks
```

**期望**：`count >= 1`，且存在 `markdown/chunks/ws-demo/sess-demo/*.md`。

或在 Demo 点 **「导出为 Markdown 草稿（zip）」**。

::: warning 导出读服务端
仅已同步到 **服务端 CRDT** 的片段会出现在导出中。见 [离线优先](./local-first.md)。
:::

此时你得到带 YAML front matter 的 `.md` 文件，可按 Hugo、VitePress、Astro content、Obsidian、自研 CMS 等各自规则使用。

## 3. 发布（你的工具链）

Slisync **不**内置博客产品。常见做法：

1. 将 `markdown/chunks/**` 复制或同步到站点的内容目录。  
2. 用你工具的 schema 映射 `title`、`date`（其余字段可忽略）。  
3. 运行该工具的 `build` / `dev`。

多出来的 front matter（`workspaceId`、`roomId` 等）对多数生成器无害。

## 4. 边界（演示时建议说明）

| 做 | 不做 |
|----|------|
| 协作、导出 Markdown 快照 | 在发布站点改字自动回写 room |
| 任务看板跟执行 | 把 task 当博客文章导出 |
| 多 Agent 写记忆片段 | 把 Slisync 说成「带建站的产品」 |

## 相关

- [导出 Markdown](./export.md) · [HTTP 导出](./export-http.md)
- [生态地图](../ecosystem.md)

[English](/guide/story-pipeline)
