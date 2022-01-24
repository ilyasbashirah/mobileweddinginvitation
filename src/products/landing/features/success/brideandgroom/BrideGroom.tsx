import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Banner from "@/src/components/Banner";
import Section from "@/src/components/Section";
import Typography from "@/src/components/Typography";
export interface BrideGroomProps {}

export default function BrideGroom({
  language = "ID",
  activeId = "",
  animation = false,
}: {
  language?: string;
  activeId?: string;
  animation?: boolean;
}) {
  const [state, setState] = useState({
    lang: "ID",
  });
  useEffect(() => {
    setState({ ...state, lang: language });
  }, [state.lang, language]);

  const titleDatas = {
    en: "Bride & Groom",
    id: "Mempelai",
  };
  const quoteDatas = {
    meaning: {
      en: "And of everything We have created pairs, that you may remember (the Grace of Allah).",
      id: "Dan dari segala sesuatu Kami ciptakan berpasang-pasangan, agar kamu mengingat (Rahmat Allah).",
    },
    surah: {
      en: "QS Adh-Dhariyat : 49",
      id: "QS Adh-Dhariyat : 49",
    },
  };
  const brideAndGroomDatas = {
    brideName: {
      en: "Yasmin Meidiana Syarif, S.T.",
      id: "Yasmin Meidiana Syarif, S.T.",
    },
    brideIdentity: {
      en: "The daughter of Mr. Aswin Gunther Sharif & Mrs. Sintya Liana Sofyan",
      id: "Putri dari Bapak Aswin Gunther Sharif, S.E., Ak. & Ibu Sintya Liana Sofyan, S.H., M.Kn.",
    },
    brideInstagram: {
      en: "@yasminsyrf",
      id: "@yasminsyrf",
    },
    groomName: {
      en: "Moh. Ilyas Bashirah Putra Arya, S.T.",
      id: "Moh. Ilyas Bashirah Putra Arya, S.T.",
    },
    groomIdentity: {
      en: "The son of Achmad Suyono & Mrs. Suntari",
      id: "Putra dari Bapak Achmad Suyono, S.Sos & Ibu Suntari",
    },
    groomInstagram: {
      en: "@milyasbpa",
      id: "@milyasbpa",
    },
  };
  const translate = state.lang.toLowerCase().includes("en") ? "en" : "id";
  const titleText: string = titleDatas[translate];
  const quoteMeaningText: string = quoteDatas.meaning[translate];
  const quoteSurahText: string = quoteDatas.surah[translate];

  const brideNameText: string = brideAndGroomDatas.brideName[translate];
  const brideIdentityText: string = brideAndGroomDatas.brideIdentity[translate];
  const groomNameText: string = brideAndGroomDatas.groomName[translate];
  const groomIdentityText: string = brideAndGroomDatas.groomIdentity[translate];
  const handleClickToInstagram = (akun: string) => {
    window.location.replace(`https://instagram.com/${akun}`);
  };
  return (
    // <div className={style["container-bride-and-groom"]}>
    <Banner
      id={"bride-and-groom"}
      height={"bride-and-groom"}
      align={"flex-start"}
      justify={"center"}
      background={"/desktop/brideandgroom/brideandgroom_background.svg"}
    >
      <Section gap={36} align={"flex-start"} justify={"center"}>
        <Typography
          animation={animation ? "fade-in-fwd-2" : "null"}
          variant={"heading-1-regular"}
          color={"cooper"}
          family={"greatvibes"}
          align={"center"}
        >
          {titleText}
        </Typography>

        <Typography
          animation={animation ? "fade-in-fwd-2" : "null"}
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

        <div className={style["container-bride-photos"]}>
          <div
            id={"container-bride-photos"}
            className={`${style["container-bride-photos"]} ${
              activeId !== "counting-down"
                ? style["container-bride-photos--slide-right"]
                : style["container-bride-photos--none"]
            }`}
            onClick={() => handleClickToInstagram("yasminsyrf")}
          >
            <img
              className={style["image-bride-and-groom"]}
              src={"/desktop/brideandgroom/brideandgroom_yasmin.png"}
            />
          </div>
          <div className={style["container-identity"]}>
            <Typography
              animation={
                activeId !== "counting-down" ? "scale-up-center" : "none"
              }
              variant={"subtitle-2-bold"}
              color={"onyx"}
              family={"montserrat"}
              align={"center"}
            >
              {brideNameText}
            </Typography>
            <Typography
              animation={
                activeId !== "counting-down" ? "scale-up-center" : "none"
              }
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
          <div
            id={"container-groom-photos"}
            className={`${style["container-groom-photos"]} ${
              activeId !== "counting-down"
                ? style["container-groom-photos--slide-left"]
                : style["container-groom-photos--none"]
            }`}
            onClick={() => handleClickToInstagram("milyasbpa")}
          >
            <img
              className={style["image-bride-and-groom"]}
              src={"/desktop/brideandgroom/brideandgroom_bas.png"}
            />
          </div>

          <div className={style["container-identity"]}>
            <Typography
              animation={
                activeId !== "counting-down" ? "scale-up-center" : "none"
              }
              variant={"subtitle-2-bold"}
              color={"onyx"}
              family={"montserrat"}
              align={"center"}
            >
              {groomNameText}
            </Typography>
            <Typography
              animation={
                activeId !== "counting-down" ? "scale-up-center" : "none"
              }
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
