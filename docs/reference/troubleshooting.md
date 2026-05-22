# Troubleshooting

## Demo / connection

| Symptom | Fix |
|---------|-----|
| Browser spins forever | Confirm `npm run dev` printed `Listen on`; `npm run dev:stop` then restart |
| Corrupt `.sync-data/crdt-rooms.json` | `npm run sync:reset` or restore from `.corrupt-*.bak` backup |
| `node -v` not 20.x | `nvm use 20` |
| Two windows out of sync | Same URL, same room; wait for `syncReady` |
| Standalone sync unreachable | Set `NEXT_PUBLIC_SYNC_URL=http://localhost:3001` |

## Scoped memory

| Symptom | Fix |
|---------|-----|
| No auto-seed | Session already seeded; click init demo workspace |
| Presence count 0 | Need `connected` and at least one client in room |
| `agent:push` fails | Start `npm run dev` first; check `[agent:push]` logs |

## Export

| Symptom | Fix |
|---------|-----|
| `export:chunks:http` count 0 | Run `graph:seed` first; confirm server has room CRDT |
| Export ≠ UI content | Export reads **server**, not IndexedDB; sync before export |
| 401 | Set `SYNC_API_KEY` / `SYNC_AGENT_API_KEY` and headers |
| incompatible_protocol | Header `X-Sync-Protocol-Version: 1` |

## Local-first

| Symptom | Fix |
|---------|-----|
| Lost after refresh | `strategy: crdt` and `localPersistence` not disabled |
| Conflict with server | Server CRDT wins on merge; clear local room cache in demo |

## Task board

| Symptom | Fix |
|---------|-----|
| `agent:push` no task | Use `--task-title` and `--status`; or `task:seed` first |
| Looking for task table | Tasks are graph nodes only; no separate IndexedDB task store |

## Docs site build

| Symptom | Fix |
|---------|-----|
| VitePress dead link on localhost | `ignoreDeadLinks` in config for localhost |
| crypto errors | Node 18+ (20 recommended) |

## Still stuck

Open [GitHub Issues](https://github.com/runsli/slisync/issues) with: `node -v`, commands run, terminal logs, whether auth/Redis is enabled.
