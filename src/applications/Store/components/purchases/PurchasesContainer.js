import { BsFillBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import Empty from "../etc/Empty";
import classes from "./PurchasesContainer.module.css";

function PurchasesCointainer({ items }) {
  return !items || !items.length ? (
    <Empty img={<BsFillBagCheckFill />}>
      <p>There is no item you have paid. Pay some item first!</p>
      <Link to="/store/checkouts">See my checkout</Link>
    </Empty>
  ) : (
    <div className={classes.main}>contained!</div>
  );
}

export default PurchasesCointainer;
