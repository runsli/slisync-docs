# React 与 useSync

## 最小示例

```ts
import { useSync, createSyncStore } from "@slisync/sync-sdk";

const store = createSyncStore({ message: "Hello", counter: 0 });

function Room() {
  const {
    data,
    patchData,
    syncReady,
    status,
    presenceMembers,
    outboxSize,
    localRestored,
    getCrdtDocument,
  } = useSync({
    roomId: "my-project",
    url: process.env.NEXT_PUBLIC_SYNC_URL, // 默认同源
    defaultState: { message: "Hello", counter: 0 },
    strategy: "crdt",
    store,
  });

  return (
    <div>
      <p>Status: {status}</p>
      <p>Ready: {String(syncReady)}</p>
      <button onClick={() => patchData({ message: "Updated" })}>Patch</button>
    </div>
  );
}
```

## 策略

| strategy | 行为 |
|----------|------|
| `crdt`（默认） | Yjs 合并；支持 `getCrdtDocument()`、Graph、local-first |
| `lww` | 带 `baseVersion` 的 JSON Patch；冲突时 `lastConflict` |

Demo **主路径请用 `crdt`**。

## 返回值摘要

| 字段 | CRDT | LWW |
|------|------|-----|
| `syncReady` | 与服务端同步完成 | 挂载后即 true |
| `getCrdtDocument` | `Y.Doc \| null` | 恒 null |
| `presenceMembers` | ✅ | 空 |
| `outboxSize` / `localRestored` | ✅ | 不适用 |
| `lastGraphActivity` | ✅ | null |

## MemoryGraph 入口

```ts
const doc = getCrdtDocument();
if (doc && syncReady) {
  const graph = MemoryGraph.on(doc, "ui-user").init("my-project");
  graph.upsertChunk({
    workspaceId: "ws-main",
    sessionId: "sess-1",
    title: "Notes",
    content: "……",
  });
}
```

详见 [Memory Graph](./memory-graph.md)。

## 端点与鉴权

```ts
import { getSyncEndpoint, getRoomSyncToken, getAgentSyncToken } from "@slisync/sync-sdk";
```

浏览器 Demo 在开启鉴权时使用 `NEXT_PUBLIC_SYNC_API_KEY` 等（见 [HTTP 与鉴权](./http.md)）。
