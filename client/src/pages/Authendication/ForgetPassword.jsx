import React, { useState } from "react";
import { CustomButton, CustomInput } from "../../components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [Email, setEmail] = useState("");
  const navigate = useNavigate();

  const HandlePasswordSending = async () => {
    try {
      const ForgetData = await axios.post(
        `http://localhost:11000/forgetpassword`,
        { email: Email }
      );
      if (ForgetData.data === "Password sent successfully") {
        navigate("/");
      } else {
        if (ForgetData.data === "User not found") {
          navigate("/register");
        } else {
          navigate("/forgetpassword");
        }
      }
    } catch {
      (err) => {
        alert("error", err);
      };
    }
  };

  return (
    <div className="ForgetPassword-container">
      <div className="Title">
        <h1>Email </h1>
      </div>
      <div className="formclass">
        <CustomInput
          Type="email"
          PlaceHolder="Email..."
          Class="FormFieldEmail"
          Function={(event) => setEmail(event.target.value)}
        />

        <div className="formButton">
          <CustomButton
            Content="Send"
            Function={HandlePasswordSending}
            Class="SendButton"
          />
        </div>
      </div>
      <div className="next">
        <p className="option">or</p>
        <p className="linker">
          have password?
          <Link to="/" className="linker2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
