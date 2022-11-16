import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Filter from "./components/Filter/Filter";
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

//  <BrowserRouter>
//  <Routes>
//    <Route exact path="/" element={<ItemsListContainer/>}/>
//    <Route exact path="/category/:id" element={<ItemsListContainer/>}/>
//    <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
//  </Routes>
//  </BrowserRouter>
