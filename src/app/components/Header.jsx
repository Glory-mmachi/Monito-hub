import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Header() {
  return (
    <section className="bg-[#FCEED5] h-screen relative rounded-b-[40px]">
      <div>
        <Navbar />

        {/* Hero section */}
        <main className="md:px-24 px-4 pt-14 text-[#002A48] flex flex-col md:flex-row justify-between">
          {/* Left hero section */}
          <div className="relative md:w-[50%] w-full">
            {/* Shapes and text */}
            <Image
              className="hidden md:block"
              src="/HeroLeftShape.svg"
              alt="bg"
              width={67}
              height={67}
            />
            <h1 className="md:absolute left-3 -top-3 text-[36px] md:text-[45px] font-[800] z-30">
              One more friend
            </h1>
            <h2 className="text-[24px] md:text-[32px] font-[700]">
              Thousands more fun!
            </h2>
            <p className="text-[14px] md:text-[16px] font-[500]">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6 md:mt-8">
              <button className="flex text-[#003459] text-[14px] lg:text-[16px] font-[500] border border-[#003459] px-4 lg:px-6 py-2 rounded-[57px]">
                View intro{" "}
                <span className="border border-[#003459] rounded-[57px] ml-2">
                  <Image
                    src="/playButton.svg"
                    alt="arrow"
                    width={24}
                    height={4}
                  />
                </span>
              </button>
              <button className="bg-[#003459] text-[14px] lg:text-[16px] font-[500] text-[#FFFFFF] px-4 lg:px-6 py-2 rounded-[57px]">
                Explore now
              </button>
            </div>
          </div>

          {/* Bottom image on the left */}
          <Image
            className="absolute hidden md:block bottom-0 left-0"
            src="/heroDown.svg"
            alt="bg"
            width={635}
            height={635}
          />

          {/* Right hero section */}
          <div className="md:w-[50%] w-full mt-8 md:mt-0">
            <div className="relative">
              {/* Decorative shapes */}
              <Image
                className="absolute hidden md:block top-0 left-10 lg:left-28"
                src="/HeroLeftShape.svg"
                alt="bg"
                width={14}
                height={14}
              />
              <Image
                className="absolute hidden md:block top-16 left-8 lg:left-20"
                src="/HeroLeftShape.svg"
                alt="bg"
                width={27}
                height={27}
              />
              <Image
                className="absolute hidden md:block top-[70px] left-8 lg:left-20"
                src="/HeroSmallBlueShape.svg"
                alt="bg"
                width={21}
                height={21}
              />
            </div>

            {/* Right images */}
            <div className="flex justify-end">
              <Image
                className="absolute bottom-0 w-[300px] md:w-[500px]"
                src="/HeroBlueShape.svg"
                alt="bg"
                width={500}
                height={635}
              />
              <Image
                className="absolute bottom-0 w-[350px] md:w-[500px]"
                src="/HeroYellowShape.svg"
                alt="bg"
                width={500}
                height={635}
              />
              <Image
                className="absolute bottom-0 w-[300px] md:w-[500px]"
                src="/HeroImage.svg"
                alt="Hero Image"
                width={350}
                height={450}
              />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}