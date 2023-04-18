import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
    const navigate = useNavigate();
    const { userId } = useParams();
  
    const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
      company:""
    });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };
  

  const updateUser = async event => {
    event.preventDefault();

      // Retrieve the JWT token from your authentication system
      const token = localStorage.getItem("x-api-key"); // Example: Retrieve token from local storage

      // Set the authorization header with the JWT token
      const config = {
        headers: {
            "x-api-key": `${token}`
        }
      }
    

      axios.put(`http://localhost:2020/api/v1/users/update-User/${userId}`, user, config)
      .then(res => {
        setUser(res.data.user);
        alert(res.data.message);
        navigate("/"); 
      })
      .catch(err => {
        // Handle error
        console.error(err);
      });
  };

  return (
    <div className="update-user">
      <h1>Update User</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter your Name"
      />
      <input
        type="text"
        name="company"
        value={user.company}
        onChange={handleChange}
        placeholder="Enter your Company"
      />
      <input
        type="email"
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
      <div className="button" onClick={updateUser}>
        Update
      </div>
      
    </div>
  );
};

export default UpdateUser;