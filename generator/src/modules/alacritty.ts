import { PrimerPalette } from "types/palette";
import { blend } from "../lib/colors";

const fmt = (c: string): string => {
  return `'${c.replace("#", "0x")}'`;
};

export default {
  name: "alacritty",
  ext: "yml",
  generate: (name: string, p: PrimerPalette): string => {
    const header = `(${name}) Colors for Alacritty`;

    const parse = (c: string): string => {
      return blend(p.canvas.default, c);
    };

    return `# ${header}

colors:
  # Default colors
  primary:
    background: ${fmt(p.canvas.default)}
    foreground: ${fmt(p.fg.default)}

  # Cursor colors
  #
  # These will only be used when the \`custom_cursor_colors\` field is set to \`true\`.
  cursor:
    text: ${fmt(p.canvas.default)}
    cursor: ${fmt(parse(p.codemirror.cursor))}

  # Normal colors
  normal:
    black:   ${fmt(p.ansi.black)}
    red:     ${fmt(p.ansi.red)}
    green:   ${fmt(p.ansi.green)}
    yellow:  ${fmt(p.ansi.yellow)}
    blue:    ${fmt(p.ansi.blue)}
    magenta: ${fmt(p.ansi.magenta)}
    cyan:    ${fmt(p.ansi.cyan)}
    white:   ${fmt(p.ansi.white)}

  # Bright colors
  bright:
    black:   ${fmt(p.ansi.blackBright)}
    red:     ${fmt(p.ansi.redBright)}
    green:   ${fmt(p.ansi.greenBright)}
    yellow:  ${fmt(p.ansi.yellowBright)}
    blue:    ${fmt(p.ansi.blueBright)}
    magenta: ${fmt(p.ansi.magenta)}
    cyan:    ${fmt(p.ansi.cyan)}
    white:   ${fmt(p.ansi.white)}`;
  },
};
