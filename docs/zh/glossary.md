# 术语表

读文档或 Demo 时遇到英文缩写，可在此对照。**日常说法**在前，**代码里的名字**在后。

## 核心概念

| 中文 | English / 代码 | 说明 |
|------|----------------|------|
| **房间** | `room` / `roomId` | 同步边界；默认演示 `example-room` |
| **共忆** | shared memory | 多客户端/多 Agent 在同一 room 内的合并状态 |
| **分层实时信息** | **Sli** — scoped live information | 产品名 Slisync 的词源 |
| **记忆图** | Memory Graph | 存在 Y.Doc `graph/` 下的节点与边 |
| **工作区** | `workspace` / `workspaceId` | 图顶层 scope，如 `ws-demo` |
| **会话** | `session` / `sessionId` | 工作区下的主题，如 `sess-demo` |
| **记忆片段** | `memory_chunk` | 可编辑正文；**可导出为 Markdown** |
| **任务节点** | `kind: "task"` | 看板任务；**不导出**为 Markdown |
| **Markdown 导出** | export chunks | `markdown/chunks/.../*.md`，Slisync 的发布契约 |

## 同步与一致性

| 中文 | English | 说明 |
|------|---------|------|
| **CRDT** | Yjs | 默认合并策略，多端无损合并 |
| **LWW** | last-write-wins | 可选，带 `baseVersion` 的 JSON Patch |
| **离线优先** | local-first | IndexedDB 快照 + outbox；服务端仍为权威 |
| **出站队列** | outbox | 离线时待上传的 CRDT 增量 |
| **在线成员** | Presence | `presenceMembers`，Demo ScopeBar 显示人数 |

## Agent 与 API

| 中文 | English | 说明 |
|------|---------|------|
| **Agent 推送** | `agent:push` / `pushAgentMemory` | 无头脚本写入 room |
| **图操作** | `graphOps` | `upsertNode`、`upsertEdge` 等 |
| **协议版本** | `protocolVersion` / `X-Sync-Protocol-Version: 1` | 不兼容则拒绝连接 |
| **能力发现** | `GET /v1/sync/capabilities` | 特性与 agent 策略快照 |

## 导出

| 中文 | English | 说明 |
|------|---------|------|
| **导出路径** | `markdown/chunks/{ws}/{session}/{slug}.md` | 通用目录结构，多数发布工具可直接使用 |
| **单向快照** | one-way export | 发布侧改 Markdown **不**回写 room |

## npm 包

| 包名 | 职责 |
|------|------|
| `@slisync/sync-schema` | 类型与契约 |
| `@slisync/sync-sdk` | 客户端、Graph、导出 HTTP 客户端 |
| `@slisync/sync-server` | Socket + HTTP 服务端 |

[生态地图](./ecosystem.md) · [English](/glossary)
