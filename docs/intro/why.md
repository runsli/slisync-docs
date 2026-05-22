# Why it matters

## 1. Beyond single-session chat

Most AI systems are **one conversation, one session**. When phone assistants, browser agents, IDE agents, and automation coexist, each keeps its own context — there is no **project-level shared memory**.

Slisync provides **room-level authoritative state**:

- Human edits to `memory_chunk` in the demo  
- Nodes from `graph:seed` / `agent:push`  
- Task board `status` changes  

All merge in one CRDT document instead of living in chat logs.

## 2. Multi-agent collaboration

Example: building a Shopify project often involves:

| Agent | Typical output |
|-------|----------------|
| Planning | Task breakdown, priorities |
| Coding | Implementation notes, technical decisions |
| Testing / Review | Acceptance items, issue lists |

Without a shared graph, teams copy JSON or rely on fragile message passing. Slisync uses a **Memory Graph**:

- **Memory** → `memory_chunk` (body in `content`)  
- **Execution** → `task` (`todo` → `in_progress` → `done`)  
- **Relations** → `contains`, `related_to`, `depends_on`, etc.

## 3. Memory vs publishing

| Layer | Role |
|-------|------|
| Live memory | **Slisync** — realtime, mergeable, agent-writable |
| Published artifacts | **Markdown files** — your static site, CMS, or notes (outside Slisync) |

Export is a **one-way snapshot** — editing published Markdown does **not** write back to the room, avoiding a second source of truth.

## 4. vs generic realtime databases

Slisync is not a Firebase replacement; it targets **agents + structured memory graphs**:

- Built-in `MemoryGraph`, `agentGraphPolicy`, audit  
- Protocol version `1` and capabilities endpoint  
- First-class **export/chunks** (portable Markdown)  

[Architecture](./architecture.md)
