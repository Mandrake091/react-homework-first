import React from "react";
import { useCart } from "react-use-cart";

const CardProducts = (props) => {
  const {addItem}  = useCart();
  

  return (
    <div className="col-12 col-md-3">
      <div className="card">
        <img className="card-img-top" src={props.image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.price}</p>
          <button onClick={() => addItem(props.item)}  className="btn btn-primary">
            Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
