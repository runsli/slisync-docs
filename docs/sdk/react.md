# React & useSync

## Minimal example

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
    url: process.env.NEXT_PUBLIC_SYNC_URL, // default same-origin
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

## Strategies

| strategy | Behavior |
|----------|----------|
| `crdt` (default) | Yjs merge; `getCrdtDocument()`, Graph, local-first |
| `lww` | JSON Patch with `baseVersion`; conflicts → `lastConflict` |

Use **`crdt`** for the demo primary path.

## Return value summary

| Field | CRDT | LWW |
|-------|------|-----|
| `syncReady` | true after server sync | true after mount |
| `getCrdtDocument` | `Y.Doc \| null` | always null |
| `presenceMembers` | ✅ | empty |
| `outboxSize` / `localRestored` | ✅ | N/A |
| `lastGraphActivity` | ✅ | null |

## MemoryGraph entry

```ts
const doc = getCrdtDocument();
if (doc && syncReady) {
  const graph = MemoryGraph.on(doc, "ui-user").init("my-project");
  graph.upsertChunk({
    workspaceId: "ws-main",
    sessionId: "sess-1",
    title: "Notes",
    content: "…",
  });
}
```

See [Memory Graph](./memory-graph.md).

## Endpoints and auth

```ts
import { getSyncEndpoint, getRoomSyncToken, getAgentSyncToken } from "@slisync/sync-sdk";
```

When auth is on, the browser demo uses `NEXT_PUBLIC_SYNC_API_KEY`, etc. ([HTTP & auth](./http.md)).
