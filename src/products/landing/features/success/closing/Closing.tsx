import * as React from "react";
import style from "./style.module.scss";
import Banner from "@/src/components/Banner";

export interface ClosingProps {}

export default function Closing(props: ClosingProps) {
  const textDatas = {
    text1: {
      en: `Our wedding wouldn't have been complete without the support of our family and friends.`,
      ina: "Pernikahan kami tidak akan lengkap tanpa dukungan keluarga dan teman-teman kami.",
    },
    text2: {
      en: "Thank you for sharing our day!",
      ina: "Terima kasih telah berbagi hari kami!",
    },
    text3: {
      en: "With Love,",
      ina: "Dengan Cinta,",
    },
    text4: {
      en: "Yasmin & Bas",
      ina: "Yasmin & Bas",
    },
  };
  return (
    <Banner
      height={"closing"}
      background={"/desktop/closing/closing_background.svg"}
    />
  );
}
