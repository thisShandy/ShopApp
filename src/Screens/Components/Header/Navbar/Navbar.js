import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShoppingCart } from "react-feather";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="cart" to="/cart">
        <ShoppingCart className="cart-icon" color="#F1FDFF" size={28} />
      </Link>
    </div>
  );
};

export default Navbar;