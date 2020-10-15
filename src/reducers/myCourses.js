import { GET_MY_COURSES } from "../actions/types";

const myCourses = (state = [], action) => {
	switch (action.type) {
		case GET_MY_COURSES:
			return action.payload;
		default:
			return state;
	}
};

export default myCourses;
