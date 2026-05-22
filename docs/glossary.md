# Glossary

Plain-language names first, **code identifiers** in backticks. Chinese mirrors: [/zh/glossary](/zh/glossary).

## Core

| Term | Meaning |
|------|---------|
| **room** / `roomId` | Sync boundary; demo default `example-room` |
| **shared memory** | Merged state for all clients/agents in a room |
| **Sli** | scoped live information — namesake of Slisync |
| **Memory Graph** | Nodes/edges under Y.Doc `graph/` |
| **workspace** | Top scope, e.g. `ws-demo` |
| **session** | Sub-scope, e.g. `sess-demo` |
| **memory_chunk** | Editable memory body; **exported as Markdown** |
| **`task` node** | Board items; **not exported** |
| **Markdown export** | `markdown/chunks/.../*.md` — Slisync’s publishing contract |

## Sync

| Term | Meaning |
|------|---------|
| **CRDT** (Yjs) | Default merge strategy; lossless multi-client merge |
| **LWW** | Optional versioned JSON Patch |
| **local-first** | IndexedDB snapshot + outbox; server still authoritative |
| **outbox** | Queued CRDT increments while offline |
| **Presence** | `presenceMembers`; demo ScopeBar shows count |

## Agent & API

| Term | Meaning |
|------|---------|
| **agent:push** / `pushAgentMemory` | Headless agent write to room |
| **graphOps** | Batch of `upsertNode`, `upsertEdge`, etc. |
| **protocol v1** | `X-Sync-Protocol-Version: 1`; mismatch → reject |
| **capabilities** | `GET /v1/sync/capabilities` — features + policy snapshot |

## Export

| Term | Meaning |
|------|---------|
| **export path** | `markdown/chunks/{ws}/{session}/{slug}.md` — portable layout for most publishers |
| **one-way** | No Markdown → CRDT write-back |

## Packages

| Package | Role |
|---------|------|
| `@slisync/sync-schema` | Types and contracts |
| `@slisync/sync-sdk` | Client, Graph, export HTTP |
| `@slisync/sync-server` | Socket + HTTP server |

[Ecosystem](/ecosystem.md) · [中文](/zh/glossary)
