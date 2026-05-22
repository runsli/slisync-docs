# Environment variables

From slisync [.env.example](https://github.com/runsli/slisync/blob/main/.env.example). Browse by **scenario** — you do not need everything at once.

## Dev / demo

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SYNC_URL` | Browser Socket URL (standalone sync e.g. `http://localhost:3001`) |
| `HOST` / `NEXT_DEV_HOST` | Bind / Next dev host |
| `SYNC_PORT` / `SYNC_HOST` | Standalone sync bind (default `:3001`, `0.0.0.0`) |

## Server persistence (pick one for CRDT)

| Variable | Purpose |
|----------|---------|
| `REDIS_URL` | Redis; often enables Socket cluster broadcast |
| `SYNC_CRDT_POSTGRES_URL` | PostgreSQL CRDT tables |
| `SYNC_CRDT_DATA_PATH` | JSON file (default `.sync-data/crdt-rooms.json`) |
| `SYNC_DATA_PATH` | LWW room JSON (not CRDT graph) |
| `SYNC_SOCKET_ADAPTER` | Set `0` to disable Redis Socket.IO adapter when `REDIS_URL` is set |

## Auth

| Variable | Purpose |
|----------|---------|
| `SYNC_AUTH_REQUIRED=1` | Require tokens |
| `SYNC_API_KEY` | Human clients: join, traverse read |
| `SYNC_AGENT_API_KEY` | Agent write, Graph HTTP, export read |
| `SYNC_ROOM_KEYS` | Per-room tokens JSON |
| `NEXT_PUBLIC_SYNC_API_KEY` | Demo browser (dev only) |

## Agent graph policy

| Variable | Purpose |
|----------|---------|
| `SYNC_AGENT_GRAPH_KINDS` | Allowed node kinds |
| `SYNC_AGENT_GRAPH_OPS` | Allowed op types |
| `SYNC_AGENT_MAX_GRAPH_OPS` | Max ops per push |
| `SYNC_AGENT_DENY_MEMORY` | Block agent from demo message fields |

Effective policy: `GET /v1/sync/capabilities`

## Export HTTP

| Variable | Purpose |
|----------|---------|
| `SYNC_HTTP_URL` / `SYNC_EXPORT_HTTP_URL` | CLI `export:chunks:http` base URL |
| `SYNC_EXPORT_WORKSPACE` / `SESSION` / `MIN_IMPORTANCE` | Filters |

## Audit

| Variable | Purpose |
|----------|---------|
| `SYNC_AUDIT_PATH` | Append-only audit JSONL (default `.sync-data/audit.jsonl`) |
| `SYNC_AUDIT_MEMORY=1` | In-memory audit when path unset |

## Other

| Variable | Purpose |
|----------|---------|
| `SYNC_GRAPH_SCOPED=0` | `graph:seed` uses legacy graph |
| `SYNC_ROOM` | CLI default room, often `example-room` |
| `SYNC_URL` | CLI Socket base (e.g. `agent:push`, `graph:seed`) |
| `SYNC_AGENT_ID` | CLI agent id override |
| `SYNC_CRDT_DATA_PATH` | Override for `export:chunks` file source / CI fixture path |

[中文](/zh/reference/env)
