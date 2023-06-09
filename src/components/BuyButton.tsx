import React from "react";

interface props {
  price: string;
}

const BuyButton = ({ price }: props) => {
  return <button className="btn btn-success">{"Buy"}</button>;
};

export default BuyButton;
