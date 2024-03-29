import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/AuthendicationCss/Forget.css";
import "./styles/AuthendicationCss/Login.css";
import "./styles/AuthendicationCss/Register.css";
import "./styles/componentsCss/Nav.css";
import "./styles/componentsCss/bottomnav.css";
import "./styles/DepartmentCss/Department.css";
import "./styles/HomePageCss/Calander.css";
import "./styles/HomePageCss/Home.css";
import "./styles/HomePageCss/Middle.css";
import "./styles/HomePageCss/Right.css";
import "./styles/contactscss/contact.css";
import "./styles/contactscss/feedback.css";
import "./styles/MaterialCss/material.css";
import "./styles/contactscss/detial.css";
import "./styles/AboutCss/about.css";
import { UserProvider } from "./Context/UserContext/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
