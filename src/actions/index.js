import { LOGIN, LOGOUT, SIGNUP } from "./types";

export const loginUser = credentials => async dispatch => {
	const tokenRes = await fetch(`${process.env.REACT_APP_BE_ENDPOINT}/auth/login`, {
		method: "POST",
		body: JSON.stringify(credentials),
		headers: {
			'content-type': 'application/json',
		}
	});

	const tokenData = await tokenRes.json();

	const userRes = await fetch(`${process.env.REACT_APP_BE_ENDPOINT}/auth/me`, {
		headers: {
			'content-type': 'application/json',
			'authorization': `Bearer ${tokenData.token}`
		}
	})

	const userData = await userRes.json();

	const user = { token: tokenData.token, ...userData.data };

	localStorage.setItem("user", JSON.stringify(user));

	dispatch({
		type: SIGNUP,
		payload: user
	})
};

export const signupUser = credentials => async dispatch => {
};

export const logoutUser = () => {
	console.log("need to implement");
};
