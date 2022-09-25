import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from "./Card";
import axios from "axios";

const Feed = () => {
  const [items, setItems] = useState([]);
  const apiEndPoint = "http://localhost:3001/items";

  useEffect(() => {
    const getItems = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setItems(res);
    };
    getItems();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {items.map((el) => {
          const { title, author, id, image } = el;
          return <Card id={id} title={title} author={author} image={image} />;
        })}

        <h2>the are {items.length} items</h2>
      </div>
    </div>
  );
};

export default Feed;
