import { useState, useEffect } from "react";
import Button from "@/src/components/Button";
import Typography from "@/src/components/Typography";
import Banner from "@/src/components/Banner";
import SwitchLanguageButton from "@/src/products/landing/features/counting_down/switch_language_button/SwitchLanguageButton";
import Section from "@/src/components/Section";
import style from "./style.module.scss";

export interface OpenInvitationProps {}

export default function OpenInvitation({
  language = "ID",
  switchLanguageTo,
  openInvitation,
}: {
  language?: string;
  switchLanguageTo?: (lang: string) => void;
  openInvitation?: () => void;
}) {
  type textDatas = {
    en: string;
    id: string;
  };

  const nameDatas: textDatas = {
    en: "Yasmin & Bas",
    id: "Yasmin & Bas",
  };

  const buttonDatas: textDatas = {
    en: "Open Invitation",
    id: "Buka Undangan",
  };

  const [state, setState] = useState({
    lang: "ID",
    slideTop: false,
  });

  const nameText: string = state.lang.toLowerCase().includes("en")
    ? nameDatas.en
    : nameDatas.id;
  const buttonText: string = state.lang.toLowerCase().includes("en")
    ? buttonDatas.en
    : buttonDatas.id;

  const background: string =
    "/desktop/countingdown/countingdown_background.svg";
  const handleSwitchLanguage = (lang: string) => {
    setState({ ...state, lang: lang });
    switchLanguageTo(lang);
  };

  useEffect(() => {
    setState({ ...state, lang: language });
  }, [state.lang, language]);

  const handleOpenInvitation = () => {
    // setState({ ...state, slideTop: true });
    openInvitation();
  };
  return (
    <Banner
      slideTop={state.slideTop}
      height={"open-invitation"}
      background={background}
      justify={"flex-start"}
      align={"flex-start"}
    >
      <SwitchLanguageButton switchLanguageTo={handleSwitchLanguage} />

      {/* counting down */}
      <div className={style["container-counting-down"]}>
        <Section gap={24} align={"flex-start"} justify={"center"}>
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

          <div className={style["container-time-date"]}>
            <div className={style["box-list"]}>
              <img src={"/open_invitation/calendar.svg"} />
              <Typography
                family={"montserrat"}
                variant={"body-1-medium"}
                color={"onyx"}
              >
                {"01 Februari 2022 "}
              </Typography>
            </div>
          </div>
          <Button text={buttonText} onClick={handleOpenInvitation} />
        </Section>
      </div>

      {/* end counting-down */}
    </Banner>
  );
}
