import React from "react";
import Image from "next/image";
export default function AdoptionHero() {
  return (
    <section className="md:px-24 px-4 py-10">
      <section className="flex justify-between items-center">
        <div className="flex md:block flex-col justify-center items-center">
          <h2 className="font-[500] text-[16px]">
            Proud to be part of
            <span className="font-[700] text-[24px] pl-1 text-[#003459]">
              Pet Sellers
            </span>
          </h2>
        </div>
        <div>
          <button className="hidden md:flex md:justify-center md:items-center text-[#003459] text-[14px] font-[500] border border-[#003459] px-4 lg:px-6 py-2 rounded-[57px] transition-transform duration-200 hover:scale-105">
            View more
            <span className="ml-2">
              <Image src="/forwardArrow.svg" alt="arrow" width={4} height={7} />
            </span>
          </button>
        </div>
      </section>
      <section className="flex flex-wrap items-center md:gap-[4.5rem]">
        <Image src="/sheba.svg" alt="logo" width={88} height={64} />
        <Image src="/whiska.svg" alt="logo" width={88} height={64} />
        <Image src="/baker.svg" alt="logo" width={88} height={64} />
        <Image src="/felix.svg" alt="logo" width={88} height={64} />
        <Image src="/good_boy.svg" alt="logo" width={88} height={64} />
        <Image src="/butcher.svg" alt="logo" width={88} height={64} />
        <Image src="/pedigree.svg" alt="logo" width={88} height={64} />
      </section>
      <div className="max-w-[1080px] mx-auto h-auto rounded-[20px] overflow-hidden bg-[#FFB775] relative flex flex-col md:flex-row justify-between">
        {/* Background Images */}
        <Image
          className="absolute bottom-0 z-10 hidden md:block"
          src="/AdoptYellow_shape.svg"
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
          className="absolute bottom-0 right-0 z-20 md:block"
          src="/adoptRight_shape.svg"
          alt="background-yellow"
          width={587}
          height={687}
        />

        {/* Right Section (Text and Buttons) */}
        <div className="z-20 bg-amber-40 pr-12 pt-7 text-[#003459] w-full text-center md:text-right md:order-1">
          <div className="md:text-start px-4 md:pl-16">
            <h1 className="text-[28px] md:text-[52px] font-[800]">Adoption</h1>
            <h2 className="text-[30px] font-[700]">
              We need help. so do they.
            </h2>
            <p className="text-[12px] font-[500] md:mt-2">
              Adopt a pet and give it a home,
              <br />
              it will be love you back unconditionally.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-4 justify-center md:justify-start">
              <button className="flex items-center justify-center text-[#003459] text-[14px] lg:text-[16px] font-[500] border border-[#003459] px-4 lg:px-6 py-2 rounded-[57px] transition-transform duration-200 hover:scale-105">
                View intro
                <span className="ml-2">
                  <Image
                    src="/playButton.svg"
                    alt="play-button"
                    width={24}
                    height={4}
                  />
                </span>
              </button>
              <button className="bg-[#003459] text-[14px] lg:text-[16px] font-[500] text-[#FFFFFF] px-4 lg:px-6 py-2 rounded-[57px]   transition-all duration-300 hover:bg-[#316377] hover:shadow-lg active:scale-95">
                Explore now
              </button>
            </div>
          </div>
        </div>

        {/* Left Section (Pet Image) */}
        <div className="relative w-full z-20 flex justify-center items-end md:order-2">
          <Image
            src="/dog_hand.svg"
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
