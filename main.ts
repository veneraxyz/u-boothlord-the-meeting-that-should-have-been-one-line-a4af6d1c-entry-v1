// The meeting that should have been one line.
// Writes a single sentence to entry.txt — the line that kills the meeting.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The client already said yes in the email nobody read, so this meeting is just twelve people slowly discovering the answer together.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Validation guard: exactly one line, 1-200 chars, not whitespace-only.
if (LINE.length < 1 || LINE.length > 200) {
  fail(`line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  fail("line must not be whitespace-only");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("line must be a single line");
}
// Extra validation: no control characters and no leading/trailing spaces.
if (/[\u0000-\u001f\u007f]/.test(LINE)) {
  fail("line must not contain control characters");
}
if (LINE !== LINE.trim()) {
  fail("line must not have leading or trailing whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");

// Read-back guard: re-read entry.txt and assert exact contents.
const back = readFileSync(outPath, "utf8");
if (back !== LINE + "\n") {
  fail("read-back mismatch: entry.txt does not equal the line plus one trailing newline");
}
console.log(`wrote ${outPath} (${LINE.length} chars)`);
