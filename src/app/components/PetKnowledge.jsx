import React from "react";
import Image from "next/image";

export default function PetKnowledge() {
  const petsArray = [
    {
      id: "1",
      title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
      description:
        "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",

      imageSrc: "/pet1.svg",
    },
    {
      id: "2",
      title: "Dog Diet You Need To Know",
      description:
        "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",

      imageSrc: "/pet2.svg",
    },
    {
      id: "3",
      title:
        "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
      description:
        "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",

      imageSrc: "/pet3.svg",
    },
  ];

  return (
    <section className="md:px-24 px-4 py-10">
      <div>
        {/* Top section */}
        <section className="flex justify-between items-center">
          <div className="flex md:block flex-col justify-center items-center">
            <h2 className="font-[500] text-[16px]">You already know ?</h2>
            <p className="font-[700] text-[24px] text-[#003459]">
              Useful pet knowledge
            </p>
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
                className="w-[320px] h-[434px] shadow-md flex flex-col px-2 rounded-[12px] gap-8 mx-auto"
              >
                <Image
                  className="rounded-[10px]"
                  src={pet.imageSrc}
                  alt={pet.imageSrc}
                  width={364}
                  height={240}
                />
                <div className="text-justify ">
                  <button className="bg-[#00A7E7] text-[#fff] text-[12px] font-[500] px-4 py-1 rounded-[28px]">
                    Pet Knowledge
                  </button>
                  <h1 className="text-[16px] font-[700] my-1">{pet.title}</h1>

                  <p className="text-[14px] font-[400]">{pet.description}</p>
                </div>
              </div>
            ))}
          </main>
        </section>
        <div className="flex justify-center items-center w-full">
          <button className="mt-10 flex justify-center items-center w-full  md:hidden text-[#003459] text-[14px]  font-[500] border border-[#003459] py-2 rounded-[57px]">
            View more
            <span className="ml-2">
              <Image src="/forwardArrow.svg" alt="arrow" width={4} height={7} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
