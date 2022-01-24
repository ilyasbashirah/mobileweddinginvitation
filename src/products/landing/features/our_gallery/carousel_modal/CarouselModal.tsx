import { useState, useEffect } from "react";
import Modal from "@/src/components/Modal";
import style from "./style.module.scss";
import Typography from "@/src/components/Typography";

export interface ICarouselModalProps {}

export default function CarouselModal({
  openModalGallery = false,
  closeModalAction,
}: {
  openModalGallery?: boolean;
  closeModalAction?: () => void;
}) {
  const [state, setState] = useState({
    active: 1,
    openModal: false,
  });
  const maxState = 2;
  const minState = 0;
  const handleClickPrevious = (active: number) => {
    let final: number;
    if (active > minState + 1) {
      final = active - 1;
    }
    if (active <= 1) {
      final = 2;
    }
    setState({ ...state, active: final });
  };
  const handleClickNext = (active: number) => {
    let final: number;
    if (active >= maxState) {
      final = 1;
    }
    if (active < maxState) {
      final = active + 1;
    }
    setState({ ...state, active: final });
  };

  useEffect(() => {
    setState({ ...state, openModal: openModalGallery });
  }, [state.openModal, openModalGallery]);

  const handleCloseModal = () => {
    setState({ ...state, openModal: false });
    closeModalAction();
  };
  return (
    <div>
      <Modal
        open={state.openModal}
        fullWidth={true}
        handleOutside={handleCloseModal}
      >
        <div className={style["header-carousel-modal"]}>
          <Typography
            family={"montserrat"}
            variant={"subtitle-2-bold"}
            color={"white"}
          >
            {`${state.active} / ${maxState}`}
          </Typography>
          <div onClick={handleCloseModal}>
            <img
              src={"/desktop/gallery/carousel/close.svg"}
              width={24}
              height={24}
            />
          </div>
        </div>
        <div
          className={style["container-gallery-photos"]}
          onClick={handleCloseModal}
        >
          <div
            className={style["icon-arrow-right"]}
            onClick={() => handleClickPrevious(state.active)}
          >
            <img
              className={style["icon-arrow-left"]}
              src={`/desktop/gallery/carousel/arrow_left.svg`}
            />
          </div>

          <img
            src={`/desktop/gallery/carousel/collection/photo_${state.active}.png`}
            width={"100%"}
          />
          <div
            className={style["icon-arrow-right"]}
            onClick={() => handleClickNext(state.active)}
          >
            <img src={`/desktop/gallery/carousel/arrow_right.svg`} />
          </div>
        </div>
      </Modal>
    </div>
  );
}
