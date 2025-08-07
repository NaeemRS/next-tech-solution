import Link from 'next/link';

export default function AboutUs() {
    return (
        <>
            <section className="relative overflow-hidden bg-[#E3FDFF] py-10">
                <div className=" container mx-auto px-4 2xl:px-10 xl:px-6 relative">
                    <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
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
                            <h1 className="font-semibold text-3xl md:text-4xl mb-4 lg:mb-8">
                                Let's Build <span
                                    className="bg-gradient-to-r text-[#11AAB5]"
                                >
                                    About US
                                </span>
                            </h1>
                            <h4 className='text-[#303030] text-4lx font-semibold mb-4 inter'>
                                We Build Digital Solutions That Drive Growth
                            </h4>
                            <p className="text-[#5C5C5C] text-[22px] font-normal mb-8">
                                NexTech is a global, full service digital partner specialising in Website Design, Development, Strategy and Managed Services. Share your idea with us and let's get started right now!
                            </p>
                            <div className="flex gap-4 mb-9">
                                <Link href="/"
                                    className="whitespace-nowrap rounded-xl w-[143px] h-[49px] text-white lg:text-lg text-sm learn-more flex items-center justify-center "
                                >
                                    Contact Us
                                </Link>
                                <button className="bg-tran text-[#11AAB5] border border-[#11AAB5] rounded-xl prounded-full w-[143px] h-[49px] font-semibold hover:bg-[#e6fcfa] transition">
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