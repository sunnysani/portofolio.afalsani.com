import { useContext, useEffect, useRef } from "react";

import Card from "../ui/Card";
import Modal from "../ui/Modal";
import classes from "./ChangeAccount.module.css";
import StoreUsernameContext from "../../context/store-username-context";

function ChangeAccount(props) {
  const storeUsernameContext = useContext(StoreUsernameContext);
  // TODO: Set initial value same as storeUsernameContext
  const usernameRef = useRef("");

  function changeUsernameHandler() {
    if (usernameRef.current.value) {
      storeUsernameContext.changeUsername(usernameRef.current.value);
      closeHandler();
    }
  }

  function closeHandler() {
    try {
      props.setToggleChangeAccount(false);
    } catch (err) {}
  }

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        changeUsernameHandler();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

  return (
    <Modal required={props.required} closeHandler={closeHandler}>
      <Card>
        <div className={classes.content}>
          <h1>{props.title ? props.title : "Change Username"}</h1>
          <div className={classes.actionArea}>
            <input
              ref={usernameRef}
              type="text"
              placeholder="Enter your username here"
            ></input>
            <button onClick={changeUsernameHandler}>
              {props.buttonText ? props.buttonText : "Change"}
            </button>
          </div>
        </div>
      </Card>
    </Modal>
  );
}

export default ChangeAccount;
