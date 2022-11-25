import React from "react";
import "./Filter.css";
import { Link } from "react-router-dom";

export default function Filter() {
  return (
    <div className="filterContainer">
      <h2 className="filterTitle">Select the NFT collection with years</h2>
      <div className="filterLinkContainer">
        <p className="linkFilter">
          <Link to={"/"}>All</Link>
        </p>
        <p className="linkFilter">
          <Link to={`/2020`}>2020</Link>
        </p>
        <p className="linkFilter">
          <Link to={`/2021`}>2021</Link>
        </p>
        <p className="linkFilter">
          <Link to={`/2022`}>2022</Link>
        </p>
        <p className="linkFilter">
          <Link to={`/2023`}>2023</Link>
        </p>
      </div>
    </div>
  );
}
