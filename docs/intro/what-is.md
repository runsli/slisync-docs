# What is Slisync

::: tip In one sentence
Slisync is a **shared project notebook with realtime sync**: you and multiple AIs edit the same memory, then export snippets into publishable articles.
:::

**Slisync** is an **AI-native realtime sync engine**: agents and humans share memory and task state in one **room (collaboration space)**, with optional **Markdown export** for publishing.

> **Sli** = *scoped live information* — layered, CRDT-merged shared data in a room.

## What it is not

- Not a chat app, Web3 product, or thin LLM wrapper  
- Not semantic search / vectors (vision phase 9 is **out of scope**)

## Capabilities

| Area | Description |
|------|-------------|
| Realtime sync | Socket.IO + Yjs CRDT (primary); optional LWW + JSON Patch |
| Memory Graph | `workspace` / `session` / `memory_chunk` / `task` nodes |
| Multi-agent | `agent:push`, Graph HTTP, Presence, graph activity |
| Local-first | IndexedDB snapshot + offline outbox |
| Export | `memory_chunk` → Markdown → static site |

## npm packages

| Package | Role |
|---------|------|
| `@slisync/sync-schema` | Types, `GraphOp`, protocol, auth, export contracts |
| `@slisync/sync-sdk` | Client hooks, `MemoryGraph`, HTTP helpers |
| `@slisync/sync-server` | Socket server, persistence, Graph/Export HTTP |

This repo ([github.com/runsli/slisync](https://github.com/runsli/slisync)) is the **reference implementation**: Next.js demo + embeddable `server.ts` + the three packages above.

## Typical scenarios

1. **Multi-window / multi-device** — two browser tabs edit the same scoped memory.  
2. **Multi-agent** — planning agent writes tasks and chunks; coding agent reads the same room graph.  
3. **Memory → publish** — after collaboration, `export:chunks:http` writes `.md` files for your own static site or CMS ([full story](../guide/story-pipeline.md)).

[Why it matters](./why.md) · [Install & run](../guide/getting-started.md)
