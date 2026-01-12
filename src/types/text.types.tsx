export const textWeightOptions = [
  "bold",
  "medium",
  "regular",
  "light",
  "thin",
] as const;
export type TextWeight = (typeof textWeightOptions)[number];

export const textSizeOptions = [
  "hTena", //48px
  "hInfo", //36px
  "hHero", //30px
  "h1", //24px
  "h2", //20px
  "h3", //18px
  "h4", //16px
  "p", //14px
  "pSmall", //12px
  "pUltraSmall", //11px - size custom non presente in tailwind aggiunta in global.css
] as const;
export type TextSize = (typeof textSizeOptions)[number];

export const textTagOptions = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "span",
  "div",
] as const;
export type TextTag = (typeof textTagOptions)[number];
