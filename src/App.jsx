import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { CheckoutPage } from "./pages/checkoutpage";
import { Order  } from "./pages/order.jsx";
import {Track} from "./pages/tracking.jsx";
function App() {
   const [cart, setCart] = useState([]);
  useEffect(() => {
   
    axios("/api/cart-items").then((Response) => {
      setCart(Response.data)
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="order" element={<Order/>} />
        <Route path="Tracking" element={<Track/>} />
      </Routes>
    </>
  );
}

export default App;
