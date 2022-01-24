import { ReactElement } from "react";
import style from "./style.module.scss";
import { Color } from "@/src/styles/typescript/types/color";

type Variant =
  | "heading-1-regular"
  | "subtitle-1-bold"
  | "subtitle-2-bold"
  | "body-1-bold"
  | "body-1-semibold"
  | "body-1-medium"
  | "body-2-bold"
  | "body-2-semibold"
  | "body-2-medium"
  | "caption-1-semibold"
  | "caption-1-bold";

type Align = "left" | "right" | "center";
const Typography = ({
  children,
  variant = "heading-1-regular",
  align = "left",
  color = "light-gray",
  paragraph = true,
  family = "montserrat",
  animation = "null",
}: {
  children?: string;
  variant?: Variant;
  align?: Align;
  color?: Color;
  device?: string;
  paragraph?: boolean;
  family?: "montserrat" | "greatvibes";
  animation?:
    | "scale-up-center"
    | "slide-top"
    | "none"
    | "null"
    | "fade-in-fwd-2"
    | "fade-in-fwd-1"
    | "fade-in-fwd-05";
}): ReactElement => {
  const deviceFontVariant: string = `typography--${variant}`;

  const fontStyles: string = `${style.typography} ${
    style[`typography-color--${color}`]
  } ${style[deviceFontVariant]} ${style[`typography-align--${align}`]} ${
    style[`typography-family--${family}`]
  } ${
    animation === "scale-up-center"
      ? style[`typography-animation--scale-up-center`]
      : animation === "slide-top"
      ? style[`typography-animation--slide-top`]
      : animation === "none"
      ? style[`typography-animation--none`]
      : animation === "fade-in-fwd-2"
      ? style[`typography-animation--fade-in-fwd-2`]
      : animation === "fade-in-fwd-05"
      ? style[`typography-animation--fade-in-fwd-05`]
      : ""
  }
`;

  return (
    <>
      {paragraph ? (
        <div className={fontStyles}>{`${children}`}</div>
      ) : (
        <span className={fontStyles}>{`${children}`}</span>
      )}
    </>
  );
};

export default Typography;
