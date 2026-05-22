# 原则与边界

## 坚持做

1. **Local-first 方向** — 本地可编辑，同步是增强；浏览器默认可持久化 room。  
2. **Simple API** — 数分钟内跑通 Demo 与 `graph:seed`。  
3. **Stability** — 协议版本、CRDT 权威、重连与测试优先于功能堆叠。  
4. **Developer Trust** — 开源实现、文档与代码对齐、集成测试覆盖关键路径。  
5. **生态位清晰** — Slisync 只负责共忆与 Markdown 导出，不包含建站产品。

## 当前不做

| 不做 | 原因 |
|------|------|
| Web3 / 代币叙事 | 与基础设施定位无关 |
| 语义检索 / Embedding | 愿景 9 排除；避免与向量库红海竞争 |
| 聊天超级应用 | 定位是基础设施，不是 IM |
| Markdown → CRDT 回写 | 导出为单向快照，避免双写权威源 |
| 独立任务数据库 | 任务仅为 Graph 节点 `kind: task` |
| `sync:task-*` 专用事件 | 任务变更走 `sync:crdt-update` / `agent:push` |
| 重型 Workflow / DAG | 愿景 11 未实现；避免 v1 过度工程 |

## 开源与商业化（产品层）

| 层 | 方向 |
|----|------|
| **开源** | SDK、协议、基础 sync server、文档与 Demo |
| **远期商业化** | 托管 Cloud Sync、Enterprise Memory、轻量 Coordination API |

托管控制面可与自托管 server **功能切割**：计量、多租户、备份、SLA 在云端；核心协议保持开源可测。

## 文档与仓库

- 本 VitePress 站：面向产品说明与使用办法  
- 仓库 `docs/zh`、`docs/en`：可与本站并行；以 GitHub 为协议细节的长期存档  

下一步：[快速开始](../guide/getting-started.md)
