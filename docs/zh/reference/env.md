# 环境变量速查

摘自 slisync 仓库 [.env.example](https://github.com/runsli/slisync/blob/main/.env.example)。按**场景**查阅，不必一次全配。

## 开发 / Demo

| 变量 | 说明 |
|------|------|
| `NEXT_PUBLIC_SYNC_URL` | 浏览器连 Sync 的地址（独立 sync 时如 `http://localhost:3001`） |
| `HOST` / `NEXT_DEV_HOST` | 绑定或 Next 开发主机 |
| `SYNC_PORT` / `SYNC_HOST` | 独立 sync 监听（默认 `:3001`、`0.0.0.0`） |

## 持久化（服务端，三选一）

| 变量 | 说明 |
|------|------|
| `REDIS_URL` | Redis；常同时启用 Socket 集群广播 |
| `SYNC_CRDT_POSTGRES_URL` | PostgreSQL CRDT 表 |
| `SYNC_CRDT_DATA_PATH` | JSON 文件，默认 `.sync-data/crdt-rooms.json` |
| `SYNC_DATA_PATH` | LWW room JSON（非 CRDT 图） |
| `SYNC_SOCKET_ADAPTER` | 设为 `0` 可在有 `REDIS_URL` 时关闭 Redis Socket 广播 |

## 鉴权

| 变量 | 说明 |
|------|------|
| `SYNC_AUTH_REQUIRED=1` | 强制鉴权 |
| `SYNC_API_KEY` | 人类客户端：join、traverse 读 |
| `SYNC_AGENT_API_KEY` | Agent 写、Graph HTTP、export 读 |
| `SYNC_ROOM_KEYS` | 每 room token JSON |
| `NEXT_PUBLIC_SYNC_API_KEY` | Demo 浏览器（仅开发） |

## Agent 图策略

| 变量 | 说明 |
|------|------|
| `SYNC_AGENT_GRAPH_KINDS` | 允许的节点 kind |
| `SYNC_AGENT_GRAPH_OPS` | 允许的 op 类型 |
| `SYNC_AGENT_MAX_GRAPH_OPS` | 单次 push 上限 |
| `SYNC_AGENT_DENY_MEMORY` | 禁止 Agent 改 demo message 字段 |

生效结果：`GET /v1/sync/capabilities`

## 导出 HTTP

| 变量 | 说明 |
|------|------|
| `SYNC_HTTP_URL` / `SYNC_EXPORT_HTTP_URL` | CLI `export:chunks:http` 根地址 |
| `SYNC_EXPORT_WORKSPACE` / `SESSION` / `MIN_IMPORTANCE` | 过滤 |

## 审计

| 变量 | 说明 |
|------|------|
| `SYNC_AUDIT_PATH` | 追加写审计 JSONL（默认 `.sync-data/audit.jsonl`） |
| `SYNC_AUDIT_MEMORY=1` | 未设路径时用内存审计 |

## 其它

| 变量 | 说明 |
|------|------|
| `SYNC_GRAPH_SCOPED=0` | `graph:seed` 使用 legacy 图 |
| `SYNC_ROOM` | CLI 默认 room，常 `example-room` |
| `SYNC_URL` | CLI Socket 根地址（`agent:push`、`graph:seed`） |
| `SYNC_AGENT_ID` | CLI agent id 覆盖 |
| `SYNC_CRDT_DATA_PATH` | `export:chunks` 文件源 / CI fixture 路径 |

[English](/reference/env)
