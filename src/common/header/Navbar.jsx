import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../components/assets/images/logo.svg";
const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container c_flex">
          {isLoggedIn ? (
            <div className="catgrories d_flex">
              <span class="fa-solid fa-border-all"></span>
              <h4>
                Categories <i className="fa fa-chevron-down"></i>
              </h4>
            </div>
          ) : (
            <div className="catgrories c_flex">
              <div className="logo width ">
                <img src={logo} alt="" />
              </div>
            </div>
          )}

          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}

              <li>
                <Link to="/">home</Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <Link to="/user">user account</Link>
                  </li>
                  <li>
                    <Link to="/vendor">vendor account</Link>
                  </li>
                  <li>
                    <Link to="/track">track my order</Link>
                  </li>
                </>
              ) : null}
              {isLoggedIn ? (
                <li onClick={() => setIsLoggedIn(false)}>
                  <Link to="/login">Logout</Link>
                </li>
              ) : (
                <li>
                  <Link to="/login">login</Link>
                </li>
              )}
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
