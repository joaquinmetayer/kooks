import "./ItemDetail.css";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ productDetails, onAdd }) => {
  const { id, price, stock, date, img, contract } = productDetails;

  let [imgDetail, setImgDetail] = useState("." + img);

  const { addToCart } = useContext(CartContext);

  const handlerOnAdd = (toCart) => {
    addToCart({ ...productDetails, toCart: toCart });
  };

  return (
    <div className="detailsBigContainer">
      <div className="ItemDetailsContainer">
        <img src={imgDetail} alt={id} />
        <div className="detailsContainer">
          <div>
            <p>#0{id}</p>
            <p>Date of collection - {date}</p>
            <p>Stock available - {stock}</p>
            <p>Contract - {contract}</p>
            <p>Price - {price} ETH</p>
          </div>
          <div>
            <div className="buyPrice">
              <ItemCount product={productDetails} onAdd={handlerOnAdd}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
