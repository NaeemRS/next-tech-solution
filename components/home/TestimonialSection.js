import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loader from './Loader';

export default function TestimonialSection() {
  const [centerSlideIndex, setCenterSlideIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/our-clients?populate=image`)
      .then(res => res.json())
      .then(data => {
        setTestimonials(data?.data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  console.log(' ', testimonials);
  if (loading) return  <Loader />;


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
        breakpoint: 1200, // Increased breakpoint for better tablet support
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: 'px',
          slidesToShow: 1
        }
      }

    ]

  };



  return (
    <div className="lg:py-20 md:py-12 py-8 md:block hidden">
      <div className=" container mx-auto px-4 2xl:px-10 xl:px-6 relative">
        {/* Header Section */}
        <div className="text-center lg:mb-16 md:mb-12 mb-8">

          <h3 className="text-[#11AAB5] font-semibold text-base md:text-lg mb-2 inter">TESTIMONIAL</h3>
          <h2 className="d:text-3xl lg:text-[40px] text-2xl font-extrabold text-[#061E42] lato">
            What Our Clients Say About<br className='lg:block hidden' />
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

            {testimonials.map((testimonial, index) => {
              const imageObj = testimonial.image?.[0]; // first image in the array
              const imageUrl = imageObj?.formats?.thumbnail?.url
                ? `${process.env.NEXT_PUBLIC_BASE_URLS || 'http://localhost:1337'}${imageObj.formats.thumbnail.url}`
                : imageObj?.url
                  ? `${process.env.NEXT_PUBLIC_BASE_URLS || 'http://localhost:1337'}${imageObj.url}`
                  : '/placeholder.png';

              return (
                <div
                  key={testimonial.id} className="">
                  <div
                    className={`py-8 ${index === centerSlideIndex ? 'testimonial-card bg-white text-[#6E6A74]' : 'bg-[#D7FCFF] text-[#6a7472]'} h-full`}
                    style={{ minHeight: '321px' }}
                  >
                    {/* Avatar and Info */}
                    <div className="flex items-center mb-6 px-8 border-b-2 border-[#DDE2E4] pb-4">
                      <div className="w-[54.63px] h-[60px]  rounded-md mr-4">
                        <img
                          src={imageUrl}
                          alt={testimonial.name || "Client"}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format&q=80";
                          }}
                        />


                      </div>
                      <div>
                        {testimonial.name && (
                          <h3 className="text-[#11AAB5] font-semibold text-lg">{testimonial.name}</h3>
                        )}
                        <p className="text-[#6E6A74] font-semibold text-base uppercase">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#6E6A74] lato px-8 text-sm line-clamp-5">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              );
            })}
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