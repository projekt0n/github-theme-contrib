import { PrimerPalette } from "./palette";

export interface GenerateModule {
  name: string;
  ext: string;
  generate(name:string,palette: PrimerPalette): string;
}
