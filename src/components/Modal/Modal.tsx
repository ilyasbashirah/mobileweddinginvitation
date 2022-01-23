import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Backdrop from "../Backdrop";

export default function Modal({
  open = false,
  children,
  handleOutside,
}: {
  open?: boolean;
  children?: React.ReactNode;
  handleOutside?: any;
}) {
  const [state, setState] = useState({
    modal: false,
  });
  //   useOnClickOutside(ref, () => {
  //     setModalOpen(false);
  //     if (handleOutside) {
  //       handleOutside(false);
  //     }
  //   });
  useEffect(() => {
    setState({ ...state, modal: open });
  }, [open, state.modal]);
  const handleClose = () => {
    setState({ ...state, modal: false });
    handleOutside();
  };
  return (
    <>
      <Backdrop open={state.modal} handleCloseContent={handleClose}>
        {state.modal && <div className={style.modal}>{children}</div>}
      </Backdrop>
    </>
  );
}
