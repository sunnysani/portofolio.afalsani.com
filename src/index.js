import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { StoreUsernameContextProvider } from "./applications/Store/context/store-username-context";
import { StoreActionBarContextProvider } from "./applications/Store/context/store-action-bar-context";
import { StoreCartProvider } from "./applications/Store/context/store-cart-context";
import { StoreTemporaryProvider } from "./applications/Store/context/store-temporary-context";
import { StoreCheckoutProvider } from "./applications/Store/context/store-checkout-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreUsernameContextProvider>
      <StoreCartProvider>
        <StoreCheckoutProvider>
          <StoreTemporaryProvider>
            <StoreActionBarContextProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </StoreActionBarContextProvider>
          </StoreTemporaryProvider>
        </StoreCheckoutProvider>
      </StoreCartProvider>
    </StoreUsernameContextProvider>
  </React.StrictMode>
);
