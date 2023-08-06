import { PrimerPalette } from "types/palette";
import { blend } from "../lib/colors";

const fmt = (c: string): string => `"${c}"`;

export default {
  name: "windows_terminal",
  ext: "json",
  generate: (name: string, p: PrimerPalette): string => {
    const parse = (c: string): string => blend(p.canvas.default, c);

    return `{
  "name": ${fmt(name)},
  "background": ${fmt(p.canvas.default)},
  "foreground": ${fmt(p.fg.default)},
  "cursorColor": ${fmt(parse(p.codemirror.cursor))},
  "selectionBackground": ${fmt(parse(p.codemirror.selectionBg))},
  "black": ${fmt(p.ansi.black)},
  "brightBlack": ${fmt(p.ansi.blackBright)},
  "red": ${fmt(p.ansi.red)},
  "brightRed": ${fmt(p.ansi.redBright)},
  "green": ${fmt(p.ansi.green)},
  "brightGreen": ${fmt(p.ansi.greenBright)},
  "yellow": ${fmt(p.ansi.yellow)},
  "brightYellow": ${fmt(p.ansi.yellowBright)},
  "blue": ${fmt(p.ansi.blue)},
  "brightBlue": ${fmt(p.ansi.blueBright)},
  "purple": ${fmt(p.ansi.magenta)},
  "brightPurple": ${fmt(p.ansi.magentaBright)},
  "cyan": ${fmt(p.ansi.cyan)},
  "brightCyan": ${fmt(p.ansi.cyanBright)},
  "white": ${fmt(p.ansi.white)},
  "brightWhite": ${fmt(p.ansi.whiteBright)}
}`;
  },
};
