import React from 'react';
import './HomeScreen.css'
import Header from "../Components/Header/Header";
import Content from "./Components/Content/Content";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <Header />
      <Content />
    </div>
  );
};

export default HomeScreen;