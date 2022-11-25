import About from "../About/About";
import Hero from "../Hero/Hero";
import Filter from "../Filter/Filter";
import ItemsListContainer from "../ItemsListContainer/ItemsListContainer";


const HomeContainer = () => {
  return (
    <>
      <Hero />
      <Filter />
      <ItemsListContainer />
      <About />
    </>
  );
};

export default HomeContainer