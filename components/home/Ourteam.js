import React from 'react';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sahil Das Gupta",
      role: "PRODUCT DESIGNER",
      description: "Product design as a verb is to create a new product to be sold by a business to its customers.",
      image: "/images/sahil-das-gupta.png",
      socials: [
        {
          key: "facebook",
          image: "/images/facebook.svg",
          url: "https://facebook.com/sahildasgupta"
        },
        {
          key: "instagram",
          image: "/images/instagram.svg",
          url: "https://instagram.com/sahildasgupta"
        },
        {
          key: "linkedin",
          image: "/images/linkedin.svg",
          url: "https://linkedin.com/in/sahildasgupta"
        },
        {
          key: "twitter",
          image: "/images/twitter.svg",
          url: "https://twitter.com/sahildasgupta"
        }
      ]
    },
    {
      id: 2,
      name: "M Haris",
      role: "PROJECT MANAGER",
      description: "Guides projects from start to finish, ensuring smooth teamwork, timely delivery, and outstanding results",
      image: "/images/m-haris.png",
      socials: [
        {
          key: "facebook",
          image: "/images/facebook.svg",
          url: "https://facebook.com/mharis"
        },
        {
          key: "instagram",
          image: "/images/instagram.svg",
          url: "https://instagram.com/mharis"
        },
        {
          key: "linkedin",
          image: "/images/linkedin.svg",
          url: "https://linkedin.com/in/mharis"
        },
        {
          key: "twitter",
          image: "/images/twitter.svg",
          url: "https://twitter.com/mharis"
        }
      ]
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "PRODUCT DESIGNER",
      description: "Product design as a verb is to create a new product to be sold by a business to its customers.",
      image: "/images/sarah-johnson.png",
      socials: [
        {
          key: "facebook",
          image: "/images/facebook.svg",
          url: "https://facebook.com/sarahjohnson"
        },
        {
          key: "instagram",
          image: "/images/instagram.svg",
          url: "https://instagram.com/sarahjohnson"
        },
        {
          key: "linkedin",
          image: "/images/linkedin.svg",
          url: "https://linkedin.com/in/sarahjohnson"
        },
        {
          key: "twitter",
          image: "/images/twitter.svg",
          url: "https://twitter.com/sarahjohnson"
        }
      ]
    }
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-semibold text-3xl md:text-4xl xl:text-[58px] lg:text-5xl mb-4 lg:mb-8">
            <span className="outfit text-[#11AAB5]">
              Meet Our Team
            </span>
          </h2>
          <h4 className="text-[#797979] text-[25px] font-medium mb-4 inter">
            Meet our team of professionals to serve you
          </h4>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white rounded-[10px] p-8 shadow-[8px_0px_40px_0px_rgba(0,0,0,0.25)] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#CDCDCD]"
              style={{
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
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&auto=format&q=80";
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-[#000] mb-1">
                  {member.name}
                </h3>
                <p className="text-[10px] font-normal text-black mb-4">
                  {member.role}
                </p>
                <p className="text-[15px] font-light text-black leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                {member.socials.map((social) => (
                  <a
                    key={social.key}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 transition-transform duration-200 hover:scale-110"
                  >
                    <img
                      src={social.image}
                      alt={`${social.key} icon`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback to inline SVG icons if image fails to load
                        const fallbackIcons = {
                          facebook: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiMxODc3RjIiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTI0IDEyLjA3M2MwLTYuNjI3LTUuMzczLTEyLTEyLTEyczEyIDUuMzczIDEyIDEyYzAgNS45OS00LjM4OCAxMC45NTQtMTAuMTI1IDExLjg1NFY5LjY4OEg3LjA3OFY2LjIxOGgzLjA0N1Y5LjQzYzAtMy4wMDcgMS43OTItNC42NjkgNC41MzMtNC42NjkgMS4zMTIgMCAyLjY4Ni4yMzUgMi42ODYuMjM1djIuOTUzSDE1LjgzYy0xLjQ5MSAwLTEuOTU2LjkyNS0xLjk1NiAxLjg3NHYyLjI1aDMuMzI4bC0uNTMyIDMuNDdoLTIuNzk2djguMzg1QzE5LjYxMiAyMy4wMjcgMjQgMTguMDYyIDI0IDEyLjA3M3oiLz48L3N2Zz4=',
                          instagram: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiNFNDQwNUYiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDIuMTYzYzMuMjA0IDAgMy41ODQuMDEyIDQuODUuMDcgMy4yNTIuMTQ4IDQuNzcxIDEuNjkxIDQuOTE5IDQuOTE5LjA1OCAxLjI2NS4wNjkgMS42NDUuMDY5IDQuODQ4cy0uMDEyIDMuNTg0LS4wNjkgNC44NDljLS4xNDkgMy4yMjUtMS42NjQgNC43NzEtNC45MTkgNC45MTktMS4yNjYuMDU4LTEuNjQ0LjA3LTQuODUuMDdzLTMuNTg0LS4wMTItNC44NDktLjA3Yy0zLjI2LS4xNDktNC43NzEtMS42OTktNC45MTktNC45Mi0uMDU4LTEuMjY1LS4wNy0xLjY0NC0uMDctNC44NDlzLjAxMi0zLjU4NC4wNy00Ljg0OEMxLjU0IDQuNDE0IDMuMDU2IDIuODcyIDYuMzEzIDIuNzIzYzEuMjY1LS4wNTcgMS42NDUtLjA2OSA0Ljg0OS0uMDY5TDEyIDIuMTYzem0wLTIuMTYzQzguNzQxIDAgOC4zMzMuMDE0IDcuMDUzLjA3MiAyLjY5NS4yNzIuMjczIDIuNjkuMDczIDcuMDUyLjAxNCA4LjMzMyAwIDguNzQxIDAgMTJzLjAxNCAzLjY2Ny4wNzIgNC45NDhjLjIgNC4zNTggMi42MTggNi43OCA2Ljk4IDYuOThDOC4zMzMgMjMuOTg2IDguNzQxIDI0IDEyIDI0czMuNjY3LS4wMTQgNC45NDgtLjA3MmM0LjM1NC0uMiA2Ljc4Mi0yLjYxOCA2Ljk3OS02Ljk4LjA1OS0xLjI4MS4wNzMtMS42ODkuMDczLTQuOTQ4cy0uMDE0LTMuNjY3LS4wNzItNC45NDhDMjMuNzI4IDIuNjkyIDIxLjMwNi4yNzIgMTYuOTQ4LjA3MiAxNS42NjcuMDE0IDE1LjI1OSAwIDEyIDB6bTAgNS44MzhjLTMuNDAzIDAtNi4xNjIgMi43NTktNi4xNjIgNi4xNjJTOC41OTcgMTguMTYyIDEyIDE4LjE2MnM2LjE2Mi0yLjc1OSA2LjE2Mi02LjE2MlMxNS40MDMgNS44MzggMTIgNS44Mzh6bTAgMTAuMTYyYy0yLjIwOSAwLTQtMS43OTEtNC00czEuNzkxLTQgNC00IDQgMS43OTEgNCA0LTEuNzkxIDQtNCA0em02LjQwNi0xMS44NDVjLS43OTYgMC0xLjQ0MS42NDUtMS40NDEgMS40NHMuNjQ1IDEuNDQgMS40NDEgMS40NCAxLjQ0LS42NDUgMS40NC0xLjQ0LS42NDQtMS40NC0xLjQ0LTEuNDR6Ii8+PC9zdmc+',
                          linkedin: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiMwMDc3QjUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIwLjQ0NyAyMC40NTJoLTMuNTU0di01LjU2OWMwLTEuMzI4LS4wMjctMy4wMzctMS44NTItMy4wMzctMS44NTMgMC0yLjEzNiAxLjQ0NS0yLjEzNiAyLjkzOXY1LjY2N0g5LjM1MVY5aDMuNDE0djEuNTYxaC4wNDZjLjQ3Ny0uOSAxLjYzNy0xLjg1IDMuMzctMS44NSAzLjYwMSAwIDQuMjY3IDIuMzcgNC4yNjcgNS40NTV2Ni4yODZ6TTUuMzM3IDcuNDMzYy0xLjE0NCAwLT2uMDYzLS45MjYtMi4wNjMtMi4wNjUgMC0xLjEzOC45Mi0yLjA2MyAyLjA2My0yLjA2MyAxLjE0IDAgMi4wNjQuOTI1IDIuMDY0IDIuMDYzIDAgMS4xMzktLjkyNSAyLjA2NS0yLjA2NCAyLjA2NXptMS43ODIgMTMuMDE5SDMuNTU1VjloMy41NjR2MTEuNDUyek0yMi4yMjUgMEgxLjc3MUMuNzkyIDAgMCAuNzc0IDAgMS43Mjl2MjAuNTQyQzAgMjMuMjI3Ljc5MiAyNCAxLjc3MSAyNGgyMC40NTFDMjMuMiAyNCAyNCAyMy4yMjcgMjQgMjIuMjcxVjEuNzI5QzI0IC43NzQgMjMuMiAwIDIyLjIyMiAwaDIuMDAzeiIvPjwvc3ZnPg==',
                          twitter: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiMxREEyRjIiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIzLjk1MyA0LjU3YTEwIDEwIDAgMDEtMi44MjUuNzc1IDQuOTU4IDQuOTU4IDAgMDAyLjE2My0yLjcyM2MtLjk1MS41NTUtMi4wMDUuOTU5LTMuMTI3IDEuMTg0YTQuOTIgNC45MiAwIDAwLTguMzg0IDQuNDgyQzcuNjkgOC4wOTUgNC4wNjcgNi4xMyAxLjY0IDMuMTYyYTQuODIyIDQuODIyIDAgMDAtLjY2NiAyLjQ3NWMwIDEuNzEuODcgMy4yMTMgMi4xODggNC4wOTZhNC45MDQgNC45MDQgMCAwMS0yLjIyOC0uNjE2di4wNmE0LjkyMyA0LjkyMyAwIDAwMy45NDYgNC44MjcgNC45OTYgNC45OTYgMCAwMS0yLjIxMi4wODUgNC45MzYgNC45MzYgMCAwMDQuNjA0IDMuNDE3IDkuODY3IDkuODY3IDAgMDEtNi4xMDIgMi4xMDVjLS4zOSAwLS43NzktLjAyMy0xLjE3LS4wNjdhMTMuOTk1IDEzLjk5NSAwIDAwNy41NTcgMi4yMDljOS4wNTMgMCAxMy45OTgtNy40OTYgMTMuOTk4LTEzLjk4NSAwLS4yMSAwLS40Mi0uMDE1LS42M0E5LjkzNSA5LjkzNSAwIDAwMjQgNC41OXoiLz48L3N2Zz4='
                        };
                        e.target.src = fallbackIcons[social.key] || '';
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;