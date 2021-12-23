import React from 'react';
import { Codesandbox } from "react-feather";
import { Link } from 'react-router-dom'
import './Logo.css'

const Logo = () => {
  return (
    <Link className="logo" to="/">
      <Codesandbox color={"#FF9A8D"} size={32} />
    </Link>
  );
};

export default Logo;