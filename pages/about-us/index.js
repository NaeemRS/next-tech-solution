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
                    <p className='text-2xl font-bold'>About Us</p>
                </div>
            </section>
        </>
    )
}
