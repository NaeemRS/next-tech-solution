import AboutUs from "@/components/home/AboutUs";
import ContactForm from "@/components/home/ContactForm ";
import CTASection from "@/components/home/CTASection";
import Hero from "@/components/home/Hero";
import PortfolioSection from "@/components/home/PortfolioSection";
import ServiceCard from "@/components/home/ServiceCard";
import TestimonialSection from "@/components/home/TestimonialSection";
import TestimonialSectionM from "@/components/home/TestimonialSectionM";
import Head from "next/head";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Head>
        <title>
          Nextech Service Solutions | Web, Mobile & Software Development
        </title>

        <meta
          name="description"
          content="Nextech Service Solutions delivers web development, mobile apps, UI/UX design, custom software, and cloud solutions for modern businesses."
        />

        <link
          rel="canonical"
          href="https://www.nextechservicessolutions.com"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Nextech Service Solutions | Smart Digital Solutions"
        />
        <meta
          property="og:description"
          content="We build scalable digital products that help businesses grow faster and smarter."
        />
        <meta
          property="og:url"
          content="https://www.nextechservicessolutions.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.nextechservicessolutions.com/images/heroImage.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nextech Service Solutions"
        />
        <meta
          name="twitter:description"
          content="Innovative digital solutions for businesses worldwide."
        />
        <meta
          name="twitter:image"
          content="https://www.nextechservicessolutions.com/images/heroImage.png"
        />
      </Head>
      <Hero />
      <section id="portfolio" className="mb-10">

        <PortfolioSection />
        <div className="text-center flex justify-center -mt-10">
          <Link className="view-all-projects text-white md:px-6 px-3 md:py-4 py-2 font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center mx-auto space-x-2" href="/all-projects">
            <span>View All Projects</span>
          </Link>
        </div>
      </section>
      <section id="about-us">
        <AboutUs />

      </section>
      <section id="services">
        <ServiceCard />
      </section>
      <CTASection />
      <TestimonialSection />
      <TestimonialSectionM />
      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
}