import React from "react";

const Middle = () => {
  return (
    <div className="Midcontainer">
      <div className="top">
        <select>
          <option className="option">Incubation Lab #1</option>
          <option className="option">Incubation Lab #2</option>
          <option className="option">Incubation Lab #3</option>
        </select>
        <div className="logo"></div>
        <p className="p1">Student Details</p>
        <p className="p2">
          "Dive Deep into Every
          <br />
          Student's Journey"
        </p>
        <a>
          <button>Uncover Details</button>
        </a>
      </div>
      <div className="top">
        <p className="p3">Explore Like</p>
        <p className="p4">Never Before</p>
        <a>
          <button>Unfold our Journey</button>
        </a>
      </div>
    </div>
  );
};

export default Middle;
