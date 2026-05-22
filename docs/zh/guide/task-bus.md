# 任务看板

Slisync **room 级、图原生（graph-native）任务总线**：任务权威状态在 Memory Graph 的 `kind: "task"` 节点中，与 scoped memory **共用同一 Y.Doc / CRDT**。

::: tip 没有 sync:task-* 事件
任务变更通过 `sync:crdt-update` 与 `sync:agent-push`（含 `graphOps`）完成，不单独开任务 socket 协议。
:::

## 任务 vs memory_chunk

| 维度 | `memory_chunk` | `task` |
|------|----------------|--------|
| 用途 | 记忆片段、上下文正文 | 可执行工作项 |
| 核心字段 | `content`、`importance` | `status`、`scope` |
| Markdown 导出 | ✅ | ❌ |
| 典型边 | session `contains` chunk | `depends_on`、`assigned_to`；可 `related_to` → chunk |

## TaskData 字段

| 字段 | 说明 |
|------|------|
| `scope.workspaceId` | 必填 |
| `scope.sessionId` | 可选 |
| `status` | `todo` \| `in_progress` \| `blocked` \| `done` \| `cancelled` |
| `assigneeId` / `priority` / `dueAt` | 可选 |

## Demo 验收

1. `npm run dev` → 打开 **任务看板** Tab（与记忆 Tab 同 room：`example-room`）  
2. 终端：

```bash
npm run task:seed
npm run agent:push -- --task-title "审查导出流水线" --status in_progress
```

3. 在 UI 中改任务 status → 第二窗口应同步  
4. 双开浏览器验证与 [Scoped Memory](./scoped-memory.md) 相同 room

## SDK 示例

```ts
import { MemoryGraph, buildDemoTaskOps, applyGraphOps } from "@slisync/sync-sdk/graph";

const graph = MemoryGraph.on(doc, "agent-1").init("example-room");

const task = graph.upsertTask({
  workspaceId: "ws-demo",
  sessionId: "sess-demo",
  title: "审查导出流水线",
  status: "todo",
});

graph.updateTaskStatus(task.id, "in_progress", { assigneeId: "user-42" });

applyGraphOps(doc, buildDemoTaskOps("agent-1", "ws-demo", "sess-demo"), "agent-1");
```

## 明确不做

- Workflow 引擎 / DAG 编排（愿景 11）  
- IndexedDB 或 PostgreSQL **单独任务表**  
- 在 `export:chunks` 中导出 task  

见 [Agent CLI](./agent-cli.md)、[Memory Graph](../sdk/memory-graph.md)。
