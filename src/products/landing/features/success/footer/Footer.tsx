import * as React from "react";
import style from "./style.module.scss";
import Typography from "@/src/components/Typography";

export interface FooterProps {}

export default function Footer(props: FooterProps) {
  const textFooter =
    "© 2022 PT Bajo Digital Innovation | Contact us for reservation";
  return (
    <div className={style["container-footer"]}>
      <Typography
        family={"montserrat"}
        variant={"caption-1-semibold"}
        color={"cooper"}
        align={"center"}
      >
        {textFooter}
      </Typography>
      <img src={"/desktop/footer/icons/whatsapp.svg"} width={16} height={16} />
    </div>
  );
}
