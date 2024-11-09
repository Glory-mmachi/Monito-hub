"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // core Swiper styles
import "swiper/css/navigation"; // styles for specific modules
import "swiper/css/pagination";

export default function PetPage({ params }) {
  const petsArray = [
    {
      id: "1",
      name: "MO231 - Pomeranian White",
      gene: "Male",
      age: "02 months",
      price: "6.900.000 VND",
      imageSrc: "/pomeranian_white_White.jpg",
    },
    {
      id: "2",
      name: "MO502 - Poodle Tiny Yellow",
      gene: "Female",
      age: "02 months",
      price: "3.900.000 VND",
      imageSrc: "/Poodle_Tiny_Yellow.svg",
    },
    {
      id: "3",
      name: "MO102 - Poodle Tiny Sepia",
      gene: "Male",
      age: "02 months",
      price: "4.000.000 VND",
      imageSrc: "/Poodle_Tiny_Sepia.svg",
    },
    {
      id: "4",
      name: "MO512 - Alaskan Malamute Grey",
      gene: "Male",
      age: "02 months",
      price: "8.900.000 VND",
      imageSrc: "/Alaskan_Malamute_Grey.svg",
    },
    {
      id: "5",
      name: "MO231 - Pembroke Corgi Cream",
      gene: "Male",
      age: "02 months",
      price: "7.800.000 VND",
      imageSrc: "/Pembroke_Corgi_Cream.svg",
    },
    {
      id: "6",
      name: "MO502 - Pembroke Corgi Tricolor",
      gene: "Female",
      age: "02 months",
      price: "9.000.000 VND",
      imageSrc: "/Pembroke_Corgi_Tricolor.svg",
    },
    {
      id: "7",
      name: "MO237 - Pomeranian White",
      gene: "Female",
      age: "02 months",
      price: "6.500.000 VND",
      imageSrc: "/Pomeranian__White.svg",
    },
    {
      id: "8",
      name: "MO512 - Poodle Tiny Dairy Cow",
      gene: "Male",
      age: "02 months",
      price: "5.000.000 VND",
      imageSrc: "/Poodle_Tiny_Dairy_Cow.svg",
    },
  ];
  const images = [
    "/image1.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
    "/image3.png",
    "/image4.png",
  ];

  // State for managing the main image
  const [mainImage, setMainImage] = useState("");

  // Effect to update the main image on component mount
  useEffect(() => {
    const selectedPet = petsArray.find(
      (pet) => pet.id === params.CategoryDetails
    );
    if (selectedPet) {
      setMainImage(selectedPet.imageSrc);
    }
  }, [params.CategoryDetails]);

  return (
    <section>
      <Navbar />
      <section className="align-middle">
        <main className="flex flex-col md:flex-row mt-7 gap-6 px-4 md:px-10 lg:px-20">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="w-full max-w-[460px] overflow-hidden flex flex-col gap-4 items-center">
              {/* Main Image */}
              <Image
                className="rounded-[10px] w-full"
                src={mainImage}
                alt="Selected Pet"
                width={460}
                height={400}
              />

              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto custom-scrollbar">
                {petsArray.map((pet) => (
                  <Image
                    key={pet.id}
                    className={`rounded-[6px] w-[94px] h-[94px] flex-shrink-0 cursor-pointer border-2 
                      ${
                        mainImage === pet.imageSrc
                          ? "border-[#003459]"
                          : "border-transparent"
                      }
                      hover:border-[#316377] active:border-[#316377]`}
                    src={pet.imageSrc}
                    alt={`dog ${pet.id}`}
                    width={94}
                    height={94}
                    onClick={() => setMainImage(pet.imageSrc)}
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

            {/* Buttons */}
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
                      value: `Pure breed Shih Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage.`,
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
      <main className=" px-4 md:px-10 lg:px-20">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={5} // Reduced gap between slides
        slidesPerView={2.5} // Default for mobile
        pagination={{
          clickable: true,
          el: ".swiper-pagination", // Target custom pagination
        }}
        navigation={false} // Disable navigation buttons
        breakpoints={{
          640: {
            slidesPerView: 2.5, // For small screens
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3.5, // For medium screens
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4.5, // For large screens
            spaceBetween: 5,
          },
        }}
        className="mySwiper"
      >
        {images.map((pet, index) => (
          <SwiperSlide key={index}>
            <Image
              src={pet}
              alt={`Customer ${index}`}
              width={328}
              height={853}
              className="rounded-lg w-full h-auto mt-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
            />
          </SwiperSlide>
        ))}
        {/* Custom Pagination Container */}
        <div className="swiper-pagination"></div>{" "}
      </Swiper>
      </main>
      <Categories />

      <Footer />
    </section>
  );
}
