import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";


import Card from "./Card";
import axios from "axios";

const Feed = () => {
  // const [items, setItems] = useState([]);
  const apiEndPoint = "http://localhost:3001/items";

////////////////////////////////////////////////////////////////
const[item, setItem] = useState([]);

const loadMoreItem = () =>{
  axios.get(apiEndPoint)
  .then(({data})=>{
    const newItem = [];
    data.forEach((i)=>newItem.push(i));
    setItem(oldItem => [... oldItem, ...newItem])
  })
}

const handleScroll = (e) => {
  if(
    window.innerHeight + e.target.documentElement.scrollTop + 1 >=
    e.target.documentElement.scrollHeight
  ) {
    loadMoreItem()
  }
}
useEffect(()=> {
  loadMoreItem()
  window.addEventListener('scroll', handleScroll)},[]
)

////////////////////////////////////////////////////////////////

  // useEffect(() => {
  //   const getItems = async () => {
  //     const { data: res } = await axios.get(apiEndPoint);
  //     setItems(res);
  //   };
  //   getItems();
  // }, []);

  return (
    <div className="container">

      

      <div className="row justify-content-center">
        {item.map((el) => {
          const { title, author, id, image } = el;
          return <Card id={id} title={title} author={author} image={image} />;
        })}
        <h2>the are {item.length} items</h2>
      </div>
    </div>
  );
};

export default Feed;
