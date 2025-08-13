import AboutUs from '@/components/home/AboutUs'
import Hero from '@/components/home/Hero'
import OurTeam from '@/components/OurTeam'
import React from 'react'
export default function Index() {
    return (
        <>
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
