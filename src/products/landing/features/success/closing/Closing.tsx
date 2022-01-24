import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Typography from "@/src/components/Typography";
import Banner from "@/src/components/Banner";

export interface ClosingProps {}

export default function Closing({ language = "" }: { language?: string }) {
  const [state, setState] = useState({
    active: "",
    lang: "EN",
  });
  useEffect(() => {
    setState({ ...state, lang: language });
  }, [state.lang, language]);
  const textDatas = {
    datas: {
      text1: {
        en: `Our wedding wouldn't have been complete without the support of our family and friends.`,
        id: "Pernikahan kami tidak akan lengkap tanpa dukungan keluarga dan teman-teman kami.",
      },
      text2: {
        en: "Thank you for sharing our day!",
        id: "Terima kasih telah berbagi hari kami!",
      },
      text3: {
        en: "With Love,",
        id: "Dengan Cinta,",
      },
    },

    from: {
      en: "Yasmin & Bas",
      id: "Yasmin & Bas",
    },
  };
  return (
    <Banner
      height={"closing"}
      background={"/desktop/closing/closing_background.png"}
    >
      {Object.keys(textDatas.datas).map((item: any, index: number) => {
        return (
          <Typography
            key={`typography-${index}`}
            family={"montserrat"}
            variant={"body-2-medium"}
            color={"white"}
            align={"center"}
          >
            {textDatas.datas[item][state.lang.toLowerCase()]}
          </Typography>
        );
      })}
      <Typography
        family={"montserrat"}
        variant={"subtitle-2-bold"}
        color={"white"}
        align={"center"}
      >
        {textDatas.from[state.lang.toLowerCase()]}
      </Typography>
    </Banner>
  );
}
