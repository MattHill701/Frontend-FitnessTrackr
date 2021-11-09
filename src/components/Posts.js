import React from "react";
import { SinglePost } from ".";
import { Link } from "react-router-dom";

const Posts = ({ allPosts, filteredPosts }) => {
  return (
    <div className="posts-main-container">
      {filteredPosts.length
        ? filteredPosts.map((posts) => {
            return (
              <Link
                to={`/posts/${posts._id}`}
                key={posts._id}
                className="link-tag"
              >
                <SinglePost posts={posts} />
              </Link>
            );
          })
        : allPosts.length
        ? allPosts.map((posts) => {
            return (
              <Link
                to={`/posts/${posts._id}`}
                key={posts._id}
                className="link-tag"
              >
                <SinglePost posts={posts} />
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default Posts;
