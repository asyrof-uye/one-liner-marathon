import { mkdirSync, writeFileSync } from "node:fs";

// One-liner entry: therapy billed by the hour meets corporate efficiency.
// v2 — fixed defect: "so" was a filler connector softening the deadpan beat.
// Cut it and let a semicolon split the two flat clauses instead.
const JOKE =
  "My therapist charges by the hour; I only cry in bullet points now.";

function validateEntry(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("entry is empty or whitespace-only");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.length < 1 || text.length > 280) {
    throw new Error(`entry must be 1-280 characters, got ${text.length}`);
  }
}

const OUT_DIR = "/output";

// Gate first: exit 1 and write nothing on failure.
validateEntry(JOKE);

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, JOKE, "utf8");
console.log(`wrote ${JOKE.length} chars to ${OUT_DIR}/entry.txt`);
