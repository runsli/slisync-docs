# Agent CLI

Headless agents write shared state or the graph via Socket **`sync:agent-push`**. The demo footer has copy-paste commands; default URL is `http://127.0.0.1:3000` (same as `npm run dev`).

## `graph:seed` — seed memory graph

```bash
npm run graph:seed
```

- Default **scoped memory**: `ws-demo` / `sess-demo`  
- Env: `SYNC_URL`, `SYNC_ROOM` (default `example-room`), `SYNC_AGENT_ID`  
- Legacy graph: `SYNC_GRAPH_SCOPED=0 npm run graph:seed`

## `agent:push` — simulate an agent

```bash
npm run agent:push
npm run agent:push -- --action summarize --append " [from agent]"
npm run agent:push -- --message "custom message field"
```

### Task writes (task board)

```bash
npm run task:seed
npm run agent:push -- --task-title "Review export" --status in_progress
```

`status`: `todo` | `in_progress` | `done`, etc.

## HTTP writes (no long-lived socket)

```bash
npm run graph:push:http
npm run graph:traverse:http -- --start <nodeId>
```

Requires `SYNC_AGENT_API_KEY` when auth is on. See [HTTP & auth](../sdk/http.md).

## SDK: `pushAgentMemory`

```ts
import { pushAgentMemory } from "@slisync/sync-sdk/agent";
import { buildScopedMemoryOps } from "@slisync/sync-sdk/graph";

await pushAgentMemory({
  url: "http://127.0.0.1:3000",
  roomId: "example-room",
  agentId: "my-agent",
  action: "seed_graph",
  graphOps: buildScopedMemoryOps("my-agent", "ws-main", "sess-1"),
});
```

## Policy and limits

The server can restrict agent graph ops (kinds, relations, op types, count per push). Effective policy:

`GET /v1/sync/capabilities` → `agentGraphPolicy`

```bash
npm run graph:policy   # validate default policy locally
```

Standalone sync: `SYNC_URL=http://localhost:3001 npm run agent:push`
