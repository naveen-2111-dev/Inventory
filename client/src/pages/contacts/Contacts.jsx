import React from "react";
import { Nav } from "../../components/index";
import { Feedback } from "../../utils/index";

const Contacts = () => {
  return (
    <div className="contact-container">
      <Nav />
      <div className="content-container">
        <Feedback />
      </div>
    </div>
  );
};

export default Contacts;
