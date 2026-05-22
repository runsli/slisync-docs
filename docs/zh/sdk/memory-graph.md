# Memory Graph

图数据存放在 room 的 `Y.Doc` 路径 `graph/` 下，经 `sync:crdt-update` 多端复制。

## MemoryGraph API

```ts
import { MemoryGraph } from "@slisync/sync-sdk/graph";

const graph = MemoryGraph.on(doc, "agent-1").init(roomId);

graph.upsertChunk({
  workspaceId: "ws-demo",
  sessionId: "sess-demo",
  title: "Payment context",
  content: "Stripe Checkout + webhooks.",
  source: "agent",
  importance: 0.8,
});

graph.upsertTask({
  workspaceId: "ws-demo",
  sessionId: "sess-demo",
  title: "Review export",
  status: "todo",
});

graph.updateTaskStatus(taskId, "in_progress");

const result = graph.traverse(rootId, {
  scopeFilter: { workspaceId: "ws-demo" },
  kinds: ["memory_chunk"],
});
```

## 批量种子

```ts
import { buildScopedMemoryOps, buildDemoTaskOps, applyGraphOps } from "@slisync/sync-sdk/graph";

applyGraphOps(doc, buildScopedMemoryOps("agent-1", "ws-demo", "sess-demo"), "agent-1");
applyGraphOps(doc, buildDemoTaskOps("agent-1", "ws-demo", "sess-demo"), "agent-1");
```

与 `npm run graph:seed`、`task:seed` 一致。

## 节点 kind（常见）

| kind | 用途 |
|------|------|
| `workspace` | 工作区根 |
| `session` | 会话 |
| `memory_chunk` | 记忆正文 |
| `task` | 任务状态 |
| `project` / `file` / … | legacy 或扩展 demo |

## 边 relation

`contains`、`related_to`、`depends_on`、`assigned_to` 等；Agent 可写范围由 `agentGraphPolicy` 限制。

## 活动与可视化

- Agent `graphOps` → `sync:graph-activity`  
- 客户端 `notifyGraphActivity(summary)`  
- Demo：`GraphTreeView`、力导向/树布局  

## 导出

仅 `memory_chunk` → [导出 Markdown](../guide/export.md)。

```ts
import { exportMemoryChunksFromSnapshot, readMemoryGraphSnapshot } from "@slisync/sync-sdk/graph";
```
