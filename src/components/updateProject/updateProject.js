import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const UpdateProject = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();


  const [projectData, setProjectData] = useState({
    name: "",
    description: ""
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProjectData({ ...projectData, [name]: value });
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
      axios.put(`http://localhost:2020/api/v1/projects/update-project/${projectId}`, projectData, config)
      .then(res => {
        setProjectData(res.data.projectData);
        alert(res.data.msg);
        navigate("/"); 
      })
      .catch(err => {
        // Handle error
        console.error(err);
      });
  };

  return (
    <div className="update-project">
      <h1>Update Project</h1>
          <input
            type="text"
            id="name"
            name="name"
            value={projectData.name}
            onChange={handleInputChange}
            placeholder="change project Name"
          />
          <input
            type="text"
            id="description"
            name="description"
            value={projectData.description}
            onChange={handleInputChange}
            placeholder="change project description"
          />
        <div className="button" onClick={handleFormSubmit}>
        Update Project
        </div>
    </div>
  );
};

export default UpdateProject;
