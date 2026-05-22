# Roadmap

Slisync uses a **12-phase product vision** for direction and **engineering Phase 1–11 / P0–P3** for what this repo implements. Both are maintained in parallel.

## Legend

| Mark | Meaning |
|------|---------|
| ✅ | Available on main; demo or tests |
| ⬜ | Not started |
| ⛔ | Explicitly excluded |

## 12 phases (product vision)

### Foundation

| Phase | Theme | Status |
|-------|-------|--------|
| 1 | Realtime Sync | ✅ |
| 2 | Local-first | ✅ |
| 3 | Patch Sync | ✅ |

### Data & SDK

| Phase | Theme | Status |
|-------|-------|--------|
| 4 | Persistence | ✅ JSON / Redis / Postgres |
| 5 | Conflict Resolution | ✅ Yjs CRDT |
| 6 | SDK productization | ✅ `@slisync/*` |

### AI-native layer

| Phase | Theme | Status |
|-------|-------|--------|
| 7 | Memory Layer | ✅ Scoped Memory demo |
| 8 | Memory Graph | ✅ Graph + HTTP |
| 9 | Semantic Memory | ⛔ no vectors / inference |

### Multi-agent

| Phase | Theme | Status |
|-------|-------|--------|
| 10 | Multi-Agent | ✅ task bus, agent push, Presence |
| 11 | Workflow Engine | ⬜ |
| 12 | AI Runtime / OS | ⬜ long-term vision |

## Engineering milestones (summary)

| Engineering | Status |
|-------------|--------|
| Phase 1–6 | ✅ room, patch, persistence, LWW, packages, agent |
| Phase 7–11 | ✅ Graph, auth, HTTP, integration tests |
| P0–P3 | ✅ protocol v1, Redis cluster, CRDT authority, scoped memory, visualization |

## Ecosystem shipped for demos

- Markdown export M0–M4: CLI (`export:chunks`), HTTP (`export:chunks:http`), `fetchExportChunksZipHttp`, optional Postgres  
- Room task bus + demo Task board tab  
- Browser IndexedDB local-first + offline outbox ([Local-first](../guide/local-first.md))  

## Next (not scheduled)

- Vision **11**: light workflow (triggers on shared state, not heavy orchestration)  
- Hosted **Cloud Sync** (commercial direction; see [Principles](./principles.md))  

Full table: [GitHub docs/en/ROADMAP.md](https://github.com/runsli/slisync/blob/main/docs/en/ROADMAP.md).
