import { useContext, useMemo } from "react";

import classes from "./CartCheckout.module.css";
import StoreCartContext from "../../context/store-cart-context";

function CartCheckout(props) {
  const storeCartContext = useContext(StoreCartContext);

  let totalQuantity = 0;
  let totalPrice = 0;
  function displayPrice(quantity, price) {
    let result = price * quantity;
    totalPrice += result;
    totalQuantity += quantity;
    return result;
  }

  const listItems = useMemo(() => {
    const lstReturn = [];
    props.items.forEach((itemId) => {
      storeCartContext.getItemById(itemId)
        ? lstReturn.push(storeCartContext.getItemById(itemId))
        : props.removeCheckoutItem(itemId);
    });
    return lstReturn;
  }, [storeCartContext, props]);

  return (
    <div className={classes.main}>
      <p className={classes.yourCheckout}>Your Checkout</p>
      <div className={classes.content}>
        {listItems.length ? (
          listItems.map((item) => {
            return (
              <div key={`cart-checkout-${item.id}`} className={classes.item}>
                <p>
                  {item.name}{" "}
                  <span>
                    <i>
                      ({storeCartContext.getQuantity(item.id)}
                      x)
                    </i>
                  </span>
                </p>
                <p className={classes.price}>
                  $
                  {displayPrice(
                    storeCartContext.getQuantity(item.id),
                    item.price
                  ).toFixed(2)}
                </p>
              </div>
            );
          })
        ) : (
          <p className={classes.noItem}>Checkout some item first!</p>
        )}
        <hr />
        <div className={classes.total}>
          <p>
            <strong>Total</strong>
            &nbsp;
            <i>({totalQuantity} items)</i>
          </p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <button
          onClick={() => {
            console.log("checkout!");
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartCheckout;
