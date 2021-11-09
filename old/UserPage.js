import React, { useState, useEffect } from "react";
import { getUserObject } from "../api";
const UserPage = () => {
  const [username, setUsername] = useState("");
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);

  return (
    <div className="user">
      <h1>Username: {username}</h1>
      <h1>Workouts Created: {posts}</h1>
      <h1>Favorite Workouts: {messages}</h1>
    </div>
  );
};
export default UserPage;
