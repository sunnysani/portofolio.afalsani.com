import { useContext, useMemo } from "react";
import Card from "../ui/Card";
import Modal from "../ui/Modal";
import classes from "./CartCheckoutModal.module.css";
import StoreCartContext from "../../context/store-cart-context";
import { BsShopWindow } from "react-icons/bs";

function CartCheckoutModal(props) {
  const storeCartContext = useContext(StoreCartContext);

  function closeHandler() {
    try {
      props.setToggleCheckoutModal(false);
    } catch (err) {}
  }
  
  let totalPrice = 0;
  let totalItem = 0;

  const listItems = useMemo(() => {
    const lstReturn = [];
    props.items.forEach((itemId) => {
      let item = storeCartContext.getItemById(itemId);
      if (item !== undefined || item !== null) {
        lstReturn.push(storeCartContext.getItemById(itemId))
        // eslint-disable-next-line react-hooks/exhaustive-deps
        totalPrice += item.price * item.quantity;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        totalItem += item.quantity;
      } else {
        props.removeCheckoutItem(itemId);
      }
    });
    return lstReturn;
  }, [storeCartContext, props]);

  return <Modal required={ false } maxWidth={"520px"} closeHandler={closeHandler} verticalAlign={true}>
    <Card>
      <div className={classes.content}>
        {/* <h1>Checkout</h1> */}
        {!listItems.length ? 
          <p className={classes.noCheckoutText}>Please choose some item to be checkout</p> :
          <>
            <br />
            <div className={classes.shopTitle}><BsShopWindow /><h1>{listItems[0].store.name}</h1></div>
            <br />
            {listItems.map((item) => {
              return <div key={`checkout-list-${item.id}`} className={classes.itemRow}>
                <div className={classes.itemInfo}>
                  <h3>{item.name}</h3>
                  <span>{item.quantity} pcs</span>
                </div>
                <div className={classes.itemPrice}>
                  <p>Total: {`$${(item.price * item.quantity).toFixed(2)}`}</p>
                </div>
              </div>
            })}
            <div className={classes.total}>
              <div className={classes.totalItem}>
                <p className={classes.totalItemKey}><strong>Total Item</strong> :</p>
                <p className={classes.totalItemValue}>{totalItem}</p>
              </div>
              <div className={classes.totalItem}>
                <p className={classes.totalItemKey}><strong>Total Price</strong> :</p>
                <p className={classes.totalItemValue}>${totalPrice.toFixed(2)}</p>
              </div>
            </div>
            <br />
            <div className={classes.buttonClass}>
              <button>Checkout</button>
            </div>
            <br />
          </>}
      </div>
    </Card>
  </Modal>;
}

export default CartCheckoutModal;
