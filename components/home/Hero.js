import { useRouter } from "next/router";

export default function Hero() {
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
        <section className="relative overflow-hidden bg-gradient-to-br from-[#e6fcfa] via-white to-white lg:pt-36 pt-32 lg:py-28 md:pb-20 pb-5 -mt-[84px]">
            <img
                src="/images/Ellipse2.svg"
                alt="Mobile App"
                className="absolute top-0 left-0 md:w-auto w-[50%]"
            />
            <img
                src="/images/Ellipse1.svg"
                alt="Decoration Right Center"
                className="absolute right-0 top-1/2 -translate-y-1/2"
            />

            <div className=" container mx-auto px-4 2xl:px-10 xl:px-6 relative">
                <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4">
                    <div className="lg:w-2/5 md:w-1/2 w-full">
                        <h1 className="font-semibold text-3xl md:text-4xl mb-4 lg:mb-8">
                            Let's Build <span
                                className="bg-gradient-to-r from-[#11AAB5] to-[#0F5168] bg-clip-text text-transparent"
                            >
                                Your Web App!
                            </span>
                        </h1>
                        <p className="text-[#5C5C5C] md:text-[22px] text-sm font-normal mb-8">
                            NexTech is a global, full service digital partner specialising in Website Design, Development, Strategy and Managed Services. Share your idea with us and let's get started right now!
                        </p>
                        <div className="flex gap-4 mb-9">

                            <button onClick={() => {
                                handleHomeAndScroll('contact');
                                toggleMenu();
                            }}
                                className="whitespace-nowrap rounded-full w-[143px] h-[49px] text-white lg:text-lg text-sm contactbtn flex items-center justify-center "

                            >
                                Contact Us
                            </button>

                            <button
                                onClick={() => handleHomeAndScroll('portfolio')}
                                className="bg-white text-[#11AAB5] border border-[#11AAB5] rounded-full prounded-full w-[143px] h-[49px] font-semibold hover:bg-[#e6fcfa] transition">
                                Portfolio
                            </button>
                        </div>
                        <div className="flex gap-12 mt-6 inter">
                            <div>
                                <div className="font-bold text-lg text-black text-center">500+</div>
                                <div className="text-[#515151] text-[13px] font-medium">Projects Completed</div>
                            </div>
                            <div>
                                <div className="font-bold text-lg text-black text-center">98%</div>
                                <div className="text-[#515151] text-sm font-medium">Client Satisfaction</div>
                            </div>
                            <div>
                                <div className="font-bold text-lg text-black text-center">5+</div>
                                <div className="text-[#515151] text-sm font-medium">Years Experience</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-3/5 md:w-1/2 w-full relative flex justify-center items-center">
                        <div className="relative z-10">
                            <img
                                src="/images/heroImage.png"
                                alt="Mobile App"
                                className="object-cove"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}