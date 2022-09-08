import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchWord } from "../../actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
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
          <i className="fas fa-search"></i>
          <input
            onChange={searchbar}
            id="search-box"
            type="text"
            name="search"
            placeholder="Search here..."
          />
        </div>
        <div id="right-menu">
          <div className="login-details">
            <FaUserAlt />
            {isAuthenticated ? (
              <div className="user-login-name">
                <h5 className="mb-0 mx-2">{user.nickname}</h5>
                <button onClick={logout} className="btn btn-light ">logout</button>
              </div>
            ) : (
              <button onClick={loginWithRedirect} className="ml-2 btn btn-light">
                login
              </button>
            )}
          </div>
          <div id="cart-wrapper">
            <p id="cart-count">{items.length}</p>
            <Link to="/Cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
