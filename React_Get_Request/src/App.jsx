//---> follow the numbers!

import { OrderList } from "./components/OrderList";

function App() {
  /*2*/
  const fetchOrderHandler = async () => {
    //setIsLoading(true);
    //setError(null);

    try {
      const response = await fetch(
        // ---> the return of fetch() is a Promise (here called: response)
        //---> await= wait for the Promise result (the data stored in this URL!)
        "https://1ed3f2d0-25a5-433b-97a4-40290bff2df6.mock.pstmn.io/myorders"
      );
      console.log(response);

      // --->response has a "property "ok"
      if (!response.ok) {
        //--->if the answer if different from 200 (ok), cast an error!
        throw new Error("Something went wrong!");
      }

      const data = await response.json(); //--->I'm make my response a .json file ---> ("readable")
      //--->+++ACTUALLY: it returns a Promise--->a JavaScript object that can be rapresented by JSON (developer.mozilla)
    } catch {}
  };

  return (
    <>
      <section>
        {/*1*/}
        <button onClick={fetchOrderHandler}>Fetch Order</button>
      </section>
      <section></section>
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
