import Image from "next/image";
import Header from "./components/Header";
import Categories from "./components/Categories";
import PorductHero from "./components/PorductHero";
import Products from "./components/Products";
import AdoptionHero from "./components/AdoptionHero"
import PetKnowledge from "./components/PetKnowledge";

export default function Home() {
  return (
    <>
      <Header />
      <Categories />
      <PorductHero />
      <Products />
      <AdoptionHero/>
      <PetKnowledge/>
    </>
  );
}
