import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#06686e] text-white pt-10 pb-0 border-t border-[#1a7c82]">
      <div className="container mx-auto px-4 2xl:px-10 xl:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 px-4">
          {/* Logo & About */}
          <div className='inter'>
            <img src="/images/logo.png" alt="Next Tech Solution" className="mb-4 w-48" />
            <p className="text-base inter mb-4">
              We&apos;re a team of passionate developers creating innovative digital solutions that help businesses thrive in the modern world.
            </p>
            <div className="flex items-center gap-2 text-sm mb-1 lg:mb-4 md:mb-3">
              <Icon icon="mdi:email-outline" className="text-lg text-[#11AAB5]" />
              <a href="mailto:nextechsolution@gmail.com" className="hover:underline">
                nextechsolution@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm mb-1 lg:mb-4 md:mb-3">
              <Icon icon="mdi:phone" className="text-lg text-[#11AAB5]" />
              <a href="tel:+92364764897" className="hover:underline">
                +92364764897
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon icon="mdi:map-marker-outline" className="text-lg text-[#11AAB5]" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=123+Tech+Street,+Digital+City"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                123 Tech Street, Digital City
              </a>
            </div>
          </div>
          {/* Company */}
          <div>
            <h4 className="font-bold md:text-xl text-base mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/how-it-works">How it works</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/areas-we-serve">Areas We Serve</Link></li>
            </ul>
          </div>
          {/* Links */}
          <div>
            <h4 className="font-bold md:text-xl text-base mb-3">Links</h4>
            <ul className="space-y-2 text-sm !popins">
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/how-it-works">How it works</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/areas-we-serve">Areas We Serve</Link></li>
            </ul>
          </div>
          {/* Newsletter & Social */}
          <div>
            <h4 className="font-bold md:text-xl text-base mb-3">Keep Updated!</h4>
            <p className="text-sm mb-3">Subscribe to our newsletter to get new news and offers</p>
            <form className="flex mb-4 bg-white rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Email"
                className="rounded-l-full px-4 py-2 text-black w-full focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-r-full px-4 py-2 bg-gradient-to-r from-[#11AAB5] to-[#0F5168] text-white whitespace-nowrap font-semibold"
              >
                Subscribe now
              </button>
            </form>
            <div className="flex gap-3 justify-start mt-2">
              <a href="#" aria-label="Facebook" className="bg-white text-[#000] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#11AAB5] hover:text-white transition">
                <Icon icon="ri:facebook-fill" className="text-lg" />
              </a>
              <a href="#" aria-label="Instagram" className="bg-white text-[#000] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#11AAB5] hover:text-white transition">
                <Icon icon="basil:instagram-solid" className="text-lg" />
              </a>
              <a href="#" aria-label="Twitter" className="bg-white text-[#000] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#11AAB5] hover:text-white transition">
                <Icon icon="uil:twitter" className="text-lg" />
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-white text-[#000] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#11AAB5] hover:text-white transition">
                <Icon icon="basil:linkedin-solid" className="text-lg" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#1a7c82] py-4 mt-2 text-center text-sm">
          © 2023 Copyright by NexTech Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
