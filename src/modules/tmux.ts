import { PrimerPalette } from "palette";
import { blend } from "@lib/colors";

export default {
  name: "tmux",
  ext: "conf",
  generate: (name: string, p: PrimerPalette): string => {
    const parse = (s: string) => blend(p.canvas.default, s);

    return `#!/usr/bin/env bash

# (${name}) Colors for Tmux

set -g mode-style "fg=${p.fg.default},bg=${p.canvas.default}"

set -g message-style "fg=${p.canvas.default},bg=${p.fg.default}"
set -g message-command-style "fg=${p.canvas.default},bg=${p.fg.default}"

set -g pane-border-style "fg=${p.fg.default}"
set -g pane-active-border-style "fg=${p.accent.fg}"

set -g status "on"
set -g status-justify "left"

set -g status-style "fg=${p.accent.fg},bg=${p.fg.default}"

set -g status-left-length "100"
set -g status-right-length "100"

set -g status-left-style NONE
set -g status-right-style NONE

set -g status-left "#[fg=${p.fg.default},bg=${p.accent.fg},bold] #S #[fg=${
      p.accent.fg
    },bg=${p.fg.default},nobold,nounderscore,noitalics]"
set -g status-right "#[fg=${p.fg.default},bg=${
      p.fg.default
    },nobold,nounderscore,noitalics]#[fg=${p.fg.default},bg=${
      p.fg.default
    }] #{prefix_highlight} #[fg=#babbbd,bg=${
      p.fg.default
    },nobold,nounderscore,noitalics]#[fg=${
      p.canvas.default
    },bg=#babbbd] %Y-%m-%d  %I:%M %p #[fg=#0366d6,bg=#babbbd,nobold,nounderscore,noitalics]#[fg=${
      p.fg.default
    },bg=#0366d6,bold] #h "

setw -g window-status-activity-style "underscore,fg=${parse(
      p.neutral.emphasis
    )},bg=${p.fg.default}"
setw -g window-status-separator ""
setw -g window-status-style "NONE,fg=${p.ansi.whiteBright},bg=${p.fg.default}"
setw -g window-status-format "#[fg=${p.fg.default},bg=${
      p.fg.default
    },nobold,nounderscore,noitalics]#[fg=${parse(p.neutral.muted)},bg=${
      p.fg.default
    },nobold,nounderscore,noitalics] #I  #W #F #[fg=${p.fg.default},bg=${
      p.fg.default
    },nobold,nounderscore,noitalics]"
setw -g window-status-current-format "#[fg=${p.fg.default},bg=${parse(
      p.open.fg
    )},nobold,nounderscore,noitalics]#[fg=${p.canvas.default},bg=${parse(
      p.open.fg
    )},bold] #I  #W #F #[fg=${parse(p.open.fg)},bg=${
      p.fg.default
    },nobold,nounderscore,noitalics]"`;
  },
};
