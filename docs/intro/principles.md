# Principles

## We optimize for

1. **Local-first direction** — edit locally; sync is an enhancement; browser persists rooms by default.  
2. **Simple API** — run the demo and `graph:seed` in minutes.  
3. **Stability** — protocol version, CRDT authority, reconnect, and tests before feature stacking.  
4. **Developer trust** — open implementation, docs aligned with code, integration tests on critical paths.  
5. **Clear ecosystem role** — Slisync = sync + Markdown export only; no bundled publisher.

## We do not (now)

| Out of scope | Reason |
|--------------|--------|
| Web3 / token narrative | Unrelated to infra positioning |
| Semantic search / embeddings | Vision 9 excluded; avoid vector DB competition |
| Chat super-app | Infra, not IM |
| Markdown → CRDT write-back | Export is one-way; avoid dual authority |
| Separate task database | Tasks are graph nodes `kind: task` only |
| `sync:task-*` events | Tasks use `sync:crdt-update` / `agent:push` |
| Heavy workflow / DAG | Vision 11 not in v1 |

## Open source and commercialization (product layer)

| Layer | Direction |
|-------|-----------|
| **Open source** | SDK, protocol, base sync server, docs, demo |
| **Future commercial** | Hosted Cloud Sync, Enterprise Memory, light Coordination API |

Hosted control plane can split from self-hosted server: metering, multi-tenant, backup, SLA in cloud; core protocol stays open and testable.

## Documentation split

- **This VitePress site** — product narrative and how-to  
- **Repo `docs/zh` / `docs/en`** — may mirror here; GitHub as long-term protocol archive  

[Getting started](../guide/getting-started.md)
