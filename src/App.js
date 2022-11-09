import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {


  document.title = 'Kooks by Terry'

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  );
}

export default App;
