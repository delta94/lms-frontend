import {
	LOGIN,
	LOGOUT,
	SIGNUP,
	GET_MY_COURSES,
	GET_COURSES,
	ADD_TO_COURSES,
	GET_PROFILE,
	UPDATE_PROFILE,
	UPDATE_PROFILE_FIELD
} from "./types";
import { authenticate } from "../utils";

export const loginUser = credentials => async dispatch => {
	const user = await authenticate("login", credentials);

	dispatch({
		type: LOGIN,
		payload: user
	});
};

export const signupUser = credentials => async dispatch => {
	const user = await authenticate("signup", credentials);

	dispatch({
		type: SIGNUP,
		payload: user
	});
};

export const logoutUser = dispatch => {
	localStorage.removeItem("user");

	dispatch({
		type: LOGOUT
	});
};

export const getCourses = () => async dispatch => {
	const res = await fetch(
		`${process.env.REACT_APP_BE_ENDPOINT}/courses/explore`
	);

	const data = await res.json();

	dispatch({
		type: GET_COURSES,
		payload: data.data
	});
};

export const getMyCourses = () => async dispatch => {
	const { token } = JSON.parse(localStorage.getItem("user"));

	const res = await fetch(`${process.env.REACT_APP_BE_ENDPOINT}/courses/me`, {
		headers: {
			"content-type": "application/json",
			authorization: `Bearer ${token}`
		}
	});

	const data = await res.json();

	dispatch({
		type: GET_MY_COURSES,
		payload: data.data
	});
};

export const addToCourses = course => async dispatch => {
	dispatch({
		type: ADD_TO_COURSES,
		payload: course
	});

	const { token } = JSON.parse(localStorage.getItem("user"));

	await fetch(
		`${process.env.REACT_APP_BE_ENDPOINT}/courses/${course._id}/register`,
		{
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${token}`
			}
		}
	);
};

export const getProfile = () => async dispatch => {
	const { token } = JSON.parse(localStorage.getItem("user"));

	const res = await fetch(`${process.env.REACT_APP_BE_ENDPOINT}/profile`, {
		headers: {
			"content-type": "application/json",
			authorization: `Bearer ${token}`
		}
	});

	const data = await res.json();

	dispatch({
		type: GET_PROFILE,
		payload: data.data
	});
};

export const updateProfile = profile => async dispatch => {
	dispatch({
		type: UPDATE_PROFILE,
		payload: profile
	});

	const { token } = JSON.parse(localStorage.getItem("user"));

	await fetch(`${process.env.REACT_APP_BE_ENDPOINT}/profile`, {
		method: "POST",
		body: JSON.stringify(profile),
		headers: {
			"content-type": "application/json",
			authorization: `Bearer ${token}`
		}
	});
};

export const updateProfileField = field => async dispatch => {
	dispatch({
		type: UPDATE_PROFILE_FIELD,
		payload: field
	});
};
