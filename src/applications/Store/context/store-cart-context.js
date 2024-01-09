import { createContext, useContext, useEffect, useState } from "react";
import StoreUsernameContext from "./store-username-context";

// Cart items format:
// items = [
//   {
//     store: { id: "store1", name: "Toko Pertama" },
//     id: "1",
//     name: "name product",
//     quantity: 1,
//     image: 'http://',
//   },
// ];

const StoreCartContext = createContext({
  items: [],
  itemCount: 0,
  pushItme: (item) => {},
  removeItem: (itemId) => {},
  itemAddedToCart: (itemId) => {},
  setQuantity: (itemId, quantity) => {},
  getQuantity: (itemId) => {},
  getStoreById: (itemId) => {},
  getItemById: (itemId) => {},
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

    let putIndex = items.length;
    for (let i = 0; i < items.length; i++) {
      if (
        String(item.store.name).valueOf() <
        String(items[i].store.name).valueOf()
      ) {
        putIndex = i;
        break;
      } else if (
        String(item.store.name).valueOf() ===
        String(items[i].store.name).valueOf()
      ) {
        if (item.name < items[i].name) {
          putIndex = i;
          break;
        }
      }
    }

    items.splice(putIndex, 0, item);
    setItems(items);
    removeItem(null);
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
    setItems(items.concat());
  }

  function getQuantity(itemId) {
    return items.filter((item) => item.id === itemId)[0].quantity;
  }

  function getStoreById(itemId) {
    return items.filter((item) => item.id === itemId)[0].store.id;
  }

  function getItemById(itemId) {
    return items.filter((item) => item.id === itemId)[0];
  }

  const context = {
    items: items,
    itemCount: items.length,
    pushItem: pushItem,
    removeItem: removeItem,
    itemAddedToCart: itemAddedToCart,
    setQuantity: setQuantity,
    getQuantity: getQuantity,
    getStoreById: getStoreById,
    getItemById: getItemById,
  };

  return (
    <StoreCartContext.Provider value={context}>
      {props.children}
    </StoreCartContext.Provider>
  );
}

export default StoreCartContext;
