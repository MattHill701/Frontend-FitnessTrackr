import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getToken } from "./auth";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import {
  Header,
  Posts,
  NavBar,
  Register,
  Login,
  NewPostForm,
  UserPage,
  Activities,
  NewRoutine
} from "./components";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div id="App">
      <Header />
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route path="/register">
          <Register setIsLoggedIn={setIsLoggedIn} setIsLoading={setIsLoading} />
        </Route>
        <Route path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} setIsLoading={setIsLoading} />
        </Route>
        <Route path="/posts">
          <Posts />
          <NewRoutine />
        </Route>
        <Route path="/activities">
          <Activities />
          <NewPostForm />
        </Route>
        <Route path="/userpage">
          <UserPage />
        </Route>
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
