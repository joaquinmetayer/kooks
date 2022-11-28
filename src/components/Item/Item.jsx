import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { id, price, category, img } = product;

  return (
    <div className={category}>
      <div className="ItemContainer">
        <img src={img} alt={id} />
        <div className="price">
          <p>#0{id}</p>
          <p>{category}</p>
          <p>{price} ETH</p>
        </div>
        <Link to={`/details/${product.id}`}>
          <div className="detailsBtn">View Details</div>
        </Link>
      </div>
    </div>
  );
};

export default Item;
