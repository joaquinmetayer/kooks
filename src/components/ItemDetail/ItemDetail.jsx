import './ItemDetail.css'
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ productDetails }) => {
  const { id, price, stock, date, img, contract } = productDetails;
 
  console.log(productDetails)
  console.log(img)
  
  return (
    <div className="ItemContainer">
    <img src={img} alt={id} />
    <div className="price">
      <p>#0{id}</p>
      <p>{date}</p>
      <p>{contract}</p>
      <ItemCount product={productDetails} />
      <p>{price} ETH</p>
    </div>
   
  </div>
  );
};

export default ItemDetail;