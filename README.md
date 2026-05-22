# Slisync 官网（VitePress）

与 [slisync](../slisync)（实现 + Demo）并列，位于 `~/Documents/GitHub/slisync-docs`。

**用户文档以本站为准**；实现仓库 `docs/zh`、`docs/en` 侧重协议与工程 Phase。

## 命令

```bash
cd ~/Documents/GitHub/slisync-docs
nvm use 20
npm install
npm run dev      # http://localhost:5173  （中文默认 /zh/）
npm run build
```

在 **slisync** 根目录（若已配置）：`npm run docs:dev` → 调用同级 `slisync-docs`

## 站点结构（中英）

| 分区 | 说明 |
|------|------|
| 开始 | 生态地图、术语表、共忆→Markdown→静态站 |
| 介绍 / Introduction | 产品定位 |
| 指南 / Guides | Demo、Markdown 导出 |
| SDK | 三件套与 API |
| 参考 / Reference | 命令、环境变量、排错 |

## 部署

`npm run build` → 发布 `docs/.vitepress/dist`（如 slisync.com）。

编辑链接默认指向 `github.com/runsli/slisync-docs`；若仓库名不同，请改 `docs/.vitepress/config.ts` 中的 `docsRepo`。
