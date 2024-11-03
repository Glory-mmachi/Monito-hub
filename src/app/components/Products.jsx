import React from "react";
import Image from "next/image";

export default function Products() {
  const petsArray = [
    {
      id: "1",
      name: "Reflex Plus Adult Cat Food Salmon",
      product: "Dog Food",
      size: "385gm",
      price: "140.000 VND",
      imageSrc: "/Reflex_Plus_Adult_Cat_Food_Salmon.svg",
    },
    {
      id: "2",
      name: "Reflex Plus Adult Cat Food Salmon",
      product: "Cat Food",
      size: "1.5kg",
      price: "165.000 VND",
      imageSrc: "/Reflex__Plus_Adult_Cat_Food_Salmon.svg",
    },
    {
      id: "3",
      name: "Cat scratching ball toy kitten sisal rope ball",
      product: "Toy",
      size: "2kg",
      price: "1.100.000 VND",
      imageSrc: "/Cat_scratching_ball_toy_kitten_sisal_rope_ball.svg",
    },
    {
      id: "4",
      name: "Cute Pet Cat Warm Nest",
      product: "Toy",
      size: "3kg",
      price: "410.000 VND",
      imageSrc: "/Cute_Pet_Cat_Warm_Nest.svg",
    },
    {
      id: "5",
      name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
      product: "Dog Food",
      size: "385gm",
      price: "350.000 VND",
      imageSrc: "/NaturVet_Dogs - Omega-Gold_Plus_Salmon_Oil.svg",
    },
    {
      id: "6",
      name: "Costumes Fashion Pet Clother Cowboy Rider",
      product: "Custume",
      size: "1.5kg",
      price: "500.000 VND",
      imageSrc: "/Costumes_Fashion_Pet_Clother_Cowboy_Rider.svg",
    },
    {
      id: "7",
      name: "Costumes Chicken Drumsti ck Headband",
      product: "Custume",
      size: "2gm",
      price: "400.000 VND",
      imageSrc: "/Costumes_Chicken_Drumsti_ck_Headband.svg",
    },
    {
      id: "8",
      name: "Plush Pet Toy",
      product: "Toy",
      size: "2kg",
      price: "250.000 VND",
      imageSrc: "/Plush_Pet_Toy.svg",
    },
  ];

  return (
    <section className="md:px-24 px-4 py-10">
      <div>
        {/* Top section */}
        <section className="flex justify-between items-center">
          <div className="flex md:block flex-col justify-center items-center">
            <h2 className="font-[500] text-[16px]">
              Hard to choose right products for your pets?
            </h2>
            <p className="font-[700] text-[24px] text-[#003459]">
              Our Products
            </p>
          </div>
          <div>
            <button className="hidden md:flex md:justify-center md:items-center text-[#003459] text-[14px] font-[500] border border-[#003459] px-4 lg:px-6 py-2 rounded-[57px] transition-transform duration-200 hover:scale-105">
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
                className="w-[250px] h-[446px] shadow-md flex flex-col px-2 rounded-[12px] gap-8 mx-auto hover:scale-105 transition-transform duration-500"
              >
                 <div className="w-[240px] h-[250px] overflow-hidden rounded-[10px]">
                 <div className="w-full h-full overflow-hidden rounded-[10px] transition-transform duration-500 hover:scale-105">
                <Image
                  className="rounded-[10px]"
                  src={pet.imageSrc}
                  alt={pet.name}
                  width={264}
                  height={264}
                />
              </div>
              </div>
                <div>
                  <h1 className="text-[16px] font-[700]">{pet.name}</h1>
                  <div className="flex items-center gap-1">
                    <p className="text-[#667479] text-[12px] font-[500]">
                      Gene: <span className="font-[700]">{pet.product}</span>
                    </p>
                    <Image src="/dot.svg" alt="dot" width={8} height={8} />
                    <p className="text-[#667479] text-[12px] font-[500]">
                      Age: <span className="font-[700]">{pet.size}</span>
                    </p>
                  </div>
                  <h1 className="text-[14px] font-[700]">{pet.price}</h1>

                  <div className="flex items-center gap-2 pl-2 mt-4 h-[34px] rounded-[8px] bg-[#FCEED5]">
                    <div className="text-[#667479] text-[12px] font-[500]">
                      <Image
                        src="/gift.svg"
                        alt="heart"
                        width={15}
                        height={10}
                      />
                    </div>
                    <Image src="/dot.svg" alt="dot" width={8} height={8} />
                    <p className="text-[#002A48] text-[14px] font-[700]">
                      Free Toy & Free Shaker
                    </p>
                  </div>
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
