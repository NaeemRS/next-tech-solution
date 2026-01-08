import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
       <Head>
        {/* Charset */}
        <meta charSet="UTF-8" />
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2563eb" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://www.nextechservicessolutions.com"></link>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nextechservices Solutions" />
        <meta property="og:locale" content="en_US" />
        {/* Fonts Example */}
       
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
