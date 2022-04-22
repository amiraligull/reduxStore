/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();

  const removeCartHandler = (productId) => {
    dispatch(remove(productId));
  };
  const products = useSelector((state) => state.cart);
  return (
    <div className="cartWrapper">
      {products.map((product) => (
        <div className="cartCard">
          <img src={product.image} alt={product.title} />
          <h5>{product.title}</h5>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => removeCartHandler(product.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
