import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ItemsContainer from './components/ItemsContainer'

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
