import { PrimerPalette } from "types/palette";
import { blend, hexToRGB } from "../libs/colors";

const fmt = (hex: string): string => {
  const c = hexToRGB(hex);
  return `${c.r},${c.g},${c.b}`;
};

export default {
  name: "konsole",
  ext: "colorscheme",
  generate: (name: string, p: PrimerPalette): string => {
    const description = `${name} Colors for Konsole`;

    const parse = (c: string): string => {
      return blend(p.canvas.default, c);
    };

    return `[Background]
Color=${fmt(p.canvas.default)}

[BackgroundFaint]
Color=${fmt(p.canvas.default)}

[BackgroundIntense]
Color=${fmt(p.canvas.default)}

[Color0]
Color=${fmt(p.ansi.black)}

[Color0Faint]
Color=${fmt(p.ansi.blackBright)}

[Color0Intense]
Color=${fmt(p.ansi.blackBright)}

[Color1]
Color=${fmt(p.ansi.red)}

[Color1Faint]
Color=${fmt(p.ansi.red)}

[Color1Intense]
Color=${fmt(p.ansi.redBright)}

[Color2]
Color=${fmt(p.ansi.green)}

[Color2Faint]
Color=${fmt(p.ansi.green)}

[Color2Intense]
Color=${fmt(p.ansi.greenBright)}

[Color3]
Color=${fmt(p.ansi.yellow)}

[Color3Faint]
Color=${fmt(p.ansi.yellow)}

[Color3Intense]
Color=${fmt(p.ansi.yellowBright)}

[Color4]
Color=${fmt(p.ansi.blue)}

[Color4Faint]
Color=${fmt(p.ansi.blue)}

[Color4Intense]
Color=${fmt(p.ansi.blueBright)}

[Color5]
Color=${fmt(p.ansi.magenta)}

[Color5Faint]
Color=${fmt(p.ansi.magenta)}

[Color5Intense]
Color=${fmt(p.ansi.magentaBright)}

[Color6]
Color=${fmt(p.ansi.cyan)}

[Color6Faint]
Color=${fmt(p.ansi.cyan)}

[Color6Intense]
Color=${fmt(fmt(p.ansi.cyanBright))}

[Color7]
Color=${fmt(fmt(p.ansi.white))}

[Color7Faint]
Color=${fmt(fmt(p.ansi.white))}

[Color7Intense]
Color=${fmt(fmt(p.ansi.whiteBright))}

[Foreground]
Color=${fmt(fmt(p.fg.default))}

[ForegroundFaint]
Color=${fmt(fmt(p.fg.subtle))}

[ForegroundIntense]
Color=${fmt(p.fg.muted)}

[General]
Description=${description}

Opacity=1
Wallpaper=`;
  },
};
