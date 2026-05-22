# 生态地图

Slisync 相关仓库与分工：**一起写记忆 → 导出 Markdown → 用你自己的工具发布**。

## 一张图

```mermaid
flowchart LR
  subgraph live [活记忆]
    DEMO[slisync Demo]
    AG[Agent CLI]
  end
  subgraph sync [同步层]
    SRV[sync-server + CRDT]
  end
  subgraph publish [发布]
    EXP[Markdown 导出]
    MD[markdown/chunks]
    SITE[你的静态站 / CMS]
  end
  DEMO --> SRV
  AG --> SRV
  SRV --> EXP
  EXP --> MD
  MD --> SITE
```

Slisync 的边界在 **导出文件**；如何建站不在本仓库范围内。

## 仓库对照

| 本地目录 | 产品角色 | 第一句话 | 第一条命令 |
|----------|----------|----------|------------|
| **[slisync](https://github.com/runsli/slisync)** | 参考实现 + Demo | 多人在同一 **room** 共忆 | `npm run dev` → :3000 |
| **slisync-docs**（本站） | 对外文档 | 产品说明与使用办法 | `npm run dev` → :5173 |

::: tip 克隆目录
GitHub 仓库名为 **slisync**，建议本地 clone 为 `~/Documents/GitHub/slisync`。
:::

## 我该看哪份文档？

| 你想… | 去看 |
|-------|------|
| 5 分钟打开 Demo | [安装并打开 Demo](./guide/getting-started.md) → [多人一起写记忆](./guide/scoped-memory.md) |
| 导出后发布 | [完整故事：共忆 → Markdown → 网站](./guide/story-pipeline.md) |
| 名词不懂 | [术语表](./glossary.md) |
| 接 SDK、查协议 | [slisync 仓库 `docs/zh`](https://github.com/runsli/slisync/tree/main/docs/zh) |

## 端口速查

| 服务 | 默认端口 |
|------|----------|
| Slisync Demo | 3000 |
| 独立 sync server | 3001 |
| 本 VitePress 文档站 | 5173 |

[术语表](./glossary.md) · [English](/ecosystem)
