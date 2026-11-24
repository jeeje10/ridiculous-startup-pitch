// Ridiculous at First Glance, Real by the Second — make.fun entry.
// Writes one sentence (at most 200 characters) to /output/entry.txt:
// a startup pitch so strange it sounds like a joke, yet specific
// enough that you can see the customers and the money. Retired racing
// greyhounds, leased to offices as calm pre-trained colleagues.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "We lease retired racing greyhounds to offices as calm, pre-trained 'colleagues': companies pay $400 a month, the dogs get a couch instead of a kennel.";

// Gate guard: the entry must be 1–200 characters and not only whitespace.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
