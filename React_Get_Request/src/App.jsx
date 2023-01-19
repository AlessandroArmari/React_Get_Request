//---> follow the numbers!

import { useState } from "react";
import { OrderList } from "./components/OrderList";

function App() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  /*2*/
  const fetchOrderHandler = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        // ---> the return of fetch() is a Promise (here called: response)
        //---> await= wait for the Promise result (the data stored in this URL!)
        "https://1ed3f2d0-25a5-433b-97a4-40290bff2df6.mock.pstmn.io/myorders"
      );

      // --->response has a "property "ok"
      if (!response.ok) {
        //--->if the answer if different from 200 (ok), cast an error!
        //--->example: if you type a wrong URL--->the error displayed will be this one because the .ok in the Promise won't be 200!
        throw new Error("Something went wrong!");
      }

      const data = await response.json(); //--->I'm make my response a .json file ---> ("readable")
      //--->+++ACTUALLY: it returns a JavaScript object that can be rapresented by JSON (developer.mozilla);
      const transformedOrders = data.orders.map((order) => {
        return { id: order.id, name: order.name, price: order.price };
      }); //--->creating as many JS object as the ones in the JSON file
      //--->the objects will have the properties I want to "fetch"
      setOrders(transformedOrders);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
    setIsLoading(false);
  };

  let content = <p> No orders yet! Click the button!</p>;

  if (orders.length > 0) {
    content = <OrderList orders={orders} />;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <>
      <section>
        {/*1*/}
        <button onClick={fetchOrderHandler}>Fetch Order</button>
      </section>
      <section>{content}</section>
    </>
  );
}

export default App;

/* Use this "mock-list" and type "orderList"
  as "props" of "orders" too see how list works

  In the actual exercise we "fetch" the "list" from 
  a server (which give us a Json which is similar to this object)
  ...here, from a list of object...
  
  
  const orderList = [
    { id: "1", name: "Pizza", price: "8.9" },
    { id: "2", name: "Pane", price: "1.2" },
    { id: "44", name: "Tomato", price: "3.5" },
  ];
  */
