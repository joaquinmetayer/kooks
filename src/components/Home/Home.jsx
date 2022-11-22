import About from "../About/About";
import Hero from "../Hero/Hero";
import Filter from "../Filter/Filter";
import ItemsListContainer from "../ItemsListContainer/ItemsListContainer";


export const Home = () => {
  return (
    <>
      <Hero />
      <Filter />
      <ItemsListContainer />
      <About />
    </>
  );
};
