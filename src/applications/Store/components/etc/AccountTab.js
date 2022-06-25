import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPerson, BsCardText, BsPeople, BsCashCoin } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";

import classes from "./AccountTab.module.css";
import StoreUsernameContext from "../../context/store-username-context";
import ChangeAccount from "./ChangeAccount";

function AccountTab() {
  const storeUsernameContext = useContext(StoreUsernameContext);

  const [toggleAccount, setToggleAccount] = useState(false);
  const refToggleAccount = useRef(null);

  const [toggleChangeAccount, setToggleChangeAccount] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!toggleAccount && refToggleAccount.current.contains(e.target))
        setToggleAccount(true);
      else if (toggleAccount) setToggleAccount(false);
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [toggleAccount]);
  return (
    <>
      <div className={classes.account} ref={refToggleAccount}>
        <BsPerson />
        <span>{storeUsernameContext.username}</span>
      </div>

      <div
        className={classes.account_tab}
        style={{
          display: toggleAccount ? "block" : "none",
        }}
      >
        <Link to="/store/purchases">
          <div className={classes.history}>
            <BsCardText />
            <span>My Purchases</span>
          </div>
        </Link>
        <Link to="/store/checkouts">
          <div className={classes.history}>
            <BsCashCoin />
            <span>My Checkouts</span>
          </div>
        </Link>
        <div
          className={classes.changeaccount}
          onClick={() => {
            setToggleChangeAccount(true);
          }}
        >
          <BsPeople />
          <span>Change Account</span>
        </div>
      </div>
      {toggleChangeAccount && (
        <ChangeAccount setToggleChangeAccount={setToggleChangeAccount} />
      )}
    </>
  );
}

export default AccountTab;
