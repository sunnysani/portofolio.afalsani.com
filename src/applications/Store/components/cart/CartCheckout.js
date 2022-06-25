import classes from "./CartCheckout.module.css";

function CartCheckout(props) {
  let totalQuantity = 0;
  let totalPrice = 0;
  function displayPrice(quantity, price) {
    console.log(quantity);
    let result = price * quantity;
    totalPrice += result;
    totalQuantity += quantity;
    return result;
  }

  return (
    <div className={classes.main}>
      <p className={classes.yourCheckout}>Your Checkout</p>
      <div className={classes.content}>
        {props.items.length ? (
          props.items.map((item) => {
            return (
              <div key={`cart-checkout-${item.id}`} className={classes.item}>
                <p>
                  {item.name}{" "}
                  <span>
                    <i>({item.quantity}x)</i>
                  </span>
                </p>
                <p className={classes.price}>
                  ${displayPrice(item.quantity, item.price)}
                </p>
              </div>
            );
          })
        ) : (
          <p>Checkout some item first!</p>
        )}
        <hr />
        <div className={classes.total}>
          <p>
            <strong>Total</strong>
            &nbsp;
            <i>({totalQuantity} items)</i>
          </p>
          <p>${totalPrice}</p>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default CartCheckout;
