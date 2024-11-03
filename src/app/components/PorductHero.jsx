import React from "react";
import Image from "next/image";

export default function ProductHero() {
  return (
    <section className="md:px-24 px-4 py-10">
      <div className="max-w-[1080px] mx-auto h-auto rounded-[20px] overflow-hidden bg-[#003459] relative flex flex-col md:flex-row justify-between">
        
        {/* Background Images */}
        <Image
          className="absolute bottom-0 z-10 md:block"
          src="/Sec_section_Angle.svg"
          alt="background"
          width={657}
          height={687}
        />
        <Image
          className="absolute top-0 z-10 md:hidden"
          src="/mobile_sec_section.svg"
          alt="mobile-background"
          width={587}
          height={687}
        />
        <Image
          className="absolute right-0 z-20 hidden md:block"
          src="/SecYellow_angle.svg"
          alt="background-yellow"
          width={587}
          height={687}
        />

        {/* Right Section (Text and Buttons) */}
        <div className="z-20 bg-amber-40 pr-12 pt-7 text-[#003459] w-full text-center md:text-right md:order-2">
          <div className="md:text-end px-4 md:px-0">
            <h1 className="text-[28px] md:text-[45px] font-[800]">One more friend</h1>
            <h2 className="text-[24px] md:text-[36px] font-[700]">Thousands more fun!</h2>
            <p className="text-[12px] md:text-[14px] font-[500] md:mt-2">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-4 justify-center md:justify-end">
              <button className="flex items-center justify-center text-[#003459] text-[14px] lg:text-[16px] font-[500] border border-[#003459] px-4 lg:px-6 py-2 rounded-[57px] transition-transform duration-200 hover:scale-105">
                View intro
                <span className="border border-[#003459] rounded-[57px] ml-2">
                  <Image
                    src="/playButton.svg"
                    alt="play-button"
                    width={24}
                    height={4}
                  />
                </span>
              </button>
              <button className="bg-[#003459] text-[14px] lg:text-[16px] font-[500] text-[#FFFFFF] px-4 lg:px-6 py-2 rounded-[57px]  transition-all duration-300 hover:bg-[#316377] hover:shadow-lg active:scale-95">
                Explore now
              </button>
            </div>
          </div>
        </div>

        {/* Left Section (Pet Image) */}
        <div className="relative w-full z-20 flex justify-center items-end md:order-1">
          <Image
            src="/pet_sec_section.svg"
            alt="pet"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
}
