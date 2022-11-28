import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Checkout from './components/Checkout/Checkout'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "./components/HomeContainer/HomeContainer";

function App() {
  document.title = "Kooks by Terry";

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/details/:productId"
            element={<ItemDetailContainer />}
          />
          <Route exact path="/:categoryId" element={<HomeContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
