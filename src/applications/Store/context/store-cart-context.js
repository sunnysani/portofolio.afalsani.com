import { createContext, useContext, useEffect, useState } from "react";
import StoreUsernameContext from "./store-username-context";

const StoreCartContext = createContext({
  items: [],
  itemCount: 0,
  pushItme: (item) => {},
  removeItem: (itemId) => {},
  itemAddedToCart: (itemId) => {},
  setQuantity: (itemId, quantity) => {},
});

export function StoreCartProvider(props) {
  const [items, setItems] = useState([]);
  const storeUsernameContext = useContext(StoreUsernameContext);

  // TODO FETCH API
  useEffect(() => {
    setItems([]);
  }, [storeUsernameContext.username]);

  function pushItem(item) {
    item["quantity"] = 1;

    setItems((prev) => prev.concat(item));
  }

  function removeItem(itemId) {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  }

  function itemAddedToCart(itemId) {
    return items.some((item) => item.id === itemId);
  }

  function setQuantity(itemId, quantity) {
    let updatedQuantityIndex;
    items.forEach((item, index) => {
      if (item.id === itemId) updatedQuantityIndex = index;
    });
    if (updatedQuantityIndex !== "undefined") {
      items[updatedQuantityIndex].quantity = quantity;
      setItems(items);
    }
  }

  const context = {
    items: items,
    itemCount: items.length,
    pushItem: pushItem,
    removeItem: removeItem,
    itemAddedToCart: itemAddedToCart,
    setQuantity: setQuantity,
  };

  return (
    <StoreCartContext.Provider value={context}>
      {props.children}
    </StoreCartContext.Provider>
  );
}

export default StoreCartContext;
