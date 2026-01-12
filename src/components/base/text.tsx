import * as utils from "@/lib/utils";
import Icon from "@/components/base/icon";
import { IconName, IconSize } from "@/types/icon.types";
import { cva } from "class-variance-authority";
import { FC, ReactNode } from "react";
import { TextSize, TextTag, TextWeight } from "@/types/text.types";
import { ColorType } from "@/types/common.types";

const textVariants = cva("", {
  variants: {
    underline: {
      true: "underline",
      false: "",
    },
    color: {
      white: "text-white",
      error: "text-error",
      brand: "text-brand",
      black: "text-black",
      "gray-1": "text-gray-100",
      "gray-2": "text-gray-200",
      "gray-3": "text-gray-300",
      "gray-4": "text-gray-400",
      "gray-5": "text-gray-500",
      "gray-6": "text-gray-600",
      "gray-7": "text-gray-700",
      "gray-8": "text-gray-800",
      "dark-gray": "text-dark-900",
      success: "text-success",
      destructive: "text-destructive",
      warning: "text-warning",
      orange: "text-orange",
      placeholder: "text-muted-foreground/50",
    },
    size: {
      hTena: "text-5xl",
      hInfo: "text-4xl",
      hHero: "text-3xl",
      h1: "text-2xl",
      h2: "text-xl",
      h3: "text-lg",
      h4: "text-base",
      p: "text-sm",
      pSmall: "text-xs",
      pUltraSmall: "text-ultraSmall",
    },
    align: {
      center: "text-center",
      right: "text-right",
      left: "text-left",
    },
    weight: {
      bold: "font-bold", //700
      medium: "font-medium", //500
      regular: "font-normal", //400
      light: "font-light", //300
      thin: "font-thin", //200
    },
  },
});

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color"> {
  size?: TextSize;
  align?: "center" | "right" | "left";
  color?: ColorType;
  weight?: TextWeight;
  className?: string | undefined;
  wrapperClassName?: string | undefined;
  key?: string | number | undefined;
  children: ReactNode | ReactNode[];
  underline?: boolean;
  leftIconSize?: IconSize;
  leftIcon?: IconName;
  rightIconSize?: IconSize;
  rightIcon?: IconName;
  iconColor?: ColorType;
  Tag?: TextTag;
  onClick?: () => void;
}

const Text: FC<TextProps> = ({
  children,
  className,
  size = "p",
  align,
  color,
  weight,
  underline,
  leftIconSize,
  leftIcon,
  rightIconSize,
  rightIcon,
  iconColor,
  onClick,
  Tag = "div",
  wrapperClassName,
  ...otherProps
}) => {
  return (
    <Tag
      className={utils.cn(
        `${
          children && (leftIcon || rightIcon) ? "flex items-center gap-1" : ""
        } ${onClick ? "cursor-pointer" : ""}`,
        wrapperClassName
      )}
      onClick={onClick}
    >
      {leftIcon && (
        <Icon name={leftIcon} color={iconColor || color} size={leftIconSize} />
      )}
      <Tag
        {...otherProps}
        className={utils.cn(
          textVariants({
            align,
            color,
            weight,
            underline,
            size,
          }),
          className
        )}
        title={otherProps?.title?.toString()}
      >
        {children}
      </Tag>
      {rightIcon && (
        <Icon
          name={rightIcon}
          color={iconColor || color}
          size={rightIconSize}
        />
      )}
    </Tag>
  );
};

export default Text;
