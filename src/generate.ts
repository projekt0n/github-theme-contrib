import fs from "fs";
import path from "path";

import palettes from "./lib/palettes";
import modules from "./modules";

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

  (Object.keys(palettes) as (keyof typeof palettes)[]).forEach((key, _) => {
    let name = `github_${key}`;

    const data = m.generate(titleCase(name), palettes[key]);

    name = m.ext ? `${name}.${m.ext}` : name;
    const file = path.resolve(out, name);

    fs.writeFile(file, data, {}, (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
});

console.log("DONE");

console.log(`\nThemes saved in '${outDir}'`);
process.exit(0);
