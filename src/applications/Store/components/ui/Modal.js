import { BsXLg } from "react-icons/bs";

import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.backdrop} onClick={props.closeHandler} />
      <div className={classes.modalContainer}>
        {!props.required ? (
          <button className={classes.exit} onClick={props.closeHandler}>
            <BsXLg />
          </button>
        ) : (
          <></>
        )}
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
