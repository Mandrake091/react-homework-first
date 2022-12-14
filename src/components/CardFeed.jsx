import React from "react";

function Card(props) {
  const { title, author, id, image } = props;

  return (
    <div className="col-12 col-md-3">
      <div className="card">
        <img className="card-img-top" src={image} alt={title} />
        <div className="shadow"></div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{author}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
