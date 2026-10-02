#!/usr/bin/env node
import { createFirstpartyMcp } from '../_shared/create-firstparty-mcp.mjs';

const mcp = createFirstpartyMcp({
  "id": "apply-preflight",
  "titleZh": "投递前检查",
  "summary": "检查材料、链接与渠道是否齐备。",
  "tools": [
    "apply_preflight"
  ],
  "proxyTools": {
    "apply_preflight": "zc_apply_preflight"
  },
  "localKind": "checklist"
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
