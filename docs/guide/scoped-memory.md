# Scoped memory demo

::: info You will
- [ ] Two browser windows show the same `memory_chunk` content
- [ ] ScopeBar shows online count ≥ 1
- [ ] After `npm run graph:seed`, you see an agent activity toast
:::

The demo **primary path**: edit layered memory `workspace → session → memory_chunk` in one **room**, with Presence, agents, and local-first.

See [Glossary](/glossary) for terms.

## Data flow

```mermaid
flowchart TB
  subgraph scope [Scoped Memory]
    WS[workspace]
    SESS[session]
    CH[memory_chunk]
  end
  subgraph clients [Clients]
    A[Browser A]
    B[Browser B]
    AG[Agent CLI]
  end
  subgraph sync [room: example-room]
    CRDT[Y.Doc / CRDT]
    IDB[(IndexedDB)]
  end
  WS --> SESS --> CH
  A --> CRDT
  B --> CRDT
  AG -->|graph:seed / agent:push| CRDT
  CRDT --> IDB
```

## Prerequisites

- [Install & run](./getting-started.md) with `npm run dev`
- Default room: `example-room`; scope: `ws-demo` / `sess-demo`

## 5-minute manual checklist

| Step | Action | Expected |
|------|--------|----------|
| 1 | Open demo, strategy **CRDT** | **Scoped Memory** tab; graph left, editor right |
| 2 | Wait for `connected` / `syncReady` | Empty room may auto-seed; or click init demo workspace |
| 3 | Edit a **memory_chunk** title or body | Instant local update; ScopeBar shows workspace / session |
| 4 | Second browser window, same URL | Same content within seconds; online count ~2 |
| 5 | Run `npm run graph:seed` or `agent:push` | Agent activity toast; graph/chunks may update |
| 6 | DevTools **Offline** → edit chunk → hard refresh → online | Edits remain ([Local-first](./local-first.md)) |
| 7 | Click **Export Markdown drafts (zip)** | Download `{room}-chunks.zip` (`Accept: application/zip`) |

> `message` / `counter` live under collapsed **legacy shared fields** — not the main demo path.

## CLI aligned with the demo

```bash
npm run graph:seed
npm run agent:push -- --action summarize --append " [from agent]"
```

`graph:seed` uses the same `buildScopedMemoryOps(agentId, "ws-demo", "sess-demo")` as the UI. The demo footer has a **copy** button for the `agent:push` command.

Export reads **server CRDT** (not IndexedDB): use the panel zip button or `npm run export:chunks:http`. See [Export Markdown](./export.md).

## Demo UI phases

| Phase | Behavior |
|-------|----------|
| 0 | Memory Graph first; legacy fields collapsed; LWW under **Advanced** |
| 1 | Scope picker + two-column layout |
| 2 | One-time auto-seed; dismissible welcome strip |
| 3 | Presence in scope bar; activity toasts; in-panel Agent highlight |

## Node kinds

| kind | Role |
|------|------|
| `workspace` | Project / workspace root |
| `session` | Session or topic under workspace |
| `memory_chunk` | Editable memory snippet (`title`, `content`, `importance`) |

`contains` edges express hierarchy; chunks may link via `related_to`.

## Task board (same room)

The **Task board** tab shares `example-room` and scope `ws-demo` / `sess-demo` with this guide. Tasks are graph nodes with `kind: "task"` — not a separate store.

```bash
npm run task:seed
npm run agent:push -- --task-title "Review export pipeline" --status in_progress
```

5-minute acceptance: [Task bus](./task-bus.md). Memory and task tabs can be used together; agent activity uses top toasts and in-panel hints.

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Page spins forever | Ensure `npm run dev` printed `Listen on`; `npm run dev:stop` then restart; `node -v` is v20.x |
| No auto-seed | Session already seeded (`sessionStorage`) or room has nodes; click init demo workspace |
| Online count 0 | Wait for Presence after `connected` |
| `agent:push` fails | Start `npm run dev` first; read CLI error and connection banner |

More: [Troubleshooting](/reference/troubleshooting).
