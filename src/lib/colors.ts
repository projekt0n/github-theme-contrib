import { normal } from "color-blend";

interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

const hexToRGB = (h: string): Color => {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (h.length == 4) {
    r = parseInt("0x" + h[1] + h[1]);
    g = parseInt("0x" + h[2] + h[2]);
    b = parseInt("0x" + h[3] + h[3]);

    // 6 digits
  } else if (h.length == 7) {
    r = parseInt("0x" + h[1] + h[2]);
    g = parseInt("0x" + h[3] + h[4]);
    b = parseInt("0x" + h[5] + h[6]);
  }
  return { r, g, b, a: 1.0 };
};

const parseRGBAStr = (str: string): Color | undefined => {
  // A very ugly regex that parses a string such as 'rgb(191, 0, 46)' and produces an array
  const match = str.match(
    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d\.]+))?\)$/
  );
  if (match) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3]),
      a: parseFloat(match[4]),
    };
  }
};

const RGBToHex = (c: Color) => {
  let r = (+c.r).toString(16),
    g = (+c.g).toString(16),
    b = (+c.b).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
};

const parseColorStr = (str: string): Color | undefined => {
  if (str.slice(0, 4) == "rgba") {
    return parseRGBAStr(str);
  } else if (str[0] == "#") {
    return hexToRGB(str);
  }
};

const blend = (background: string, color: string): string => {
  const c1 = parseColorStr(background);
  const c2 = parseColorStr(color);

  if (!c1) {
    console.error("Unable to parse color string ", c1);
    process.exit(1);
  }
  if (!c2) {
    console.error("Unable to parse color ", c2);
    process.exit(1);
  }

  c1.a = 1.0;
  return RGBToHex(normal(c1, c2));
};

export { blend, hexToRGB };
