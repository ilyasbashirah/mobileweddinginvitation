import * as React from "react";
import style from "./style.module.scss";
export interface SectionProps {
  children?: React.ReactNode;
  gap?: 32 | 36 | 44 | 24;
  align?: "flex-start" | "center" | "flex-end";
  justify?: "flex-start" | "center" | "flex-end";
}

export default function Section({
  children,
  gap = 36,
  align = "flex-start",
  justify = "flex-start",
}: SectionProps) {
  return (
    <div
      className={`${style["section-width-1240"]} ${
        style[`section-gap--${gap}`]
      } ${style[`section-align--${align}`]} 
      ${style[`section-justify--${justify}`]}
      `}
    >
      {children}
    </div>
  );
}
