# Slisync 文档站

[English](README.md)

**Slisync 产品文档官网**（[VitePress](https://vitepress.dev)），与实现仓库 [runsli/slisync](https://github.com/runsli/slisync) 并列维护。

[在线站点](https://slisync.com) · [实现仓库](https://github.com/runsli/slisync) · [Demo](http://localhost:3000)（本地，需在 slisync 仓库启动）

| | |
| --- | --- |
| **本站（slisync-docs）** | 用户向指南、术语表、SDK 概览 |
| **[runsli/slisync](https://github.com/runsli/slisync)** | 参考实现、Demo、`@slisync/*` 包 |
| **工程文档** | [docs/zh](https://github.com/runsli/slisync/tree/main/docs/zh) · [packages/README.zh-CN](https://github.com/runsli/slisync/blob/main/packages/README.zh-CN.md) |

**用户文档以本站为准**；协议版本、ROADMAP 工程 Phase、API 契约在实现仓库维护，避免双份拷贝。

---

## 本地开发

需要 **Node.js ≥ 20.9**（`.nvmrc` 为 20）。

```bash
git clone https://github.com/runsli/slisync-docs.git
cd slisync-docs
nvm use 20
npm install
npm run dev      # http://localhost:5173 ，英文 / ，中文 /zh/
```

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 开发服务器（:5173） |
| `npm run build` | 生产构建 → `docs/.vitepress/dist` |
| `npm run preview` | 预览构建结果 |

命令**仅在本仓库执行**。[slisync](https://github.com/runsli/slisync) 应用仓库没有 `docs:dev` 脚本。

### 启动 Slisync Demo（另一仓库）

```bash
git clone https://github.com/runsli/slisync.git
cd slisync
nvm use 20 && npm install && npm run dev   # http://localhost:3000
```

---

## 推荐阅读顺序

| 你想… | 从这里开始 |
| --- | --- |
| 5 分钟打开 Demo | [安装并打开 Demo](docs/zh/guide/getting-started.md) → [分层记忆演示](docs/zh/guide/scoped-memory.md) |
| 导出后自行发布 | [共忆 → Markdown → 静态站](docs/zh/guide/story-pipeline.md) |
| 查名词（room、记忆片段） | [术语表](docs/zh/glossary.md) |
| 分清该看哪个仓库 | [生态地图](docs/zh/ecosystem.md) |
| 接 SDK / HTTP | [三件套](docs/zh/sdk/packages.md) · [HTTP 与鉴权](docs/zh/sdk/http.md) |

英文站内路径为 `/…`（源文件在 `docs/`，无 `zh` 前缀），例如 [getting-started](docs/guide/getting-started.md)。

---

## 站点结构

| 分区 | 内容 |
| --- | --- |
| **从这里开始** | 生态地图、术语表、完整故事线 |
| **了解 Slisync** | 定位、为什么需要共忆、架构、路线图 |
| **动手试试** | Demo、分层记忆、任务看板、local-first、Agent、导出 |
| **SDK 与 API** | `@slisync/*`、React、Memory Graph、HTTP |
| **参考** | 命令、环境变量、故障排查 |
| **工程文档**（侧栏链到 slisync 仓库） | 愿景、路线图、packages README |

语言：**简体中文**（`/zh/`）与 **English**（`/`）。配置见 [`docs/.vitepress/config.ts`](docs/.vitepress/config.ts)。

---

## 部署

```bash
npm run build
```

发布目录：

```text
docs/.vitepress/dist
```

示例托管：[slisync.com](https://slisync.com)、Vercel、Netlify、GitHub Pages（站点根目录指向 `dist`）。

页脚 **编辑此页** 链接由 `config.ts` 中的 `docsRepo` 控制（默认 `runsli/slisync-docs`）。Fork 后若远程名不同请自行修改。

---

## 参与贡献

1. 编辑 `docs/zh/`（英文对照改 `docs/` 下对应路径）。
2. `npm run dev` 下检查中英两个 locale。
3. 提 PR 前执行 `npm run build`。

| 主题 | Issue |
| --- | --- |
| Slisync 功能或缺陷 | [slisync](https://github.com/runsli/slisync/issues) |
| 文档表述或导航 | [slisync-docs](https://github.com/runsli/slisync-docs/issues) |

---

## 与实现仓库的分工

| 看什么 | 去哪里 |
| --- | --- |
| 5 分钟上手、用户故事、命令速查 | **本站** |
| 协议版本、ROADMAP、Graph 契约、工程 Phase | **slisync** 的 `docs/zh`、`docs/en` |

---

## 许可

本站文档采用 [MIT 许可证](LICENSE)，与 [Slisync](https://github.com/runsli/slisync) 实现仓库相同。
