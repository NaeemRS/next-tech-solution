import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';

export default function ServiceCard() {
  const router = useRouter();
  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch all services from Strapi
     fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/service-cards?populate=image`)
      .then(res => res.json())
      .then(data => {
        console.log('service data:', data?.data); // Debug
        setServiceData(data?.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  console.log(' ', serviceData);
  // Function to handle card click
  const handleCardClick = (project) => {
    // If we're NOT on the all-service page, show modal
    if (router.pathname !== '/all-service') {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
    // If we ARE on the all-service page, navigate to detail page
    else {
      // Check what identifier we have
      console.log('Project for navigation:', serviceData);

      // Try multiple possibilities for slug/identifier
      const identifier = project.id; // Use ID as it's always available
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
            {serviceData?.map((service) => {
              const imageObj = service.image?.[0];
              const imageUrl = imageObj?.url
                ? `${imageObj.url}`
                : "/placeholder.png";

              return (
                <div
                  key={service.id}
                  className="rounded-2xl p-8 cardShadow serviceCard cursor-pointer"
                  onClick={() => handleCardClick(service)}
                >
                  {/* Image */}
                  <div className="mb-6">
                    <img
                      src={imageUrl}
                      alt={imageObj?.alternativeText || service.title}
                      className="w-16 h-16"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl outfit font-semibold text-[#242424] mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#707070] font-medium text-[13px] mb-6 line-clamp-4">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div
                   onClick={() => handleCardClick(service)}
                    className="text-[#11AAB5] text-[13px] font-medium flex items-center gap-2 group"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
      {isModalOpen && selectedProject && router.pathname !== '/all-service' && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[999] p-4">
          <div className="bg-white rounded-2xl w-full max-w-[95vh] p-6 relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black font-bold text-2xl z-10"
            >
              ×
            </button>

            <div className="relative w-full mb-6 rounded-xl overflow-hidden">
              <img
                src={
                  selectedProject.image?.[0]?.url
                    ? `${process.env.NEXT_PUBLIC_BASE_URLS}${selectedProject.image[0].url}`
                    : "/placeholder.png"
                }
                alt={selectedProject.title}
                  className="w-16 h-16"
              />
            </div>

            {/* Project Info */}
            <div className="px-2">
              <h2 className="text-2xl font-semibold mb-3 text-[#303030]">
                {selectedProject.title}
              </h2>

              {/* Short Description */}
              <p className="text-gray-700 mb-4">
                {selectedProject.description}
              </p>

              {/* Full Details */}
              <div className="text-gray-700 space-y-4 whitespace-pre-line relative max-h-[50vh] overflow-y-auto">
                {selectedProject.details}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}