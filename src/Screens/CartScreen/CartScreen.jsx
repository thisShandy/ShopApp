import React from 'react';
import './CartScreen.css'

import Header from '../Components/Header/Header'
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Modal from "../Components/Modal/Modal";

const CartScreen = () => {
  return (
    <div className="cart-screen">
      <Modal />
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default CartScreen;