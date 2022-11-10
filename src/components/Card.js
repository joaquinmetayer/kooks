import React from "react";
import ItemCount from "./ItemCount";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="cardContainer">
      <img src={props.img} alt={props.id} />
      <div className="price">
        <p>#0{props.name}</p>
        <ItemCount />
        <p>{props.price} ETH</p>
      </div>
      <div className="addCartBtn">Add to cart</div>
    </div>
  );
}
