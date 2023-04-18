import React, { useState } from "react";
import "./reset.css";
import {useNavigate, useLocation } from "react-router-dom";
import axios from "axios";


const Reset = (props) => {


    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

  const [user, setUser] = useState({
    email: location.state.email|| "",
    secretQuestion: location.state.secretQuestion|| "",
    secretAnswer:"",
    newPassword: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const resetPassword = () => {
    axios.post("http://localhost:2020/api/v1/users/reset-password", user)
      .then(res => {
        console.log(res.data.message);
        alert(res.data.message);
        navigate("/login"); // Redirect to login page after password reset
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="reset">
      <h1>Reset Password</h1>
      <p>Email: {user.email}</p>
      <p>Secret Question: {user.secretQuestion}</p>
      <input
        type="text"
        name="secretAnswer"
        value={user.secretAnswer}
        onChange={handleChange}
        placeholder="Enter secret Answer"
      />
      <input
        type="password"
        name="newPassword"
        value={user.newPassword}
        onChange={handleChange}
        placeholder="Enter new password"
      />
      <div className="button" onClick={resetPassword}>
        Reset Password
      </div>
    </div>
  );
};


export default Reset;