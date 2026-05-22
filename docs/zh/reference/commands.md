# 常用命令

**Slisync 实现**命令在 [slisync](https://github.com/runsli/slisync) 仓库根目录执行；**文档站**命令在 [slisync-docs](https://github.com/runsli/slisync-docs) 目录。

## 开发与 Demo

| 命令 | 说明 |
|------|------|
| `npm run dev` | Next Demo + Sync（:3000） |
| `npm run dev:stop` | 停止 dev 进程 |
| `npm run build` | Next 生产构建 |
| `npm run start` | 生产模式启动（`server.ts`） |
| `npm run sync:server` | 仅 Sync（:3001） |
| `npm run sync:server:dev` | Sync 服务 watch 模式 |
| `npm run sync:reset` | 清空本地 `.sync-data` |
| `npm run lint` | ESLint |

## Agent 与 Graph

| 命令 | 说明 |
|------|------|
| `npm run graph:seed` | Agent 写入 scoped memory |
| `npm run graph:smoke` | Graph 冒烟 |
| `npm run graph:push:http` | HTTP 写入 graphOps |
| `npm run graph:traverse:http` | HTTP 遍历 |
| `npm run graph:policy` | 校验 agent 策略 |
| `npm run agent:push` | 模拟 agent push |
| `npm run task:seed` | 演示任务写入 |

## 导出

| 命令 | 说明 |
|------|------|
| `npm run export:chunks` | 从 CRDT JSON 文件导出 |
| `npm run export:chunks:http` | 从运行中 server HTTP 导出 |
| `npm run export:chunks:ci` | 使用 fixture，无需 dev |
| `npm run fixtures:refresh` | 用当前 `.sync-data` 刷新 `fixtures/crdt-rooms.example.json` |

## 持久化与集群

| 命令 | 说明 |
|------|------|
| `npm run redis:up` | docker compose 启动 Redis |
| `npm run dev:redis` | `REDIS_URL=... npm run dev` |
| `npm run postgres:up` | 启动 Postgres |
| `npm run dev:postgres` | Postgres CRDT 持久化 dev |

## 包与测试

| 命令 | 说明 |
|------|------|
| `npm run build:packages` | 构建 `@slisync/*` dist |
| `npm test` | 单元 + 集成测试（64 cases） |
| `npm run test:cluster` | Redis 双实例测试 |
| `npm run test:postgres` | PostgreSQL CRDT 持久化集成测试 |

## 文档站（VitePress）

在 **[slisync-docs](https://github.com/runsli/slisync-docs)** 仓库执行（不是 slisync 应用仓库）：

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发 :5173 |
| `npm run build` | 构建静态站 |
| `npm run preview` | 预览构建结果 |
