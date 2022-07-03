import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import classes from "./CartContainer.module.css";
import CartCheckout from "./CartCheckout";
import Card from "../ui/Card";
import CartItem from "./CartItem";
import { BsCartXFill } from "react-icons/bs";
import Empty from "../etc/Empty";
import StoreCartContext from "../../context/store-cart-context";

function CartContainer(props) {
  const [checkoutedItems, setCheckoutedItems] = useState(
    props.checkoutedItems ?? []
  );
  const storeCartContext = useContext(StoreCartContext);

  function removeCheckoutItem(itemId) {
    setCheckoutedItems((prev) => prev.filter((item) => item !== itemId));
  }

  const cartContent = {};
  storeCartContext.items.forEach((item) => {
    // Init store if dont exist yet
    const storeId = item.store.id;
    if (!cartContent[storeId]) {
      cartContent[storeId] = {};
      cartContent[storeId]["name"] = item.store.name;
      cartContent[storeId]["items"] = [];
    }

    // Insert item
    const tmp = {};
    tmp[item.id] = {
      name: item.name,
      price: item.price,
      images: item.images,
      quantity: item.quantity,
    };
    cartContent[storeId].items.push(tmp);
  });

  function isCheckouted(itemId) {
    return checkoutedItems.some((item) => item === itemId);
  }

  function onClickButtonFunction(itemId) {
    // delete if is in the list
    if (checkoutedItems.some((item) => item === itemId)) {
      setCheckoutedItems((prev) => prev.filter((item) => item !== itemId));
      return;
    }

    // check if store is the same
    if (checkoutedItems.length) {
      const storeId = storeCartContext.getStoreById(checkoutedItems[0]);
      if (storeCartContext.getStoreById(itemId) === storeId) {
        setCheckoutedItems((prev) => prev.concat(itemId));
        return;
      }
    }
    setCheckoutedItems([itemId]);
  }

  return !storeCartContext.items.length ? (
    <Empty img={<BsCartXFill />}>
      <p>There is no item in your cart.</p>
      <Link to="/store">Start shoping</Link>
    </Empty>
  ) : (
    <div className={classes.cartContainer}>
      <div className={classes.leftSide}>
        <Card>
          <div className={classes.leftSideContent}>
            {Object.entries(cartContent).map(([key, value]) => {
              return (
                <CartItem
                  key={key}
                  storeId={key}
                  storeName={value.name}
                  items={value.items}
                  isCheckoutedFunction={isCheckouted}
                  onClickButtonFunction={onClickButtonFunction}
                />
              );
            })}
          </div>
        </Card>
      </div>
      <div className={classes.rightSide}>
        <Card>
          <div className={classes.rightSideContent}>
            <CartCheckout
              items={checkoutedItems}
              removeCheckoutItem={removeCheckoutItem}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CartContainer;
