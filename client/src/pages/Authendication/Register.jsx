import React from "react";
import { useState } from "react";
import { CustomButton, CustomInput } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("0");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const HandleRegister = async () => {
    try {
      const registerData = await axios.post(`http://localhost:11000/register`, {
        name: user,
        password: pass,
        phone: phone,
        email: email,
      });
      console.log(registerData.data);

      if (registerData.data === "success") {
        navigate("/");
      } else {
        navigate("/register");
      }
    } catch (error) {
      console.log("Internal error occurred:", error);
    }
  };

  return (
    <div className="Logincontainer">
      <div className="heading">
        <h1>Register</h1>
      </div>
      <div className="formfield">
        <CustomInput
          Type="text transform"
          PlaceHolder="user name... "
          Function={(e) => {
            setUser(e.target.value);
          }}
          Class="textInput"
        />
        <CustomInput
          Type="text"
          PlaceHolder="Phone..."
          Function={(e) => {
            setPhone(e.target.value);
          }}
          Class="textInput"
        />
        <CustomInput
          Type="email"
          PlaceHolder="email... "
          Function={(e) => {
            setEmail(e.target.value);
          }}
          Class="textInput"
        />
        <CustomInput
          Type="password"
          PlaceHolder="password..."
          Function={(e) => {
            setPass(e.target.value);
          }}
          Class="passInput bottomgap"
        />

        <CustomButton
          Content="Register"
          Function={HandleRegister}
          Class="Button newpass regi"
        />
      </div>
      <div className="divider">
        <h3>or</h3>
      </div>

      <div className="register">
        <p>
          Alredy have an account?
          <Link to="/" className="none1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
