import React from 'react';
import "./BuyNowScreen.css";
import Header from "../Components/Header/Header";
import Content from "./Content/Content";
import Footer from "./Content/Components/Footer/Footer";
import Modal from "../Components/Modal/Modal";

const BuyNowScreen = () => {
  return (
    <div className="buy-now-container">
      <Modal />
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default BuyNowScreen;