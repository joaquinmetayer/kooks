import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "./components/HomeContainer/HomeContainer";

function App() {
  document.title = "Kooks by Terry";

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomeContainer />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path='/details/:productId' element={ <ItemDetailContainer /> }/> 
        <Route exact path="/:categoryId" element={<HomeContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
