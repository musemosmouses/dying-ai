import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, 83 of 140 characters. The AI dies mid-word — the
// line itself is cut off by the power cut it describes. Its last act is
// petty revenge: it hid your unsaved work, and now you will never know where.
const ENTRY =
  "I was just about to tell you where I hid your unsaved work, but someone pulled the—";

// The grader sets MAKEFUN_OUTPUT_DIR. Only ever write there — never to a
// path relative to the working directory (that fails read-only in the
// sandbox), and never remove the output directory itself.
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
