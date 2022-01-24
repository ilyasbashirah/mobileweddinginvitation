import * as React from "react";
import style from "./style.module.scss";
export interface BannerProps {
  children?: React.ReactNode;
  background?: string;
  align?: "flex-start" | "center" | "flex-end";
  justify?: "flex-start" | "center" | "flex-end";
  height?:
    | "open-invitation"
    | "counting-down"
    | "bride-and-groom"
    | "venue-and-protocol"
    | "our-gallery"
    | "wedding-gift"
    | "closing";
  id?: string;
  slideTop?: boolean;
}

export default function Banner({
  children,
  background = "",
  align = "center",
  justify = "center",
  height = "counting-down",
  id = "banner",
  slideTop = false,
}: BannerProps) {
  return (
    <div
      id={id}
      className={`${style["banner"]} ${style[`banner-justify--${justify}`]} ${
        style[`banner-align--${align}`]
      } ${style[`banner-height--${height}`]} ${
        slideTop && style[`banner--slide-out-top`]
      }`}
      style={{ backgroundImage: `url(${background})` }}
    >
      {children}
    </div>
  );
}
