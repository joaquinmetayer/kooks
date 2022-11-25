import React from "react";
import { Link } from "react-router-dom";
import CartLogo from "../CartLogo/CartLogo";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navBar">
      <h3>Kooks by Terry</h3>
      <div className="linksNav">
        <h5>
          <Link to={"/"}>Home</Link>
        </h5>

        <h5>
          <Link to={"/about"}>About</Link>
        </h5>
      </div>
      <CartLogo />
    </div>
  );
}
