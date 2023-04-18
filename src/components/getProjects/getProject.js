import React, { useState, useEffect } from "react";
import axios from "axios";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null); // New error state

  useEffect(() => {
    // Fetch projects when the component mounts
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      // Retrieve the JWT token from your authentication system
      const token = localStorage.getItem("x-api-key"); // Example: Retrieve token from local storage

      // Set the authorization header with the JWT token
      const config = {
        headers: {
          "x-api-key": token // Update to use token directly
        }
      };

      // Make a GET request to the server to fetch the projects
      const response = await axios.get("http://localhost:2020/api/v1/projects/get-projects", config);

      // Check if the response is successful
      if (response.data.success) {
        // Handle successful projects retrieval
        const projectsData = response.data.projects;
        setProjects(projectsData);
        console.log(projectsData)
        setError(null); // Reset error state
      } else {
        // Handle unsuccessful projects retrieval
        setError("Failed to fetch projects. Please try again.");
      }
    } catch (err) {
      // Handle error
      console.error(err);
      setError("Failed to fetch projects. Please try again.");
    }
  };

  return (
    <div>
      <h1>Projects</h1>
      {error ? (
        <p>{error}</p> // Render error message if error exists
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectList;