import "./ItemDetail.css";
import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ productDetails }) => {
  const { id, price, stock, date, img, contract } = productDetails;

  let [imgDetail, setImgDetail] = useState("." + img);

  console.log(productDetails);

  return (
    <div className="detailsBigContainer">
<div className="ItemDetailsContainer">
      <img src={imgDetail} alt={id} />
      <div className="detailsContainer">
        <div>
          <p>#0{id}</p>
          <p>Date - {date}</p>
          <p>Stock - {stock}</p>
          <p>Contract - {contract}</p>
        </div>
        <div>
          <div className="buyPrice">
            <p>{price} ETH</p>
            <ItemCount product={productDetails} />
          </div>
          <p className="buttonBuy">Add to cart</p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default ItemDetail;
