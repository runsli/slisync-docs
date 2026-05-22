# HTTP 与鉴权

## Graph HTTP

### 写入

`POST /v1/graphs/:roomId/ops`

```json
{
  "agentId": "example-agent",
  "action": "seed_graph",
  "graphOps": [ ... ]
}
```

Header：`X-Sync-Protocol-Version: 1`、`Authorization` 或 `X-Sync-Agent-Key`；可选 `Idempotency-Key`。

SDK：`pushGraphOpsHttp()` from `@slisync/sync-sdk/graph`。

### 遍历

`GET /v1/graphs/:roomId/traverse?startId=...&workspaceId=...&sessionId=...`

SDK：`fetchGraphTraverseHttp()`。

## Export HTTP

见 [HTTP 导出 API](../guide/export-http.md)。

## Capabilities

`GET /v1/sync/capabilities` — 特性开关与生效的 `agentGraphPolicy`。

```ts
import { fetchSyncCapabilities } from "@slisync/sync-sdk";
```

## 鉴权环境变量

| 变量 | 角色 |
|------|------|
| `SYNC_AUTH_REQUIRED=1` | 强制鉴权 |
| `SYNC_API_KEY` | 人类客户端：join、traverse 读 |
| `SYNC_AGENT_API_KEY` | Agent push、Graph 写、export 读 |
| `SYNC_ROOM_KEYS` | 每 room token JSON |

Demo 浏览器（仅开发）：

- `NEXT_PUBLIC_SYNC_API_KEY`  
- `NEXT_PUBLIC_SYNC_AGENT_API_KEY`  

策略限制示例：

- `SYNC_AGENT_GRAPH_KINDS`  
- `SYNC_AGENT_GRAPH_OPS`  
- `SYNC_AGENT_MAX_GRAPH_OPS`  
- `SYNC_AGENT_DENY_MEMORY`  

```bash
npm run graph:policy
```

## Audit

`GET /v1/rooms/:roomId/audit?limit=50` → JSONL（`SYNC_AUDIT_PATH`）。

SDK：`fetchAuditHttp()`（`@slisync/sync-sdk/graph`）。

## 独立服务 URL

```bash
SYNC_HTTP_URL=http://localhost:3001 npm run graph:push:http
```

`getSyncHttpBase()` 解析 `SYNC_HTTP_URL` / `NEXT_PUBLIC_SYNC_URL` 等，**勿写死本机路径**。
