import { useContext } from "react";

import ChangeAccount from "./ChangeAccount";
import StoreUsernameContext from "../../context/store-username-context";

function CheckUsername() {
  const storeUsernameContext = useContext(StoreUsernameContext);

  if (storeUsernameContext.username == null) {
    return (
      <ChangeAccount
        title="Enter Username"
        required={true}
        buttonText={"Set"}
      />
    );
  }
  return;
}

export default CheckUsername;
