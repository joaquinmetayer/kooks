import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Filter from "./components/Filter/Filter";
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer'

function App() {
  document.title = "Kooks by Terry";

  return (
    <>
      <Navbar />
      <Hero />
      <Filter />
      <ItemsListContainer />
      <About />
      <Footer />
    </>
  );
}

export default App;
