import axios from "axios";
import { getToken } from "../auth";
const BASE = "https://fitnesstrac-kr.herokuapp.com/api/";

// this is an example for an api call with axios
export async function getUsers() {
  try {
    const { data } = await axios.get(`${BASE}/users`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      user: {
        username: username,
        password: password
      }
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      user: {
        username: username,
        password: password
      }
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createPost(title, description, price) {
  const myToken = getToken();
  try {
    const { data } = await axios.post(
      `${BASE}/posts`,
      {
        post: {
          title: title,
          description: description,
          price: price
        }
      },
      {
        headers: {
          "Content-Type": "application/JSON",

          Authorization: `Bearer ${myToken}`
        }
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUserObject() {
  const myToken = getToken();
  try {
    const { data } = await axios.get(`${BASE}/users/me`, {
      headers: {
        "Content-Type": "application/JSON",

        Authorization: `Bearer ${myToken}`
      }
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createMessages(post_id, content) {
  const myToken = getToken();
  try {
    const { data } = await axios.post(
      `${BASE}/posts/${post_id}/messages`,
      {
        message: {
          content: content
        }
      },
      {
        headers: {
          "Content-Type": "application/JSON",

          Authorization: `Bearer ${myToken}`
        }
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
