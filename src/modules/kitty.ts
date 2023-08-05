import { PrimerPalette } from "types/palette";
import { blend } from "../lib/colors";

export default {
  name: "kitty",
  ext: "conf",
  generate: (name: string, p: PrimerPalette): string => {
    const header = `(${name}) Colors for kitty`;

    const parse = (c: string): string => {
      return blend(p.canvas.default, c);
    };

    return `# ${header}

background ${p.canvas.default}
foreground ${p.fg.default}
url_color ${p.fg.default}

selection_background ${parse(p.codemirror.selectionBg)}
selection_foreground background

cursor ${parse(p.codemirror.cursor)}
cursor_text_color background

# Tabs
active_tab_background ${parse(p.accent.muted)}
active_tab_foreground ${p.fg.default}
inactive_tab_background ${parse(p.accent.subtle)}
inactive_tab_foreground ${p.fg.subtle}

# Windows Border
active_border_color ${parse(p.accent.fg)}
inactive_border_color ${parse(p.border.subtle)}

# normal
color0 ${p.ansi.black}
color1 ${p.ansi.red}
color2 ${p.ansi.green}
color3 ${p.ansi.yellow}
color4 ${p.ansi.blue}
color5 ${p.ansi.magenta}
color6 ${p.ansi.cyan}
color7 ${p.ansi.white}

# bright
color8 ${p.ansi.blackBright}
color9 ${p.ansi.redBright}
color10 ${p.ansi.greenBright}
color11 ${p.ansi.yellowBright}
color12 ${p.ansi.blueBright}
color13 ${p.ansi.magentaBright}
color14 ${p.ansi.cyanBright}
color15 ${p.ansi.whiteBright}`;
  },
};
