import React from "react";
import CartLogo from "../CartLogo/CartLogo";

import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navBar">
      <h3>Kooks by Terry</h3>
      <div className="linksNav">
        <h5><a href="#">Home</a></h5>
        <h5><a href="#">About</a></h5>
      </div>
      <CartLogo />
    </div>
  );
}
