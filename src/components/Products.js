/** @format */

import React, { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
const Products = () => {
  // with the help of below dispatch we can use  our cart reducer action which we made in
  //  cartslice  that was our action
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const addToHandler = (product) => {
    // in the dispath add is the our action which we made in cartslice and product parameter is the payload
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <h4>{product.price}</h4>
          <button className="btn" onClick={() => addToHandler(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
