/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  // by using useselector we can subscribe a slice object state in reducer so we can get the updated valute
  // automatically in this page its takes once parametter  one is  state other is the name of object which you want to
  // subscribe
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="Logo"> Redux Store</span>
      <div>
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="Cart" className="navLink">
          Cart
        </Link>
        <span>
          <strong> Cart Count: {items.length}</strong>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
