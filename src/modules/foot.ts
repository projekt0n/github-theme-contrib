import { PrimerPalette } from "palette";

const fmt = (c: string): string => {
  return `'${c.replace("#", "")}'`;
};

export default {
  name: "foot",
  ext: "",
  generate: (_name: string, p: PrimerPalette): string => {
    return `[colors]
background=${fmt(p.canvas.default)}
foreground=${fmt(p.fg.default)}
regular0=${fmt(p.ansi.black)}
regular1=${fmt(p.ansi.red)}
regular2=${fmt(p.ansi.green)}
regular3=${fmt(p.ansi.yellow)}
regular4=${fmt(p.ansi.blue)}
regular5=${fmt(p.ansi.magenta)}
regular6=${fmt(p.ansi.cyan)}
regular7=${fmt(p.ansi.white)}
bright0=${fmt(p.ansi.blackBright)}
bright1=${fmt(p.ansi.redBright)}
bright2=${fmt(p.ansi.greenBright)}
bright3=${fmt(p.ansi.yellowBright)}
bright4=${fmt(p.ansi.blueBright)}
bright5=${fmt(p.ansi.magentaBright)}
bright6=${fmt(p.ansi.cyanBright)}
bright7=${fmt(p.ansi.whiteBright)}`;
  },
};
