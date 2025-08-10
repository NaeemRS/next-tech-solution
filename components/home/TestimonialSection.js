import React from 'react';

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      image: "/path/to/professional-avatar.jpg", // Replace with actual image path
      title: "PROFESSION",
      description: "The Information Technology (IT) field encompasses a wide range of professions and career opportunities. IT professionals work with technology systems and software to design, develop, manage, and maintain various aspects of computing and information systems.",
      bgColor: "bg-cyan-100"
    },
    {
      id: 2,
      image: "/path/to/emily-avatar.jpg", // Replace with actual image path
      name: "Emily Davis",
      title: "BUSINESS WOMEN",
      description: '"Business women" refers to women who are actively engaged in various aspects of the business world. This can include women who are entrepreneurs, business owners, corporate executives, managers, professionals, or employees in various industries.',
      bgColor: "bg-white"
    },
    {
      id: 3,
      image: "/path/to/james-avatar.jpg", // Replace with actual image path
      name: "James Wilson",
      title: "APPLICATION DEVELOPMENT",
      description: "Application development refers to the process of creating software applications for various platforms and devices, such as mobile phones, desktop computers, web browsers, and more.",
      bgColor: "bg-cyan-100",
      hasRating: true
    }
  ];

  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-cyan-500 font-semibold text-lg mb-4 tracking-wide">TESTIMONIAL</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            What Our Clients Say About<br />
            Our Digital Services
          </h2>
          {/* Decorative underline */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2">
              <div className="w-16 h-1 bg-cyan-500 rounded"></div>
              <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`${testimonial.bgColor} rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Avatar and Info */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-300 rounded-lg mr-4 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name || testimonial.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  {testimonial.name && (
                    <h3 className="text-cyan-500 font-bold text-lg">{testimonial.name}</h3>
                  )}
                  <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {testimonial.description}
              </p>

              {/* Rating (only for James Wilson card) */}
              {testimonial.hasRating && (
                <div className="flex items-center gap-1">
                  <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">h</span>
                  </div>
                  <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">n</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}