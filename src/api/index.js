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
      username: username,
      password: password
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      username: username,
      password: password
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUser() {
  const myToken = getToken();
  try {
    const { data } = await axios.get(`${BASE}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myToken}`
      }
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllRoutines() {
  try {
    const { data } = await axios.get(`${BASE}/routines`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createRoutines(name, goal, isPublic) {
  try {
    const { data } = await axios.post(`${BASE}/routines`, {
      name: name,
      goal: goal,
      isPublic: isPublic
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getActivities() {
  try {
    const { data } = await axios.get(`${BASE}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function createActivity(name, description) {
  const myToken = getToken();

  try {
    const { data } = await axios.get(`${BASE}/activities`, {
      activity: {
        name: name,
        description: description,
      },
      headers: {
        "Content-Type": "application/JSON",

        Authorization: `Bearer ${myToken}`,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
