import { useContext } from "react";
import { BsCashCoin } from "react-icons/bs";
import { Link } from "react-router-dom";

import StoreCartContext from "../../context/store-cart-context";
import StoreTemporaryContext from "../../context/store-temporary-context";
import Accordion from "../etc/Accordion";
import Empty from "../etc/Empty";
import Card from "../ui/Card";
import classes from "./CheckoutsContainer.module.css";

function CheckoutsContainer({ items }) {
  const storeTemporaryContext = useContext(StoreTemporaryContext);

  //   return !items || !items.length ? (
  return !storeTemporaryContext.checkoutItems.length ? (
    <Empty img={<BsCashCoin />}>
      <>
        <p>There is no item you have checkout. Checkout some item first!</p>
        <Link to="/store/cart">See my cart</Link>
      </>
    </Empty>
  ) : (
    <Card>
      <div className={classes.main}>
        contained!
        <Accordion />
      </div>
    </Card>
  );
}

export default CheckoutsContainer;
