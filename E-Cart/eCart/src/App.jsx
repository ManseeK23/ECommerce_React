import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import SearchItems from "./components/SearchItems";
import Cart from "./components/Cart";
import { items } from "./components/Data";


const App = () => {
  const [data, setdata] = useState([...items])
  const [cart, setcart] = useState([]);
  return (
    <>
      <Router>
        <Navbar cart={cart} setdata={setdata}/>
        <Routes>
          <Route path="/" element={<Product cart={cart} setcart={setcart} items={data} />}></Route>
          <Route path="/product/:id" element={<ProductDetails cart={cart} setcart={setcart} />}></Route>
          <Route path="/search/:term" element={<SearchItems cart={cart} setcart={setcart} />}></Route>
          <Route path="/cart" element={<Cart cart={cart} setcart={setcart}/>}></Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
