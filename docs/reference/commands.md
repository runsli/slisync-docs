# Commands

Run **Slisync implementation** commands at the [slisync](https://github.com/runsli/slisync) repo root; **docs site** commands in the [slisync-docs](https://github.com/runsli/slisync-docs) repo.

## Dev & demo

| Command | Description |
|---------|-------------|
| `npm run dev` | Next demo + sync (:3000) |
| `npm run dev:stop` | Stop dev processes |
| `npm run sync:server` | Sync only (:3001) |
| `npm run sync:reset` | Clear local `.sync-data` |

## Agent & graph

| Command | Description |
|---------|-------------|
| `npm run graph:seed` | Agent seeds scoped memory |
| `npm run graph:smoke` | Graph smoke test |
| `npm run graph:push:http` | HTTP write graphOps |
| `npm run graph:traverse:http` | HTTP traverse |
| `npm run graph:policy` | Validate agent policy |
| `npm run agent:push` | Simulate agent push |
| `npm run task:seed` | Demo task seed |

## Export

| Command | Description |
|---------|-------------|
| `npm run export:chunks` | Export from CRDT JSON file |
| `npm run export:chunks:http` | HTTP export from running server |
| `npm run export:chunks:ci` | Fixture export (no dev) |

## Persistence & cluster

| Command | Description |
|---------|-------------|
| `npm run redis:up` | docker compose Redis |
| `npm run dev:redis` | `REDIS_URL=... npm run dev` |
| `npm run postgres:up` | Start Postgres |
| `npm run dev:postgres` | Postgres CRDT persistence dev |

## Packages & tests

| Command | Description |
|---------|-------------|
| `npm run build:packages` | Build `@slisync/*` dist |
| `npm test` | Unit + integration tests |
| `npm run test:cluster` | Redis two-instance test |

## Docs site (VitePress)

| Command | Description |
|---------|-------------|
| `npm run docs:dev` | This site dev :5173 |
| `npm run docs:build` | Build static site |
| `npm run docs:preview` | Preview build |

Or in `~/Documents/GitHub/slisync-docs/`: `npm run dev` / `build`.

Full list: [GitHub README](https://github.com/runsli/slisync/blob/main/README.md).
