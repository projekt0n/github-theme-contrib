import fs from "fs";
import path from "path";

import modules from "./modules";
import palettes from "./palettes";

const titleCase = (s: string) => {
  return s.replace(/^_*(.)|_+(.)/g, (_, c, d) =>
    c ? c.toUpperCase() : " " + d.toUpperCase()
  );
};

Object.values(modules).forEach((m) => {
  const out = path.resolve(path.parse(__dirname).dir, m.name);
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
