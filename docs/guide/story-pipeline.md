# Memory → Markdown → site

::: info You will
- [ ] Edit memory snippets in Slisync
- [ ] HTTP-export Markdown to disk
- [ ] Point your static site or CMS at those files
:::

One demonstrable pipeline (~15 minutes for steps 1–2).

## 1. Live memory (slisync)

```bash
cd ~/Documents/GitHub/slisync
nvm use 20 && npm install && npm run dev
```

Second terminal:

```bash
npm run graph:seed
# Edit title/body in the browser; optional second window for sync
```

Optional: `npm run task:seed` (tasks **are not** exported).

See [Write memory together](./scoped-memory.md) · [Task bus](./task-bus.md).

## 2. Export Markdown

```bash
npm run export:chunks:http -- --room example-room --out ./markdown/chunks
```

**Expect**: `count >= 1` and files under `markdown/chunks/ws-demo/sess-demo/*.md`.

Or use the demo **Export Markdown drafts (zip)** button.

::: warning Server-side source
Only chunks synced to **server CRDT** appear in export. See [Local-first](./local-first.md).
:::

You now have portable `.md` files with YAML front matter — use them however your publisher expects (Hugo, VitePress, Astro content collections, Obsidian, custom CMS, etc.).

## 3. Publish (your toolchain)

Slisync does not prescribe a blog product. Typical steps:

1. Copy or sync `markdown/chunks/**` into your site’s content directory.  
2. Map `title` / `date` (and optional extra fields) to your schema.  
3. Run your generator’s `build` / `dev` command.

Extra front matter (`workspaceId`, `roomId`, `nodeId`, …) is safe to ignore if your tool only needs `title` and `date`.

## 4. Boundaries (say aloud in demos)

| Do | Do not |
|----|--------|
| Collaborate, snapshot export to Markdown | Auto write-back from published files to the room |
| Task board for execution | Export `task` nodes as blog posts |
| Multi-agent writes to chunks | Claim Slisync ships a static site product |

## Related

- [Export Markdown](./export.md) · [HTTP export](./export-http.md)
- [Ecosystem map](/ecosystem)

[中文](/zh/guide/story-pipeline)
