import { useState } from "react";
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
export interface ILandingPage {}

export default function LandingPage(props: ILandingPage) {
  const [state, setState] = useState({
    language: "EN",
  });
  const handleSwitchLanguage = (lang: string) => {
    setState({ ...state, language: lang });
  };
  return (
    <div>
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
      <WeddingGift language={state.language} />
      <Closing language={state.language} />
      <Footer />

      {/* menu landing */}
      <MenuLanding language={state.language} />
    </div>
  );
}
