import React, { useState } from "react";
import { patchActivities } from "../api";
import { getToken, getUser } from "../auth";

const UpdateActivity = ({ param }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  return (
    <div className="ui container">
      <h2>Update Activity</h2>
      <form
        className="ui form"
        id="newPostSubmit"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            console.log(title, description, price);
            const data = await patchActivities(title, description, price);
            // setAllPosts([data.post, ...allPosts]);
            console.log(data, "!!!!!!!!");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <fieldset className="auth-component-input">
          <label htmlFor="name">Activity:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter name"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="goal">New Count:</label>
          <input
            id="goal"
            type="text"
            placeholder="Enter goal"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="title">Duration:</label>
          <input
            id="isPublic"
            type="text"
            placeholder="Enter true or false"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          ></input>
        </fieldset>
        <button className="ui button" typeof="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateActivity;
