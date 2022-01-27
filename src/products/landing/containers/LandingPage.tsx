import { useEffect, useState } from "react";
import Counting from "@/src/products/landing/containers/counting_down";
import BrideGroom from "@/src/products/landing/features/success/brideandgroom";
import MapsLocation from "@/src/products/landing/features/success/mapslocation";
import HealthProtocol from "@/src/products/landing/features/success/healthprotocol";
import OurGallery from "../features/success/ourgallery/OurGallery";
import WeddingGift from "../features/success/weddinggift/WeddingGift";
import Closing from "../features/success/closing/Closing";
import Banner from "@/src/components/Banner";
import Section from "@/src/components/Section";
import Footer from "@/src/products/landing/features/success/footer";
import MenuLanding from "@/src/products/landing/containers/menu_landing/MenuLanding";
import PaymentAccountModal from "@/src/products/landing/features/wedding_gift/payment_account_modal/PaymentAccountModal";
import OpenInvitation from "@/src/products/landing/containers/open_invitation";
import CarouselModal from "../features/our_gallery/carousel_modal/CarouselModal";
import style from "./style.module.scss";
import { useScrollSpy } from "@/hooks";
export interface ILandingPage {}

export default function LandingPage(props: ILandingPage) {
  const sound = "https://images.bribrain.com/bas/wedding-audio.mp3";
  const [state, setState] = useState({
    language: "ID",
    modalKirimHadiah: false,
    openInvitation: false,
    modalGallery: false,
  });

  const handleSwitchLanguage = (lang: string) => {
    setState({ ...state, language: lang });
  };

  const handleKirimHadiah = () => {
    setState({ ...state, modalKirimHadiah: true });
  };
  const handleCloseKirimHadiah = (condition: boolean) => {
    setState({ ...state, modalKirimHadiah: condition });
  };

  const handleOpenInvitation = () => {
    new Audio(sound).play();

    setState({ ...state, openInvitation: true });
  };

  const handleSeeMore = () => {
    setState({ ...state, modalGallery: true });
  };
  const handleCloseModalAction = () => {
    setState({ ...state, modalGallery: false });
  };

  const ids = [
    "counting-down",
    "bride-and-groom",
    "venue-maps-location",
    "health-protocol",
    "our-gallery",
    "wedding-gift",
  ];
  const activeId = useScrollSpy(ids, 54);
  return (
    <>
      <OpenInvitation
        language={state.language}
        switchLanguageTo={handleSwitchLanguage}
        openInvitation={handleOpenInvitation}
      />
      <div
        className={`${
          state.openInvitation
            ? style["wrapper--active"]
            : style["wrapper--inactive"]
        }`}
      >
        <Counting
          animation={state.openInvitation}
          language={state.language}
          switchLanguageTo={handleSwitchLanguage}
        />
        <BrideGroom
          activeId={activeId}
          animation={state.openInvitation}
          language={state.language}
        />
        <Banner
          height={"venue-and-protocol"}
          align={"flex-start"}
          background={
            "https://images.bribrain.com/bas/mobile/background/venueandprotocol_background.svg"
          }
        >
          <Section gap={44} align={"flex-start"} justify={"center"}>
            <MapsLocation activeId={activeId} language={state.language} />
            <HealthProtocol activeId={activeId} language={state.language} />
          </Section>
        </Banner>
        <OurGallery
          activeId={activeId}
          language={state.language}
          seeMore={state.modalGallery}
          seeMoreDispatch={handleSeeMore}
        />
        <WeddingGift
          activeId={activeId}
          language={state.language}
          handleSendGiftToParent={handleKirimHadiah}
        />
        <Closing activeId={activeId} language={state.language} />
        <Footer />

        {/* menu landing */}
        <MenuLanding activeId={activeId} language={state.language} />

        <PaymentAccountModal
          open={state.modalKirimHadiah}
          language={state.language}
          handleBatalKirimHadiah={handleCloseKirimHadiah}
        />
        {state.modalGallery && (
          <CarouselModal
            closeModalAction={handleCloseModalAction}
            openModalGallery={state.modalGallery}
          />
        )}
      </div>
    </>
  );
}
