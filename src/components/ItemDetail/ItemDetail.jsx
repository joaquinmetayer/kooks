import './ItemDetail.css'
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ detailProduct }) => {
  const { id, price, date, img, contract } = detailProduct;

  return (
    <div className="ItemContainer">
    <img src={img} alt={id} />
    <div className="price">
      <p>#0{id}</p>
      <p>{date}</p>
      <p>{contract}</p>
      <ItemCount />
      <p>{price} ETH</p>
    </div>
    <div className="detailsBtn">View Details</div>
  </div>
  );
};

export default ItemDetail;