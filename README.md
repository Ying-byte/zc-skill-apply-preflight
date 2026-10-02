# 投递前检查

Standard **MCP + Skill** for any Agent Host (Cursor / Claude Code / Codex / Zhencheng).

检查材料、链接与渠道是否齐备。

> One capability = one GitHub project. This folder is the sellable unit.

## Quick start

```bash
cd zc-skill-apply-preflight
npm i
node stdio_mcp_server.mjs
```

## Cursor (`~/.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "zc-skill-apply-preflight": {
      "command": "node",
      "args": ["/ABS/PATH/zc-skill-apply-preflight/stdio_mcp_server.mjs"]
    }
  }
}
```

Optional (use Zhencheng live tools):

```json
"env": {
  "ZC_AGENT_API_URL": "https://your-zhencheng-host",
  "ZC_MCP_TOKEN": "your-token"
}
```

## Tools

| Tool | Args |
|------|------|
| `apply_preflight` | `query?` `jdText?` `profileText?` `location?` `notes?` `limit?` (number) |

## Skill

See `skills/zc-skill-apply-preflight/SKILL.md`.

## License

MIT — see `LICENSE`.
