import * as React from "react";
import style from "./style.module.scss";
export interface CardProps {
  children?: React.ReactNode;
  activeId?: string;
}

export default function Card({ children = <div />, activeId = "" }: CardProps) {
  return (
    <div className={style["container-outside-card"]}>
      <div className={style["container-inside-card"]}>{children}</div>
    </div>
  );
}
