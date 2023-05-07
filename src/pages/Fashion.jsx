import React from "react";
import Home from "../components/MainPage/Home";
import Shop from "../components/shops/Shop";
import Wrapper from "../components/wrapper/Wrapper";

const Fashion = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Wrapper />
    </>
  );
};

export default Fashion;
