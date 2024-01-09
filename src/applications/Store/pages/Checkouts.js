import { useEffect, useState } from "react";

import CheckoutsContainer from "../components/checkouts/CheckoutsContainer";
import Layout from "../components/layout/Layout";

function Checkouts() {
  const [items, setItems] = useState([]);

  // update if there is a backend useEffect
  useEffect(() => {
    setItems([]);
  }, []);

  return (
    <Layout>
      <h1>Your Checkouts</h1>
      <CheckoutsContainer items={items} />
    </Layout>
  );
}

export default Checkouts;
