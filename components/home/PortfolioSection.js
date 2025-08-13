// PortfolioSection.js
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { projects } from './projects';

const PortfolioSection = () => {
    const router = useRouter();

    return (
        <div className="md:py-16 py-7">
            <div className="container mx-auto px-4 2xl:px-10 xl:px-6">
                {/* Section Header */}
                <div className="md:mb-12 mb-6 flex flex-col md:flex-row md:justify-between md:items-start items-start gap-6 px-2 md:px-4">
                    <div>
                        {/* <h3 className="text-[22px] md:text-[26px] font-semibold text-gray-700 mb-2"></h3> */}
                        <h2 className="text-xl md:text-2xl lg:text-4xl !font-semibold inter text-black mb-6 md:mb-8">
                            Portfolios
                        </h2>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {projects.map((project) => (
                        <Link
                            href={`/all-projects/${project.slug}`} // Fixed URL path
                            key={project.id}
                            className="bg-white rounded-2xl cardShadow overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 bg-gray-100 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <div className=" ">
                                    <span className='px-2 py-1 rounded-full text-[7px] font-semibold bg-[#11AAB5] text-white mb-3'>
                                        {project.status}
                                    </span>
                                </div>
                                <h3 className="text-base font-semibold text-[#303030] inter mb-2 mt-3 group-hover:text-[#11AAB5] transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-[#626262] text-[13px] mb-4 !font-medium">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="w-[59px] h-[22px] bg-[#EAEAEA] text-[#272727] text-[13px] flex items-center justify-center rounded-full font-normal"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Projects Button */}
                {router.pathname !== '/all-projects' && (
                    <div className="text-center flex justify-center ">
                        <Link
                            href={'/all-projects'}
                            className="view-all-projects text-white md:px-6 px-3 md:py-4 py-2 font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center mx-auto space-x-2"
                        >
                            <span>View All Projects</span>
                        </Link>
                    </div>
                )}

            </div>
        </div>
    );
};

export default PortfolioSection;