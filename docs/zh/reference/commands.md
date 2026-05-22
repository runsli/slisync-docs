# 常用命令

**Slisync 实现**命令在 [slisync](https://github.com/runsli/slisync) 仓库根目录执行；**文档站**命令在 [slisync-docs](https://github.com/runsli/slisync-docs) 目录。

## 开发与 Demo

| 命令 | 说明 |
|------|------|
| `npm run dev` | Next Demo + Sync（:3000） |
| `npm run dev:stop` | 停止 dev 进程 |
| `npm run sync:server` | 仅 Sync（:3001） |
| `npm run sync:reset` | 清空本地 `.sync-data` |

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
| `npm test` | 单元 + 集成测试 |
| `npm run test:cluster` | Redis 双实例测试 |

## 文档站（VitePress）

| 命令 | 说明 |
|------|------|
| `npm run docs:dev` | 本官网开发 :5173 |
| `npm run docs:build` | 构建静态站 |
| `npm run docs:preview` | 预览构建结果 |

或在 `~/Documents/GitHub/slisync-docs/` 内直接 `npm run dev` / `build`。
