import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsShop, BsCart } from "react-icons/bs";

import Card from "../ui/Card";
import AccountTab from "../etc/AccountTab";
import classes from "./Navbar.module.css";
import StoreCartContext from "../../context/store-cart-context";

function Navbar(props) {
  const storeCartProvider = useContext(StoreCartContext);

  return (
    <Card>
      <header className={classes.header}>
        <Link to="/store">
          <div className={classes.logo}>
            <BsShop />
          </div>
        </Link>
        <div className={classes.sidebar}>
          <Link to="/store/cart">
            <div
              className={`${classes.cart} ${
                !storeCartProvider.itemCount ? classes.jelloHorizontal : null
              }`}
            >
              <BsCart />
              <span className={classes.item_count}>
                {storeCartProvider.itemCount}
              </span>
            </div>
          </Link>
          <AccountTab />
        </div>
      </header>
    </Card>
  );
}

export default Navbar;
