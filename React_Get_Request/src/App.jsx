import { Order } from "./components/Order";
import { OrderList } from "./components/OrderList";

function App() {
  const orderList = [
    { id: "1", name: "Pizza", price: "8.9" },
    { id: "2", name: "Pane", price: "1.2" },
  ];
  return (
    <div>
      <OrderList orders={orderList} />
    </div>
  );
}

export default App;

/* Use this "mock-list" and type "orderList"
  as "props" of "orders" too see how list works

  In the actual exercise we "fetch" the "list" from 
  a server...here, from a list of object...
  
  
  const orderList = [
    { id: "1", name: "Pizza", price: "8.9" },
    { id: "2", name: "Pane", price: "1.2" },
  ];
  */
