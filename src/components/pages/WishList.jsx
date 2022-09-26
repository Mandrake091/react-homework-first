import React, { useState, useEffect } from "react";

import axios from "axios";
import CardProducts from "../CardProducts";

function WishList() {
  const apiEndPoint = "http://localhost:3001/products";

  ////////////////////////////////////////////////////////////////
  const [item, setItem] = useState([]);

  const loadMoreItem = () => {
    axios.get(apiEndPoint).then(({ data }) => {
      const newItem = [];
      data.forEach((i) => newItem.push(i));
      setItem(newItem);
    });
  };
  useEffect(() => {
    loadMoreItem();
    console.log(item);
  }, []);

  return (
    <div className="container">
      <h2>There are {item.length} items</h2>
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
  );
}

export default WishList;
