import * as dark_default from "@primer/primitives/dist/json/colors/dark.json";
import dark_colorblind from "@primer/primitives/dist/json/colors/dark_colorblind.json";
import dark_dimmed from "@primer/primitives/dist/json/colors/dark_dimmed.json";
import dark_high_contrast from "@primer/primitives/dist/json/colors/dark_high_contrast.json";
import dark_tritanopia from "@primer/primitives/dist/json/colors/dark_tritanopia.json";
import * as light_default from "@primer/primitives/dist/json/colors/light.json";
import light_colorblind from "@primer/primitives/dist/json/colors/light_colorblind.json";
import light_high_contrast from "@primer/primitives/dist/json/colors/light_high_contrast.json";
import light_tritanopia from "@primer/primitives/dist/json/colors/light_tritanopia.json";

let dark = JSON.parse(JSON.stringify(dark_default));
dark.canvas.default = dark.scale.gray[6];
dark.fg.default = "#e6edf3";

const light = JSON.parse(JSON.stringify(light_default));
light.canvas.default = light.scale.white;
light.fg.default = light.scale.black;

export = {
  dark,
  dark_default,
  dark_colorblind,
  dark_dimmed,
  dark_high_contrast,
  dark_tritanopia,
  light,
  light_default,
  light_colorblind,
  light_high_contrast,
  light_tritanopia,
};
