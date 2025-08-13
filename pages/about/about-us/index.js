import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
    return (
        <div>
            {/* Banner Section */}
            <section className="bg-[#E6F8F8] py-12">
                <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center gap-8">


                    {/* Banner Text */}
                    <div className="flex-1">
                        <h1 className="!font-semibold text-3xl md:text-4xl xl:text-[58px] lg:text-5xl mb-4 lg:mb-8">
                            <span className="outfit text-[#11AAB5]">About US</span></h1>           
                             <h2 className="text-[#000] md:text-2xl text-xl lg:text-[35px] font-semibold mb-4 inter">
                            We Build Digital Solutions That Drive Growth
                        </h2>
                        <p className="text-[##3F3F3F] md:text-[22px] text-sm font-normal mb-8">
                            Concept Softworks is a software company dedicated to building
                            custom solutions for clients across industries — from financial
                            institutions and medical companies to tech innovators and
                            government organizations.
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
                <p className="mb-4">
                    Concept Softworks is a forward-thinking software development company
                    dedicated to building tailored digital solutions for a diverse range
                    of industries. Our mission is to empower organizations with
                    innovative, reliable, and scalable software that helps them thrive in
                    a competitive world.
                </p>

                <p className="mb-4">
                    Since our inception, we’ve worked with clients in finance, healthcare,
                    technology, and government sectors, delivering projects that meet the
                    highest standards of quality and security. We believe in combining
                    technical excellence with deep industry knowledge to ensure every
                    product is a perfect fit for our clients’ needs.
                </p>

                <p className="mb-4">
                    Our development process is centered around collaboration. From the
                    very first consultation, we work closely with our clients to
                    understand their goals, challenges, and vision. This ensures that
                    every project is aligned with their strategic objectives.
                </p>

                <p className="mb-4">
                    At Concept Softworks, we also place a strong emphasis on innovation.
                    We continually explore new technologies, frameworks, and methodologies
                    to stay ahead of the curve and provide solutions that are both
                    cutting-edge and future-proof.
                </p>

                <p className="mb-4">
                    Our team consists of skilled professionals who are passionate about
                    their craft. We foster a culture of learning and improvement, enabling
                    us to deliver exceptional value to our clients time and again.
                </p>

                <p className="mb-4">
                    Looking ahead, our vision is to become a global leader in software
                    development, known for our commitment to quality, innovation, and
                    client satisfaction.
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
