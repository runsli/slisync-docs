# Install & open the demo

::: info You will
- [ ] Clone the repo and run `npm run dev`
- [ ] See **Shared memory** in the browser and edit a snippet
- [ ] (Optional) Run `npm run graph:seed` and see an agent activity toast
:::

You will run a local demo: pick memory on the left, edit on the right, then open a second browser window to see live sync.

## Requirements

- **Node.js ≥ 20.9** (recommended: `nvm use 20`; repo root has `.nvmrc`)
- npm or a compatible package manager

## 1. Clone and install

```bash
git clone https://github.com/runsli/slisync.git
cd slisync
nvm use 20
npm install
```

## 2. Start the demo (recommended)

One command starts **Next.js UI** and **embedded Sync** (default port **3000**):

```bash
npm run dev
```

When the terminal shows `Local: http://localhost:3000`, open it in a browser.

### Main UI

| What you see | What it is for |
|--------------|----------------|
| **Shared memory** | Project notes (memory snippets) synced across people and agents |
| **Task board** | Todo / in progress / done in the same collaboration space |
| Collapsed sections at bottom | Legacy fields and sync experiments for developers — safe to ignore |

Default **room**: `example-room`; default scope: `ws-demo` / `sess-demo`.

## 3. Terminal smoke test (second terminal)

With `npm run dev` already running:

```bash
# Agent seeds the demo memory graph
npm run graph:seed

# Simulate agent updating shared fields or summary
npm run agent:push -- --action summarize --append " [from agent]"

# Task board seed data
npm run task:seed
npm run agent:push -- --task-title "Review export pipeline" --status in_progress

# HTTP export memory_chunk as Markdown
npm run export:chunks:http -- --room example-room --out ./markdown/chunks
```

## 4. Standalone sync server (optional)

When you split sync from the UI in dev or production:

```bash
# Terminal 1
npm run sync:server    # default :3001

# Terminal 2
NEXT_PUBLIC_SYNC_URL=http://localhost:3001 npm run dev
```

Health: `GET http://localhost:3001/health`  
Capabilities: `GET http://localhost:3001/v1/sync/capabilities`

## 5. This docs site (VitePress)

Sibling repo next to the implementation:

```bash
cd ~/Documents/GitHub/slisync-docs
npm install && npm run dev   # http://localhost:5173
```

Or from the **slisync** repo root: `npm run docs:dev` (runs sibling `../slisync-docs`).

## 6. Tests

```bash
npm test              # unit + integration (~64 cases)
npm run test:cluster  # requires REDIS_URL
```

## Recommended reading order

1. [Ecosystem map](/ecosystem) · [Glossary](/glossary)  
2. [Scoped memory demo](./scoped-memory.md) (5 minutes)  
3. [Memory → notes → static site](./story-pipeline.md) (full story)  
4. [SDK packages](../sdk/packages.md)

## Environment variables

Full list: repo [.env.example](https://github.com/runsli/slisync/blob/main/.env.example). Common entries:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SYNC_URL` | Browser Socket URL |
| `REDIS_URL` | Redis persistence + Socket cluster broadcast |
| `SYNC_CRDT_POSTGRES_URL` | PostgreSQL CRDT store |
| `SYNC_API_KEY` / `SYNC_AGENT_API_KEY` | When auth is enabled |

See [Environment variables](/reference/env).
