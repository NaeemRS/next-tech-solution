import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TestimonialSection() {
  const [centerSlideIndex, setCenterSlideIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: "/images/client1.png",
      name: "John Smith",
      title: "IT PROFESSIONAL",
      description: "The Information Technology (IT) field encompasses a wide range of professions and career opportunities. IT professionals work with technology systems and software to design, develop, manage, and maintain various aspects of computing and information systems.",
      rating: 5
    },
    {
      id: 2,
      image: "/images/client2.png",
      name: "Emily Davis",
      title: "BUSINESS WOMEN",
      description: 'Business women" refers to women who are actively engaged in various aspects of the business world. This can include women who are entrepreneurs, business owners, corporate executives, managers, professionals, or employees in various industries.',
      rating: 5
    },
    {
      id: 3,
      image: "/images/client3.png",
      name: "James Wilson",
      title: "APPLICATION DEVELOPER",
      description: "Application development refers to the process of creating software applications for various platforms and devices, such as mobile phones, desktop computers, web browsers, and more.",
      bgColor: "bg-[#11AAB5]",
      rating: 5
    },
    {
      id: 4,
      image: "/images/client1png",
      name: "Sarah Johnson",
      title: "MARKETING SPECIALIST",
      description: "Marketing specialists are professionals who focus on promoting and selling products or services. They play a crucial role in developing and implementing marketing strategies to reach target audiences, increase brand awareness, and drive sales.",
      rating: 5
    },
    {
      id: 5,
      image: "/images/client2.png",
      name: "Michael Brown",
      title: "GRAPHIC DESIGNER",
      description: "Graphic design is a creative field that involves the visual communication of ideas and messages through the use of typography, imagery, color, and layout. Graphic designers create visual content for various mediums, including print, digital, advertising, branding, and more.",
      rating: 5
    }

  ];

  // Slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    beforeChange: (current, next) => {
      setCenterSlideIndex(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
        }
      }
    ]
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="py-20">
      <div className=" container mx-auto px-4 2xl:px-10 xl:px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-16">

          <h3 className="text-[#11AAB5] font-semibold text-lg mb-2 inter">TESTIMONIAL</h3>
          <h2 className="text-3xl lg:text-[40px] font-extrabold text-[#061E42] lato">
            What Our Clients Say About<br />
            Our Digital Services
          </h2>
          <div className='flex items-center justify-center gap-2 mt-0'>
            <div className="w-[126px] h-[9.69px] bg-[#11AAB5] mt-4 rounded-[10px]"></div>
            <div className="w-[21.93px] h-[9.69px] bg-[#11AAB5] mt-4 rounded-[10px]"></div>
          </div>

        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <Slider className='py-5' {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="">
                <div
                  className={`py-8 ${index === centerSlideIndex ? 'testimonial-card bg-white text-[#6E6A74]' : 'bg-[#D7FCFF] text-[#6a7472]'} h-full`}
                  style={{ minHeight: '321px' }}
                >
                  {/* Avatar and Info */}
                  <div className="flex items-center mb-6 px-8 border-b-2 border-[#DDE2E4] pb-4">
                    <div className="w-[54.63px] h-[60px]  rounded-md mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name || testimonial.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format&q=80";
                        }}
                      />
                    </div>
                    <div>
                      {testimonial.name && (
                        <h3 className="text-[#11AAB5] font-semibold text-lg">{testimonial.name}</h3>
                      )}
                      <p className="text-[#6E6A74] font-semibold text-base uppercase">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#6E6A74] lato px-8 text-sm line-clamp-5">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>


      </div>

      {/* Custom CSS for Slick Slider */}
      <style jsx>{`
        .slick-dots {
          bottom: -60px;
        }
        
        .slick-dots li button:before {
          color: #11AAB5;
          font-size: 14px;
          opacity: 0.5;
        }
        
        .slick-dots li.slick-active button:before {
          color: #11AAB5;
          opacity: 1;
        }
        
        .slick-slide > div {
          padding: 0 8px;
        }
        
        .slick-track {
          display: flex;
          align-items: stretch;
        }
        
        .slick-slide {
          height: auto;
        }
        
        .slick-slide > div > div {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        /* Center card styling */
        .testimonial-card {
 box-shadow: 40px 40px 80px 0px #00000040;
          z-index: 2;
          position: relative;
        }
       
        /* Non-center cards get reduced opacity */
        .slick-slide:not(.slick-center) .testimonial-card {
          opacity: 0.7;
          transform: scale(0.95);
        }
        
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 1024px) {
          .testimonial-card {
            transform: scale(1) !important;
            background: white !important;
            color: inherit;
          }
          
          .testimonial-card h3 {
            color: #11AAB5 !important;
          }
          
          .testimonial-card p {
            color: #6B7280 !important;
          }
          
          .testimonial-card svg {
            color: #11AAB5 !important;
            opacity: 0.5 !important;
          }
          
          .slick-slide:not(.slick-center) .testimonial-card {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @media (max-width: 768px) {
          .slick-slide > div {
            padding: 0 4px;
          }
        }
      `}</style>
    </div>
  );
}