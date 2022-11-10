import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import ItemsContainer from './components/ItemsContainer/ItemsContainer'

function App() {
  document.title = "Kooks by Terry";

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ItemsContainer />
      <Footer />
    </>
  );
}

export default App;
