# Memory Graph

Graph data lives under `graph/` in the room `Y.Doc`, replicated via `sync:crdt-update`.

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

## Batch seeding

```ts
import { buildScopedMemoryOps, buildDemoTaskOps, applyGraphOps } from "@slisync/sync-sdk/graph";

applyGraphOps(doc, buildScopedMemoryOps("agent-1", "ws-demo", "sess-demo"), "agent-1");
applyGraphOps(doc, buildDemoTaskOps("agent-1", "ws-demo", "sess-demo"), "agent-1");
```

Same as `npm run graph:seed` and `task:seed`.

## Node kinds (common)

| kind | Role |
|------|------|
| `workspace` | Workspace root |
| `session` | Session / topic |
| `memory_chunk` | Memory body |
| `task` | Task status |
| `project` / `file` / … | Legacy or extended demo |

## Edge relations

`contains`, `related_to`, `depends_on`, `assigned_to`, etc. Agent writable range is limited by `agentGraphPolicy`.

## Activity and visualization

- Agent `graphOps` → `sync:graph-activity`  
- Client `notifyGraphActivity(summary)`  
- Demo: `GraphTreeView`, force-directed / tree layouts  

## Export

Only `memory_chunk` → [Export Markdown](../guide/export.md).

```ts
import { exportMemoryChunksFromSnapshot, readMemoryGraphSnapshot } from "@slisync/sync-sdk/graph";
```
