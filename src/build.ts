import fs from "fs";
import path from "path";

import modules from "@root/modules";
import palettes from "@lib/palettes";

const titleCase = (s: string) => {
  return s.replace(/^_*(.)|_+(.)/g, (_, c, d) =>
    c ? c.toUpperCase() : " " + d.toUpperCase()
  );
};

const outDir = path.resolve(path.parse(__dirname).dir, "themes");

console.log("Loading themes Modules...");
Object.values(modules).forEach((m) => {
  console.log(`Generating ${titleCase(m.name)} themes...`);
  const out = path.resolve(outDir, m.name);
  if (!fs.existsSync(out)) {
    fs.mkdirSync(out, { recursive: true });
  }

  (Object.keys(palettes) as (keyof typeof palettes)[]).forEach((k, _) => {
    let name = `github_${k}`;

    const data = m.generate(titleCase(name), palettes[k]);

    name = m.ext ? `${name}.${m.ext}` : name;
    const file = path.resolve(out, name);

    fs.writeFileSync(file, data, { flag: "w" });
  });
});

console.log("DONE");

console.log(`\nThemes saved in '${outDir}'`);
process.exit(0);
