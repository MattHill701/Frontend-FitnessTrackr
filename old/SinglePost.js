import React, { useState } from "react";

const SinglePost = ({ posts }) => {
  //const [isAuthor, setIsAuthor] = useState(false);
  return (
    <div className="post-card">
      <h3>{posts.title}</h3>
      <p>{posts.description}</p>
    </div>
  );
};
export default SinglePost;
