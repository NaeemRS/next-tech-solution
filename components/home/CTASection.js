import React from 'react';

export default function CTASection() {
    return (
        <div className="py-20 px-6">
            <div className=" container mx-auto px-4 2xl:px-10 xl:px-6 relative">
                <div className="rounded-3xl py-16 px-8 text-center bg-[linear-gradient(360deg,_#11AAB5_0%,_#9CE0FF_100%)]">
                    <h2 className="text-2xl lg:text-[35px] font-semibold mb-4 inter text-white">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-lg inter text-white/90 mb-8 max-w-2xl mx-auto ">
                        Let's discuss how we can help you achieve your digital goals with our expertise and innovative solutions.
                    </p>
                    <button className="bg-white text-cyan-500 font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors duration-300 text-lg shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        Get Free Consultation
                    </button>
                </div>
            </div>
        </div>
    );
}