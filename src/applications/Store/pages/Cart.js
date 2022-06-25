import { useContext } from "react";

import CartContainer from "../components/cart/CartContainer";
import Layout from "../components/layout/Layout";
import StoreCartContext from "../context/store-cart-context";

function Cart() {
  const storeCartContext = useContext(StoreCartContext);

  return (
    <Layout>
      <h1>Your Cart</h1>
      <CartContainer items={storeCartContext.items} />
    </Layout>
  );
}

export default Cart;
