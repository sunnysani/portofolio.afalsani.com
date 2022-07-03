import CartContainer from "../components/cart/CartContainer";
import Layout from "../components/layout/Layout";

function Cart() {
  return (
    <Layout>
      <h1>Your Cart</h1>
      <CartContainer />
    </Layout>
  );
}

export default Cart;
