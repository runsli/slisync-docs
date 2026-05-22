# 为什么需要 Slisync

## 1. 解决「聊完就忘」

多数 AI 仍是**单次对话、独立会话**。当手机助手、浏览器 Agent、IDE Agent、企业自动化并存时，每个系统各自保存上下文，**没有项目级的统一记忆空间**。

Slisync 提供 **room 级权威状态**：

- 人类在 Demo 里改的 `memory_chunk`  
- Agent 通过 `graph:seed` / `agent:push` 写入的节点  
- 任务看板上的 `status` 变更  

都在同一 CRDT 文档里合并，而不是散落在聊天记录里。

## 2. 解决「多 Agent 协作」瓶颈

例如「做一个 Shopify 项目」往往需要：

| Agent | 典型产出 |
|-------|----------|
| Planning | 任务拆解、优先级 |
| Coding | 实现笔记、技术决策 |
| Testing / Review | 验收项、问题列表 |

若没有共享图结构，团队只能复制粘贴 JSON 或依赖脆弱的消息传递。Slisync 用 **Memory Graph** 表达：

- **记忆** → `memory_chunk`（正文在 `content`）  
- **执行** → `task`（`todo` → `in_progress` → `done`）  
- **关系** → `contains`、`related_to`、`depends_on` 等边  

## 3. 共忆与发布分工

| 层 | 角色 |
|----|------|
| 活记忆 | **Slisync** — 实时、可合并、Agent 可写 |
| 发布物 | **Markdown 文件** — 你的静态站、CMS 或笔记库（Slisync 之外） |

导出是 **单向快照**：在发布站点里改 Markdown **不会**写回 room，避免双数据源。

## 4. 与通用实时数据库的差异

Slisync 不是通用 Firebase 替代品，而是为 **Agent + 结构化记忆图** 设计：

- 内置 `MemoryGraph`、`agentGraphPolicy`、audit  
- 协议版本 `1` 与 capabilities 端点  
- 一等公民的 **export/chunks**（标准 Markdown 导出）

下一步：[架构与技术栈](./architecture.md)
