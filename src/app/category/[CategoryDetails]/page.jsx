"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // core Swiper styles
import "swiper/css/navigation"; // styles for specific modules
import "swiper/css/pagination";

export default function page() {
  return (
    <section>
      <Navbar />
      <section className="align-middle">
        <main className="flex flex-col md:flex-row mt-7 gap-6 px-4 md:px-10 lg:px-20">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="w-full max-w-[460px] overflow-hidden flex flex-col gap-4 items-center">
              <Image
                className="rounded-[10px] w-full"
                src="/pomeranian_white_White.jpg"
                alt="dog"
                width={460}
                height={400}
              />
              <div className="flex gap-4 overflow-x-auto">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <Image
                      key={index}
                      className="rounded-[6px] w-[94px] h-[94px] flex-shrink-0"
                      src="/pomeranian_white_White.jpg"
                      alt={`dog ${index}`}
                      width={94}
                      height={94}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-[20px] md:text-[24px] font-[700] text-[#00171F]">
              Shiba Inu Sepia
            </h1>
            <p className="text-[18px] md:text-[20px] font-[700] text-[#002A48]">
              34.000.000 VND
            </p>

            {/* buttons */}
            <div className="flex gap-4 mt-6 md:mt-8">
              <button className="bg-[#003459] text-[14px] lg:text-[16px] font-[500] text-white px-4 lg:px-6 py-2 rounded-full transition-all duration-300 hover:bg-[#316377] hover:shadow-lg active:scale-95">
                Contact us
              </button>
              <button className="flex items-center text-[#003459] text-[14px] lg:text-[16px] font-[500] border border-[#003459] px-4 lg:px-6 py-2 rounded-full transition-transform duration-200 hover:scale-105">
                <span className="border border-[#003459] rounded-full mr-2 p-1">
                  <Image
                    src="/Chat_Dots.svg"
                    alt="chat"
                    width={24}
                    height={24}
                  />
                </span>
                Chat with Monito
              </button>
            </div>

            {/* Responsive Table */}
            <div className="mt-8 overflow-x-auto">
              <table className="min-w-full">
                <tbody className="text-[14px] font-[500] text-[#667479]">
                  {[
                    { label: "SKU", value: "#1000078" },
                    { label: "Gender", value: "Female" },
                    { label: "Age", value: "2 Months" },
                    { label: "Size", value: "Small" },
                    { label: "Colour", value: "Appricot & Tan" },
                    { label: "Vaccinated", value: "Yes" },
                    { label: "Dewormed", value: "Yes" },
                    { label: "Cert", value: "Yes (MKA)" },
                    { label: "Microchip", value: "Yes" },
                    { label: "Location", value: "Vietnam" },
                    { label: "Published Date", value: "12-Oct-2022" },
                    {
                      label: "Additional Information",
                      value: `Pure breed Shih Tzu. Good body structure.
                              With MKA cert and Microchip. Father from champion lineage.`,
                    },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-300">
                      <td className="px-4 py-2">{row.label}</td>
                      <td className="px-4 py-2">: {row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </section>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={5} // Reduced gap between slides
        slidesPerView={2.5} // 1 slide per view on mobile by default
        pagination={{ clickable: true }}
        navigation={false}
        breakpoints={{
          640: {
            slidesPerView: 2.5, // 2 slides per view on small screens
            spaceBetween: 5, // Reduced gap
          },
          768: {
            slidesPerView: 3.5, // 3 slides per view on medium screens
            spaceBetween: 5, // Reduced gap
          },
          1024: {
            slidesPerView: 4.5, // 4 slides per view on large screens
            spaceBetween: 5, // Reduced gap
          },
        }}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src="/pomeranian_white_White.jpg"
              alt={`Customer ${index}`}
              width={328}
              height={853}
              className="rounded-lg w-full h-auto mt-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12" // Padding remains the same
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Footer />
    </section>
  );
}
