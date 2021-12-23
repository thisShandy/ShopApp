import React from 'react';
import './Content.css'
import Parameters from "./Parameters/Parameters";
import Shop from "./Shop/Shop";

const Content = () => {
  return (
    <div className="row">
      <div className="content">
        <Parameters />
        <Shop />
      </div>
    </div>
  );
};

export default Content;