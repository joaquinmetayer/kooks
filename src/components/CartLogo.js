import { MdOutlineShoppingCart } from "react-icons/md";
import React from "react";
import './CartLogo.css'

export default function CartLogo() {
  return (
    <div className="cartIconCcontainer">
      <span className="cartItems">8</span>
      <MdOutlineShoppingCart className="cartIcon" />
    </div>
  );
}
