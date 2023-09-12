import { PrimerPalette } from "palette";
import { blend, hexToRGB } from "@lib/colors";

const xmlElement = (k: string, c: string): string => {
  const { r, g, b } = hexToRGB(c);

  const fmt = (i: number) => (i / 255).toFixed(16);

  return `    <key>${k} Color</key>
    <dict>
      <key>Alpha Component</key>
      <real>1</real>
      <key>Blue Component</key>
      <real>${fmt(b)}</real>
      <key>Color Space</key>
      <string>sRGB</string>
      <key>Green Component</key>
      <real>${fmt(g)}</real>
      <key>Red Component</key>
      <real>${fmt(r)}</real>
    </dict>
`;
};

export default {
  name: "iterm",
  ext: "itermcolors",
  generate: (_name: string, p: PrimerPalette): string => {
    const parse = (c: string): string => blend(p.canvas.default, c);

    const groups = {
      Background: p.canvas.default,
      Foreground: p.fg.default,
      Cursor: parse(p.codemirror.cursor),
      "Cursor Text": p.canvas.default,
      Selection: parse(p.codemirror.selectionBg),
      "Selected Text": p.fg.default,
      Bold: p.fg.default,
      "Ansi 0": p.ansi.black,
      "Ansi 1": p.ansi.red,
      "Ansi 2": p.ansi.green,
      "Ansi 3": p.ansi.yellow,
      "Ansi 4": p.ansi.blue,
      "Ansi 5": p.ansi.magenta,
      "Ansi 6": p.ansi.cyan,
      "Ansi 7": p.ansi.white,
      "Ansi 8": p.ansi.blackBright,
      "Ansi 9": p.ansi.redBright,
      "Ansi 10": p.ansi.greenBright,
      "Ansi 11": p.ansi.yellowBright,
      "Ansi 12": p.ansi.blueBright,
      "Ansi 14": p.ansi.cyanBright,
      "Ansi 15": p.ansi.whiteBright,
    };

    let elements = "";
    Object.entries(groups).forEach((k) => {
      elements += xmlElement(k[0], k[1]);
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
${elements.trimEnd()}
  </dict>
</plist>
`;
  },
};
