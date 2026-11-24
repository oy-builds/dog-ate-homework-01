import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: the dog's defense is that the homework was on the floor,
// and the floor is where food goes — so eating it was following the rules.
// The closer makes the dog unrepentant: it believes it did nothing wrong
// and would do it again.
const ENTRY =
  "The homework was on the floor, and the floor is where my food goes. I followed the rules. I'd do it again.";

const MAX_CHARS = 200;

function main(): void {
  if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`,
    );
  }
  if (/[\r\n]/.test(ENTRY)) {
    throw new Error("entry must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");

  // Read the file back and verify what landed on disk is exactly the entry.
  const written = readFileSync(outPath, "utf8");
  if (written !== ENTRY) {
    throw new Error(`read-back mismatch: ${outPath} differs from entry`);
  }
  console.log(ENTRY);
}

main();
