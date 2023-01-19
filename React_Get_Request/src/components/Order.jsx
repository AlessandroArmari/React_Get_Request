import classes from "./style/Order.module.css";
//HERE I'm working with "classes" within .css file

//This component creates a list item to Be inserted
//in a OrderList Component

const Order = (props) => {
  return (
    <li className={classes.order}>
      <h2>{props.id}</h2>
      <p>
        <span>Name: {props.name}</span>
      </p>
      <p>
        <span>Price: {props.price}</span>
      </p>
    </li>
  );
};

export { Order };
