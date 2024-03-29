import React, { useContext, useState } from "react";
import { CustomButton, CustomInput } from "../../components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext/UserContext.jsx";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const { setUserName } = useContext(UserContext);

  const HandleLogin = async () => {
    console.log(user, pass);
    try {
      const response = await axios.post(`http://localhost:11000/login`, {
        email: user,
        password: pass,
      });
      console.log(response.data);

      if (response.data === "success") {
        navigate("/home");
      } else {
        navigate("/register");
      }
    } catch (err) {
      console.log(err);
    }

    try {
      const UserNameRender = await axios.get(
        `http://localhost:11000/username/${user}`
      );

      if (UserNameRender) {
        setUserName(UserNameRender.data);
        console.log("username", UserNameRender);
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className="Logincontainer">
      <div className="heading">
        <h1>Login</h1>
      </div>
      <div className="formfield">
        <CustomInput
          Type="text"
          PlaceHolder="email... "
          Function={(e) => {
            setUser(e.target.value);
          }}
          Class="textInput"
        />
        <CustomInput
          Type="password"
          PlaceHolder="password..."
          Function={(e) => {
            setPass(e.target.value);
          }}
          Class="passInput"
        />

        <div className="extraElements">
          <p>
            <Link to="/forgetpassword" className="none">
              forget password?
            </Link>
          </p>
        </div>

        <CustomButton Content="Login" Function={HandleLogin} Class="Button" />
      </div>
      <div className="divider">
        <h3>or</h3>
      </div>

      <div className="register">
        <p>
          dont have an account?
          <Link to="/register" className="none1">
            register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
