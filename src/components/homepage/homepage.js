import React from "react";
import "./homepage.css"
import {useNavigate } from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate();

    return(
        <div className="Homepage">
            <h1>Hello Homepage</h1>
      <div
        className="button"
        onClick={() => navigate("/create-project")}
      >
        Create Project
      </div>
      <div>or</div>
      <div
        className="button"
        onClick={() => navigate("/update-user/:userId")}
      >
        Update User
      </div>
      <div>or</div>
      <div
        className="button"
        onClick={() => navigate("/get-projects")}
      >
        Get Projects
      </div>
      <div>or</div>
      <div
        className="button"
        onClick={() => navigate("/get-project/:projectId")}
      >
        Get Project by Id
      </div>
        </div>
    )
}

export default Homepage 