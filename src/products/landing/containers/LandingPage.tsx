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
  return (
    <div>
      {state.openInvitation ? (
        <>
          <Counting
            language={state.language}
            switchLanguageTo={handleSwitchLanguage}
          />
          <BrideGroom language={state.language} />
          <Banner
            id={"venue-maps-location"}
            height={"venue-and-protocol"}
            align={"flex-start"}
            background={
              "/desktop/venueandprotocol/venueandprotocol_background.svg"
            }
          >
            <Section gap={44} align={"flex-start"} justify={"center"}>
              <MapsLocation language={state.language} />
              <HealthProtocol language={state.language} />
            </Section>
          </Banner>
          <OurGallery
            language={state.language}
            seeMore={state.modalGallery}
            seeMoreDispatch={handleSeeMore}
          />
          <WeddingGift
            language={state.language}
            handleSendGiftToParent={handleKirimHadiah}
          />
          <Closing language={state.language} />
          <Footer />

          {/* menu landing */}
          <MenuLanding language={state.language} />

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
        </>
      ) : (
        <>
          <OpenInvitation
            language={state.language}
            switchLanguageTo={handleSwitchLanguage}
            openInvitation={handleOpenInvitation}
          />
        </>
      )}
    </div>
  );
}
