# Slisync Docs

[中文](README.zh-CN.md)

**Official documentation site** for [Slisync](https://github.com/runsli/slisync) — built with [VitePress](https://vitepress.dev).

[Live site](https://slisync.com) · [Implementation repo](https://github.com/runsli/slisync) · [Demo](http://localhost:3000) (local, slisync repo)

| | |
| --- | --- |
| **This repo** | User-facing guides, glossary, SDK overview (`slisync-docs`) |
| **[runsli/slisync](https://github.com/runsli/slisync)** | Reference app, Demo, `@slisync/*` packages |
| **Engineering docs** | [slisync `docs/en`](https://github.com/runsli/slisync/tree/main/docs/en) · [packages/README](https://github.com/runsli/slisync/blob/main/packages/README.md) |

Product documentation lives **here only**. Protocol version, ROADMAP engineering phases, and API contracts are maintained in the implementation repo to avoid duplicate maintenance.

---

## Quick start (local)

Requires **Node.js ≥ 20.9** (`.nvmrc` uses 20).

```bash
git clone https://github.com/runsli/slisync-docs.git
cd slisync-docs
nvm use 20
npm install
npm run dev      # http://localhost:5173  (English: / , 中文: /zh/)
```

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server (:5173) |
| `npm run build` | Production build → `docs/.vitepress/dist` |
| `npm run preview` | Preview the production build |

Run these commands **in this repo**. The [slisync](https://github.com/runsli/slisync) app repo does not include a `docs:dev` script.

### Try Slisync Demo (separate repo)

```bash
git clone https://github.com/runsli/slisync.git
cd slisync
nvm use 20 && npm install && npm run dev   # http://localhost:3000
```

---

## Where to start reading

| I want to… | Start here |
| --- | --- |
| Open the demo in 5 minutes | [Install & open demo](docs/guide/getting-started.md) → [Scoped memory](docs/guide/scoped-memory.md) |
| Export memory → publish elsewhere | [Memory → Markdown → site](docs/guide/story-pipeline.md) |
| Understand terms (room, snippets) | [Glossary](docs/glossary.md) |
| Pick the right repository | [Ecosystem map](docs/ecosystem.md) |
| Integrate SDK / HTTP API | [Packages](docs/sdk/packages.md) · [HTTP & auth](docs/sdk/http.md) |

Chinese site paths use `/zh/…` (sources under `docs/zh/`), e.g. [getting-started](docs/zh/guide/getting-started.md).

---

## Site structure

| Section | Topics |
| --- | --- |
| **Start here** | Ecosystem, glossary, full story pipeline |
| **About Slisync** | What it is, why shared memory, architecture, roadmap |
| **Guides** | Demo, scoped memory, tasks, local-first, agents, Markdown export |
| **SDK & API** | `@slisync/*` packages, React, Memory Graph, HTTP |
| **Reference** | Commands, environment variables, troubleshooting |
| **Engineering** (sidebar → slisync repo) | VISION, ROADMAP, packages README |

Locales: **English** (`/`) and **简体中文** (`/zh/`). Config: [`docs/.vitepress/config.ts`](docs/.vitepress/config.ts).

---

## Deploy

```bash
npm run build
```

Publish:

```text
docs/.vitepress/dist
```

Example hosts: [slisync.com](https://slisync.com), Vercel, Netlify, GitHub Pages (site root = `dist`).

**Edit on GitHub** links use `docsRepo` in `config.ts` (default `runsli/slisync-docs`). Update it if your fork uses a different remote.

---

## Contributing

1. Edit Markdown under `docs/` (mirror paths in `docs/zh/` for Chinese).
2. Run `npm run dev` and check both locales.
3. Run `npm run build` before opening a PR.

| Topic | Issues |
| --- | --- |
| Slisync behavior or bugs | [slisync](https://github.com/runsli/slisync/issues) |
| Docs wording or navigation | [slisync-docs](https://github.com/runsli/slisync-docs/issues) |

---

## License

Documentation is licensed under the [MIT License](LICENSE), same as the [Slisync](https://github.com/runsli/slisync) implementation repository.
