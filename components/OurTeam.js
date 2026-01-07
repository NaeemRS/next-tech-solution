import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Loader from './home/Loader';

const defaultSocials = [
  { key: "facebook", image: "/images/facebook.svg", url: null },
  { key: "github", image: "/images/github.svg", url: null },
  { key: "linkedin", image: "/images/linkedin.svg", url: null },
  { key: "twitter", image: "/images/twitter.svg", url: null },
];

// Custom Arrow Components
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-0 z-10 w-10 h-10 rounded-full bg-[#11AAB5] flex items-center justify-center text-white hover:bg-cyan-600 transition-colors"
      onClick={onClick}
    >
      ←
    </button>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-0 z-10 w-10 h-10 rounded-full bg-[#11AAB5] flex items-center justify-center text-white hover:bg-cyan-600 transition-colors"
      onClick={onClick}
    >
      →
    </button>
  );
};

const TeamCard = ({ member }) => {
  const imageUrl = member.image?.url
    ? `${member.image.url}`
    : '/placeholder.png';

  // Build socials array from member fields
  const socials = [
    { key: 'facebook', image: '/images/facebook.svg', url: member.facebookLink },
    { key: 'github', image: '/images/github.svg', url: member.githubLink },
    { key: 'linkedin', image: '/images/linkedin.svg', url: member.linkedinLink },
    { key: 'twitter', image: '/images/twitter.svg', url: member.twitterLink },
  ].filter(social => social.url);

  return (
 
<div className="group bg-white rounded-[10px] text-black hover:text-white p-8 hover:bg-[linear-gradient(238deg,#01E0B1_-118.25%,#012B3B_30.5%,#012B3B_82.93%,#00ACEC_165.87%)] h-[390px] duration-500 transform border border-[#CDCDCD] shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)]">      <div className="relative mb-6">
        <div className="w-[108px] h-[108px] mx-auto rounded-full overflow-hidden ring-4 ring-cyan-100 group-hover:ring-cyan-200 transition-all duration-300">
          <img
            src={imageUrl}
            className="w-full h-full object-cover"
            alt={member.name || "Team Member"}
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&auto=format&q=80";
            }}
          />
        </div>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold  mb-1">
          {member.name.length > 30 ? member.name.substring(0, 30) + "..." : member.name}
        </h3>
        <p className="text-xs font-normal  mb-4">
          {member.position.length > 30 ? member.position.substring(0, 30) + "..." : member.position}
        </p>
        <p className="text-sm font-light  leading-relaxed">
          {member?.description.length > 150 ? member?.description.substring(0, 150) + "..." : member?.description}
        </p>
      </div>

      {/* Social Links */}
      {socials.length > 0 && (
        <div className="flex justify-center gap-3">
          {socials.map(social => (
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
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default function OurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
       fetch(`${process.env.NEXT_PUBLIC_BASE_URLS}/api/our-all-teams?populate=image`)
      .then(res => res.json())
      .then(data => {
        setTeamMembers(data?.data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  if (loading) return  <Loader />;

  // Check if we should show slider or grid
  const shouldShowSlider = teamMembers.length > 3;
  const shouldShowSliderOnMd = teamMembers.length > 2;
  const shouldShowSliderOnSmall = teamMembers.length > 1;

  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto px-4 2xl:px-10 xl:px-6">
        <div className="text-center mb-16">
          <h2 className="!font-semibold text-3xl md:text-4xl xl:text-[58px] lg:text-5xl mb-4 lg:mb-8">
            <span className="outfit text-[#11AAB5]">Meet Our Team</span>
          </h2>
          <h4 className="text-[#797979] text-[25px] font-medium mb-4 inter">
            Meet our team of professionals to serve you
          </h4>
        </div>

        {/* LG Screen - Show slider if > 3 cards, else grid */}
        <div className="hidden lg:block">
          {shouldShowSlider ? (
            <div className="   ">
              <Slider className='  px-4 2xl:px-10 xl:px-6' {...settings}>
                {teamMembers.map((member) => (
                  <div key={member.id} className="p-2">
                    <TeamCard member={member} />
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member) => (
                <div key={member.id}>
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* MD Screen - Show slider if > 2 cards, else grid */}
        <div className="hidden md:block lg:hidden">
          {shouldShowSliderOnMd ? (
            <div className="team-slider">
              <Slider {...settings}>
                {teamMembers.map((member) => (
                  <div key={member.id} className="px-2">
                    <TeamCard member={member} />
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member) => (
                <div key={member.id}>
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Small Screen - Show slider if > 1 card, else grid */}
        <div className="block md:hidden">
          {shouldShowSliderOnSmall ? (
            <div className="team-slider">
              <Slider {...settings}>
                {teamMembers.map((member) => (
                  <div key={member.id} className="px-2">
                    <TeamCard member={member} />
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member) => (
                <div key={member.id}>
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}