import style from "./style.module.scss";

export default function Backdrop({
  open = false,
  children,
}: {
  open?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <>
      {open && (
        <>
          <div className={style.backdrop}></div>
          <div className={style["backdrop-content"]}>{children}</div>
        </>
      )}
    </>
  );
}
