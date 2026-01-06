import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
 
export default function AboutUs() {
  const router = useRouter();
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/about-uses")
      .then((res) => res.json())
      .then((data) => {
        const heroesArray = data.data;
        const lastHero = heroesArray[heroesArray.length - 1];
        setAbout(lastHero);
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
    if (router.asPath === '/about') {
      handleScrollTo(sectionId);
    } else {
      router.push('/about').then(() => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -50 },
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

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headingVariants = {
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#E3FDFF] lg:py-20 py-10">
        <div className="container mx-auto px-4 2xl:px-10 xl:px-6 relative">
          <motion.div
            className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
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
                  src={about?.inageBanner || "/images/aboutBanner.png"}
                  alt="Mobile App"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:w-2/5 md:w-1/2 w-full"
              variants={textVariants}
            >
              <motion.h1
                className="!font-semibold text-3xl md:text-4xl xl:text-[58px] lg:text-5xl mb-4 lg:mb-8"
                variants={headingVariants}
              >
                <span className="outfit text-[#11AAB5]">
                  {about?.aboutHeading || "About Us"}
                </span>
              </motion.h1>

              <motion.h4
                className="text-[#000] md:text-2xl text-xl lg:text-[35px] font-semibold mb-4 inter"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {about?.subheading || "Building Digital Excellence"}
              </motion.h4>

              <motion.p
                className="text-[#3F3F3F] md:text-[22px] text-sm font-normal mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {about?.discription || "We are passionate about creating innovative digital solutions that help businesses thrive in the modern world."}
              </motion.p>

              <motion.div
                className="flex gap-4 mb-9"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  custom={0}
                  variants={buttonVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link
                    href="/about/about-us"
                    className="whitespace-nowrap rounded-lg w-[143px] h-[49px] text-white lg:text-lg text-sm learn-more flex items-center justify-center"
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      Learn More
                    </motion.span>
                  </Link>
                </motion.div>

                <motion.button
                  onClick={() => {
                    handleHomeAndScroll('our-team');
                  }}
                  className="bg-transparent text-[#11AAB5] border border-[#11AAB5] rounded-lg w-[143px] h-[49px] font-semibold hover:bg-[#e6fcfa] flex items-center justify-center"
                  custom={1}
                  variants={buttonVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Meet Our Team
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}