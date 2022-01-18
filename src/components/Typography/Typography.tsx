import { ReactElement } from "react";
import style from "./style.module.scss";
import { Color } from "@/src/styles/typescript/types/color";

type Variant =
  | "heading-1-regular"
  | "heading-2-regular"
  | "heading-3-bold"
  | "subtitle-1-bold"
  | "subtitle-2-bold"
  | "subtitle-2-semibold"
  | "body-1-bold"
  | "body-1-semibold"
  | "body-1-medium"
  | "body-2-semibold"
  | "body-3-bold"
  | "body-3-medium"
  | "body-4-medium"
  | "caption-1-bold";

type Align = "left" | "right" | "center";
const Typography = ({
  children,
  variant = "heading-2-regular",
  align = "left",
  color = "light-gray",
  paragraph = true,
  family = "montserrat",
}: {
  children?: string;
  variant?: Variant;
  align?: Align;
  color?: Color;
  device?: string;
  paragraph?: boolean;
  family?: "montserrat" | "greatvibes";
}): ReactElement => {
  const deviceFontVariant: string = `typography--${variant}`;

  const fontStyles: string = `${style.typography} ${
    style[`typography-color--${color}`]
  } ${style[deviceFontVariant]} ${style[`typography-align--${align}`]} ${
    style[`typography-family--${family}`]
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
