import { combineReducers } from "redux";

// reducers
import user from "./user";
import explore from "./explore";
import myCourses from "./myCourses";
import profile from "./profile";

export default combineReducers({
	user,
	explore,
	myCourses,
	profile,
});
