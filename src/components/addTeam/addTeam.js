import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddTeamToProject = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [user, setUser] = useState({
    email: "",
    role: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

   const handleFormSubmit = async event => {
    event.preventDefault();
 // Retrieve the JWT token from your authentication system
 const token = localStorage.getItem("x-api-key"); // Example: Retrieve token from local storage

 // Set the authorization header with the JWT token
 const config = {
   headers: {
       "x-api-key": `${token}`
   }
 }

      // Make a PUT request to the server to update the project
      axios.post(`http://localhost:2020/api/v1/projects/add-team/${projectId}`, user, config)
      .then(res => {
        setUser(res.data.user);
        alert(res.data.msg);
        navigate("/"); 
      })
      .catch(err => {
        // Handle error
        console.error(err);
      });
  };
  return (
    <div className="add-team">
      <h1>Add Team to Project</h1>
      
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
       
          <input
            type="text"
            id="role"
            name="role"
            value={user.role}
            onChange={handleChange}
            placeholder="Enter role"
          />

<div className="button" onClick={handleFormSubmit}>
            Add Team
      </div>
      
    </div>
  );
};

export default AddTeamToProject;
