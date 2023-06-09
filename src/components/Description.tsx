import React from "react";

interface props {
  text: string;
  price: string;
}

const Description = ({ text, price }: props) => {
  return (
    <div>
      {text}
      {"Current price: " + price + " points."}
    </div>
  );
};

export default Description;
