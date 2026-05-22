# Task bus

Slisync provides a **room-level, graph-native task bus**: authoritative task state lives in Memory Graph nodes with `kind: "task"`, sharing the same **Y.Doc / CRDT** as scoped memory.

::: tip No `sync:task-*` events
Task changes use `sync:crdt-update` and `sync:agent-push` (with `graphOps`) — there is no separate task socket protocol.
:::

## Tasks vs `memory_chunk`

| Dimension | `memory_chunk` | `task` |
|-----------|----------------|--------|
| Purpose | Memory snippets, context body | Actionable work items |
| Core fields | `content`, `importance` | `status`, `scope` |
| Markdown export | Yes | No |
| Typical edges | session `contains` chunk | `depends_on`, `assigned_to`; optional `related_to` → chunk |

## `TaskData` fields

| Field | Notes |
|-------|-------|
| `scope.workspaceId` | Required |
| `scope.sessionId` | Optional |
| `status` | `todo` \| `in_progress` \| `blocked` \| `done` \| `cancelled` |
| `assigneeId` / `priority` / `dueAt` | Optional |

## Demo checklist

1. `npm run dev` → open **Task board** tab (same room as memory: `example-room`)  
2. Terminal:

```bash
npm run task:seed
npm run agent:push -- --task-title "Review export pipeline" --status in_progress
```

3. Change task status in the UI → second window should sync  
4. Two browsers — same room as [Scoped memory demo](./scoped-memory.md)

## SDK example

```ts
import { MemoryGraph, buildDemoTaskOps, applyGraphOps } from "@slisync/sync-sdk/graph";

const graph = MemoryGraph.on(doc, "agent-1").init("example-room");

const task = graph.upsertTask({
  workspaceId: "ws-demo",
  sessionId: "sess-demo",
  title: "Review export pipeline",
  status: "todo",
});

graph.updateTaskStatus(task.id, "in_progress", { assigneeId: "user-42" });

applyGraphOps(doc, buildDemoTaskOps("agent-1", "ws-demo", "sess-demo"), "agent-1");
```

## Explicitly out of scope

- Workflow engine / DAG orchestration (vision 11)  
- Separate IndexedDB or PostgreSQL **task tables**  
- Exporting tasks via `export:chunks`  

See [Agent CLI](./agent-cli.md) · [Memory Graph](../sdk/memory-graph.md).
