import Header from "./components/Header";
import Categories from "./components/Categories";
import PorductHero from "./components/PorductHero";
import Products from "./components/Products";
import AdoptionHero from "./components/AdoptionHero"
import PetKnowledge from "./components/PetKnowledge";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <PorductHero />
      <Products />
      <AdoptionHero/>
      <PetKnowledge/>
      <Footer/>
    </div>
  );
}
