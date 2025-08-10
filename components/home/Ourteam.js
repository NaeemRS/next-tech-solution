import React from 'react';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sahil Das Gupta",
      role: "PRODUCT DESIGNER",
      description: "Product design as a verb is to create a new product to be sold by a business to its customers.",
      image: "/images/sahil-das-gupta.png",
      socials: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "M Haris",
      role: "PROJECT MANAGER",
      description: "Guides projects from start to finish, ensuring smooth teamwork, timely delivery, and outstanding results",
      image: "/images/m-haris.png",
      socials: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "PRODUCT DESIGNER",
      description: "Product design as a verb is to create a new product to be sold by a business to its customers.",
      image: "/images/sarah-johnson.png",
      socials: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const socialIcons = [
    {
      key: "facebook",
      image: "/images/facebook.svg",
      url: "#"
    },
    {
      key: "instagram",
      image: "/images/instagram.svg",
      url: "#"
    },
    {
      key: "linkedin",
      image: "/images/linkedin.svg",
      url: "#"
    },
    {
      key: "twitter",
      image: "/images/twitter.svg",
      url: "#"
    }
  ];

  return (
        <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-semibold text-3xl md:text-4xl xl:text-[58px] lg:text-5xl mb-4 lg:mb-8">
              <span className="outfit text-[#11AAB5]" >
                Meet Our Team
              </span>
            </h2>
            <h4 className='text-[#797979] text-[25px] font-medium mb-4 inter'>
              Meet our team of professionals to serve you
            </h4>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="group bg-white rounded-[10px] p-8 shadow-[8px_0px_40px_0px_rgba(0,0,0,0.25)] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#CDCDCD]" style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-[108px] h-[108px] mx-auto rounded-full overflow-hidden ring-4 ring-cyan-100 group-hover:ring-cyan-200 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-[#000] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-normal text-black mb-4">
                    {member.role}
                  </p>
                  <p className="ext-[15px] font-light text-black">
                    {member.description}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  {socialIcons.map((icon) => (
                    <a
                      key={icon.key}
                      href={icon.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10"
                    >
                      <img
                        src={icon.image}
                        alt={icon.key}
                        className=""
                      />
                    </a>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section >
   );
};

export default OurTeam;