import style from "./style.module.scss";
import Typography from "@/src/components/Typography";

export type ButtonBaseProps = {
  text: string;
};

export default function ButtonBase({
  children,
  text = "",
  onClick,
}: {
  children?: JSX.Element;
  text?: string;
  onClick?: () => void;
}): JSX.Element {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <button
      id="button"
      data-testid="button"
      type={"button"}
      onClick={() => handleClick()}
      className={`${style.button} `}
    >
      {children}
      <Typography family={'montserrat'} variant={"body-3-bold"} align={"center"} color={"white"}>
        {text}
      </Typography>
    </button>
  );
}
