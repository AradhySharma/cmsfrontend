import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const DeleteProject = () => {

  const { projectId } = useParams();


 

  const handleDeleteProject = async event => {
    try {
    event.preventDefault();
 // Retrieve the JWT token from your authentication system
 const token = localStorage.getItem("x-api-key"); // Example: Retrieve token from local storage

 // Set the authorization header with the JWT token
 const config = {
   headers: {
       "x-api-key": `${token}`
   }
 }


      // Make a DELETE request to the server to delete the project
      const response = await axios.delete(`http://localhost:2020/api/v1/projects/delete-project/${projectId}`, config);

      // Check if the response is successful
      if (response.data.msg) {
        console.log(response.data.msg)
      } else {
        // Handle unsuccessful project deletion
        alert("Failed to delete project. Please try again.");
      }
    } catch (err) {
      // Handle error
      console.error(err);
      alert("Failed to delete project. Please try again.");
    }
  };

  return (
    <div className="DeleteProject">
      <h1>Delete Project</h1>
      <p>Are you sure you want to delete this project?</p>
      <div className="button" onClick={handleDeleteProject}>
      Delete Project
      </div>
    </div>
  );
};

export default DeleteProject;
