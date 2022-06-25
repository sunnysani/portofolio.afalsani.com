import { Link } from "react-router-dom";
import { useState } from "react";

import classes from "./CartContainer.module.css";
import CartCheckout from "./CartCheckout";
import Card from "../ui/Card";
import CartItem from "./CartItem";
import { BsCartXFill } from "react-icons/bs";

function CartContainer(props) {
  const [checkoutedItems, setCheckoutedItems] = useState([
    { id: 1, name: "Magical Wok", quantity: 2, price: 3.99 },
    { id: 2, name: "Magical Kow", quantity: 4, price: 3.99 },
    { id: 3, name: "Magical Owk", quantity: 1, price: 3.99 },
  ]);

  if (!props.items.length)
    return (
      <Card>
        <div className={classes.empty}>
          <div className={classes.wobbleHorBottom}>
            <BsCartXFill />
          </div>

          <p>There is no item in your cart.</p>
          <Link to="/store">Start shoping!</Link>
        </div>
      </Card>
    );

  const cartContent = {};
  props.items.forEach((item) => {
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

  return (
    <div className={classes.cartContainer}>
      <div className={classes.leftSide}>
        <Card>
          <div className={classes.leftSideContent}>
            {Object.entries(cartContent).map(([key, value]) => {
              return (
                <CartItem
                  key={key}
                  storeName={value.name}
                  items={value.items}
                />
              );
            })}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </Card>
      </div>
      <div className={classes.rightSide}>
        <Card>
          <div className={classes.rightSideContent}>
            <CartCheckout items={checkoutedItems} />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CartContainer;
