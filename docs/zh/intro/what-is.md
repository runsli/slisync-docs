# Slisync 是什么

::: tip 一句话
Slisync 像「项目共享笔记本 + 实时同步」：你和多个 AI 改同一份记忆，最后把片段导出成能发布的文章。
:::

**Slisync** 是面向 AI 协作的**实时同步引擎**：多个 Agent 与你在同一个 **room（协作空间）** 里共用记忆与任务状态，并可**导出 Markdown** 供自行发布。

> **Sli** = *scoped live information* — room 内分层、可通过 CRDT 合并的实时共享信息。

## 它不是什么

- 不是聊天软件或 Web3 项目  
- 不是「套一层 API 的 ChatGPT」  
- 不是向量数据库或语义检索产品（路线图明确 **不做** 愿景 9）

## 核心能力一览

| 能力 | 说明 |
|------|------|
| **Realtime Sync** | Socket.IO + Yjs CRDT（主路径）；可选 LWW + JSON Patch |
| **Memory Graph** | `workspace` / `session` / `memory_chunk` / `task` 等节点与边 |
| **Multi-Agent** | `agent:push`、Graph HTTP、Presence、graph activity |
| **Local-first** | 浏览器 IndexedDB + 离线 outbox |
| **Export** | `memory_chunk` → Markdown → 自选静态站 / CMS |

## npm 三件套

| 包 | 职责 |
|----|------|
| `@slisync/sync-schema` | 类型、`GraphOp`、协议版本、鉴权与导出契约 |
| `@slisync/sync-sdk` | 客户端 hooks、`MemoryGraph`、导出与 HTTP 辅助函数 |
| `@slisync/sync-server` | Socket 服务、持久化、Graph/Export HTTP、审计 |

本仓库（[github.com/runsli/slisync](https://github.com/runsli/slisync)）是 **参考实现**：Next.js Demo + 可嵌入的 `server.ts` + 上述三包。

## 典型使用场景

1. **多窗口 / 多设备**：同一项目的两个浏览器标签编辑同一份 scoped memory。  
2. **多 Agent**：Planning Agent 写任务与 chunk，Coding Agent 读同一 room 的图。  
3. **共忆 → 发布**：协作结束后 `export:chunks:http` 生成 `.md` 文件，交给你的静态站或 CMS（[完整故事](../guide/story-pipeline.md)）。

下一步：[为什么需要 Slisync](./why.md) · [安装运行](../guide/getting-started.md)
