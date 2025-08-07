import React from 'react'

export default function Index() {


    return (
        <>

            <section className="relative overflow-hidden bg-gradient-to-br from-[#e6fcfa] via-white to-white py-32 -mt-[84px]">
                <img
                    src="/images/Ellipse2.svg"
                    alt="Mobile App"
                    className="absolute top-0 left-0 w-auto"
                />
                <img
                    src="/images/Ellipse1.svg"
                    alt="Decoration Right Center"
                    className="absolute right-0 top-1/2 -translate-y-1/2 md:h-[500px] w-auto"
                />

                <div className=" container mx-auto px-4 2xl:px-10 xl:px-6 relative">
                    <h1 className="text-2xl font-bold">Our Services</h1>
                    <p className="mt-4">Explore the range of services we offer to help your business grow and succeed.</p>
                    <ul className="mt-6 space-y-2">
                        <li>Web Development</li>
                        <li>Mobile App Development</li>
                        <li>UI/UX Design</li>
                        <li>Digital Marketing</li>
                        <li>Cloud Solutions</li>
                        <li>Consulting Services</li>
                    </ul>
                    <p className="mt-4">For more information, feel free to <a href="/contact" className="text-blue-500 underline">contact us</a>.</p>
                    <p className="mt-4">We look forward to working with you!</p>
                </div>
            </section>
        </>
    )
}
