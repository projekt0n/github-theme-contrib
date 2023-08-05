import { PrimerPalette } from "types/palette";

export default {
  name: "xresources",
  ext: "Xresources",
  generate: (_: string, p: PrimerPalette): string => {
    return `
*.foreground:   ${p.fg.default}
#ifdef background_opacity
*.background:   [background_opacity]${p.canvas.default}
#else
*.background:   ${p.canvas.default}
#endif
*.cursorColor:  #73b7f2

*.color0:       ${p.ansi.black}
*.color1:       ${p.ansi.red}
*.color2:       ${p.ansi.green}
*.color3:       ${p.ansi.yellow}
*.color4:       ${p.ansi.blue}
*.color5:       ${p.ansi.magenta}
*.color6:       ${p.ansi.cyan}
*.color7:       ${p.ansi.white}

*.color8:       ${p.ansi.blackBright}
*.color9:       ${p.ansi.redBright}
*.color10:      ${p.ansi.greenBright}
*.color11:      ${p.ansi.yellowBright}
*.color12:      ${p.ansi.blueBright}
*.color13:      ${p.ansi.magentaBright}
*.color14:      ${p.ansi.cyanBright}
*.color15:      ${p.ansi.whiteBright}`;
  },
};
