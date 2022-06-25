import { createContext, useState } from "react";

const StoreUsernameContext = createContext({
  username: null,
  changeUsername: (user) => {},
});

export function StoreUsernameContextProvider(props) {
  const [username, setUsername] = useState(
    localStorage.getItem("afalsani-store-username")
  );

  function changeUsername(username) {
    localStorage.setItem("afalsani-store-username", username);
    setUsername(username);
  }

  const context = {
    username: username,
    changeUsername: changeUsername,
  };

  return (
    <StoreUsernameContext.Provider value={context}>
      {props.children}
    </StoreUsernameContext.Provider>
  );
}

export default StoreUsernameContext;
