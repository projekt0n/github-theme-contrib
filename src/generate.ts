import fs from "fs";
import path from "path";

import modules from "./modules";
import palettes from "./palettes";

Object.values(modules).forEach((m) => {
  const out = path.resolve(path.parse(__dirname).dir, m.name);
  if (!fs.existsSync(out)) {
    fs.mkdirSync(out, { recursive: true });
  }

  (Object.keys(palettes) as (keyof typeof palettes)[]).forEach((key, _) => {
    let name=`github_${key}`
    name=m.ext?`${name}.${m.ext}`:name
    const file = path.resolve(out, name);
    const data = m.generate(name, palettes[key]);

    fs.writeFile(file,data,{},(err)=>{
      if(err){
        console.error(err)
      }
    })

  });
});
