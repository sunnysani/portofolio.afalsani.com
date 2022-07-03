import { createContext, useState } from "react";

// Temporary items format:
// checkoutedItems = [
//   {
//     store: { id: "store1", name: "Toko Pertama" },
//     id: "checkout1",
//     items: [
//       {
//         id: "1",
//         name: "name product",
//         quantity: 1,
//       },
//     ],
//     totalQuantity: 1,
//     totalPrice: 5.99,
//     date: 1656661367151
//   },
// ];

const StoreTemporaryContext = createContext({
  checkoutItems: [],
  purchaseItems: [],
  addCheckoutItem: () => {},
  addPurchaseItem: () => {},
  payCheckoutItem: (itemId) => {},
});

export function StoreTemporaryProvider(props) {
  const [checkoutItems, setCheckoutItems] = useState([
    {
      store: { id: "store1", name: "Toko Pertama" },
      id: "checkout1",
      items: [
        {
          id: "1",
          name: "Wizarding Cast Iron Pan",
          quantity: 1,
          image:
            "https://lh3.googleusercontent.com/d/1eRwSakngKyc2dM1W8pk7wn97Il0nHXMU",
        },
      ],
      totalQuantity: 1,
      totalPrice: 5.99,
      date: 1656661367151,
    },
  ]);
  const [purchaseItems, setPurchaseItems] = useState([]);
  const [counter, setCounter] = useState(1);

  function addCheckoutItem(item) {
    item["id"] = "checkout-" + counter;
    setCheckoutItems((prev) => prev.concat(item));
    setCounter((prev) => prev + 1);
  }

  function addPurchaseItem(item) {
    item["id"] = "purchase-" + counter;
    setPurchaseItems((prev) => prev.concat(item));
    setCounter((prev) => prev + 1);
  }

  function payCheckoutItem(itemId) {
    setPurchaseItems((prev) =>
      prev.concat(checkoutItems.filter((item) => item.id === itemId)[0])
    );
    setCheckoutItems((prev) => prev.filter((item) => item.id !== itemId));
  }

  const context = {
    checkoutItems: checkoutItems,
    purchaseItems: purchaseItems,
    addCheckoutItem: addCheckoutItem,
    addPurchaseItem: addPurchaseItem,
    payCheckoutItem: payCheckoutItem,
  };

  return (
    <StoreTemporaryContext.Provider value={context}>
      {props.children}
    </StoreTemporaryContext.Provider>
  );
}

export default StoreTemporaryContext;
