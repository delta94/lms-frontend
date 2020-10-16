import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  GET_MY_COURSES,
  GET_COURSES,
  GET_PROFILE,
  UPDATE_PROFILE_FIELD,
} from "./types";
import { toast } from "react-toastify";
import { client, authenticate } from "../utils";

export const loginUser = (credentials) => async (dispatch) => {
  const user = await authenticate("login", credentials);

  if (user) {
    toast("Login successful");

    dispatch({
      type: LOGIN,
      payload: user,
    });
  }
};

export const signupUser = (credentials) => async (dispatch) => {
  const user = await authenticate("signup", credentials);

  if (user) {
    toast("Signup successful");

    dispatch({
      type: SIGNUP,
      payload: user,
    });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("user");

  toast("You are logged out", { autoClose: 1000 });

  dispatch({
    type: LOGOUT,
  });

  setTimeout(() => {
    window.location = "/";
  }, 1200);
};

export const getCourses = () => async (dispatch) => {
  const res = await client(
    `${process.env.REACT_APP_BE_ENDPOINT}/courses/explore`
  );

  dispatch({
    type: GET_COURSES,
    payload: res.data,
  });
};

export const getMyCourses = () => async (dispatch) => {
  const res = await client(`${process.env.REACT_APP_BE_ENDPOINT}/courses/me`);

  dispatch({
    type: GET_MY_COURSES,
    payload: res.data,
  });
};

export const getProfile = () => async (dispatch) => {
  const res = await client(`${process.env.REACT_APP_BE_ENDPOINT}/profile`);

  dispatch({
    type: GET_PROFILE,
    payload: res.data,
  });
};

export const updateProfileField = (field) => (dispatch) => {
  dispatch({
    type: UPDATE_PROFILE_FIELD,
    payload: field,
  });
};
