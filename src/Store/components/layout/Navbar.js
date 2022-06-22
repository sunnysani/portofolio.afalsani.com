import { Link } from "react-router-dom";
import { BsShop, BsPerson } from "react-icons/bs";

import Card from "../ui/Card";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <Card>
      <header className={classes.header}>
        <Link to="/store">
          <div className={classes.logo}>
            <BsShop />
          </div>
        </Link>
        <div className={classes.account}>
          <BsPerson />
          {/* TODO: STATIC NAME TO DYNAMIC */}
          <span>Sani</span>
        </div>
      </header>
    </Card>
  );
}

export default Navbar;
