import React from "react";
import "./Filter.css";

export default function Filter() {

  return (
    <div className="filterContainer">
      <h2 className="filterTitle">Select the NFT collection with years</h2>
      <div className="filterLinkContainer">
        <p className="linkFilter filterSelected">All</p>
        <p className="linkFilter">2020</p>
        <p className="linkFilter">2021</p>
        <p className="linkFilter">2022</p>
        <p className="linkFilter">2023</p>
      </div>
    </div>
  );
}
