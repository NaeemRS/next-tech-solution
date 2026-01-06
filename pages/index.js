import AboutUs from "@/components/home/AboutUs";
import ContactForm from "@/components/home/ContactForm ";
import CTASection from "@/components/home/CTASection";
import Hero from "@/components/home/Hero";
import PortfolioSection from "@/components/home/PortfolioSection";
import ServiceCard from "@/components/home/ServiceCard";
import TestimonialSection from "@/components/home/TestimonialSection";
import TestimonialSectionM from "@/components/home/TestimonialSectionM";
import Link from "next/link";


export default function Home() {
  return (
    <>
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