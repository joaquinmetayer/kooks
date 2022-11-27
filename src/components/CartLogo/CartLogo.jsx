import { MdOutlineShoppingCart } from "react-icons/md";
import React, { useState } from "react";
import "./CartLogo.css";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function CartLogo() {
  const { qtyItem } = useCartContext();

  return (
    <Link to={"/cart"}>
      <div className="cartIconCcontainer">
        {qtyItem() !== 0 ? (
          <span className="cartItems">{qtyItem()}</span>
        ) : (
          <span className="cartItemsEmpty">0</span>
        )}
        <MdOutlineShoppingCart className="cartIcon" />
      </div>
    </Link>
  );
}
