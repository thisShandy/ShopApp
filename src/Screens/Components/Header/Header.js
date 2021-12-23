import React from 'react';
import './Header.css'
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className="row">
      <header className="header">
        <Logo />
        <Navbar />
      </header>
    </div>
  );
};

export default Header;