import { writeFileSync, chmodSync, mkdirSync } from "node:fs";

// One line, one joke: the midnight rule, its one named exception, and the owner locked out.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = `${outDir}/entry.txt`;
const line = "My fridge won't open after midnight for anyone except the pickles. The pickles have their own key, and I don't.";
mkdirSync(outDir, { recursive: true });
writeFileSync(target, line, "utf8");
chmodSync(target, 0o644);
