// The One-Line Exit — make.fun bounty
// Writes the funniest single-line resignation letter to /output/entry.txt
// (absolute path, UTF-8, deterministic, no network, no file reads outside this repo).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Effective today I resign, because after three years the vending machine still owes me fifty cents and my dignity.";

// Gate: the entry must be 1–140 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`Invalid resignation line: ${LINE.length} characters`);
}

mkdirSync(dirname("/output/entry.txt"), { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
