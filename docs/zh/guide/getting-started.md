# 安装并打开 Demo

::: info 本节你将完成
- [ ] 下载代码并运行 `npm run dev`
- [ ] 在浏览器里看到「共享记忆」，能编辑一条记忆片段
- [ ] （可选）终端运行 `npm run graph:seed`，看到 Agent 写入提示
:::

你将启动本地演示站：左侧选记忆、右侧编辑，可再开一个浏览器窗口体验「两人同时改」。

## 环境要求

- **Node.js ≥ 20.9**（推荐 `nvm use 20`，仓库根目录有 `.nvmrc`）
- npm 或兼容包管理器

## 1. 克隆与安装

```bash
git clone https://github.com/runsli/slisync.git
cd slisync
nvm use 20
npm install
```

## 2. 启动 Demo（推荐）

单命令同时启动 **Next.js UI** 与 **嵌入式 Sync**（默认端口 **3000**）：

```bash
npm run dev
```

终端出现 `Local: http://localhost:3000` 后，在浏览器打开。

### 主界面说明

| 你看到的 | 用来做什么 |
|----------|------------|
| **共享记忆** | 写项目笔记（记忆片段），多人 / 多 Agent 实时同步 |
| **任务看板** | 看待办、进行中、已完成（与记忆在同一协作空间） |
| 页面底部折叠区 | 给开发者看的旧版字段、同步策略实验，可忽略 |

默认 **room**：`example-room`；默认 scope：`ws-demo` / `sess-demo`。

## 3. 终端冒烟（另开终端）

确保 `npm run dev` 已在运行：

```bash
# Agent 写入演示记忆图
npm run graph:seed

# 模拟 Agent 改共享字段或摘要
npm run agent:push -- --action summarize --append " [from agent]"

# 任务看板种子数据
npm run task:seed
npm run agent:push -- --task-title "审查导出流水线" --status in_progress

# HTTP 导出 memory_chunk 为 Markdown
npm run export:chunks:http -- --room example-room --out ./markdown/chunks
```

## 4. 独立 Sync 服务（可选）

开发与生产拆分 sync 进程时：

```bash
# 终端 1
npm run sync:server    # 默认 :3001

# 终端 2
NEXT_PUBLIC_SYNC_URL=http://localhost:3001 npm run dev
```

健康检查：`GET http://localhost:3001/health`  
能力发现：`GET http://localhost:3001/v1/sync/capabilities`

## 5. 文档站（本官网）

**官网仓库**（与本实现仓库并列）：

```bash
cd ~/Documents/GitHub/slisync-docs
nvm use 20
npm install && npm run dev   # http://localhost:5173
```

文档站**不能**在 slisync 应用仓库根目录启动 — 请在 `slisync-docs` 目录执行上述命令。

## 6. 测试

```bash
npm test              # 单元 + 集成（约 64 cases）
npm run test:cluster  # 需 REDIS_URL
```

## 推荐阅读顺序

1. [生态地图](../ecosystem.md) · [术语表](../glossary.md)  
2. [分层记忆演示](./scoped-memory.md)（5 分钟）  
3. [共忆 → 笺 → 静态站](./story-pipeline.md)（完整故事）  
4. [SDK 三件套](../sdk/packages.md)

## 环境变量

完整列表见仓库 [.env.example](https://github.com/runsli/slisync/blob/main/.env.example)。常用项：

| 变量 | 说明 |
|------|------|
| `NEXT_PUBLIC_SYNC_URL` | 浏览器连接 Sync 的 URL |
| `REDIS_URL` | Redis 持久化 + Socket 集群广播 |
| `SYNC_CRDT_POSTGRES_URL` | PostgreSQL CRDT 存储 |
| `SYNC_API_KEY` / `SYNC_AGENT_API_KEY` | 开启鉴权时使用 |
