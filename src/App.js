import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Card from './components/Card'

function App() {
  document.title = "Kooks by Terry";

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Card />

      <Footer />
    </>
  );
}

export default App;
