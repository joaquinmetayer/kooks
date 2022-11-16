import React, { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ product }) {
  const { stock } = product;
  let [toCart, setToCart] = useState(1);
  let [itemStock, setItemStock] = useState(stock - 1);

  function itemCountCalc(str) {
    if (str === "sum" && toCart >= 1 && toCart < stock) {
      setToCart(toCart + 1);
      setItemStock(itemStock - 1);
    } else if (str === "res" && toCart > 1 && toCart <= stock) {
      setToCart(toCart - 1);
      setItemStock(itemStock + 1);
    }
  }
  return (
    <div className="itemCount">
      <span className="btnItemSR" onClick={() => itemCountCalc("res")}>
        -
      </span>
      <span className="toCart"> {toCart} </span>
      <span className="btnItemSR" onClick={() => itemCountCalc("sum")}>
        +
      </span>
    </div>
  );
}
