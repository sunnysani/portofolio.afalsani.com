import { Route, Routes } from "react-router-dom";
import StoreRoute from "./applications/Store/StoreRoute";

import Tmp from "./Tmp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Tmp />} />
      {StoreRoute}
    </Routes>
  );
}

export default App;
