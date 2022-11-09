import React from "react";
import CartLogo from "./CartLogo";

import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navBar">
      <h3>Kooks by Terry</h3>
      <CartLogo />
    </div>
  );
}
