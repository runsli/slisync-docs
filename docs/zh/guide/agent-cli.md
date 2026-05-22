# Agent CLI

无头 Agent 通过 Socket **`sync:agent-push`** 写入共享状态或 Graph。Demo 底部可复制命令；默认连接 `http://127.0.0.1:3000`（与 `npm run dev` 一致）。

## graph:seed — 种子记忆图

```bash
npm run graph:seed
```

- 默认 **scoped memory**：`ws-demo` / `sess-demo`  
- 环境变量：`SYNC_URL`、`SYNC_ROOM`（默认 `example-room`）、`SYNC_AGENT_ID`  
-  legacy 图：`SYNC_GRAPH_SCOPED=0 npm run graph:seed`

## agent:push — 模拟 Agent

```bash
npm run agent:push
npm run agent:push -- --action summarize --append " [from agent]"
npm run agent:push -- --message "自定义 message 字段"
```

### 写任务（任务看板）

```bash
npm run task:seed
npm run agent:push -- --task-title "审查导出" --status in_progress
```

`status` 可选：`todo` | `in_progress` | `done` 等。

## HTTP 写入（无需长连接）

```bash
npm run graph:push:http
npm run graph:traverse:http -- --start <nodeId>
```

需配置 `SYNC_AGENT_API_KEY`（鉴权开启时）。见 [HTTP 与鉴权](../sdk/http.md)。

## SDK：pushAgentMemory

```ts
import { pushAgentMemory } from "@slisync/sync-sdk/agent";
import { buildScopedMemoryOps } from "@slisync/sync-sdk/graph";

await pushAgentMemory({
  url: "http://127.0.0.1:3000",
  roomId: "example-room",
  agentId: "my-agent",
  action: "seed_graph",
  graphOps: buildScopedMemoryOps("my-agent", "ws-main", "sess-1"),
});
```

## 策略与限制

服务端可通过环境变量限制 Agent 的 graph 操作（kind、relation、op 类型、单次 op 数量）。生效策略见：

`GET /v1/sync/capabilities` → `agentGraphPolicy`

```bash
npm run graph:policy   # 本地校验默认策略
```

独立 Sync 时：`SYNC_URL=http://localhost:3001 npm run agent:push`
