# Packages

```bash
npm install @slisync/sync-schema @slisync/sync-sdk @slisync/sync-server
```

| Package | Published for | Typical consumer |
|---------|---------------|------------------|
| `@slisync/sync-schema` | Types and contracts | SDK, server, agents, tests |
| `@slisync/sync-sdk` | Browser/Node client | React demo, scripts, automation |
| `@slisync/sync-server` | Socket + HTTP server | Self-host, embed in your Node app |

During development in the slisync monorepo you can workspace-link `src/`; before release run `npm run build:packages` for `dist/`.

## sync-schema

- `GraphOp`, `MemoryNode`, `MemoryChunkData`, `TaskData`  
- `SYNC_PROTOCOL_VERSION`, `validateGraphOps`, `AgentGraphPolicy`  
- `ExportChunksHttpResponse` and other HTTP models  

## sync-sdk subpaths

| Subpath | Contents |
|---------|----------|
| `@slisync/sync-sdk` | `useSync`, `createSyncStore`, `fetchSyncCapabilities` |
| `@slisync/sync-sdk/graph` | `MemoryGraph`, export, Graph/Export HTTP |
| `@slisync/sync-sdk/agent` | `pushAgentMemory` |
| `@slisync/sync-sdk/crdt` | Yjs encode/decode |
| `@slisync/sync-sdk/protocol` | Socket events and payload types |

**Peer dependency**: `react` ^18 || ^19 (when using hooks).

## sync-server

- `attachSyncServer`, `attachCrdtServer`, `createSyncHttpServer`  
- `createCrdtPersistence`, Redis adapter, export/graph/audit handlers  
- CLI: `slisync-server` (standalone)

## Build and publish

```bash
npm run build:packages
npm publish -w @slisync/sync-schema --access public
npm publish -w @slisync/sync-sdk --access public
npm publish -w @slisync/sync-server --access public
```

Protocol version is currently **`1`**. Incompatible versions → `sync:error` / HTTP `incompatible_protocol`.

## Engineering detail (slisync repo)

Product vision and engineering Phase 1–11 / P0–P3 live in the implementation repo (not duplicated here):

- [VISION.md](https://github.com/runsli/slisync/blob/main/docs/en/VISION.md) · [ROADMAP.md](https://github.com/runsli/slisync/blob/main/docs/en/ROADMAP.md)  
- [packages/README.md](https://github.com/runsli/slisync/blob/main/packages/README.md) — server routes, Redis cluster, auth, audit  

[React & useSync](./react.md)
