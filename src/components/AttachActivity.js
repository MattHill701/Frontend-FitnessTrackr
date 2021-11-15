import React, { useState } from "react";
import { attachActivities } from "../api";
import { getToken, getUser } from "../auth";

const AttachActivity = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [routineId, setroutineId] = useState("");
  return (
    <div className="ui container">
      <h2>Attach Activity to Workout</h2>
      <form
        className="ui form"
        id="newPostSubmit"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            console.log(routineId, title, description, price);
            const data = await attachActivities(
              routineId,
              title,
              description,
              price
            );
            // setAllPosts([data.post, ...allPosts]);
            console.log(data, "!!!!!!!!");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <fieldset className="auth-component-input">
          <label htmlFor="routineGoal">Routine:</label>
          <input
            id="activityDuration"
            type="text"
            placeholder="Enter Duration"
            value={routineId}
            onChange={(event) => {
              setroutineId(event.target.value);
            }}
          ></input>
        </fieldset>
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
          <label htmlFor="goal">Count:</label>
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

export default AttachActivity;
