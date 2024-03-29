import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import ErrorView from "./views/ErrorView";
import CreateView from "./views/CreateView";
import IssueView from "./views/IssueView";
import NavBar from "./Components/NavBar";
import Repo from "./Components/Repo";
import Profile from "./Components/Profile";
import ExploreView from "./views/ExploreView";
import ForkView from "./views/CloneView";
import AuthView from "./Components/AuthView";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={HomeView} exact />
        <Route path="/create" component={CreateView} />
        <Route path="/fork" component={ForkView} />
        <Route path="/repo/:id" component={Repo} />
        <Route path="/profile" component={Profile} />
        <Route path="/explore" component={ExploreView} />
        <Route path="/Auth" component={AuthView} />
        <Route path="/Issues" component={IssueView} />
        <Route component={ErrorView} />
      </Switch>
    </Router>
  );
}
