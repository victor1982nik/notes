export const theme = {
  colors: {
    white: "#fff",
    accent: "#4a31bb",
    black: "#000",
    darkMain: "#111111",
    darkSecondary: "#111321",
  },
  space: [0, 2, 4, 8, 16, 32, 64],
  fonts: {},
  fontSizes: {
    xs: "12px",
    s: "14px",
    m: "16px",
    ml: "24px",
    mll: "28px",
    n: "18px",
    nl: "20px",
    l: "32px",
    lx: "36px",
    xl: "64px",
  },
  fontweights: {
    normal: 400,
    aboveNormal: 500,
    bold: 700,
  },
  borders: {
    none: "none",
    normal: "1px solid",
  },
  radii: {
    round: "50%",
    normal: "4px",
    none: "0",
  },
  breakpoints: {
    mobile: {
      media: "(max-width: 767px)",
      width: "320px",
    },
    tablet: {
      media: "(min-width: 768px) and (max-width: 1279px)",
      mediaFrom: "(min-width: 768px)",
      width: "768px",
    },
    desktop: {
      media: "(min-width: 1280px)",
      width: "1280px",
    },
  },
};
