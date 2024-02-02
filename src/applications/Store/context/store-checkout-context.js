import { createContext, useContext, useEffect, useState } from "react";
import StoreUsernameContext from "./store-username-context";

// itemsFormat
// [
//   {
//     store: { id: "store1", name: "Toko Pertama" },
//     items: [
//       {
//         id: 1,
//         name: "name product",
//         image: "http://"
//         quantity: 2,
//         price: 3000,
//         totalPrice: 6000
//       }
//     ],
//     totalPrice: 6000,
//   }
// ]

const StoreCheckoutContext = createContext({
  items: [],
  itemCount: 0,
  pushItem: (item) => {},
})

export function StoreCheckoutProvider(props) {
  const [items, setItems] = useState([]);
  const storeUsernameContext = useContext(StoreUsernameContext);

  // TODO Fetch API
  useEffect(() => {
    setItems([]);
  }, [storeUsernameContext.username]);

  function pushItem(item) {
    setItems(prev => prev.push(item));
  }

  const context = {
    items: items,
    itemCount: items.length,
    pushItem: pushItem,
  };

  return (
    <StoreCheckoutContext.Provider value={context}>
      {props.children}
    </StoreCheckoutContext.Provider>
  );
}