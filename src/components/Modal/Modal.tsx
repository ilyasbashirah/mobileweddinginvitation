import React, { useEffect, useState, useRef } from 'react';
// import { useOnClickOutside } from '@/src/';
import style from './style.module.scss';
import Backdrop from '../Backdrop';

export default function Modal({
  open = false,
  children,
  handleOutside,
}: {
  open?: boolean;
  children?: React.ReactNode;
  handleOutside?: any;
}) {
  const ref = useRef(document.createElement('div'));
  const [isModalOpen, setModalOpen] = useState(false);
  // useOnClickOutside(ref, () => {
  //   setModalOpen(false);
  //   if (handleOutside) {
  //     handleOutside(false);
  //   }
  // });

  useEffect(() => {
    setModalOpen(open);
  }, [open]);

  return (
    <>
      <Backdrop open={isModalOpen}>
        {isModalOpen && (
          <div ref={ref} className={style.modal}>
            {children}
          </div>
        )}
      </Backdrop>
    </>
  );
}
