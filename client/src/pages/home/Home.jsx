import React from "react";
import { Calander, Right, Middle } from "../../utils/index";
import { Nav } from "../../components";

const Home = () => {
  return (
    <div className="homepage">
      <Nav />
      <div className="content-container">
        <Calander />
        <Middle />
        <Right />
      </div>
    </div>
  );
};

export default Home;
