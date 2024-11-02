import React from "react";
import Image from "next/image";

export default function Categories() {
  const petsArray = [
    {
      id: "1",
      name: "MO231 - Pomeranian White",
      gene: "Male",
      age: "02 months",
      price: "6.900.000 VND",
      imageSrc: "/pomeranian_white.svg",
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

  return (
    <section className="md:px-24 px-4 py-10">
      <div>
        {/* Top section */}
        <section className="flex justify-between items-center">
          <div className="flex md:block flex-col justify-center items-center">
            <p className="font-[500] text-[16px]">Whats new?</p>
            <h2 className="font-[700] text-[24px] text-[#F7DBA7]">
              Take a look at some of our pets
            </h2>
          </div>
          <div>
            <button className="hidden md:flex md:justify-center md:items-center text-[#003459] text-[14px] font-[500] border border-[#003459] px-4 lg:px-6 py-2 rounded-[57px]">
              View more
              <span className="ml-2">
                <Image
                  src="/forwardArrow.svg"
                  alt="arrow"
                  width={4}
                  height={7}
                />
              </span>
            </button>
          </div>
        </section>
        {/* Category section */}
        <section className="flex justify-center">
          <main className="mt-10 flex flex-wrap gap-4 justify-center">
            {petsArray.map((pet) => (
              <div
                key={pet.id}
                className="w-[250px] h-[375px] shadow-md flex flex-col pl-2 rounded-[12px] gap-2 mx-auto"
              >
                <Image
                  className="rounded-[10px]"
                  src={pet.imageSrc}
                  alt={pet.name}
                  width={264}
                  height={264}
                />
                <h1 className="text-[16px] font-[700]">{pet.name}</h1>
                <div className="flex items-center gap-1">
                  <p className="text-[#667479] text-[12px] font-[500]">
                    Gene: <span className="font-[700]">{pet.gene}</span>
                  </p>
                  <Image src="/dot.svg" alt="dot" width={8} height={8} />
                  <p className="text-[#667479] text-[12px] font-[500]">
                    Age: <span className="font-[700]">{pet.age}</span>
                  </p>
                </div>
                <h1 className="text-[14px] font-[700]">{pet.price}</h1>
              </div>
            ))}
          </main>
        </section>
        <div className="flex justify-center items-center w-full">
        <button className="mt-10 flex justify-center items-center w-full  md:hidden text-[#003459] text-[14px]  font-[500] border border-[#003459] py-2 rounded-[57px]">
              View more
              <span className="ml-2">
                <Image
                  src="/forwardArrow.svg"
                  alt="arrow"
                  width={4}
                  height={7}
                />
              </span>
            </button></div>
      </div>
    </section>
  );
}
