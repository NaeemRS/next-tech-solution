import { useRouter } from 'next/router';
import React from 'react';
import { motion } from 'framer-motion';

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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 200
            }
        }
    };

    return (
        <div className="lg:py-20 md:py-12 py-8">
            <div className="container mx-auto px-4 2xl:px-10 xl:px-6 relative">
                <motion.div
                    className="md:rounded-3xl rounded-xl lg:py-16 md:py-14 py-10 px-8 text-center bg-[linear-gradient(360deg,_#11AAB5_0%,_#9CE0FF_100%)]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <motion.h2
                        className="text-2xl lg:text-[35px] font-semibold mb-4 inter text-white"
                        variants={itemVariants}
                    >
                        Ready to Start Your Project?
                    </motion.h2>
                    
                    <motion.p
                        className="text-lg inter text-white/90 mb-8 max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        Let's discuss how we can help you achieve your digital goals with our expertise and innovative solutions.
                    </motion.p>
                    
                    <motion.button
                        onClick={() => handleHomeAndScroll('contact')}
                        className="bg-white text-cyan-500 font-semibold md:px-8 px-3 md:py-4 py-2 rounded-full hover:bg-gray-50 md:text-lg text-sm"
                        variants={buttonVariants}
                        whileHover={{ 
                            scale: 1.05,
                            y: -5,
                            boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        Get Free Consultation
                    </motion.button>

                    {/* Animated background effect */}
                    <motion.div
                        className="absolute inset-0 rounded-3xl opacity-20 pointer-events-none"
                        animate={{
                            background: [
                                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                                "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)"
                            ]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
}