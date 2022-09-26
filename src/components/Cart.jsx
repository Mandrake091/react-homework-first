import React from 'react'
import { useCart } from "react-use-cart";
  // const { price, name, id, image } = props;
const WishListComponent = () => {

  const { 
    isEmpty,
    totalItems,
    totalUniqueItems,
    removeItems,
    emptyCart,
    item } = useCart();

    if(isEmpty){
      

      return <h1>Your wishlist is empty</h1>;
    } 


  return (
    <div className='container'>
      <div className="row">
        <div className="col-12">
          <h5>Wishlist {totalUniqueItems} total product: {totalItems}</h5>

        </div>
      </div>
      
    </div>
  )
}

export default WishListComponent