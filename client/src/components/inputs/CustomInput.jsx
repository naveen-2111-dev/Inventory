import React from "react";

const CustomInput = ({ PlaceHolder, Class, Function, Type }) => {
  return (
    <input
      type={Type}
      placeholder={PlaceHolder}
      className={Class}
      onChange={Function}
    />
  );
};

export default CustomInput;
