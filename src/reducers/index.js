import { combineReducers } from "redux";

// reducers
import user from "./user";
import explore from "./explore";
import myCourses from "./myCourses";

export default combineReducers({
	user,
	explore,
	myCourses
});
