import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

const Item = ({ product }) => {
  const { id, price, date, img } = product;

  return (
    <div className={date}>
      <div className="ItemContainer">
        <img src={img} alt={id} />
        <div className="price">
          <p>#0{id}</p>
          <p>{date}</p>
          <ItemCount product={product} />
          <p>{price} ETH</p>
        </div>
        <div className="detailsBtn">View Details</div>
      </div>
    </div>
  );
};

export default Item;
