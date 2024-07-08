// //  use of map function-------------------------------------------------------

// // export default function map() {
// //   const array = ['first', 'second', 'third', 'fourth', 'fifth'];
// //   return (
// //    < >

// //     <h1>List Items</h1>

// //     <ul>
// //       {array.map((array, index) =>
// //       (
// //         <li key={index}>{array}</li>
// //       )

// //     )}
// //     </ul>
// //     </>
// //   );
// // }

// //----------------------------------------------------------- parent child component

// // export default function App() {
// //   return (
// //     <div>
// //       <h1>This is the parent component</h1>
// //       <MyButton />
// //     </div>
// //   );
// // }

// // function MyButton() {
// //   return (
// //     <div>
// //       <button>Click me</button>
// //     </div>
// //   );
// // }

// //---------------------------------------------------------- use of states

// // import { useState } from "react";

// // function Counter() {
// //   const [count, setCount] = useState(0);

// //   return (
// //     <div>
// //       <h1>Count: {count}</h1>
// //       <button onClick={() => setCount(count + 1)}>Increment</button>
// //     </div>
// //   );
// // }

// // export default Counter;

// //-------------another example of use of states--------------------

// // import { useState } from "react";
// // function Toggle() {
// //   const [isOn, setIsOn] = useState(false);

// //   return (
// //     <div>
// //       <h1>{isOn ? 'ON' : 'OFF'}</h1>
// //       <button onClick={() => setIsOn(!isOn)}>Toggle</button>
// //     </div>
// //   );
// // }

// // export default Toggle;
// //--------------------------------------------------------------------------

// // import 'bootstrap/dist/css/bootstrap.min.css';

// // function BootstrapAlert() {
// //   return (
// //     <div className="alert alert-primary" role="alert">
// //       This is a primary alert—check it out!
// //     </div>
// //   );
// // }

// // export default BootstrapAlert

import React, { useState } from "react";
import "./App.css";

// import Day0 from './components/week-2/Day0';
//import Day1 from './components/week-2/Day-1';
//import Day2 from './components/week-2/Day-2';




import "./App.css";
import Header from "./components/shopping-site/Header";
import ProductList from './components/shopping-site/ProductList';
import CartList from './components/shopping-site/CartList';

type Product = {
  url: string;
  name: string;
  seller: string;
  price: number;
  quantity: number;
};

const App: React.FC = () => {
  const [product, setProduct] = useState([
    {
      url: new URL('./components/shopping-site/images/w52.jpg', import.meta.url).href,
      name: "Simple And Unique",
      seller: 'MystiqueTime',
      price: 21000
    },
    {
      url: new URL('./components/shopping-site/images/w51.jpg', import.meta.url).href,
      name: "Celestial Watch",
      seller: 'JewelWatches',
      price: 45000,
      quantity:0
    },
    {
      url: new URL('./components/shopping-site/images/w5.jpg', import.meta.url).href,
      name: "Luxury Watch",
      seller: ' CrownTime',
      price: 28000
    },
   
    {
      url: new URL('./components/shopping-site/images/w59.png', import.meta.url).href,
      name: "Black Digital",
      seller: 'EliteTimepieces',
      price: 35000
    },
    
  ]);

  const [cart, setCart] = useState<Product[]>([]);





  const [showCart,setShowCart] = useState(false);
  const addToCart = (data: Product) => {
    setCart([...cart, {...data, quantity: 1}]);
  };

  const handleShow=(value: boolean | ((prevState: boolean) => boolean)) =>{
setShowCart(value)
  }
  return (
    <div className="App">
      <Header count={cart.length}  
      handleShow={handleShow}
      
      />

      {
        showCart?
        <CartList cart={cart}/>
        :
        <ProductList product={product}  addToCart={addToCart}/>

      }
      

    
      
    </div>
  );
}

export default App;
