import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    'Web Development',
    'Mobile App Development',
    'Digital Marketing',
    'SEO Services',
    'Graphic Design',
    'Consulting',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceSelect = (service) => {
    setFormData(prev => ({
      ...prev,
      service: service
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  return (
    <div className="py-12 px-4">
      <div className=" container mx-auto px-4 2xl:px-10 xl:px-6 relative">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Content */}
          <div className="lg:w-3/5 w-full">
            <div>
              <h3 className="text-[#11AAB5] font-semibold text-lg mb-2 inter">Get In Touch!</h3>
              <h2 className="text-3xl lg:text-[40px] font-extrabold text-[#061E42] lato">
                Need A Free Quote? Please Feel Free to Contact Us
              </h2>
              <div className='flex items-center gap-2 mt-0'>
                <div className="w-[126px] h-[9.69px] bg-[#11AAB5] mt-4 rounded-[10px]"></div>
                <div className="w-[21.93px] h-[9.69px] bg-[#11AAB5] mt-4 rounded-[10px]"></div>
              </div>

            </div>

            {/* Features */}
            <div className="my-5 flex flex-col lg:flex-row lg:space-x-8">
              <div className="flex items-center gap-2">
                <Icon icon="bxs:share" className="w-6 h-6  text-[#00a3f7]" />

                <h3 className="md:text-lg text-sm font-semibold text-[#11AAB5]">Reply within 24 hours</h3>
              </div>

              <div className="flex items-center gap-2">
                <Icon icon="mdi:phone" className="w-6 h-6  text-[#00a3f7]" />
                <h3 className="md:text-lg text-sm font-semibold text-[#11AAB5]">24 hrs telephone support</h3>
              </div>
            </div>

            <p className="text-[#061E42] inter text-lg mb-3 lg:mb-6">
              I'd be happy to provide you with a free quote! However, I would need more information about what
              you need a quote for. Please provide details about the product or service you're interested in, any
              specific requirements, and any other relevant information, so I can assist you in generating an
              accurate quote.
            </p>

            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-[#061E42]">
              <div className="bg-[#11AAB5] w-[70px] h-[70px] flex items-center justify-center">
                <Icon icon="mdi:phone" className="w-9 h-9 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold inter text-[#061E42]">Call to ask any Question</h3>
                <div className="text-xl font-bold text-[#11AAB5]">
                  <a href="tel:+911234567890" className="hover:underline">
                    +91 1234567890
                  </a>
                </div>                </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:w-2/5 w-1/2 p-8 lg:p-12 bg-[#D3F0FF] cardShadow lato">
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full  bg-[#EAF9FF] text-[#6E6A74] placeholder:text-[#6E6A74] focus:bg-[#EAF9FF] border-0 outline-none p-4 focus:ring-0 focus:border-0 transition-all duration-200"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full  bg-[#EAF9FF] text-[#6E6A74] placeholder:text-[#6E6A74] focus:bg-[#EAF9FF] border-0 outline-none p-4 focus:ring-0 focus:border-0 transition-all duration-200"
                  required
                />
              </div>

              <div className="relative">
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full p-4 border-0 rounded-0 focus:ring-2   outline-none transition-all duration-200 bg-[#EAF9FF]  cursor-pointer flex items-center justify-between"
                >
                  <span className={formData.service ? 'text-[#6E6A74]' : 'text-[#6E6A74]'}>
                    {formData.service || 'Select A Service'}
                  </span>
                  <Icon icon="mdi:chevron-down" className={`w-5 h-5 text-[#6E6A74] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </div>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-[#EAF9FF] border border-gray-200  shadow-lg z-10 max-h-48 overflow-y-auto">
                    {services.map((service) => (
                      <div
                        key={service}
                        onClick={() => handleServiceSelect(service)}
                        className="p-3 hover:bg-teal-50 cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Messages"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full  bg-[#EAF9FF] text-[#6E6A74] placeholder:text-[#6E6A74] focus:bg-[#EAF9FF] border-0 outline-none p-4 focus:ring-0 focus:border-0 transition-all duration-200"
                  required
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-[#11AAB5] text-white font-semibold py-4 px-6 outline-none"
              >
                Request A Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;