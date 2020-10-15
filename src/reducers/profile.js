import {
  GET_PROFILE,
  UPDATE_PROFILE,
  UPDATE_PROFILE_FIELD,
} from "../actions/types";

const initialState = {
  name: "",
  email: "",
  bio: "",
  city: "",
  state: "",
  country: "",
  mobile: "",
  company: "",
  school: "",
  languages: "",
  gender: "",
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return { ...state, ...action.payload };
    case UPDATE_PROFILE:
      const keys = Object.keys(action.payload);
      const fieldsToUpdate = {};

      for (let key of keys) {
        if (action.payload[key]) {
          fieldsToUpdate[key] = action.payload[key];
        }
      }
      return { ...state, ...fieldsToUpdate };
    case UPDATE_PROFILE_FIELD:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default profile;
