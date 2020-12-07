import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import CreateProjects from "./components/projects/CreateProjects";
import ProjectDetails from "./components/projects/ProjectDetails";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <PrivateRoute path="/" exact>
          <Dashboard />
        </PrivateRoute>

        <PrivateRoute path="/project/:id">
          <ProjectDetails />
        </PrivateRoute>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/create">
          <CreateProjects />
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default App;
