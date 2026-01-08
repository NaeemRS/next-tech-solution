import AboutUs from '@/components/home/AboutUs'
import Hero from '@/components/home/Hero'
import OurTeam from '@/components/OurTeam'
import Head from 'next/head'
import React from 'react'
export default function Index() {
    return (
        <>
          <Head>
        <title>About Us | Nextech Service Solutions</title>
        <meta
          name="description"
          content="Learn about Nextech Service Solutions — our mission, vision, values, and the expertise behind our digital and software services."
        />
        <link
          rel="canonical"
          href="https://www.nextechservicessolutions.com/about"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About Nextech Service Solutions"
        />
        <meta
          property="og:description"
          content="Discover how Nextech Service Solutions delivers innovative digital solutions to help businesses grow and thrive."
        />
        <meta
          property="og:url"
          content="https://www.nextechservicessolutions.com/about"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="	https://www.nextechservicessolutions.com/images/aboutBanner.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Nextech Service Solutions"
        />
        <meta
          name="twitter:description"
          content="Meet the team and mission behind Nextech Service Solutions — your trusted partner for modern digital transformation."
        />
        <meta
          name="twitter:image"
          content="https://www.nextechservicessolutions.com/about-banner.png"
        />
      </Head>
            <Hero />
            <section id="about">
                <AboutUs />
            </section>
            <section id="our-team">
            <OurTeam />
            </section>
        </>
    )
}
