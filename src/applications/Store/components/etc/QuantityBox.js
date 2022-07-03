import { useContext, useEffect, useState } from "react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";

import StoreCartContext from "../../context/store-cart-context";
import classes from "./QuantityBox.module.css";

function QuantityBox(props) {
  const storeCartContext = useContext(StoreCartContext);
  const [quantity, setQuantity] = useState(
    storeCartContext.getQuantity(props.id)
  );

  useEffect(() => {
    storeCartContext.setQuantity(props.id, quantity);
  }, [quantity]);

  const handleChange = (e) => {
    if (e.target.value > 0) setQuantity(parseInt(e.target.value));
    else setQuantity(parseInt(1));
  };

  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleSubtract = () => {
    setQuantity((prev) => {
      if (prev > 1) return prev - 1;
      return prev;
    });
  };

  return (
    <div className={classes.main}>
      <button onClick={handleSubtract} className={classes.buttonSubtract}>
        <BsDashLg />
      </button>
      <input
        id={props.id}
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button onClick={handleAdd} className={classes.buttonAdd}>
        <BsPlusLg />
      </button>
    </div>
  );
}

export default QuantityBox;
