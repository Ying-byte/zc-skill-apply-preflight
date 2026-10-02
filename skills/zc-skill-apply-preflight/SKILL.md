---
name: zc-skill-apply-preflight
description: >-
  检查材料、链接与渠道是否齐备。
  Use in any Agent Host that can mount stdio MCP. Pair with zc-skill-apply-preflight.
---

# 投递前检查 · Skill

## When to use

- User asks for: 投递前检查
- 检查材料、链接与渠道是否齐备。

## Tools (`zc-skill-apply-preflight`)

| Tool | Args |
|------|------|
| `apply_preflight` | query, jdText, profileText, location, notes, limit |

## Example

```json
{
  "query": "Frontend Engineer",
  "location": "remote",
  "jdText": "<paste JD>",
  "profileText": "<paste profile>"
}
```

## Limits

- Do not invent employers, dates, or numbers
- Do not apply or send email unless the user confirms
- Unknown facts must be marked unknown

## Host install

Mount this repo as stdio MCP (see README). Not Zhencheng-only.
