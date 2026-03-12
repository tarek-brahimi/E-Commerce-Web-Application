import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home";
import "./App.css";
import { CheckoutPage } from "./pages/checkoutpage";
import { Order  } from "./pages/ordeer.JSX";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="order" element={<Order/>} />
      </Routes>
    </>
  );
}

export default App;
