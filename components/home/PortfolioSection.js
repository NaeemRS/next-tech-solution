import React, { useState } from 'react';
import Image from 'next/image';

const PortfolioSection = () => {
    // Tab categories
    const tabs = [
        { id: 'all', label: 'All', color: 'bg-transparent' },
        { id: 'app', label: 'App', color: 'bg-transparent' },
        { id: 'food', label: 'Food', color: 'bg-transparent' },
        { id: 'music', label: 'Music', color: 'bg-transparent' },
        { id: 'website', label: 'Website', color: 'bg-transparent' },
        { id: 'academic', label: 'Academic', color: 'bg-transparent' },
        { id: 'crypto', label: 'Crypto', color: 'bg-transparent' }
    ];

    // Portfolio projects array
    const projects = [
        {
            id: 1,
            title: 'Rosie Paws- Pet Care Platform',
            description: 'Modern Online Platform for pet care with advance features',
            category: 'Web Development',
            image: '/images/cardImage1.png',
            tags: ['React', 'UI/UX', 'Node.js'],
            status: 'Web Development',
            devices: ['desktop']
        },
        {
            id: 2,
            title: 'Finder- Social Media Dating App',
            description: 'Modern Online social media dating platform with Advanced features',
            category: 'app',
            image: '/images/cardImage2.png',
            tags: ['Flutter', 'UI/UX', 'Mobile'],
            status: 'Mobile App',
            devices: ['mobile']
        },
        {
            id: 3,
            title: 'Paria- Beauty Parlour App',
            description: 'Complete online appointment for parlour with real-time features',
            category: 'app',
            image: '/images/cardImage3.png',
            tags: ['Flutter', 'UI/UX', 'Node.js'],
            status: 'Mobile App',
            devices: ['mobile', 'desktop']
        },
        {
            id: 4,
            title: 'Sarqeen- Shipment Delivery App',
            description: 'Secure and user-friendly delivery shipment app',
            category: 'app',
            image: '/images/cardImage4.png',
            tags: ['Flutter', 'UI/UX', 'Node.js'],
            status: 'Mobile App',
            devices: ['mobile']
        },
        {
            id: 5,
            title: 'Gama Cabana App',
            description: 'Modern Online Platform for sport with advanced features',
            category: 'app',
            image: '/images/cardImage5.png',
            tags: ['Flutter', 'UI/UX', 'Mobile'],
            status: 'Mobile App',
            devices: ['mobile']
        },
        {
            id: 6,
            title: 'Car Genie- Car Booking App',
            description: 'Modern Online car booking with advanced features',
            category: 'app',
            image: '/images/cardImage6.png',
            tags: ['Flutter', 'UI/UX', 'Node.js'],
            status: 'Mobile App',
            devices: ['mobile']
        }
    ];

    const [activeTab, setActiveTab] = useState('all');

    // Filter projects based on active tab
    const filteredProjects = activeTab === 'all'
        ? projects
        : projects.filter(project => project.category === activeTab);

    return (
        <div className="py-16 px-6 bg-white min-h-screen">
            <div className="container mx-auto px-4 2xl:px-10 xl:px-6">
                {/* Section Header */}
                <div className="mb-12 flex justify-between items-start px-4">
                    <div>
                        <h3 className="text-[26px] font-semibold text-gray-700 mb-2">Portfolios</h3>
                        <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-8">
                            Selected works.
                        </h2>
                    </div>

                    {/* Custom Tabs */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2 rounded-full text-[22px] font-medium transition-all duration-300 ${activeTab === tab.id
                                    ? `${tab.color} text-[#11AAB5]`
                                    : 'bg-transparent'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-2xl cardShadow overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 bg-gray-100 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
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
                                <h3 className="text-base font-semibold text-[#303030] inter mb-2 mt-3">
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
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="text-center">
                    <button className="view-all-projects text-white px-6 py-4 font-semibold text-lg  hover:scale-105 transition-all duration-300 flex items-center mx-auto space-x-2">
                        <span>View All Projects</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;