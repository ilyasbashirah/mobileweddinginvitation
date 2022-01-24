import type { NextPage } from "next";
import Head from "next/head";
import LandingPage from "../products/landing/containers/LandingPage";

import { useDevice } from "@/hooks";

const Home: NextPage = () => {
  const title: string = "Wedding Invitation Bas & Yasmin";
  const device: "mobile" | "desktop" | undefined = useDevice();
  const mobile = device === "mobile";
  const desktop = device === "desktop";
  const handleLinkDesktop = () => {
    window.location.replace("https://wedding-yasmin-bas.herokuapp.com/");
  };
  if (desktop) {
    handleLinkDesktop();
  }
  if (mobile) {
    return (
      <>
        <Head>
          <title>{title}</title>
          
        </Head>
        <LandingPage />
      </>
    );
  }
  return <div />;
};

export default Home;
