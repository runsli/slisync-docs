# 路线图

Slisync 用 **12 阶段产品愿景** 描述方向，用 **工程 Phase 1–11 / P0–P3** 标注本仓库实现。二者并行维护。

## 状态图例

| 标记 | 含义 |
|------|------|
| ✅ | 主分支可用，有 Demo 或测试 |
| ⬜ | 未开始 |
| ⛔ | 明确排除 |

## 12 阶段（产品愿景）

### 基础架构

| 阶段 | 主题 | 状态 |
|------|------|------|
| 1 | Realtime Sync | ✅ |
| 2 | Local-first | ✅ |
| 3 | Patch Sync | ✅ |

### 数据与 SDK

| 阶段 | 主题 | 状态 |
|------|------|------|
| 4 | Persistence | ✅ JSON / Redis / Postgres |
| 5 | Conflict Resolution | ✅ Yjs CRDT |
| 6 | SDK 产品化 | ✅ `@slisync/*` |

### AI 原生层

| 阶段 | 主题 | 状态 |
|------|------|------|
| 7 | Memory Layer | ✅ Scoped Memory Demo |
| 8 | Memory Graph | ✅ Graph + HTTP |
| 9 | Semantic Memory | ⛔ 不做向量/推理 |

### 多 Agent

| 阶段 | 主题 | 状态 |
|------|------|------|
| 10 | Multi-Agent | ✅ 任务总线、agent push、Presence |
| 11 | Workflow Engine | ⬜ |
| 12 | AI Runtime / OS | ⬜ 长期愿景 |

## 工程里程碑（摘要）

| 工程 | 状态 |
|------|------|
| Phase 1–6 | ✅ room、patch、持久化、LWW、拆包、agent |
| Phase 7–11 | ✅ Graph、鉴权、HTTP、集成测试 |
| P0–P3 | ✅ 协议 v1、Redis 集群、CRDT 权威、scoped memory、可视化 |

## 已完成的生态能力（演示相关）

- Markdown 导出 M0–M4：CLI（`export:chunks`）、HTTP（`export:chunks:http`）、`fetchExportChunksZipHttp`、可选 Postgres  
- Room 任务总线 + Demo 任务看板 Tab  
- 浏览器 IndexedDB local-first + 离线 outbox（[Local-first](../guide/local-first.md)）  

## 下一步（非承诺排期）

- 愿景 **11**：轻量 Workflow（基于共享状态触发，非重型编排）  
- 托管 **Cloud Sync**（商业化方向，见 [原则](./principles.md)）  

仓库内完整对照表见 [GitHub docs/zh/ROADMAP.md](https://github.com/runsli/slisync/blob/main/docs/zh/ROADMAP.md)。
