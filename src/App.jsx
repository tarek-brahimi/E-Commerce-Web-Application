import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home";
import "./App.css";
import { CheckoutPage } from "./pages/checkoutpage";
import { Order  } from "./pages/order.jsx";
import {Track} from "./pages/tracking.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="order" element={<Order/>} />
        <Route path="Tracking" element={<Track/>} />
      </Routes>
    </>
  );
}

export default App;
