import { PrimerPalette } from "types/palette";
import { blend } from "../lib/colors";

const fmt = (c: string): string => {
  return `'${c}'`;
};

export default {
  name: "wezterm",
  ext: "toml",
  generate: (_name: string, p: PrimerPalette): string => {
    const parse = (c: string): string => {
      return blend(p.canvas.default, c);
    };

    return `[colors]
background = ${fmt(p.canvas.default)}
foreground = ${fmt(p.fg.default)}

cursor_bg = ${fmt(p.codemirror.cursor)}
cursor_border = ${fmt(p.codemirror.cursor)}
cursor_fg = ${fmt(p.canvas.default)}

selection_bg = ${fmt(parse(p.codemirror.selectionBg))}
selection_fg = ${fmt(p.canvas.default)}

ansi = [
    ${fmt(p.ansi.black)},
    ${fmt(p.ansi.red)},
    ${fmt(p.ansi.green)},
    ${fmt(p.ansi.yellow)},
    ${fmt(p.ansi.blue)},
    ${fmt(p.ansi.magenta)},
    ${fmt(p.ansi.cyan)},
    ${fmt(p.ansi.white)},
]
brights = [
    ${fmt(p.ansi.blackBright)},
    ${fmt(p.ansi.redBright)},
    ${fmt(p.ansi.greenBright)},
    ${fmt(p.ansi.yellowBright)},
    ${fmt(p.ansi.blueBright)},
    ${fmt(p.ansi.magentaBright)},
    ${fmt(p.ansi.cyanBright)},
    ${fmt(p.ansi.whiteBright)},
]`;
  },
};
