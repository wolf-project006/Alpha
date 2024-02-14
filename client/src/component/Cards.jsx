import React, { useState } from "react";
import CardItem from "./CardItem";
import "../styles/cards.css";

function Cards() {
  const singlePost = () => {
    const [single, setSingle] = useState(false);
    console.log("singlePost");
  };

  return (
    <div className="cards">
      <h1>Recent post</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem onclick={singlePost} />
            <CardItem />
            <CardItem />
          </ul>
          <ul className="cards__items">
            <CardItem />
            <CardItem />
            <CardItem />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
