import { useState } from 'react';
import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import Forget from "./components/forget/forget";
import Reset from "./components/reset/reset"
import UpdateUser from "./components/update/update"
import CreateProjectss from "./components/createProject/demo"
import  CreateProject from "./components/createProject/createProject"
import UpdateProject from "./components/updateProject/updateProject"
import AddTeamToProject from "./components/addTeam/addTeam"
import ProjectList from "./components/getProjects/getProject"
import GetProjectById from "./components/getProjectById/getProjectById"
import DeleteProject from "./components/deleteProject/deleteProject"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {


  const [user, setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>
        <Routes>

        <Route exact path="/" element={<Homepage setLoginUser={setLoginUser} />} />

        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
        
        <Route path="/register" element={<Register />} />

        <Route path="/forget" element={<Forget />} />
        <Route path="/project/:projectId" element={<CreateProjectss />} />

        <Route path="/reset" element={<Reset />} />
        <Route path="/update-user/:userId" element={<UpdateUser />} />
        <Route path="/update-project/:projectId" element={<UpdateProject />} />
        <Route path="/get-projects" element={<ProjectList />} />
        <Route path="/get-project/:projectId" element={<GetProjectById />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/add-team/:projectId" element={<AddTeamToProject />} />
        <Route path="/delete-project/:projectId" element={<DeleteProject />} />
       
        

        </Routes>
      </Router>
    </div>
  );
}

export default App;
