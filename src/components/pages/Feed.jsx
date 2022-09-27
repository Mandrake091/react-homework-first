import React, { useState, useEffect } from "react";
import Card from "../CardFeed";
import axios from "axios";
import Loader from "../Loader";
//////////////////////////////////////////////////

function Feed() {
  //api endpoint in internal server
  const apiEndPoint = "http://localhost:3001/items";
  ////////////////////////////////////////////////////////////////
  //State management for items and loader
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  ///////////////////////////////////////////////
//Function for loading items (get)
  const loadMoreItem = () => {
    axios.get(apiEndPoint).then(({ data }) => {
      const newItem = [];
      data.forEach((i) => newItem.push(i));
      setItem((oldItem) => [...oldItem, ...newItem]);
    });
  };
///////////////////////////////////////////////////////////
//function for take position of scroll and load more items
  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      loadMoreItem();
    }
  };
///////////////////////////////////////////////////////////////////////
//function for set up Loader state true false when loading
  useEffect(() => {
    loadMoreItem();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },1000);
    window.addEventListener("scroll", handleScroll);
  }, []);
  ////////////////////////////////////////////////////////////////
  return loading ? 
    <Loader />
   : 
    <div className="container">
      <div className="row justify-content-center">
        {item.map((el) => {
          const { title, author, id, image } = el;
          return (
            <Card
              key={id}
              id={id}
              title={title}
              author={author}
              image={image}
            />
          );
        })}
      </div>
    </div>
};

export default Feed;
