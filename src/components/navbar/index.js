import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.items);
  return (
    <>
      <nav id="topbar">
        <div id="left-menu">
          <div id="logo">
            <Link to="/">
              <span>Shop</span>lane
            </Link>
          </div>
          <Link>Clothing</Link>
          <Link>Accessories</Link>
        </div>
        <div id="search-wrapper">
          <i className="fas fa-search"></i>
          <input
            id="search-box"
            type="text"
            name="search"
            placeholder="Search for Clothing and Accessories"
          />
        </div>
        <div id="right-menu">
          <div id="cart-wrapper">
            <p id="cart-count">{items.length}</p>
            <Link to="/Cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            alt="logo"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
