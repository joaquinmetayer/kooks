import React, { useState } from "react";
import "./ItemCount.css";

export default function ItemCount() {
  let [toCart, setToCart] = useState(1);
  let [stock, setStock] = useState(9);

  function itemCountCalc(str){
    if(str === 'sum' && toCart >= 1 && toCart < 10){
      setStock(stock - 1);
      setToCart(toCart + 1);
    }else if (str === 'res' && toCart > 1 && toCart < 11){
      setStock(stock + 1);
      setToCart(toCart - 1);
    }
  }
  return (
    <div className="itemCount">
      <span
        className="btnItemSR"
        onClick={() => itemCountCalc('res')}
      >
        -
      </span>
      <span className="toCart"> {toCart} </span>
      <span
        className="btnItemSR"
        onClick={() => itemCountCalc('sum')}
      >
        +
      </span>
    </div>
  );
}
