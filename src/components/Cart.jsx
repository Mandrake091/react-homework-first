import React from "react";
import { useCart } from "react-use-cart";
/////////////////////////////////////////
//use cart function for manage wishlist items
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
/////////////////////////////////////////
  return totalUniqueItems != 0 ? 
    <div className="container-fluid">
      <div className="row justify-content-center pt-5">
        <div className="col-10">
         
          <h5>
            Wishlist {totalUniqueItems} Total product: {totalItems}
          </h5>
          <button className="btn mb-3" onClick={() => emptyCart()}>
            Remove all
          </button>
          <table className="table m-o">
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
                        className="btn"
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
