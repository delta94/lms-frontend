import { LOGIN, LOGOUT, SIGNUP } from "../actions/types";

const initialState = {};

const user = (state = initialState, action) => {
	switch (action.type) {
		case SIGNUP:
			return action.payload;
		case LOGIN:
			return state;
		case LOGOUT:
			return state;
		default:
			return state;
	}
};

export default user;
