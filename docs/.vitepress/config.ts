import { defineConfig } from "vitepress";

const githubRepo = "https://github.com/runsli/slisync";
const docsRepo = "https://github.com/runsli/slisync-docs";
const demoUrl = "http://localhost:3000";

const sidebarZh = [
  {
    text: "从这里开始",
    collapsed: false,
    items: [
      { text: "我该用哪个仓库？", link: "/zh/ecosystem" },
      { text: "名词解释（room、记忆片段…）", link: "/zh/glossary" },
      { text: "完整故事：共忆 → Markdown → 网站", link: "/zh/guide/story-pipeline" },
    ],
  },
  {
    text: "了解 Slisync",
    items: [
      { text: "它解决什么问题", link: "/zh/intro/what-is" },
      { text: "为什么需要共忆", link: "/zh/intro/why" },
      { text: "架构（给开发者）", link: "/zh/intro/architecture" },
      { text: "路线图", link: "/zh/intro/roadmap" },
      { text: "原则与边界", link: "/zh/intro/principles" },
    ],
  },
  {
    text: "动手试试",
    items: [
      { text: "安装并打开 Demo", link: "/zh/guide/getting-started" },
      { text: "命令速查", link: "/zh/reference/commands" },
    ],
  },
  {
    text: "使用场景",
    items: [
      { text: "多人一起写记忆", link: "/zh/guide/scoped-memory" },
      { text: "用看板跟任务", link: "/zh/guide/task-bus" },
      { text: "断网 / 刷新仍保留", link: "/zh/guide/local-first" },
      { text: "让 Agent 代写记忆", link: "/zh/guide/agent-cli" },
      { text: "导出成 Markdown 草稿", link: "/zh/guide/export" },
      { text: "HTTP 导出（集成用）", link: "/zh/guide/export-http" },
    ],
  },
  {
    text: "SDK 与 API",
    items: [
      { text: "三件套概览", link: "/zh/sdk/packages" },
      { text: "React 与 useSync", link: "/zh/sdk/react" },
      { text: "Memory Graph", link: "/zh/sdk/memory-graph" },
      { text: "HTTP 与鉴权", link: "/zh/sdk/http" },
    ],
  },
  {
    text: "参考",
    items: [
      { text: "环境变量", link: "/zh/reference/env" },
      { text: "故障排查", link: "/zh/reference/troubleshooting" },
    ],
  },
];

const sidebarEn = [
  {
    text: "Start here",
    collapsed: false,
    items: [
      { text: "Which repo do I need?", link: "/ecosystem" },
      { text: "Glossary (room, snippets…)", link: "/glossary" },
      { text: "Full story: memory → Markdown → site", link: "/guide/story-pipeline" },
    ],
  },
  {
    text: "About Slisync",
    items: [
      { text: "What problem it solves", link: "/intro/what-is" },
      { text: "Why shared memory", link: "/intro/why" },
      { text: "Architecture (developers)", link: "/intro/architecture" },
      { text: "Roadmap", link: "/intro/roadmap" },
      { text: "Principles", link: "/intro/principles" },
    ],
  },
  {
    text: "Try it",
    items: [
      { text: "Install & open the demo", link: "/guide/getting-started" },
      { text: "Command cheat sheet", link: "/reference/commands" },
    ],
  },
  {
    text: "Use cases",
    items: [
      { text: "Write memory together", link: "/guide/scoped-memory" },
      { text: "Track tasks on a board", link: "/guide/task-bus" },
      { text: "Survive offline / refresh", link: "/guide/local-first" },
      { text: "Let agents write memory", link: "/guide/agent-cli" },
      { text: "Export Markdown drafts", link: "/guide/export" },
      { text: "HTTP export (integrations)", link: "/guide/export-http" },
    ],
  },
  {
    text: "SDK & API",
    items: [
      { text: "Packages", link: "/sdk/packages" },
      { text: "React & useSync", link: "/sdk/react" },
      { text: "Memory Graph", link: "/sdk/memory-graph" },
      { text: "HTTP & auth", link: "/sdk/http" },
    ],
  },
  {
    text: "Reference",
    items: [
      { text: "Environment variables", link: "/reference/env" },
      { text: "Troubleshooting", link: "/reference/troubleshooting" },
    ],
  },
];

export default defineConfig({
  title: "Slisync",
  description: "AI-native realtime sync for multi-agent shared memory",
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: [/^https?:\/\/localhost(?::\d+)?/],
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      link: "/",
      title: "Slisync",
      description:
        "Realtime shared memory for multi-agent rooms — export Markdown",
      themeConfig: {
        nav: [
          { text: "Start here", link: "/ecosystem" },
          { text: "Get started", link: "/guide/getting-started" },
          { text: "Demo", link: demoUrl, target: "_blank" },
          { text: "GitHub", link: githubRepo, target: "_blank" },
        ],
        sidebar: sidebarEn,
        socialLinks: [{ icon: "github", link: githubRepo }],
        editLink: {
          pattern: `${docsRepo}/edit/main/docs/:path`,
          text: "Edit this page",
        },
        footer: {
          message: "MIT Licensed",
          copyright: "Copyright © Slisync contributors",
        },
        outline: { label: "On this page" },
      },
    },
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh/",
      title: "Slisync",
      description: "多人与多 Agent 共用的项目记忆 — 可导出为 Markdown",
      themeConfig: {
        nav: [
          { text: "从哪开始", link: "/zh/ecosystem" },
          { text: "上手", link: "/zh/guide/getting-started" },
          { text: "Demo", link: demoUrl, target: "_blank" },
          { text: "GitHub", link: githubRepo, target: "_blank" },
        ],
        sidebar: sidebarZh,
        socialLinks: [{ icon: "github", link: githubRepo }],
        editLink: {
          pattern: `${docsRepo}/edit/main/docs/:path`,
          text: "编辑此页",
        },
        footer: {
          message: "MIT 许可证",
          copyright: "Copyright © Slisync contributors",
        },
        docFooter: {
          prev: "上一页",
          next: "下一页",
        },
        outline: { label: "本页目录" },
        lastUpdated: {
          text: "最后更新",
          formatOptions: { dateStyle: "short", timeStyle: "medium" },
        },
      },
    },
  },
});
