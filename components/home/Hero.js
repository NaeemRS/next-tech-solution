'use client'
import { useRouter } from "next/router";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
    const router = useRouter();
    const [hero, setHero] = useState(null);

    useEffect(() => {
         fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/heroes`)

            .then((res) => res.json())
            .then((data) => {
                const heroesArray = data.data;
                const lastHero = heroesArray[heroesArray.length - 1];
                setHero(lastHero);
            })
            .catch((err) => console.error(err));
    }, []);

    const handleScrollTo = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleHomeAndScroll = (sectionId) => {
        if (router.asPath === '/') {
            handleScrollTo(sectionId);
        } else {
            router.push('/').then(() => {
                setTimeout(() => {
                    handleScrollTo(sectionId);
                }, 100);
            });
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9, x: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const statsVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <section
            className="relative overflow-hidden bg-gradient-to-br from-[#e6fcfa] via-white to-white lg:pt-36 pt-32 lg:py-28 md:pb-20 pb-5 -mt-[84px]"
        >
            <motion.img
                src="/images/Ellipse2.svg"
                alt="Mobile App"
                className="absolute top-0 left-0 md:w-auto w-[50%]"
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.7, 0.5]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.img
                src="/images/Ellipse1.svg"
                alt="Decoration Right Center"
                className="absolute right-0 top-1/2 -translate-y-1/2"
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.7, 0.5]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            <div className="container mx-auto px-4 2xl:px-10 xl:px-6 relative">
                <motion.div
                    className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="lg:w-2/5 md:w-1/2 w-full">
                        <motion.div variants={itemVariants}>
                            <motion.h1
                                className="font-semibold text-3xl md:text-4xl mb-4 lg:mb-8"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                {hero?.heading || "Let's Build"}{" "}
                                <span className="bg-gradient-to-r from-[#11AAB5] to-[#0F5168] bg-clip-text text-transparent">
                                    {hero?.heading2 || "Your Web App!"}
                                </span>
                            </motion.h1>
                            <motion.p
                                className="text-[#5C5C5C] md:text-[22px] text-sm font-normal mb-8"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            >
                                {hero?.discription || "NexTech is a global, full service digital partner specialising in Website Design, Development, Strategy and Managed Services. Share your idea with us and let's get started right now!"}
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="flex gap-4 mb-9"
                            variants={itemVariants}
                        >
                            <motion.button
                                onClick={() => handleHomeAndScroll('contact')}
                                className="whitespace-nowrap rounded-full w-[143px] h-[49px] text-white lg:text-lg text-sm contactbtn flex items-center justify-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                Contact Us
                            </motion.button>

                            <motion.button
                                onClick={() => handleHomeAndScroll('portfolio')}
                                className="bg-white text-[#11AAB5] border border-[#11AAB5] rounded-full w-[143px] h-[49px] font-semibold hover:bg-[#e6fcfa]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                Portfolio
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="flex gap-12 flex-wrap mt-6 inter lg:justify-start justify-center"
                            variants={itemVariants}
                        >
                            {[
                                {
                                    value: hero?.ProjectsCompleted || 501,
                                    suffix: '+',
                                    label: 'Projects Completed'
                                },
                                {
                                    value: hero?.ClientSatisfaction || 98,
                                    suffix: '%',
                                    label: 'Client Satisfaction'
                                },
                                {
                                    value: 5,
                                    suffix: '+',
                                    label: 'Years Experience'
                                }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    variants={statsVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="font-bold text-lg text-black text-center">
                                        <CountUp
                                            start={0}
                                            end={stat.value}
                                            duration={2}
                                            separator=","
                                            suffix={stat.suffix}
                                            decimals={0}
                                        />
                                    </div>
                                    <div className="text-[#515151] text-[13px] font-medium inter">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        className="lg:w-3/5 md:w-1/2 w-full relative flex justify-center items-center"
                        variants={imageVariants}
                    >
                        <motion.div
                            className="relative z-10"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <img
                                src="/images/heroImage.png"
                                alt="Mobile App"
                                className="object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}