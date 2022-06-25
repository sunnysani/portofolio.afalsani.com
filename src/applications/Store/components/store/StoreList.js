import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronDoubleRight } from "react-icons/bs";

import StoreItem from "./StoreItem";
import classes from "./StoreList.module.css";
import Card from "../ui/Card";

function StoreList(props) {
  return (
    <div className={classes.store}>
      {Object.entries(props.stores).map(([key, value]) => {
        return (
          <div key={key} className={classes.storeContainer}>
            <div className={classes.storeContainer}>
              <div className={classes.storeName}>
                <Link to="/store">
                  {value.name}
                  <div className={classes.rightAppearAnimation}>
                    <BsChevronDoubleRight />
                  </div>
                  <div className={classes.rightDissappearAnimation}>
                    <BsChevronRight />
                  </div>
                </Link>
              </div>
              <Card>
                <div className={classes.storeItemsContainer}>
                  {value.items.map((item) => {
                    const itemObjectId = Object.keys(item)[0];
                    const itemObject = Object.values(item)[0];
                    return (
                      <StoreItem
                        key={`${itemObject.name}-${itemObjectId}`}
                        store={{ id: key, name: value.name }}
                        id={itemObjectId}
                        name={itemObject.name}
                        images={itemObject.images}
                        price={itemObject.price}
                      />
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StoreList;
