"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Image
        className="absolute top-0 z-10"
        src="/headerShape.svg"
        alt="bg"
        width={400}
        height={300}
      />
      <div className="z-20 md:px-24 px-2 py-7 relative">
        {/* mobile view */}
        <div>
          <div className="md:hidden flex justify-between items-center">
            {/* Left Nav */}
            <section className="cursor-pointer" onClick={toggleDropdown}>
              <Image src="/menu.svg" alt="menu" width={32} height={32} />
            </section>
            <section className="cursor-pointer">
              <Image src="/Frame.svg" alt="logo" width={100} height={200} />
            </section>
            {/* Right Nav */}
            <section className="cursor-pointer">
              <Image src="/search.svg" alt="search" width={23} height={23} />
            </section>
          </div>

          {/* desktop view*/}
          <div className="hidden md:flex justify-between items-center">
            {/* Left Nav */}
            <section className="w-[50%]">
              <div className="w-full flex gap-12">
                <Image src="/Frame.svg" alt="logo" width={100} height={200} />
                <ul className="hidden md:flex custom:gap-7 md:gap-12 font-[700] text-[16px] text-[#003459]">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">Category</Link>
                  </li>
                  <li>
                    <Link href="/">About</Link>
                  </li>
                  <li>
                    <Link href="/">Contact</Link>
                  </li>
                </ul>
              </div>
            </section>
            {/* Right Nav */}
            <section>
              <button className="hidden md:block bg-[#003459] text-[16px] font-[700] text-[#FFFFFF] px-6 py-2 rounded-[57px]">
                Join the community
              </button>
            </section>
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-16 z-10 left-0 w-full text-[#002A48] text-[24px] font-[700] bg-white opacity-[0.7] shadow-lg">
              <ul className="flex flex-col items-start p-4 gap-6">
                <li className="cursor-pointer ">
                  <a href="/">Home</a>
                </li>
                <li className="cursor-pointer">
                  <a href="/">Category</a>
                </li>
                <li className="cursor-pointer">
                  <a href="/">About</a>
                </li>
                <li className="cursor-pointer">
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
