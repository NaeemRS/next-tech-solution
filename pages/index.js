import AboutUs from "@/components/home/AboutUs";
import ContactForm from "@/components/home/ContactForm ";
import CTASection from "@/components/home/CTASection";
import Hero from "@/components/home/Hero";
import PortfolioSection from "@/components/home/PortfolioSection";
import ServiceCard from "@/components/home/ServiceCard";
import TestimonialSection from "@/components/home/TestimonialSection";
import TestimonialSectionM from "@/components/home/TestimonialSectionM";
 
  
export default function Home() {
  return (
    <>
       <Hero />
       <PortfolioSection />
       <AboutUs />
       <ServiceCard />
       <CTASection />
       <TestimonialSection />
       <TestimonialSectionM />
       <ContactForm />
    </>
  );
}