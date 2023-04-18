import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import {useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => { 

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""  
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const login = () => {
    axios.post("http://localhost:2020/api/v1/users/login", user)
    .then(res => {
      alert(res.data.message);
      setLoginUser(res.data.user); 
       // Save JWT token from response headers in local storage
       console.log(res)
       const token = res.data["x-api-key"];
       //const token = res.headers["x-api-key"]; // Get token from response headers
       localStorage.setItem("x-api-key", token); // Save token in local storage with key "token"
       navigate("/")
       
      });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
      <div className="button" onClick={login}>
        Login
      </div>
      <div>or</div>
      <div
        className="button"
        onClick={() => navigate("/register")}
      >
        Register
      </div>
      <div>or</div>
      <div
        className="button"
        onClick={() => navigate("/forget")}
      >
        Forget Password
      </div>
    </div>
  );
};

export default Login;
