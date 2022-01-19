import * as React from "react";
import style from "./style.module.scss";
export interface BannerProps {
  children?: React.ReactNode;
  background?: string;
  align?: "flex-start" | "center" | "flex-end";
  justify?: "flex-start" | "center" | "flex-end";
  height?:
    | "counting-down"
    | "bride-and-groom"
    | "venue-and-protocol"
    | "our-gallery"
    | "wedding-gift"
    | "closing";
}

export default function Banner({
  children,
  background = "",
  align = "center",
  justify = "center",
  height = "counting-down",
}: BannerProps) {
  return (
    <div
      className={`${style["banner"]} ${style[`banner-justify--${justify}`]} ${
        style[`banner-align--${align}`]
      } ${style[`banner-height--${height}`]}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      {children}
    </div>
  );
}
