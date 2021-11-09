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
//stuff
} from "./components";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const fetchAllPosts = async () => {
    try {
      const myToken = getToken();

      if (myToken) {
        setIsLoggedIn(true);
      }

      const { data } = await axios.get(
        "https://strangers-things.herokuapp.com/api/2106-UNF-RM-WEB-PT/posts",
        {
          headers: {
            "auth-token": myToken
          }
        }
      );
      setAllPosts(data.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    fetchAllPosts();
  }, []);

  useEffect(() => {
    const myFilteredPosts = allPosts.filter((e) => {
      if (e.title.includes(searchTerm)) {
        return true;
      }

      if (e.description.includes(searchTerm)) {
        return true;
      }

      return false;
    });

    setFilteredPosts(myFilteredPosts);
  }, [searchTerm]);

  return (
    <div id="App">
      <Navigation />
      <Switch>
        <Route path="/register">
          <Register setIsLoggedIn={setIsLoggedIn} setIsLoading={setIsLoading} />
        </Route>
        <Route path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} setIsLoading={setIsLoading} />
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
