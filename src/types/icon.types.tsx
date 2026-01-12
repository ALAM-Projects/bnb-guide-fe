import { iconRegistry } from "@/components/base/icon";

export const iconSizeOptions = [
  "5xl",
  "4xl",
  "3xl",
  "2xl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs",
] as const;
export type IconSize = (typeof iconSizeOptions)[number];

// Remove the `IconName` type definition
export type IconName = keyof typeof iconRegistry;
