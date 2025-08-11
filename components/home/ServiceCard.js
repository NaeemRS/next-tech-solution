import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function ServiceCard() {
   const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes("#services")) {
      const element = document.getElementById("services");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.asPath]);
// servicesData.js
const services = [
  {
    icon: "/images/service-icon1.svg",
    title: "Web Development",
    slug: "web-development",
    description: "We build fast, secure, and scalable websites tailored to your business needs.",
    details: "Our Web Development service includes creating responsive websites, e-commerce platforms, and custom applications using the latest technologies."
  },
  {
    icon: "/images/service-icon2.svg",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "We create mobile applications that are user-friendly and performance-driven.",
    details: "We develop mobile apps for iOS and Android platforms, optimized for performance, usability, and scalability."
  },
  {
    icon: "/images/service-icon3.svg",
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "We offer secure and reliable cloud-based services.",
    details: "Our Cloud Solutions include cloud migration, infrastructure setup, and optimization for cost and performance."
  },
  {
    icon: "/images/service-icon4.svg",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Our designs combine beauty with functionality.",
    details: "We create user-friendly interfaces and experiences, ensuring accessibility and modern aesthetics."
  },
  {
    icon: "/images/service-icon5.svg",
    title: "Database Design",
    slug: "database-design",
    description: "We design efficient and secure databases.",
    details: "Our Database Design services include schema creation, optimization, and secure data storage solutions."
  },
  {
    icon: "/images/service-icon6.svg",
    title: "Security & Testing",
    slug: "security-and-testing",
    description: "We provide thorough testing to ensure security.",
    details: "We offer penetration testing, security audits, and QA testing for software reliability."
  }
];

 

  return (
    <>
      <div className="lg:py-20 md:py-12 py-8">
        <div className=" container mx-auto px-4 2xl:px-10 xl:px-6 relative">
          <div className="md:mb-16 mb-3">
            <h1 className="!font-semibold text-3xl md:text-4xl xl:text-[58px] lg:text-5xl mb-4 lg:mb-8">
              <span
                className="outfit text-[#11AAB5]"
              >
                Our Services                                </span>
            </h1>
            <h4 className='text-[#000] md:text-2xl text-xl lg:text-[35px] !font-semibold mb-4 inter'>
              See What We Can Do For You                            </h4>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
            {services.map((service, index) => (
              <div key={index} className="rounded-2xl p-8 cardShadow serviceCard">
                <div className=" mb-6">
                  <img
                    src={service.icon}
                    alt={`${service.title}`}
                    className="w-18 h-18"
                  />
                </div>
                <h3 className="text-xl outfit font-semibold text-[#242424] mb-4">{service.title}</h3>
                <p className="text-[#707070] font-medium text-[13px] mb-6 lg:max-w-[249px]">
                  {service.description}
                </p>
               <Link href={`/services/${service.slug}`}  className="text-[#11AAB5] text-[13px] font-medium flex items-center gap-2 group">
                 Learn More
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}