import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Typography from "@/src/components/Typography";
import Banner from "@/src/components/Banner";

import style from "./style.module.scss";

export interface CountingProps {}

export default function Counting(props: CountingProps) {
  type textDatas = {
    en: string;
    ina: string;
  };
  const countingDownDatas: textDatas = {
    en: "ounting times for wedding party",
    ina: "Menghitung menuju hari bahagia",
  };
  const nameDatas: textDatas = {
    en: "Yasmin & Bas",
    ina: "Yasmin & Bas",
  };
  type timeWordingType = {
    hari: textDatas;
    jam: textDatas;
    menit: textDatas;
    detik: textDatas;
  };
  const timerWordingDatas: timeWordingType = {
    hari: {
      en: "Days",
      ina: "Hari",
    },
    jam: {
      en: "Hours",
      ina: "Jam",
    },
    menit: {
      en: "Minutes",
      ina: "Menit",
    },
    detik: {
      en: "Seconds",
      ina: "Detik",
    },
  };
  const router = useRouter();
  const routePathname: string = router.pathname;
  const nameText: string = routePathname.includes("en")
    ? nameDatas.en
    : nameDatas.ina;
  const countingText: string = routePathname.includes("en")
    ? countingDownDatas.en
    : countingDownDatas.ina;

  type StateType = {
    hari: number;
    jam: number;
    menit: number;
    detik: number;
  };

  const yearNow = new Date().getFullYear();
  const difference = +new Date(`02/01/${yearNow}`) - +new Date();
  const [state, setState] = useState<StateType>({
    hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
    jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
    menit: Math.floor((difference / 1000 / 60) % 60),
    detik: Math.floor((difference / 1000) % 60),
  });
  useEffect(() => {
    const interval = setTimeout(() => {
      const tahun = new Date().getFullYear();
      const selisih = +new Date(`02/01/${tahun}`) - +new Date();
      const hariCalculation = Math.floor(selisih / (1000 * 60 * 60 * 24));
      const jamCalculation = Math.floor((selisih / (1000 * 60 * 60)) % 24);
      const menitCalculation = Math.floor((selisih / 1000 / 60) % 60);
      const detikCalculation = Math.floor((selisih / 1000) % 60);
      setState({
        ...state,
        hari: hariCalculation,
        jam: jamCalculation,
        menit: menitCalculation,
        detik: detikCalculation,
      });
    }, 1000);
    return () => clearTimeout(interval);
  }, []);
  const hariText: string = routePathname.includes("en")
    ? timerWordingDatas.hari.en
    : timerWordingDatas.hari.ina;
  const jamText: string = routePathname.includes("en")
    ? timerWordingDatas.jam.en
    : timerWordingDatas.jam.ina;
  const menitText: string = routePathname.includes("en")
    ? timerWordingDatas.menit.en
    : timerWordingDatas.menit.ina;
  const detikText: string = routePathname.includes("en")
    ? timerWordingDatas.detik.en
    : timerWordingDatas.detik.ina;
  const timeText = [hariText, jamText, menitText, detikText];
  return (
    <Banner
      height={"counting-down"}
      background={"/desktop/countingdown/countingdown_background.svg"}
    >
      <img
        src={"/desktop/countingdown/countingdown_illustration.svg"}
        alt={"bride-and-groom"}
        width={"100%"}
        height={"100%"}
      />
      <Typography
        family={"greatvibes"}
        variant={"heading-1-regular"}
        color={"cooper"}
      >
        {nameText}
      </Typography>
      <Typography
        family={"montserrat"}
        variant={"body-1-medium"}
        color={"onyx"}
      >
        {countingText}
      </Typography>
      <div className={style["container-timer"]}>
        {Object.keys(state).map((item, index) => (
          <div
            key={`box-timer-${timeText[index]}`}
            className={style["box-timer"]}
          >
            <Typography
              family={"montserrat"}
              color={"cooper"}
              variant={"subtitle-1-bold"}
            >
              {state[item]}
            </Typography>
            <Typography
              family={"montserrat"}
              color={"cooper"}
              variant={"caption-1-semibold"}
            >
              {timeText[index]}
            </Typography>
          </div>
        ))}
      </div>
    </Banner>
  );
}
