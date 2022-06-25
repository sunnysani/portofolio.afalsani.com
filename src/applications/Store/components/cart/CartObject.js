import { useContext, useState } from "react";
import { BsCartPlus, BsCartDash } from "react-icons/bs";

import StoreCartContext from "../../context/store-cart-context";

function CartObject(props) {
  const storeCartContext = useContext(StoreCartContext);
  const [isAddedToCart, setIsAddedToCart] = useState(
    storeCartContext.itemAddedToCart(props.item.id)
  );

  function toggleAddedToCart() {
    if (isAddedToCart) {
      storeCartContext.removeItem(props.item.id);
      setIsAddedToCart(false);
    } else {
      storeCartContext.pushItem(props.item);
      setIsAddedToCart(true);
    }
  }

  return (
    <div onClick={toggleAddedToCart} style={{ cursor: "pointer" }}>
      {isAddedToCart ? <BsCartDash /> : <BsCartPlus />}
    </div>
  );
}

export default CartObject;
