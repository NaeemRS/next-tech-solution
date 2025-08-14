// pages/project/[slug].js
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { projects } from '@/components/home/projects';
 
export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Find project by slug
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Not Found</h2>
          <Link 
            href="/#portfolio" 
            className="bg-[#11AAB5] text-white px-6 py-2 rounded-lg hover:bg-[#0e9aa3] transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          {/* Back Button */}
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center text-[#11AAB5] hover:text-[#0e9aa3] transition-colors mb-6"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>

          {/* Project Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div className="mb-6 lg:mb-0">
              <div className="mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#11AAB5] text-white">
                  {project.status}
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                {project.fullDescription}
              </p>
            </div> 
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Images */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="relative h-[400px] lg:h-[444px] bg-gray-200 rounded-3xl overflow-hidden mb-6 shadow-lg">
              <img
                src={project.images[selectedImageIndex]}
                alt={project.title}
                 
                className="object-cover"
                 
              />
            </div>

            {/* Image Thumbnails */}
            

            {/* Features Section */}
            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#11AAB5] rounded-full mt-2"></div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Section */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Project Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-8 shadow-sm sticky top-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Project Details</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Category</h4>
                  <p className="text-gray-600">{project.category}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Client</h4>
                  <p className="text-gray-600">{project.client}</p>
                </div>

                {/* <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Duration</h4>
                  <p className="text-gray-600">{project.duration}</p>
                </div> */}

                {/* <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Year</h4>
                  <p className="text-gray-600">{project.year}</p>
                </div> */}

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Platform</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.devices.map((device, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#11AAB5] text-white text-sm rounded-full capitalize"
                      >
                        {device}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/all-projects/${relatedProject.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-[#11AAB5] text-white mb-3 inline-block">
                      {relatedProject.status}
                    </span>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#11AAB5] transition-colors">
                      {relatedProject.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {relatedProject.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}