import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchWord } from "../../actions/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const [search, setSearch] = useState("");
  const searchbar = (e) => {
    setSearch(e.target.value.toLowerCase());
    dispatch(searchWord(search));
  };
  return (
    <>
      <nav id="topbar">
        <div id="left-menu">
          <div id="logo">
            <Link to="/">
              <span>Shop</span>lane
            </Link>
          </div>
          <Link to="/">Clothing</Link>
          <Link to="/">Accessories</Link>
        </div>
        <div id="search-wrapper">
          <i
            className="fas fa-search"
          
          ></i>
          <input
            onChange={searchbar}
            id="search-box"
            type="text"
            name="search"
            placeholder="Search here..."
          />
        </div>
        <div id="right-menu">
          <div id="cart-wrapper">
            <p id="cart-count">{items.length}</p>
            <Link to="/Cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            alt="logo"
          /> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
