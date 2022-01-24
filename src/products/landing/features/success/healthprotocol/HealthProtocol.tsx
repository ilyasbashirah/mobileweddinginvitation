import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Typography from "@/src/components/Typography";
import { useRouter } from "next/router";

export interface HealthProtocolProps {}

export default function HealthProtocol({
  language = "ID",
}: {
  language?: string;
}) {
  const [state, setState] = useState({
    lang: "ID",
  });
  useEffect(() => {
    setState({ ...state, lang: language });
  }, [state.lang, language]);
  const textDatas = {
    title: {
      en: "Health Protocol",
      id: "Protokol Kesehatan",
    },
    description: {
      en: "We keep this wedding event safe from the risk of Covid-19 transmission, please pay attention to the following recommendations during the event:",
      id: "Kami menjaga agar acara pernikahan ini aman dari risiko penularan Covid-19, mohon perhatikan anjuran berikut selama acara berlangsung:",
    },
    aspect: {
      mask: {
        img: "/desktop/venueandprotocol/protocol/protocol_masker.svg",
        en: "Must use masks during the event a Mask",
        id: "Menggunakan masker selama acara berlangsung",
      },
      soap: {
        img: "/desktop/venueandprotocol/protocol/protocol_sabun.svg",
        en: "Wash your hands frequently, using soap for about 20 seconds",
        id: "Cuci tangan rutin dengan sabun selama minimal 20 detik",
      },
      distance: {
        img: "/desktop/venueandprotocol/protocol/protocol_jagajarak.svg",
        en: "Keep distance from others min 1,5 meters",
        id: "Saling menjaga jarak dengan orang sekitar minimal 1,5 meter",
      },
    },
  };

  const translate = state.lang.toLowerCase().includes("en") ? "en" : "id";
  const titleText: string = textDatas.title[translate];
  const descriptionText: string = textDatas.description[translate];

  return (
    <div id={"health-protocol"} className={style["container-health-protocol"]}>
      <Typography
        variant={"heading-1-regular"}
        color={"cooper"}
        family={"greatvibes"}
        align={"center"}
      >
        {titleText}
      </Typography>
      <Typography
        variant={"body-2-medium"}
        color={"onyx"}
        family={"montserrat"}
        align={"center"}
      >
        {descriptionText}
      </Typography>

      <div className={style["container-box-health-protocol"]}>
        {Object.keys(textDatas.aspect).map((item: any) => {
          return (
            <div key={`box-health-protocol-${item}`} className={style["box-health-protocol"]}>
              <img src={textDatas.aspect[item]["img"]} />
              <Typography
                variant={"body-2-semibold"}
                color={"onyx"}
                family={"montserrat"}
                align={"center"}
              >
                {textDatas.aspect[item][translate]}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
}
