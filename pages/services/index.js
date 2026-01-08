import Hero from '@/components/home/Hero'
import ServiceCard from '@/components/home/ServiceCard'
import Head from 'next/head'
import React from 'react'

export default function Index() {


    return (
        <>
            <Head>
                <title>Nextech Service Solutions | Digital & Software Solutions</title>
                <meta
                    name="description"
                    content="Nextech Service Solutions provides web development, mobile apps, UI/UX design, custom software, and cloud solutions to help businesses grow."
                />
                <link
                    rel="canonical"
                    href="https://www.nextechservicessolutions.com/services"
                />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="Nextech Service Solutions | Smart Digital Solutions"
                />
                <meta
                    property="og:description"
                    content="We deliver scalable web, mobile, and software solutions that empower businesses to grow digitally."
                />
                <meta
                    property="og:url"
                    content="https://www.nextechservicessolutions.com"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="http://localhost:3000/images/heroImage.png"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Nextech Service Solutions"
                />
                <meta
                    name="twitter:description"
                    content="Innovative digital solutions for modern businesses."
                />
                <meta
                    name="twitter:image"
                    content="http://localhost:3000/images/heroImage.png"
                />
            </Head>
            <Hero />
            <setion id="services">
                <ServiceCard />
            </setion>
        </>
    )
}
