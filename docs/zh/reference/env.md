# 环境变量速查

摘自 slisync 仓库 [.env.example](https://github.com/runsli/slisync/blob/main/.env.example)。按**场景**查阅，不必一次全配。

## 开发 / Demo

| 变量 | 说明 |
|------|------|
| `NEXT_PUBLIC_SYNC_URL` | 浏览器连 Sync 的地址（独立 sync 时如 `http://localhost:3001`） |
| `HOST` / `NEXT_DEV_HOST` | 绑定或 Next 开发主机 |

## 持久化（服务端，三选一）

| 变量 | 说明 |
|------|------|
| `REDIS_URL` | Redis；常同时启用 Socket 集群广播 |
| `SYNC_CRDT_POSTGRES_URL` | PostgreSQL CRDT 表 |
| `SYNC_CRDT_DATA_PATH` | JSON 文件，默认 `.sync-data/crdt-rooms.json` |
| `SYNC_DATA_PATH` | LWW room JSON（非 CRDT 图） |

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

## 其它

| 变量 | 说明 |
|------|------|
| `SYNC_AUDIT_PATH` | 审计 JSONL |
| `SYNC_GRAPH_SCOPED=0` | `graph:seed` 使用 legacy 图 |
| `SYNC_ROOM` | CLI 默认 room，常 `example-room` |

[English](/reference/env)
