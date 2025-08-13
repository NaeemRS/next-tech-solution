import { useRouter } from 'next/router';
import React from 'react';

export default function CTASection() {
      const router = useRouter();
    const handleScrollTo = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Function to navigate to home page and then scroll to section
    const handleHomeAndScroll = (sectionId) => {
        if (router.asPath === '/') {
            // Already on home page, just scroll
            handleScrollTo(sectionId);
        } else {
            // Navigate to home page first, then scroll after navigation
            router.push('/').then(() => {
                // Small delay to ensure page is loaded
                setTimeout(() => {
                    handleScrollTo(sectionId);
                }, 100);
            });
        }
    };
    return (
      <div className="lg:py-20 md:py-12 py-8">
            <div className=" container mx-auto px-4 2xl:px-10 xl:px-6 relative">
                <div className="md:rounded-3xl rounded-xl lg:py-16 md:py-14 py-10  px-8 text-center bg-[linear-gradient(360deg,_#11AAB5_0%,_#9CE0FF_100%)]">
                    <h2 className="text-2xl lg:text-[35px] font-semibold mb-4 inter text-white">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-lg inter text-white/90 mb-8 max-w-2xl mx-auto ">
                        Let's discuss how we can help you achieve your digital goals with our expertise and innovative solutions.
                    </p>
                    <button
                        onClick={() => handleHomeAndScroll('contact')}
                     className="bg-white text-cyan-500 font-semibold md:px-8 px-3 md:py-4 py-2 rounded-full hover:bg-gray-50 md:text-lg text-sm shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        Get Free Consultation
                    </button>
                </div>
            </div>
        </div>
    );
}