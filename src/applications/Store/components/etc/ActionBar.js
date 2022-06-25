import { useContext } from "react";

import classes from "./ActionBar.module.css";
import StoreActionBarContext from "../../context/store-action-bar-context";

function ActionBar(props) {
  const storeActionBarContext = useContext(StoreActionBarContext);

  return (
    <>
      <div className={classes.actionBar}>
        {storeActionBarContext.actions.map((action) => {
          return (
            <div className={classes.actionBarItem} key={Math.random()}>
              <span>{action}</span>
            </div>
          );
        })}
      </div>
      {props.children}
    </>
  );
}

export default ActionBar;
