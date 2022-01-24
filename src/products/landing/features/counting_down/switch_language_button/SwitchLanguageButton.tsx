import { useState, useEffect } from "react";
import Typography from "@/src/components/Typography";
import style from "./style.module.scss";

export interface SwitchLanguageButtonProps {}

export default function SwitchLanguageButton({
  language = "ID",
  switchLanguageTo,
}: {
  language?: string;
  switchLanguageTo: (lang: string) => void;
}) {
  const [state, setState] = useState({
    active: "",
    lang: "ID",
    layout: "text-logo",
  });
  useEffect(() => {
    setState({ ...state, lang: language });
  }, [state.lang, language]);
  const handleSwitchLanguage = (lang: string) => {
    let language = "ID";
    let layout = "text-logo";
    if (lang === "EN") {
      language = "ID";
      layout = "logo-text";
    }
    if (lang === "ID") {
      language = "EN";
      layout = "text-logo";
    }
    setState({ ...state, lang: language, layout: layout });
    switchLanguageTo(language);
  };
  const flagIcon: string = `/counting_down/translate/${state.lang.toLowerCase()}_logo.svg`;
  return (
    <div>
      <div
        className={style["button-translate"]}
        onClick={() => handleSwitchLanguage(state.lang)}
      >
        {state.layout === "logo-text" && <img src={flagIcon} />}
        <Typography
          variant={"body-2-bold"}
          color={"cooper"}
          family={"montserrat"}
          align={"center"}
        >
          {state.lang}
        </Typography>
        {state.layout === "text-logo" && <img src={flagIcon} />}
      </div>
    </div>
  );
}
