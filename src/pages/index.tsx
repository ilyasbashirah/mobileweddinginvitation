import type { NextPage } from "next";
import Head from "next/head";
import LandingPage from "../products/landing/containers/LandingPage";

const Home: NextPage = () => {
  const title: string = "Wedding Invitation Bas & Yasmin";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LandingPage />
    </>
  );
};

export default Home;
