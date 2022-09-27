import React from "react";
import { useCart } from "react-use-cart";
// const { price, name, id, image } = props;
const WishListComponent = () => {
  const {
    isEmpty,
    totalItems,
    totalUniqueItems,
    removeItems,
    removeItem,
    emptyCart,
    items,
  } = useCart();

  return totalUniqueItems != 0 ? 
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
         
          <h5>
            Wishlist {totalUniqueItems} Total product: {totalItems}
          </h5>
          <button className="btn btn-danger mb-3" onClick={() => emptyCart()}>
            Remove all
          </button>
          <table className="table table-striped table-hover m-o">
            <tbody>
              {items.map((el, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img className="w-25" src={el.image} alt="" />
                    </td>
                    <td>{el.name}</td>
                    <td>{el.price}</td>
                    <td>
                      <button
                        onClick={() => removeItem(el.id)}
                        className="btn btn-success"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    : ''
};

export default WishListComponent;
