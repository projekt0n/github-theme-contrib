import { PrimerPalette } from "palette";
import { blend } from "@lib/colors";

export default {
  name: "fzf",
  ext: "",
  generate: (_name: string, p: PrimerPalette): string => {
    const parse = (c: string) => blend(p.canvas.default, c);

    return `export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS' --color=fg:${
      p.fg.muted
    },bg:${p.canvas.default},hl:${p.fg.onEmphasis} --color=fg+:${
      p.fg.default
    },bg+:${parse(p.checks.lineSelectedBg)},hl+:${parse(
      p.prettylights.syntax.variable
    )} --color=info:${p.attention.fg},prompt:${p.accent.fg},pointer:${
      p.done.fg
    } --color=marker:${p.open.fg},spinner:${
      p.neutral.emphasisPlus
    },header:${parse(p.neutral.muted)}'`;
  },
};
