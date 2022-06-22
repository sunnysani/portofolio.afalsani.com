import { Route, Routes } from "react-router-dom";
import MainPage from "./Store/pages/Main";

import Tmp from "./Tmp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Tmp />} />
      <Route path="/store" element={<MainPage />} />
    </Routes>
  );
}

export default App;
