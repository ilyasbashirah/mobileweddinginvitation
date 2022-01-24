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
export interface ILandingPage {}

export default function LandingPage(props: ILandingPage) {
  const sound = "https://images.bribrain.com/bas/wedding-audio.mp3";
  const [state, setState] = useState({
    language: "EN",
    modalKirimHadiah: false,
    audio: false,
    // wedding_audio: new Audio(
    //   "https://images.bribrain.com/bas/wedding-audio.mp3"
    // ),
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
  // const Playit = () => {
  //   state.wedding_audio.play();
  // };
  const handleOnClick = () => {
    console.log("ini kepanggil ga");
    setState({ ...state, audio: true });

    // new Audio(sound).play();
  };
  useEffect(() => {
    if ("Audio" in window) {
      const apa = window.document.getElementById("test");
      console.log(apa);
      apa.addEventListener("click", () => {
        console.log("test");
      });
    }
  }, [window]);
  useEffect(() => {
    if (state.audio === true) {
      new Audio(sound).play();
    }
  }, [state.audio]);

  return (
    <div id={"test"} onClick={handleOnClick}>
      {/* <button id={"audio"} onClick={handleOnClick} /> */}
      <audio className="audio-element">
        <source src={sound} />
      </audio>
      <Counting
        language={state.language}
        switchLanguageTo={handleSwitchLanguage}
      />
      <BrideGroom language={state.language} />
      <Banner
        id={"venue-maps-location"}
        height={"venue-and-protocol"}
        align={"flex-start"}
        background={"/desktop/venueandprotocol/venueandprotocol_background.svg"}
      >
        <Section gap={44} align={"flex-start"} justify={"center"}>
          <MapsLocation language={state.language} />
          <HealthProtocol language={state.language} />
        </Section>
      </Banner>
      <OurGallery language={state.language} />
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
        handleBatalKirimHadiah={handleCloseKirimHadiah}
      />
    </div>
  );
}
