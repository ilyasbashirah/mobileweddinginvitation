import { useState } from "react";
import Typography from "@/src/components/Typography";
import style from "./style.module.scss";

export interface SwitchLanguageButtonProps {}

export default function SwitchLanguageButton({
  switchLanguageTo,
}: {
  switchLanguageTo: (lang: string) => void;
}) {
  const [state, setState] = useState({
    active: "",
    language: "EN",
    layout: "text-logo",
  });
  const handleSwitchLanguage = (lang: string) => {
    let language = "EN";
    let layout = "text-logo";
    if (lang === "EN") {
      language = "ID";
      layout = "logo-text";
    }
    if (lang === "ID") {
      language = "EN";
      layout = "text-logo";
    }
    setState({ ...state, language: language, layout: layout });
    switchLanguageTo(language);
  };
  const flagIcon: string = `/counting_down/translate/${state.language.toLowerCase()}_logo.svg`;
  return (
    <div>
      <div
        className={style["button-translate"]}
        onClick={() => handleSwitchLanguage(state.language)}
      >
        {state.layout === "logo-text" && <img src={flagIcon} />}
        <Typography
          variant={"body-2-bold"}
          color={"cooper"}
          family={"montserrat"}
          align={"center"}
        >
          {state.language}
        </Typography>
        {state.layout === "text-logo" && <img src={flagIcon} />}
      </div>
    </div>
  );
}
