import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Right = () => {
  const [percentage] = useState(1);

  useEffect(() => {
    // You can remove the old code that manually rotates the progress bar
  }, [percentage]);

  const navigate = useNavigate();

  const generateRandomHeight = () =>
    Math.floor(Math.random() * (99 - 25 + 1) + 25);

  const decoHeights = Array.from({ length: 13 }, generateRandomHeight);

  return (
    <div className="container1">
      <div className="con1">
        <p className="northeast">&#x2197;</p>
        <p className="titletext">Material Available</p>
        {decoHeights.map((height, index) => (
          <div
            key={index}
            className="deco"
            style={{
              display: "inline-block",
              marginRight: "-15px",
              height: `${height}px`,
              backgroundColor:
                Math.random() > 0.5 ? "var(--color)" : "var(--grey)",
            }}
          ></div>
        ))}
      </div>
      <div className="con1">
        <p
          className="northeast"
          onClick={() => {
            navigate("/contact");
          }}
        >
          &#x2197;
        </p>
        <p className="titletext">Contacts</p>
        <div className="email">
          <p className="title1">Email</p>
        </div>
        <div className="email">
          <p className="title1">Phone Number</p>
        </div>
      </div>
      <div className="con1">
        <p className="northeast">&#x2197;</p>
        <p className="titletext">Students Review</p>
        <div className="circle">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textSize: "23px",
              pathColor: `rgba(238, 254, 60, ${percentage / 100})`,
              textColor: "#000000",
              trailColor: "#ffffff",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default Right;
