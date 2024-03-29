import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Contacts,
  Department,
  ForgetPassword,
  Home,
  Login,
  Material,
  Register,
} from "./pages";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/department" element={<Department />} />
          <Route path="/Material" element={<Material />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
