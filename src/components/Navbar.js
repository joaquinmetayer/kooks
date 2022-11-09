import React from "react";
import CartLogo from "./CartLogo";

import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navBar">
      <h3>Kooks by Terry</h3>
      <div className="linksNav">
        <p><a href="#">Home</a></p>
        <p><a href="#">About</a></p>
      </div>
      <CartLogo />
    </div>
  );
}
