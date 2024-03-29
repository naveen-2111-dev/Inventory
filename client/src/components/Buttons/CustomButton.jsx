import React from "react";

const CustomButton = ({ Content, Function, Class }) => {
  return (
    <button className={Class} onClick={Function}>
      {Content}
    </button>
  );
};

export default CustomButton;
