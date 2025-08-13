import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AboutUs() {
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
            if (router.asPath === '/about-us') {
                // Already on home page, just scroll
                handleScrollTo(sectionId);
            } else {
                // Navigate to home page first, then scroll after navigation
                router.push('/about-us').then(() => {
                    // Small delay to ensure page is loaded
                    setTimeout(() => {
                        handleScrollTo(sectionId);
                    }, 100);
                });
            }
        };
    return (
        <>
            <section className="relative overflow-hidden bg-[#E3FDFF] lg:py-20 py-10">
                <div className=" container mx-auto px-4 2xl:px-10 xl:px-6 relative">
                    <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="lg:w-3/5 md:w-1/2 w-full relative flex justify-center items-center">
                            <div className="relative z-10">
                                <img
                                    src="/images/aboutBanner.png"
                                    alt="Mobile App"
                                    className="object-cove"
                                />
                            </div>
                        </div>
                        <div className="lg:w-2/5 md:w-1/2 w-full">
                            <h1 className="!font-semibold text-3xl md:text-4xl xl:text-[58px] lg:text-5xl mb-4 lg:mb-8">
                                <span
                                    className="outfit text-[#11AAB5]"
                                >
                                    About US
                                </span>
                            </h1>
                            <h4 className='text-[#000] md:text-2xl text-xl lg:text-[35px] font-semibold mb-4 inter'>
                                We Build Digital Solutions That Drive Growth
                            </h4>
                            <p className="text-[##3F3F3F] md:text-[22px] text-sm font-normal mb-8">
                                Concept Softworks is a software company, we develop custom built software for clients - covering everything from financial institutions & medical companies all the way to tech companies and government organizations.                            </p>
                            <div className="flex gap-4 mb-9">
                                <Link href="/about/about-us"
                                    className="whitespace-nowrap rounded-lg w-[143px] h-[49px] text-white lg:text-lg text-sm learn-more flex items-center justify-center "
                                >
                                    Learn More                                </Link>
                                <button 
                                    onClick={() => {
                                        handleHomeAndScroll('our-team');
                                     }}
                                    className="bg-tran text-[#11AAB5] border border-[#11AAB5] rounded-lg prounded-full w-[143px] h-[49px] font-semibold hover:bg-[#e6fcfa] transition flex items-center justify-center">
                                    Meet Our Team
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}