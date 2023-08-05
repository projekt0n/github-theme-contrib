import dark from "@primer/primitives/dist/json/colors/dark.json";
import dark_colorblind from "@primer/primitives/dist/json/colors/dark_colorblind.json";
import dark_dimmed from "@primer/primitives/dist/json/colors/dark_dimmed.json";
import dark_high_contrast from "@primer/primitives/dist/json/colors/dark_high_contrast.json";
import dark_tritanopia from "@primer/primitives/dist/json/colors/dark_tritanopia.json";
import light from "@primer/primitives/dist/json/colors/light.json";
import light_colorblind from "@primer/primitives/dist/json/colors/light_colorblind.json";
import light_high_contrast from "@primer/primitives/dist/json/colors/light_high_contrast.json";
import light_tritanopia from "@primer/primitives/dist/json/colors/light_tritanopia.json";

dark.canvas.default = dark.scale.gray[6];
dark.fg.default = "#e6edf3";

dark_colorblind.canvas.default = dark_colorblind.scale.gray[9];
dark_colorblind.fg.default = dark_colorblind.scale.gray[1];

dark_dimmed.canvas.default = dark_dimmed.scale.gray[9];
dark_dimmed.fg.default = dark_dimmed.scale.gray[1];

dark_high_contrast.canvas.default = dark_high_contrast.scale.gray[9];
dark_high_contrast.fg.default = dark_high_contrast.scale.gray[1];

dark_tritanopia.canvas.default = dark_tritanopia.scale.gray[9];
dark_tritanopia.fg.default = dark_tritanopia.scale.gray[1];

light.canvas.default = light.scale.white;
light.fg.default = light.scale.black;

light_colorblind.canvas.default = light_colorblind.scale.white;
light_colorblind.fg.default = light_colorblind.scale.black;

light_high_contrast.canvas.default = light_high_contrast.scale.white;
light_high_contrast.fg.default = light_high_contrast.scale.black;

light_tritanopia.canvas.default = light_tritanopia.scale.white;
light_tritanopia.fg.default = light_tritanopia.scale.black;

export default {
  dark,
  dark_colorblind,
  dark_dimmed,
  dark_high_contrast,
  dark_tritanopia,
  light,
  light_colorblind,
  light_high_contrast,
  light_tritanopia,
};
