import { Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Checkouts from "./pages/Checkouts";

import MainPage from "./pages/Main";
import Purchases from "./pages/Purchases";

const routeArray = [
  <Route key="store-path" path="/store" element={<MainPage />} />,
  <Route key="store-cart-path" path="/store/cart" element={<Cart />} />,
  <Route
    key="store-checkouts-path"
    path="/store/checkouts"
    element={<Checkouts />}
  />,
  <Route
    key="store-purchases-path"
    path="/store/purchases"
    element={<Purchases />}
  />,
];

export default routeArray;
