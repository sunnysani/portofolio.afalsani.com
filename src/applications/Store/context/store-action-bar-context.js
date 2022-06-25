import { createContext, useState } from "react";

const StoreActionBarContext = createContext({
  actions: [],
  pushAction: (action) => {},
  shiftAction: () => {},
});

export function StoreActionBarContextProvider(props) {
  // TODO REMOVE DEFAULT ARRAY AT USE STATE
  const [actions, setActions] = useState(["Item added to cart"]);

  function pushAction(action) {
    actions.push(action);
    setActions(actions);
  }

  function shiftAction() {
    actions.shift();
    setActions(actions);
  }

  const context = {
    actions: actions,
    pushAction: pushAction,
    shiftAction: shiftAction,
  };

  return (
    <StoreActionBarContext.Provider value={context}>
      {props.children}
    </StoreActionBarContext.Provider>
  );
}

export default StoreActionBarContext;
