import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Loader from './Loader';

export default function ServiceCard() {
  const router = useRouter();
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedservice, setSelectedservice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch all services from Strapi
     fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/service-cards?populate=image`)
      .then(res => res.json())
      .then(data => {
        console.log('service data:', data?.data); // Debug
        setService(data?.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  console.log(' ', service);
  // Function to handle card click
  const handleCardClick = (service) => {
    // If we're NOT on the all-service page, show modal
    if (router.pathname !== '/all-service') {
      setSelectedservice(service);
      setIsModalOpen(true);
    }
    // If we ARE on the all-service page, navigate to detail page
    else {
      // Check what identifier we have
      console.log('service for navigation:', service);

      // Try multiple possibilities for slug/identifier
      const identifier = service.id; // Use ID as it's always available
      router.push(`/all-service/${identifier}`);
    }
  };

  if (loading) {
    return  <Loader />;
  }



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
                     src={`${process.env.NEXT_PUBLIC_BASE_URLS}${imageUrl}`}
                                                alt={imageObj?.alternativeText || service?.title || "service Image"}
                    className="w-18 h-18"
                  />
                </div>
                <h3 className="text-xl outfit font-semibold text-[#242424] mb-4">{service.title}</h3>
                <p className="text-[#707070] font-medium text-[13px] mb-6 lg:max-w-[249px]">
                  {service.description}
                </p>
                <Link href={`/services/${service.slug}`} className="text-[#11AAB5] text-[13px] font-medium flex items-center gap-2 group">
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