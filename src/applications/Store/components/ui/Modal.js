import { BsXLg } from "react-icons/bs";

import classes from "./Modal.module.css";

function Modal(props) {
  let containerStyle = {}

  if (props.maxWidth !== undefined) {
    containerStyle['maxWidth'] = props.maxWidth;
  }

  if (props.verticalAlign !== undefined && props.verticalAlign === true) {
    containerStyle['top'] = '50%';
    containerStyle['transform'] = 'translate(-50%, -50%)';
  }

  return (
    <div className={classes.modal}>
      <div className={classes.backdrop} onClick={props.closeHandler} />
      <div className={classes.modalContainer} style={containerStyle}>
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
