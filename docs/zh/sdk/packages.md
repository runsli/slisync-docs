# 三件套概览

```bash
npm install @slisync/sync-schema @slisync/sync-sdk @slisync/sync-server
```

| 包 | 发布用途 | 典型使用者 |
|----|----------|------------|
| `@slisync/sync-schema` | 类型与契约 | SDK、Server、Agent、测试 |
| `@slisync/sync-sdk` | 浏览器/Node 客户端 | React Demo、脚本、自动化 |
| `@slisync/sync-server` | Socket + HTTP 服务 | 自托管、嵌入自有 Node 服务 |

开发期可在 slisync monorepo 内通过 workspace 引用 `src/`；发布前 `npm run build:packages` 生成 `dist/`。

## sync-schema

- `GraphOp`、`MemoryNode`、`MemoryChunkData`、`TaskData`  
- `SYNC_PROTOCOL_VERSION`、`validateGraphOps`、`AgentGraphPolicy`  
- `ExportChunksHttpResponse` 等 HTTP 模型  

## sync-sdk 子路径

| 子路径 | 内容 |
|--------|------|
| `@slisync/sync-sdk` | `useSync`、`createSyncStore`、`fetchSyncCapabilities` |
| `@slisync/sync-sdk/graph` | `MemoryGraph`、导出、Graph/Export HTTP |
| `@slisync/sync-sdk/agent` | `pushAgentMemory` |
| `@slisync/sync-sdk/crdt` | Yjs encode/decode |
| `@slisync/sync-sdk/protocol` | Socket 事件与 payload 类型 |

**Peer dependency**：`react` ^18 || ^19（使用 hooks 时）。

## sync-server

- `attachSyncServer`、`attachCrdtServer`、`createSyncHttpServer`  
- `createCrdtPersistence`、Redis adapter、export/graph/audit handlers  
- CLI：`slisync-server`（standalone）

## 构建与发布

```bash
npm run build:packages
npm publish -w @slisync/sync-schema --access public
npm publish -w @slisync/sync-sdk --access public
npm publish -w @slisync/sync-server --access public
```

协议版本当前为 **`1`**。不兼容版本 → `sync:error` / HTTP `incompatible_protocol`。

下一步：[React 与 useSync](./react.md)
