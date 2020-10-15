import { GET_COURSES } from "../actions/types";

const explore = (state = [], action) => {
	switch (action.type) {
		case GET_COURSES:
			return action.payload;
		default:
			return state;
	}
};

export default explore;
