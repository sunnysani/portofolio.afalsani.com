import CartObject from "../cart/CartObject";
import classes from "./StoreItems.module.css";

function StoreItem(props) {
  return (
    <div className={classes.storeItem}>
      <img
        referrerPolicy="no-referrer"
        className={classes.itemImg}
        src={props.images[0]}
        alt={props.name}
      />
      <p className={classes.itemName}>{props.name}</p>
      <p className={classes.itemPrice}>${props.price}</p>
      <div className={classes.itemActionArea}>
        <div className={classes.cartAction}>
          <CartObject
            itemId={props.id}
            item={{
              store: props.store,
              id: props.id,
              name: props.name,
              images: props.images,
              price: props.price,
            }}
          />
        </div>
        <button className={classes.btn}>Buy now</button>
      </div>
    </div>
  );
}

export default StoreItem;
