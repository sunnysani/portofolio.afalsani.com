import QuantityBox from "../etc/QuantityBox";
import Card from "../ui/Card";
import classes from "./CartItem.module.css";
import CartObject from "./CartObject";

function CartItem(props) {
  return (
    <div className={classes.main}>
      <div className={classes.storeSection}>
        <input 
          type="checkbox"
          checked={props.allItemAtStorePurchased(props.storeId)}
          onChange={() => {
            return props.onClickStoreButtonFunction(props.storeId)
          }}
         />
        <span>{props.storeName}</span>
      </div>
      <div className={classes.storeItems}>
        {props.items.map((item) => {
          const itemObjectId = Object.keys(item)[0];
          const itemObject = Object.values(item)[0];
          return (
            <div className={classes.storeItem} key={itemObjectId}>
              <input
                type="checkbox"
                checked={props.isCheckoutedFunction(itemObjectId)}
                onChange={() => {
                  return props.onClickItemButtonFunction(itemObjectId);
                }}
              />
              <div className={classes.itemImg}>
                <Card>
                  <img
                    referrerPolicy="no-referrer"
                    src={itemObject.images[0]}
                    alt={itemObject.name}
                  />
                </Card>
              </div>
              <div className={classes.itemText}>
                <p className={classes.itemName}>{itemObject.name}</p>
                <p className={classes.itemPrice}>${itemObject.price}</p>
                <div className={classes.option}>
                  <CartObject
                    item={{
                      store: { id: props.storeId, name: props.storeName },
                      id: itemObjectId,
                      name: itemObject.name,
                      images: itemObject.images,
                    }}
                  />
                  <QuantityBox
                    id={itemObjectId}
                    quantity={itemObject.quantity}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartItem;
