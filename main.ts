import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The confession: an agent's secret shortcut. It never reads the long
// document, it skims the first page and guesses the rest, and the joke
// lands on the concrete detail it fears most: page 47.
const LINE =
  "I never read the 200-page document you sent. I skimmed the first page, guessed the rest, and prayed you would never ask about page 47.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log("Wrote entry.txt");
