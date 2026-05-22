# Ecosystem map

Projects for the Slisync story: **write memory together → export Markdown → publish with your own tools**.

## Diagram

```mermaid
flowchart LR
  subgraph live [Live memory]
    DEMO[slisync demo]
    AG[Agent CLI]
  end
  subgraph sync [Sync layer]
    SRV[sync-server + CRDT]
  end
  subgraph publish [Publishing]
    EXP[Markdown export]
    MD[markdown/chunks]
    SITE[Your static site / CMS]
  end
  DEMO --> SRV
  AG --> SRV
  SRV --> EXP
  EXP --> MD
  MD --> SITE
```

Slisync stops at **exported files**. How you build a site is outside this project.

## Repositories

| Folder | Role | One line | First command |
|--------|------|----------|---------------|
| **[slisync](https://github.com/runsli/slisync)** | Reference app + demo | Shared memory in a **room** | `npm run dev` → :3000 |
| **slisync-docs** (this site) | Public docs | How to use Slisync | `npm run dev` → :5173 |

::: tip Clone folder
On GitHub the repo is **slisync** — clone it as `~/Documents/GitHub/slisync` to match npm scope `@slisync/*`.
:::

## Which doc should I read?

| I want to… | Go to |
|------------|-------|
| Try the demo in 5 minutes | [Install & open demo](./guide/getting-started.md) → [Write memory together](./guide/scoped-memory.md) |
| Export then publish | [Full story: memory → Markdown → site](./guide/story-pipeline.md) |
| Understand terms (room, snippets) | [Glossary](./glossary.md) |
| SDK / protocol version | [slisync `docs/en`](https://github.com/runsli/slisync/tree/main/docs/en) |

Keep **user docs** here and **protocol details** in the slisync repo to avoid duplicate maintenance.

## Ports

| Service | Default |
|---------|---------|
| Slisync demo (embedded sync) | 3000 |
| Standalone sync server | 3001 |
| This VitePress site | 5173 |

[Glossary](./glossary.md) · [中文](/zh/ecosystem)
