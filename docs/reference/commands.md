# Commands

Run **Slisync implementation** commands at the [slisync](https://github.com/runsli/slisync) repo root; **docs site** commands in the [slisync-docs](https://github.com/runsli/slisync-docs) repo.

## Dev & demo

| Command | Description |
|---------|-------------|
| `npm run dev` | Next demo + sync (:3000) |
| `npm run dev:stop` | Stop dev processes |
| `npm run build` | Production Next build |
| `npm run start` | Production server (`server.ts`) |
| `npm run sync:server` | Sync only (:3001) |
| `npm run sync:server:dev` | Sync server with watch |
| `npm run sync:reset` | Clear local `.sync-data` |
| `npm run lint` | ESLint |

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
| `npm run fixtures:refresh` | Refresh `fixtures/crdt-rooms.example.json` from live `.sync-data` |

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
| `npm test` | Unit + integration tests (64 cases) |
| `npm run test:cluster` | Redis two-instance test |
| `npm run test:postgres` | PostgreSQL CRDT persistence integration |

## Docs site (VitePress)

Run in **[slisync-docs](https://github.com/runsli/slisync-docs)** (not the slisync app repo):

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server :5173 |
| `npm run build` | Build static site |
| `npm run preview` | Preview production build |

Full list: [GitHub README](https://github.com/runsli/slisync/blob/main/README.md).
