import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
    const [about, setAbout] = useState("");

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/about-uses`)
            .then((res) => res.json())
            .then((data) => {
                const heroesArray = data.data; // 5
                const lastHero = heroesArray[heroesArray.length - 1];
                setAbout(lastHero);
            })
            .catch((err) => console.error(err));
    }, []);
    return (
        <div>
            {/* Banner Section */}
            <section className="bg-[#E6F8F8] py-12">
                <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center gap-8">


                    {/* Banner Text */}
                    <div className="flex-1">
                        <h1 className="!font-semibold text-3xl md:text-4xl xl:text-[58px] lg:text-5xl mb-4 lg:mb-8">
                            <span className="outfit text-[#11AAB5]"> {about.aboutHeading}</span></h1>
                        <h2 className="text-[#000] md:text-2xl text-xl lg:text-[35px] font-semibold mb-4 inter">
                            {about.subheading}
                        </h2>
                        <p className="text-[##3F3F3F] md:text-[22px] text-sm font-normal mb-8">
                            {about.discription}
                        </p>
                    </div>
                    {/* Banner Image */}
                    <div className="flex-1">
                        <Image
                            src="/images/aboutBanner.png" // Change to your banner image path
                            alt="About Us"
                            width={600}
                            height={400}
                        />
                    </div>

                </div>
            </section>

            {/* Detail Section */}
            <section className="container max-w-6xl mx-auto px-4 py-12 text-[##3F3F3F] md:text-[22px] text-sm font-normal">
                <p className="mb-4 whitespace-pre-line text-gray-500 italic">
                    {about.details ? about.details : "More information will be available soon."}
                </p>



                {/* Back Button */}
                <Link href="/" className="text-blue-600 hover:underline flex items-center gap-2">
                    ← Back to Home
                </Link>
            </section>
        </div>
    );
};

export default AboutPage;
