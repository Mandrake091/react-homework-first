import React, { useState, useEffect } from "react";

import axios from "axios";
import CardProducts from "../CardProducts";
import Loader from "../Loader";

function WishList() {
  //Api for internal db endpoint
  const apiEndPoint = "http://localhost:3001/products";
  //
  ////////////////////////////////////////////////////////////////
  //State management
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  //////////////////////////////////////////////////////////////
  //Functions for load items
  const loadMoreItem = () => {
    axios.get(apiEndPoint).then(({ data }) => {
      const newItem = [];
      data.forEach((i) => newItem.push(i));
      setItem(newItem);
    });
  };
  useEffect(() => {
    loadMoreItem();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  //////////////////////////////////////////////////////////////
  
  return loading?
  <Loader/>
  :
    <div className="container-fluid">
      <h2 className="text-center mb-4">There are: {item.length} items</h2>
      <div className="row justify-content-center">
        {item.map((el, index) => {
          return (
            <CardProducts
              id={el.id}
              name={el.name}
              item={el}
              price={el.price}
              image={el.image}
              key={index}
            />
          );
        })}
      </div>
    </div>
}

export default WishList;
