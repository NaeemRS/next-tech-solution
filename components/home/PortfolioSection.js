import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Loader from './Loader';

const PortfolioSection = () => {
    const router = useRouter();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
         fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/get-services?populate=image`)
            .then(res => res.json())
            .then(data => {
                console.log('Projects data:', data?.data); // Debug
                setProjects(data?.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);
     const handleCardClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };
    if (loading) {
        return <Loader />;
    }
    return (
        <>
            <div className="md:py-16 py-7">
                <div className="container mx-auto px-4 2xl:px-10 xl:px-6">
                    <div className="md:mb-12 mb-6 flex flex-col md:flex-row md:justify-between md:items-start items-start gap-6 px-2 md:px-4">
                        <h2 className="text-xl md:text-2xl lg:text-4xl !font-semibold inter text-black mb-6 md:mb-8">
                            Portfolios
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mb-12">
                        {projects && projects?.map(project => {
                            const imageObj = project.image?.[0];
                            const imageUrl = imageObj?.url || '/placeholder.png';

                            return (
                                <div
                                    key={project.id}
                                    className="bg-white rounded-2xl cardShadow overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                                    onClick={() => handleCardClick(project)}
                                >
                                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                                        {imageUrl && (
                                            <img
                                                src={`${imageUrl}`}
                                                alt={imageObj?.alternativeText || project?.title || "Project Image"}
                                                 
                                                className="object-cover group-hover:scale-105 h-full transition-transform duration-300"
                                                 
                                            />
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <span className='px-2 py-1 rounded-full text-[7px] font-semibold bg-[#11AAB5] text-white mb-3'>
                                            {project?.badge || "Project"}
                                        </span>
                                        <h3 className="text-base font-semibold text-[#303030] inter mb-2 mt-3 group-hover:text-[#11AAB5] transition-colors duration-300">
                                            {project?.title}
                                        </h3>
                                        <p className="text-[#626262] text-[13px] mb-4 !font-medium">

                                            {project?.description.length > 150 ? project?.description.substring(0, 150) + "..." : project?.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project?.badge2 && (
                                                <span className="w-[59px] h-[22px] bg-[#EAEAEA] text-[#272727] text-[13px] flex items-center justify-center rounded-full font-normal">
                                                    {project.badge2}
                                                </span>
                                            )}
                                            {project?.badge3 && (
                                                <span className="w-[59px] h-[22px] bg-[#EAEAEA] text-[#272727] text-[13px] flex items-center justify-center rounded-full font-normal">
                                                    {project.badge3}
                                                </span>
                                            )}
                                            <Link target='_blank' href={project.projectUrl || '/'}
                                                className="whitespace-nowrap inline-flex items-center justify-center text-[#11AAB5] bg-[#EAEAEA] px-3 py-1 text-xs rounded-full  transition-colors font-semibold"
                                            >
                                                Live Demo
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {isModalOpen && selectedProject && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[999] p-4">
                    <div className="bg-white rounded-2xl w-full max-w-2xl p-6 relative max-h-[90vh] ">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-black font-bold text-2xl z-10"
                        >
                            ×
                        </button>

                        {/* Project Image */}
                        <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_URLS}${selectedProject.image?.[0]?.url || '/placeholder.png'}`}
                                alt={selectedProject.title}
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />
                        </div>

                        {/* Project Info */}
                        <div className="px-2 ">
                            <h2 className="text-2xl font-semibold mb-3 text-[#303030] flex justify-between">
                                {selectedProject.title} <Link target='_blank' href={selectedProject.projectUrl || "/"}
                                    className="whitespace-nowrap inline-flex items-center justify-center text-[#11AAB5] bg-[#EAEAEA] px-3 py-1 text-xs rounded-full  transition-colors font-semibold"
                                >
                                    Live Demo
                                </Link>
                            </h2>
                            {selectedProject?.description2 && (
                                <div className='max-h-[300px] overflow-y-auto'>
                                    <p className="text-gray-700 mb-4">
                                        {selectedProject?.description.length > 150 ? selectedProject?.description.substring(0, 150) + "..." : selectedProject?.description}
                                    </p>
                                    <p className="text-gray-700 mb-4">
                                        {selectedProject?.description2}
                                    </p>
                                </div>
                            )}
                        </div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2  py-2 bg-white">
                            {selectedProject?.badge && (
                                <span className="px-3 py-1 bg-[#11AAB5] text-white text-xs rounded-full font-semibold">
                                    {selectedProject.badge}
                                </span>
                            )}
                            {selectedProject?.badge2 && (
                                <span className="px-3 py-1 bg-[#EAEAEA] text-[#272727] text-xs rounded-full">
                                    {selectedProject.badge2}
                                </span>
                            )}
                            {selectedProject?.badge3 && (
                                <span className="px-3 py-1 bg-[#EAEAEA] text-[#272727] text-xs rounded-full">
                                    {selectedProject.badge3}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default PortfolioSection;