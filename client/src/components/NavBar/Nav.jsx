import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext/UserContext";
import { FaUser, FaCog } from "react-icons/fa";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { UserName } = useContext(UserContext);
  const [Hamburger, setHamburger] = useState(false);

  const handleImage2Hover = () => {
    setIsDropdownOpen(true);
  };

  const handleImage2Leave = () => {
    setIsDropdownOpen(false);
  };

  const HamburgerMenu = () => {
    setHamburger(!Hamburger);
    console.log("clicked");
  };

  return (
    <div className={`nav ${Hamburger ? "open" : ""}`}>
      <div className="leftnav"></div>
      <div className={`buttons ${Hamburger ? "hidden" : ""}`}>
        <Link to="/home" className="lin">
          Home
        </Link>
        <Link to="/about" className="lin">
          About
        </Link>
        <Link to="/department" className="lin">
          Dept
        </Link>
        <Link to="/material" className="lin">
          Materials
        </Link>
        <Link to="/contact" className="lin">
          Contact
        </Link>
        <Link to="/" className="lin">
          Login
        </Link>
      </div>
      <div className="rightnav">
        <div className="image1">
          <FaCog />
        </div>
        <div
          className="image2"
          onMouseEnter={handleImage2Hover}
          onMouseLeave={handleImage2Leave}
        >
          <FaUser />
          {isDropdownOpen && (
            <div className="dropdown11">
              <p>{UserName}</p>
            </div>
          )}
        </div>
      </div>
      {Hamburger ? (
        <div className="hov">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/department">Dept</Link>
          <Link to="/material">Materials</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">Login</Link>
          <p>{ UserName }</p>
        </div>
      ) : null}
      <div className="hamburger">
        <span onClick={HamburgerMenu}>&#9776;</span>
      </div>
    </div>
  );
};

export default Nav;
