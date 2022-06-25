import QuantityBox from "../etc/QuantityBox";
import Card from "../ui/Card";
import classes from "./CartItem.module.css";
import CartObject from "./CartObject";

function CartItem(props) {
  return (
    <div className={classes.main}>
      <div className={classes.storeSection}>
        <input type="checkbox" />
        <span>{props.storeName}</span>
      </div>
      <div className={classes.storeItems}>
        {props.items.map((item) => {
          const itemObjectId = Object.keys(item)[0];
          const itemObject = Object.values(item)[0];
          return (
            <div className={classes.storeItem} key={itemObjectId}>
              <input type="checkbox" />
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
                      // Store must be set later!
                      store: {},
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
