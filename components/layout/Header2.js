import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [scroll, setScroll] = useState(false);

  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1023) {
        setToggle(false);
      }
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  // Helper function to check if services route is active
  const isServicesActive = () => {
    return router.asPath === "/services" || router.asPath.startsWith("/services/");
  };

  // Function to handle scroll to section
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

  // Function to navigate to services page and then scroll to services section
  const handleServicesAndScroll = () => {
    if (router.asPath === '/services') {
      // Already on services page, just scroll to services section
      handleScrollTo('services');
    } else {
      // Navigate to services page first, then scroll after navigation
      router.push('/services').then(() => {
        // Small delay to ensure page is loaded
        setTimeout(() => {
          handleScrollTo('services');
        }, 100);
      });
    }
  };

  // Function to navigate to about page and then scroll to about section
  const handleAboutUsAndScroll = () => {
    if (router.asPath === '/about') {
      // Already on about page, just scroll to about section
      handleScrollTo('about');
    } else {
      // Navigate to about page first, then scroll after navigation
      router.push('/about').then(() => {
        // Small delay to ensure page is loaded
        setTimeout(() => {
          handleScrollTo('about');
        }, 100);
      });
    }
  };

  return (
    <>
      <header>
        <nav
          className={`text-lg fixed w-full inter lg:py-3 py-2 z-[999] ${scroll ? " shadow-lg bg-white" : " bg-transparent "
            } `}
        >
          <div className="container mx-auto px-4 2xl:px-10 xl:px-6">
            <div className="flex flex-wrap items-center justify-between w-full md:py-0">
              <div>
                <Link
                  className="lg:h-[60px] md:h-14 flex items-center h-12 hover:opacity-90 transition-opacity duration-300"
                  href="/"
                >
                  <div className="flex items-center text-white">
                    <img
                      src="/images/logo.png"
                      alt="logo"
                      className="lg:h-[60px] md:h-14 flex items-center h-12"
                    />
                  </div>
                </Link>
              </div>

              <button
                className="lg:hidden md:inline-block inline-block border-0 py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline hover:bg-gray-100 rounded-lg transition-colors duration-300"
                type="button"
                onClick={toggleMenu}
              >
                <Icon icon="mingcute:menu-fill" color="#061E42" width="25" height="25" />
              </button>
              <div
                className={`flex lg:items-center lg:w-auto uppercase md:bg-nav lg:bg-transparent fixed lg:border-0 border-l border-[#DDE2E4] top-0 right-0 bottom-0 lg:relative xl:w-auto z-50  ${isMenuOpen
                  ? "md:w-[50%] w-[70%]"
                  : " lg:inline-block md:hidden hidden"
                  }`}
                style={{ transition: "all .3s ease-in-out" }}
              >
                <ul className="relative pt-4 text-[#454545] lg:gap-12 gap-5 gap-y-3 navbar-nav-div md:pt-0">
                  <li className="flex justify-end w-full pb-3 text-right lg:pt-0 lg:pb-0 ">
                    <button
                      className="lg:hidden border-0 py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline text-white rounded-lg transition-colors duration-300"
                      type="button"
                      onClick={toggleMenu}
                    >
                      <Icon icon="maki:cross" color="#061E42" width="25" height="25" />
                    </button>
                  </li>
                  <li>
                    <Link className="block py-2 md:p-4 group" href="/">
                      <div
                        className={`w-full text-center whitespace-nowrap cursor-pointer text-[22px] font-semibold capitalize transition-colors duration-300 hover:text-[#11AAB5] ${router.asPath === "/" && "redClr "
                          } `}
                        onClick={toggleMenu}
                      >
                        home
                      </div>
                    </Link>
                  </li>
                  <li>
                    {/* Replace Link with button for custom navigation */}
                    <button
                      className="block py-2 md:p-4 w-full group"
                      onClick={() => {
                        handleServicesAndScroll();
                        toggleMenu();
                      }}
                    >
                      <div
                        className={`w-full text-center whitespace-nowrap cursor-pointer text-[22px] font-semibold capitalize transition-colors duration-300 hover:text-[#11AAB5] ${isServicesActive() && "redClr "
                          } `}
                      >
                        Services
                      </div>
                    </button>
                  </li>
                  <li>
                    {/* Replace Link with button for custom navigation */}
                    <button
                      className="block py-2 md:p-4 w-full group"
                      onClick={() => {
                        handleAboutUsAndScroll();
                        toggleMenu();
                      }}
                    >
                      <div
                        className={`w-full text-center whitespace-nowrap cursor-pointer text-[22px] font-semibold capitalize transition-colors duration-300 hover:text-[#11AAB5] ${router.asPath === "/about" && "redClr "
                          } `}
                      >
                        About Us
                      </div>
                    </button>
                  </li>
                  <li className="flex items-center justify-center w-1/3 lg:ml-6 mx-auto cursor-pointer first-line: md:w-auto nav-item">
                    <button
                      onClick={() => {
                        handleHomeAndScroll('contact');
                        toggleMenu();
                      }}
                      className="whitespace-nowrap rounded-full md:w-[143px] px-2 cursor-pointer md:h-[49px] md:py-0 py-2 mx-auto text-white lg:text-lg text-sm contactbtn flex items-center justify-center transition-all duration-50 hover:scale-105  "
                    >
                      Contact Us
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}