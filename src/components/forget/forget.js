import React, { useState } from "react";
import "./forget.css";
import {useNavigate } from "react-router-dom";
import axios from "axios";
// import Reset from "./components/reset/reset";

const Forget = () => {

    const navigate = useNavigate();


    const [user, setUser] = useState({
        email: "",  
      });


const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const forget = () => {
    axios.post("http://localhost:2020/api/v1/users/forget-password", user)
      .then(res => {
        console.log(res.data.message);
         // Pass email and secretQuestion as props to Reset component
         navigate("/reset", { state: { email: user.email, secretQuestion: res.data.secretQuestion } });
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="forgot">
      <h1>Forgot Password</h1>
      <input type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
        />
      <div className="button" onClick={forget}>
        Submit
      </div>
    
    </div>
  );
};

export default Forget;

