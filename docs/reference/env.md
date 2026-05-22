# Environment variables

From slisync [.env.example](https://github.com/runsli/slisync/blob/main/.env.example). Browse by **scenario** — you do not need everything at once.

## Dev / demo

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SYNC_URL` | Browser Socket URL (standalone sync e.g. `http://localhost:3001`) |
| `HOST` / `NEXT_DEV_HOST` | Bind / Next dev host |

## Server persistence (pick one for CRDT)

| Variable | Purpose |
|----------|---------|
| `REDIS_URL` | Redis; often enables Socket cluster broadcast |
| `SYNC_CRDT_POSTGRES_URL` | PostgreSQL CRDT tables |
| `SYNC_CRDT_DATA_PATH` | JSON file (default `.sync-data/crdt-rooms.json`) |
| `SYNC_DATA_PATH` | LWW room JSON (not CRDT graph) |

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

## Other

| Variable | Purpose |
|----------|---------|
| `SYNC_AUDIT_PATH` | Audit JSONL path |
| `SYNC_GRAPH_SCOPED=0` | `graph:seed` uses legacy graph |
| `SYNC_ROOM` | CLI default room, often `example-room` |

[中文](/zh/reference/env)
