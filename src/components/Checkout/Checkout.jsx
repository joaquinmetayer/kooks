import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { getFirestore } from "firebase/firestore";
import NotFound from "../NotFound/NotFound";

const Checkout = () => {
  const { cartList, qtyItem, totalPrice } = useCartContext();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const db = getFirestore();

    /*OBJETO A CREAR
      {
      buyer: { name: name, email: email },
      items: cartList,
      total: totalPrice,
    }*/

    setName("");
    setEmail("");
  };

  return (
    <>
    {!cartList.length > 0 ? (
        <NotFound />
      ) : (
      <div className="cartContainer">
        <p className="cartTitle">Cart</p>
        {cartList.map((product) => (
          <div key={product.id} className="itemContainer">
            <img src={product.img} className="imgCart" alt={product.id} />
            <div className="textCart">
              <div>
                <p>#0{product.id}</p>
                <p>Date of collection - {product.category}</p>
                <p>Stock available - {product.stock}</p>
                <p>Contract - {product.contract}</p>
                <p>Price - {product.price} ETH</p>
              </div>
            </div>
          </div>
        ))}
        <div className="totalCart">
          <p className="totalCartTitle">Total</p>
          <div className="totalCartData">
            <p>Total items</p>
            <p>{qtyItem()}</p>
          </div>
          <div className="totalCartData">
            <p>Total price</p>
            <p>ETH {totalPrice()}</p>
          </div>
        </div>


        <form className="inputs" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Surname"
            required
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
          />
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button className="endBuy">End buy</button>
        </form>
      </div>)}
    </>
  );
};

export default Checkout;
