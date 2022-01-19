import * as React from "react";
import { useRouter } from "next/router";
import style from "./style.module.scss";
import Banner from "@/src/components/Banner";
import Section from "@/src/components/Section";
import Typography from "@/src/components/Typography";
export interface BrideGroomProps {}

export default function BrideGroom(props: BrideGroomProps) {
  const titleDatas = {
    en: "Bride & Groom",
    ina: "Mempelai",
  };
  const quoteDatas = {
    meaning: {
      en: "And of everything We have created pairs, that you may remember (the Grace of Allah).",
      ina: "Dan dari segala sesuatu Kami ciptakan berpasang-pasangan, agar kamu mengingat (Rahmat Allah).",
    },
    surah: {
      en: "QS Adh-Dhariyat : 49",
      ina: "QS Adh-Dhariyat : 49",
    },
  };
  const brideAndGroomDatas = {
    brideName: {
      en: "Yasmin Meidiana Syarif, S.T.",
      ina: "Yasmin Meidiana Syarif, S.T.",
    },
    brideIdentity: {
      en: "The daughter of Mr. Aswin Gunther Sharif & Mrs. Sintya Liana Sofyan",
      ina: "Putri dari Bapak Aswin Gunther Sharif, S.E., Ak. & Ibu Sintya Liana Sofyan, S.H., M.Kn.",
    },
    brideInstagram: {
      en: "@yasminsyrf",
      ina: "@yasminsyrf",
    },
    groomName: {
      en: "Moh. Ilyas Bashirah Putra Arya, S.T.",
      ina: "Moh. Ilyas Bashirah Putra Arya, S.T.",
    },
    groomIdentity: {
      en: "The son of Achmad Sunaryo & Mrs. Suntari",
      ina: "Putra dari Bapak Achmad Suyono, S.Sos & Ibu Suntari",
    },
    groomInstagram: {
      en: "@milyasbpa",
      ina: "@milyasbpa",
    },
  };
  const router = useRouter();

  const routePathname: string = router.pathname;
  const translate = routePathname.includes("en") ? "en" : "ina";
  const titleText: string = titleDatas[translate];
  const quoteMeaningText: string = quoteDatas.meaning[translate];
  const quoteSurahText: string = quoteDatas.surah[translate];

  const brideNameText: string = brideAndGroomDatas.brideName[translate];
  const brideIdentityText: string = brideAndGroomDatas.brideIdentity[translate];
  const groomNameText: string = brideAndGroomDatas.groomName[translate];
  const groomIdentityText: string = brideAndGroomDatas.groomIdentity[translate];
  return (
    // <div className={style["container-bride-and-groom"]}>
    <Banner
      height={"bride-and-groom"}
      align={"flex-start"}
      justify={"center"}
      background={"/desktop/brideandgroom/brideandgroom_background.svg"}
    >
      <Section gap={36} align={"flex-start"} justify={"center"}>
        <Typography
          variant={"heading-1-regular"}
          color={"cooper"}
          family={"greatvibes"}
          align={"center"}
        >
          {titleText}
        </Typography>
        <Section gap={24} align={"flex-start"} justify={"center"}>
          <Typography
            variant={"body-2-medium"}
            color={"onyx"}
            family={"montserrat"}
            align={"center"}
          >
            {quoteMeaningText}
          </Typography>
          <Typography
            variant={"body-2-medium"}
            color={"onyx"}
            family={"montserrat"}
            align={"center"}
          >
            {quoteSurahText}
          </Typography>
        </Section>

        <div className={style["container-bride-photos"]}>
          <img
            className={style["image-bride-and-groom"]}
            src={"/desktop/brideandgroom/brideandgroom_yasmin.svg"}
          />
          <div className={style["container-identity"]}>
            <Typography
              variant={"subtitle-2-bold"}
              color={"onyx"}
              family={"montserrat"}
              align={"center"}
            >
              {brideNameText}
            </Typography>
            <Typography
              variant={"body-2-medium"}
              color={"onyx"}
              family={"montserrat"}
              align={"center"}
            >
              {brideIdentityText}
            </Typography>
          </div>
        </div>

        <div className={style["container-groom-photos"]}>
          <img
            className={style["image-bride-and-groom"]}
            src={"/desktop/brideandgroom/brideandgroom_bas.svg"}
          />
          <div className={style["container-identity"]}>
            <Typography
              variant={"subtitle-2-bold"}
              color={"onyx"}
              family={"montserrat"}
              align={"center"}
            >
              {groomNameText}
            </Typography>
            <Typography
              variant={"body-2-medium"}
              color={"onyx"}
              family={"montserrat"}
              align={"center"}
            >
              {groomIdentityText}
            </Typography>
          </div>
        </div>
      </Section>
    </Banner>
    // </div>
  );
}
