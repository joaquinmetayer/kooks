import React, { useState } from "react";
import "./ItemCount.css";

export default function ItemCount() {
  let [toCart, setToCart] = useState(1);
  let [stock, setStock] = useState(9);

  return (
    <div className="itemCount">
      <span
        className="btnItemSR"
        onClick={() => {
          if (toCart > 1) {
            setStock(stock + 1);
            setToCart(toCart - 1);
            console.log(stock);
            console.log(toCart);
          }
        }}
      >
        -
      </span>
      <span className="toCart"> {toCart} </span>
      <span
        className="btnItemSR"
        onClick={() => {
          if (stock !== 0) {
            setStock(stock - 1);
            setToCart(toCart + 1);
            console.log(stock);
            console.log(toCart);
          }
        }}
      >
        +
      </span>
    </div>
  );
}
