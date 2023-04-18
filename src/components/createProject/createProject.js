import React, { useState } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  //const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    description: ""  
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      // Retrieve the JWT token from your authentication system
      const token = localStorage.getItem("x-api-key"); // Example: Retrieve token from local storage

      // Set the authorization header with the JWT token
      const config = {
        headers: {
            "x-api-key": `${token}`
        }
      };

    

      // Make a POST request to the server to create the project
      const response = await axios.post("http://localhost:2020/api/v1/projects/create-project", user, config);

      // Check if the response is successful
      if (response.data.message){
        // Handle successful project creation
        alert("Project created successfully!");
        // Reset the form fields
        
      } else {
        // Handle unsuccessful project creation
        alert("Failed to create project. Please try again.");
      }
    } catch (err) {
      // Handle error
      console.error(err);
      alert("Failed to create project. Please try again.");
    }
  };

  return (
    <div>
      <h1>Create Project</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={user.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
};

export default CreateProject;