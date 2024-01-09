import Card from "../ui/Card";
import Modal from "../ui/Modal";
import classes from "./CartCheckoutModal.module.css";

function CartCheckoutModal(props) {

  function closeHandler() {
    try {
      props.setToggleCheckoutModal(false);
    } catch (err) {}
  }

    console.log('test');
    return <Modal required={ false } closeHandler={closeHandler}>
      <Card>
        <div className={classes.content}>
          <h1>Checkout</h1>
          <div className={classes.buttonClass}>
            <button>Proceed</button>
          </div>
        </div>
      </Card>
    </Modal>;
}

export default CartCheckoutModal;
