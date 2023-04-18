import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const GetProjectById = () => {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();

  useEffect(() => {
    // Fetch project data when the component mounts
    fetchProjectById();
  }, []);

  const fetchProjectById = async () => {
    try {
      // Retrieve the JWT token from your authentication system
      const token = localStorage.getItem("x-api-key"); // Example: Retrieve token from local storage

      // Set the authorization header with the JWT token
      const config = {
        headers: {
          "x-api-key": `${token}`
        }
      }

      // Make a GET request to the server to fetch the project by ID
      const response = await axios.get(`http://localhost:2020/api/v1/projects/get-project-by-id/${projectId}`, config);

      // Check if the response is successful
      if (response.data.success) {
        // Update the project state with the fetched project data
        setProject(response.data.project);
      } else {
        // Handle unsuccessful project retrieval
        alert("Failed to fetch project. Please try again.");
      }
    } catch (err) {
      // Handle error
      console.error(err);
      alert("Failed to fetch project. Please try again.");
    }
  };

  return (
    <div>
      {project ? (
        <div>
          <h1>Project Details</h1>
          <p>Name: {project.name}</p>
          <p>Description: {project.description}</p>
        </div>
      ) : (
        <p>Loading project data...</p>
      )}
    </div>
  );
};

export default GetProjectById;
