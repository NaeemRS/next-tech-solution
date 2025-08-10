import AboutUs from "@/components/home/AboutUs";
import CTASection from "@/components/home/CTASection";
import Hero from "@/components/home/Hero";
import PortfolioSection from "@/components/home/PortfolioSection";
import ServiceCard from "@/components/home/ServiceCard";
import TestimonialSection from "@/components/home/TestimonialSection";

  
export default function Home() {
  return (
    <>
       <Hero />
       <PortfolioSection />
       <AboutUs />
       <ServiceCard />
       <CTASection />
       {/* <TestimonialSection /> */}
    </>
  );
}