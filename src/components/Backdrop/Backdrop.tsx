import { useState, useEffect } from "react";
import style from "./style.module.scss";

export default function Backdrop({
  open = false,
  handleCloseContent,
  children,
}: {
  open?: boolean;
  handleCloseContent?: () => void;
  children?: React.ReactNode;
}) {
  const [state, setState] = useState({
    content: false,
  });
  useEffect(() => {
    setState({ ...state, content: open });
  }, [state.content, open]);
  const handleClose = () => {
    setState({ ...state, content: false });
    handleCloseContent();
  };
  return (
    <>
      {open && (
        <>
          <div className={style.backdrop} onClick={handleClose} />
          <div className={style["backdrop-content"]}>{children}</div>
        </>
      )}
    </>
  );
}
