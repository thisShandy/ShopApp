import React from "react";
import "./GoodScreen.css"
import Header from "../Components/Header/Header"
import Content from "./Components/Content/Content";
import Modal from "../Components/Modal/Modal";

const GoodScreen = () => {
  return (
    <div className={"good-screen"}>
      <Modal />
      <Header />
      <Content />
    </div>
  );
};

export default GoodScreen;