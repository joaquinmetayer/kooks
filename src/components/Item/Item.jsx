import React from "react";
import ItemCount from '../ItemCount/ItemCount'
// import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

export default function Item(props) {
  return (
    <div className="ItemContainer">
      <img src={props.img} alt={props.id} />
      <div className="price">
        <p>#0{props.name}</p>
        <ItemCount />
        <p>{props.price} ETH</p>
      </div>
      <div className="detailsBtn">View Details</div>
    </div>
  );
}
