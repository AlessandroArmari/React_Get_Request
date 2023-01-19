import { Order } from "./Order";
import classes from "./style/OrderList.module.css";

// OrderList is the component I will use in App.jsx
// It casts a .map() returning as many <Order> as the elements
// inside the List we will fetch from the "WEB"

const OrderList = (props) => {
  return (
    <ul className={classes["order-list"]}>
      {props.orders.map((order, index) => {
        return (
          <Order //---> each <Order> has props "filled" by each properties of the element of the list we will fetch (ex.   name is filled with list.element.name ecc...)
            key={index}
            id={order.id}
            name={order.name}
            price={order.price}
          />
        );
      })}
    </ul>
  );
};

export { OrderList };
