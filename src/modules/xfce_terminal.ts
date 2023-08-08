import { PrimerPalette } from "palette";
import { blend } from "@lib/colors";

export default {
  name: "xfce_terminal",
  ext: "theme",
  generate: (name: string, p: PrimerPalette): string => {
    const parse = (c: string) => blend(p.canvas.default, c);

    return `# (${name}) for Xfce4 Terminal

[Scheme]
Name=${name}
ColorBackground=${p.canvas.default}
ColorForeground=${p.fg.default}
ColorCursor=${parse(p.codemirror.cursor)}
TabActivityColor=${p.closed.fg}
ColorPalette=${p.ansi.black};${p.ansi.red};${p.ansi.green};${p.ansi.yellow};${
      p.ansi.blue
    };${p.ansi.magenta};${p.ansi.cyan};${p.ansi.white};${p.ansi.blackBright};${
      p.ansi.redBright
    };${p.ansi.greenBright};${p.ansi.yellowBright};${p.ansi.blueBright};${
      p.ansi.magentaBright
    };${p.ansi.cyanBright};${p.ansi.whiteBright};
ColorBold=${parse(p.codemirror.cursor)}
ColorBoldUseDefault=FALSE`;
  },
};
