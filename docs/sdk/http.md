# HTTP & auth

## Graph HTTP

### Write

`POST /v1/graphs/:roomId/ops`

```json
{
  "agentId": "example-agent",
  "action": "seed_graph",
  "graphOps": [ ... ]
}
```

Headers: `X-Sync-Protocol-Version: 1`, `Authorization` or `X-Sync-Agent-Key`; optional `Idempotency-Key`.

SDK: `pushGraphOpsHttp()` from `@slisync/sync-sdk/graph`.

### Traverse

`GET /v1/graphs/:roomId/traverse?startId=...&workspaceId=...&sessionId=...`

SDK: `fetchGraphTraverseHttp()`.

## Export HTTP

See [HTTP export API](../guide/export-http.md).

## Capabilities

`GET /v1/sync/capabilities` — feature flags and effective `agentGraphPolicy`.

```ts
import { fetchSyncCapabilities } from "@slisync/sync-sdk";
```

## Auth environment variables

| Variable | Role |
|----------|------|
| `SYNC_AUTH_REQUIRED=1` | Force auth |
| `SYNC_API_KEY` | Human clients: join, traverse read |
| `SYNC_AGENT_API_KEY` | Agent push, Graph write, export read |
| `SYNC_ROOM_KEYS` | Per-room tokens JSON |

Demo browser (dev only):

- `NEXT_PUBLIC_SYNC_API_KEY`  
- `NEXT_PUBLIC_SYNC_AGENT_API_KEY`  

Policy examples:

- `SYNC_AGENT_GRAPH_KINDS`  
- `SYNC_AGENT_GRAPH_OPS`  
- `SYNC_AGENT_MAX_GRAPH_OPS`  
- `SYNC_AGENT_DENY_MEMORY`  

```bash
npm run graph:policy
```

## Audit

`GET /v1/rooms/:roomId/audit?limit=50` → JSONL (`SYNC_AUDIT_PATH`).

SDK: `fetchAuditHttp()` (`@slisync/sync-sdk/graph`).

## Standalone server URL

```bash
SYNC_HTTP_URL=http://localhost:3001 npm run graph:push:http
```

`getSyncHttpBase()` resolves `SYNC_HTTP_URL` / `NEXT_PUBLIC_SYNC_URL` — do not hard-code machine paths.
