import React from "react";
import ItemCount from "./ItemCount";
import p01 from "../assets/img/products/01.png";
import "./Card.css";

export default function Card() {
  return (
    <div className="cardContainer">
      <img src={p01} alt={p01}/>
      <div className="price">
        <p>#01</p>
        <ItemCount />
        <p>1.0 ETH</p>
      </div>
      <div className="addCartBtn">Add to cart</div>
    </div>
  );
}
