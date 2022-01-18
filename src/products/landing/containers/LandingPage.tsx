import * as React from "react";
import Counting from "@/src/products/landing/features/success/countingdown";
import BrideGroom from "@/src/products/landing/features/success/brideandgroom";
import MapsLocation from "@/src/products/landing/features/success/mapslocation";
import HealthProtocol from "@/src/products/landing/features/success/healthprotocol";
import OurGallery from "../features/success/ourgallery/OurGallery";
import WeddingGift from "../features/success/weddinggift/WeddingGift";
import Closing from "../features/success/closing/Closing";
import Banner from "@/src/components/Banner";
import Section from "@/src/components/Section";

export interface ILandingPage {}

export default function LandingPage(props: ILandingPage) {
  return (
    <div>
      <Counting />
      <BrideGroom />
      <Banner
        height={"venue-and-protocol"}
        align={"flex-start"}
        background={"/desktop/venueandprotocol/venueandprotocol_background.svg"}
      >
        <Section gap={44} align={"flex-start"} justify={"center"}>
          <MapsLocation />
          <HealthProtocol />
        </Section>
      </Banner>
      <OurGallery />
      <WeddingGift />
      <Closing />
    </div>
  );
}
