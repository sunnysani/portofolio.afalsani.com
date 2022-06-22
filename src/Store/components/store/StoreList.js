import { BsChevronRight } from "react-icons/bs";

import Card from "../ui/Card";

import classes from "./StoreList.module.css";

function StoreList(props) {
  return (
    <div className={classes.store}>
      {Object.entries(props.stores).map(([key, value]) => {
        return (
          <div key={key} className={classes.storeName}>
            {value.name}&nbsp;&nbsp;
            <BsChevronRight />
            <Card>
              {value.items.map((item) => {
                console.log(item);
              })}
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default StoreList;
