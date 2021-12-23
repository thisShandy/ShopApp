import './App.css';
import { Routes, Route } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import CartScreen from "./Screens/CartScreen/CartScreen";
import GoodScreen from "./Screens/GoodScreen/GoodScreen";
import BuyNowScreen from "./Screens/BuyNowScreen/BuyNowScreen";
import OrderScreen from "./Screens/OrderScreen/OrderScreen";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/sneaker" element={<GoodScreen />} />
          <Route path="/buynow" element={<BuyNowScreen />} />
          <Route path="/order" element={<OrderScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
