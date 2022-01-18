import * as React from "react";
import style from "./style.module.scss";
export interface CardProps {
  children?: React.ReactNode;
}

export default function Card({ children = <div /> }: CardProps) {
  return (
    <div className={style["container-outside-card"]}>
      <div className={style["container-inside-card"]}>{children}</div>
    </div>
  );
}
