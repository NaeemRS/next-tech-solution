/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
 import Footer from "@/components/layout/Footer";
import Header2 from "@/components/layout/Header2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "@/styles/globals.css";
// import "@/styles/carousal.css";
import Head from "next/head";

// import "react-whatsapp-widget/dist/index.css";
// import { WhatsAppWidget } from "react-whatsapp-widget";

export default function App({ Component, pageProps }) {


  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900" rel="stylesheet"></link>
      </Head>
       <Header2 />
      <div className="lg:pt-20 md:pt-[4.2rem] pt-[4rem]">
        <Component {...pageProps} />
      </div>
       <Footer />
       
    </>
  );
}