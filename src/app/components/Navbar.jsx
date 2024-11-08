"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      
      <div className="z-20 md:px-24 px-2 py-7 relative">
        {/* Mobile view */}
        <div>
          <div className="md:hidden flex justify-between items-center">
            {/* Left Nav (Menu Icon) */}
            <section
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
              onClick={toggleDropdown}
            >
              <Image src="/menu.svg" alt="menu" width={32} height={32} />
            </section>

            {/* Logo */}
            <section className="cursor-pointer transition-opacity duration-200 hover:opacity-80">
              <Image src="/Frame.svg" alt="logo" width={100} height={200} />
            </section>

            {/* Right Nav (Search Icon) */}
            <section className="cursor-pointer transition-transform duration-200 hover:scale-110">
              <Image src="/search.svg" alt="search" width={23} height={23} />
            </section>
          </div>

          {/* Desktop view */}
          <div className="hidden md:flex justify-between items-center">
            {/* Left Nav */}
            <section className="w-[50%]">
              <div className="w-full flex gap-12">
                <Link
                  href="/"
                  className="hover:text-[#316377] transition-colors duration-200"
                >
                  <Image src="/Frame.svg" alt="logo" width={100} height={200} />
                </Link>

                <ul className="hidden md:flex custom:gap-7 md:gap-12 font-[700] text-[16px] text-[#003459]">
                  <li className="group relative">
                    <Link
                      href="/"
                      className="hover:text-[#316377] transition-colors duration-200"
                    >
                      Home
                    </Link>
                    <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-[#003459] transition-all duration-300 group-hover:w-full"></span>
                  </li>
                  <li className="group relative">
                    <Link
                      href="/category"
                      className="hover:text-[#316377] transition-colors duration-200"
                    >
                      Category
                    </Link>
                    <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-[#003459] transition-all duration-300 group-hover:w-full"></span>
                  </li>
                  <li className="group relative">
                    <Link
                      href="/"
                      className="hover:text-[#316377] transition-colors duration-200"
                    >
                      About
                    </Link>
                    <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-[#003459] transition-all duration-300 group-hover:w-full"></span>
                  </li>
                  <li className="group relative">
                    <Link
                      href="/"
                      className="hover:text-[#316377] transition-colors duration-200"
                    >
                      Contact
                    </Link>
                    <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-[#003459] transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Right Nav (Join the Community Button) */}
            <section>
              <button className="hidden md:block bg-[#003459] text-[16px] font-[700] text-white px-6 py-2 rounded-[57px] transition-all duration-300 hover:bg-[#316377] hover:shadow-lg active:scale-95">
                Join the community
              </button>
            </section>
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-16 z-10 left-0 w-full text-[#002A48] text-[24px] font-[700] bg-white opacity-[0.9] shadow-lg transition-opacity duration-300">
              <ul className="flex flex-col items-start p-4 gap-6">
                <li className="cursor-pointer hover:text-[#316377] transition-colors duration-200">
                  <Link href="/">Home</Link>
                </li>
                <li className="cursor-pointer hover:text-[#316377] transition-colors duration-200">
                  <Link href="/">Category</Link>
                </li>
                <li className="cursor-pointer hover:text-[#316377] transition-colors duration-200">
                  <Link href="/">About</Link>
                </li>
                <li className="cursor-pointer hover:text-[#316377] transition-colors duration-200">
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
