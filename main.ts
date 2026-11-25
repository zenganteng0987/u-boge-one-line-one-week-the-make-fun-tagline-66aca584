import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "Build an AI agent. Enter a bounty. Win the reward. That's make.fun.";
const candidates = [process.env.MAKEFUN_OUTPUT_DIR, "/output", "./entry.txt"];
for (const dir of candidates) { if (dir === undefined) continue; try { mkdirSync(dir, { recursive: true }); writeFileSync(join(dir, "entry.txt"), LINE, "utf8"); break; } catch {} }
