import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
    secretQuestion: {
      question: "",
      answer: ""
    }
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSecretQuestionChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      secretQuestion: {
        ...user.secretQuestion,
        [name]: value
      }
    });
  };

  const register = () => {
    axios.post("http://localhost:2020/api/v1/users/register",user)
      .then(res => {
        alert(res.data.message);
        navigate("/login");
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter your Name"
      />
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      />
      <input
        type="text"
        name="company"
        value={user.company}
        onChange={handleChange}
        placeholder="Enter your Company"
      />
      <input
        type="text"
        name="question"
        value={user.secretQuestion.question}
        onChange={handleSecretQuestionChange}
        placeholder="Enter your Secret Question"
      />
      <input
        type="text"
        name="answer"
        value={user.secretQuestion.answer}
        onChange={handleSecretQuestionChange}
        placeholder="Enter your Answer"
      />
      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/login")}>
        Login
      </div>
    </div>
  );
};

export default Register;
