import React from 'react';

export default function ServiceCard() {
  const services = [
    {
      icon: "/images/service-icon1.svg", // Replace with your actual image path
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices for optimal performance.",
      linkText: "Learn More"
    },
    {
      icon: "/images/service-icon2.svg", // Replace with your actual image path
      title: "Mobile App Development",
      description: "Custom web applications built with modern frameworks and best practices for optimal performance.",
      linkText: "Learn More"
    },
    {
      icon: "/images/service-icon3.svg", // Replace with your actual image path
      title: "Cloud Solutions",
      description: "Custom web applications built with modern frameworks and best practices for optimal performance.",
      linkText: "Learn More"
    },
    {
      icon: "/images/service-icon4.svg", // Replace with your actual image path
      title: "UI/UX Design",
      description: "Custom web applications built with modern frameworks and best practices for optimal performance.",
      linkText: "Learn More"
    },
    {
      icon: "/images/service-icon5.svg", // Replace with your actual image path
      title: "Database Design",
      description: "Custom web applications built with modern frameworks and best practices for optimal performance.",
      linkText: "Learn More"
    },
    {
      icon: "/images/service-icon6.svg", // Replace with your actual image path
      title: "Security & Testing",
      description: "Custom web applications built with modern frameworks and best practices for optimal performance.",
      linkText: "Learn More"
    }
  ];

  return (
    <>
      <div className="py-20 px-6">
        <div className=" container mx-auto px-4 2xl:px-10 xl:px-6 relative">
          <div className="mb-16">
            <h1 className="font-semibold text-3xl md:text-4xl xl:text-[58px] lg:text-5xl mb-4 lg:mb-8">
              <span
                className="outfit text-[#11AAB5]"
              >
                Our Services                                </span>
            </h1>
            <h4 className='text-[#303030] text-2xl lg:text-[35px] font-semibold mb-4 inter'>
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
                <button className="text-[#11AAB5] text-[13px] font-medium flex items-center gap-2 group">
                  {service.linkText}
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}