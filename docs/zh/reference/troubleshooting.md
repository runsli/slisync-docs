# 故障排查

## Demo / 连接

| 现象 | 处理 |
|------|------|
| 浏览器一直转圈 | 确认 `npm run dev` 已输出 `Listen on`；`npm run dev:stop` 后重启 |
| `.sync-data/crdt-rooms.json` 损坏 | `npm run sync:reset` 或从 `.corrupt-*.bak` 恢复 |
| `node -v` 不是 20.x | `nvm use 20` |
| 双窗口不同步 | 同一 URL、同一 room；等待 `syncReady` |
| 独立 sync 连不上 | 设置 `NEXT_PUBLIC_SYNC_URL=http://localhost:3001` |

## Scoped Memory

| 现象 | 处理 |
|------|------|
| 无自动 seed | 同会话已 seed；手动点「初始化演示工作区」 |
| Presence 为 0 | 需 connected 且至少一客户端在 room |
| agent:push 失败 | 先 `npm run dev`；查看 `[agent:push]` 日志 |

## 导出

| 现象 | 处理 |
|------|------|
| `export:chunks:http` count 为 0 | 先 `graph:seed`；确认 server 有该 room CRDT |
| 导出与 UI 不一致 | 导出读 **服务端**，非 IndexedDB；先同步再导出 |
| 401 | 配置 `SYNC_API_KEY` / `SYNC_AGENT_API_KEY` 与请求头 |
| incompatible_protocol | 请求头 `X-Sync-Protocol-Version: 1` |

## Local-first

| 现象 | 处理 |
|------|------|
| 刷新后丢失 | 确认 `strategy: crdt` 且 `localPersistence` 未关 |
| 与服务端冲突 | 以服务端 CRDT 合并为准；可用「清除本 room 本地缓存」重置 |

## 任务看板

| 现象 | 处理 |
|------|------|
| agent:push 无任务 | 使用 `--task-title` 与 `--status`；或先 `task:seed` |
| 找不到任务表 | 任务在 Graph 节点，无独立 IndexedDB 任务 store |

## 文档站构建

| 现象 | 处理 |
|------|------|
| VitePress build 失败 dead link | localhost 已在 config `ignoreDeadLinks` |
| crypto 错误 | 使用 Node 18+（推荐 20） |

## 仍无法解决

到 [GitHub Issues](https://github.com/runsli/slisync/issues) 附带：`node -v`、命令、终端日志、是否开启鉴权/Redis。
