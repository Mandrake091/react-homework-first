import React from "react";

function Card(props) {
  const { title, author, id, image } = props;

  console.log();

  return (
   
        <div className="col-3">
          <div className="card">
            <p>card</p>
            <h6>{title}</h6>
            <h6>{author}</h6>
            <img src={image} alt="" />
          </div>
        </div>
      
  );
}

export default Card;
