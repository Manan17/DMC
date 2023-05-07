import React from "react";
import "./Header.css";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";

const Header = ({ CartItem, isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? <Search CartItem={CartItem} /> : null}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </>
  );
};

export default Header;
