import React from "react";
import Description from "./Description";
import BuyButton from "./BuyButton";
import "../style/ProductContainer.css";

interface props {
  title: string;
  text: string;
  price: string;
  imgsrc: string;
}

const ProductContainer = ({ title, text, price, imgsrc }: props) => {
  return (
    <div className="cont">
      <h1 className="tit">{title}</h1>

      <div className="desc">
        <div className="forimg">
          <img width={50} src={imgsrc}></img>
        </div>
        <Description text={text} price={price}></Description>
      </div>
      <div className="butt">
        <BuyButton price={price}></BuyButton>
      </div>
    </div>
  );
};

export default ProductContainer;
