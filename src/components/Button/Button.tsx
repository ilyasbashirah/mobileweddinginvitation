import style from "./style.module.scss";
import Typography from "@/src/components/Typography";

export type ButtonBaseProps = {
  text: string;
};

export default function ButtonBase({
  children,
  text = "",
  variant = "primary",
  onClick,
}: {
  children?: JSX.Element;
  text?: string;
  variant?: "primary" | "secondary";
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
      className={`${style.button} ${
        variant === "primary"
          ? style["button--primary"]
          : style["button--secondary"]
      }`}
    >
      {children}
      <Typography
        family={"montserrat"}
        variant={"body-1-bold"}
        align={"center"}
        color={variant === "primary" ? "white" : "cooper"}
      >
        {text}
      </Typography>
    </button>
  );
}
