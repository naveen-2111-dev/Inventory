import React, { useState } from "react";
import axios from "axios";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:11000/sender", {
        name: formData.name,
        email: formData.email,
        number: formData.contactNumber,
        message: formData.message,
      });
    } catch (err) {
      console.log(err, "error");
    }
  };

  return (
    <div className="container2-login">
      <form onSubmit={handleSubmit}>
        <label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="forminput"
            placeholder="Name. . ."
          />
        </label>
        <label>
          <br />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="forminput"
            placeholder="Email. . ."
          />
        </label>
        <label>
          <br />
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            className="forminput"
            onChange={handleChange}
            placeholder="phone. . ."
          />
        </label>
        <label>
          <br />
          <input
            type="text"
            name="message"
            value={formData.message}
            className="forminput message"
            onChange={handleChange}
            placeholder="  add your feedback . . ."
          />
        </label>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      <div className="socialData">
        <a href="https://www.instagram.com/" target="blank" className="insta">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/" target="blank" className="Fb">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/" target="blank" className="X">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/" target="blank" className="Linkedin">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Feedback;
