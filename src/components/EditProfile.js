import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { StyledSignup } from "./Signup";
import Input from "./Input";
import { updateProfileField, getProfile } from "../actions";
import { client } from "../utils";

const EditProfile = ({ loginAuth }) => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const handleInputChange = (e) =>
    dispatch(updateProfileField({ [e.target.name]: e.target.value }));

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    await client(`${process.env.REACT_APP_BE_ENDPOINT}/profile`, {
      body: profile,
      method: "PUT",
    });
    toast("Profile updated!");
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch, userId]);

  return (
    <StyledSignup>
      <form onSubmit={handleUpdateProfile}>
        <div className="flex-input">
          <div className="input-group">
            <Input
              name="name"
              onChange={handleInputChange}
              value={profile.name}
              placeholder="wesbos"
            />
          </div>
          <div className="input-group">
            <Input
              name="email"
              type="email"
              onChange={handleInputChange}
              value={profile.email}
              placeholder="wesbos@gmail.com"
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="flex-input">
          <div className="input-group">
            <Input
              name="mobile"
              onChange={handleInputChange}
              value={profile.mobile}
              placeholder="790*****267"
            />
          </div>
          <div className="input-group">
            <Input
              name="city"
              onChange={handleInputChange}
              value={profile.city}
              placeholder="Chennai"
            />
          </div>
        </div>

        <div className="flex-input">
          <div className="input-group">
            <Input
              name="state"
              onChange={handleInputChange}
              value={profile.state}
              placeholder="Tamil Nadu"
            />
          </div>
          <div className="input-group">
            <Input
              name="country"
              onChange={handleInputChange}
              value={profile.country}
              placeholder="India"
            />
          </div>
        </div>

        <div className="flex-input">
          <div className="input-group">
            <Input
              name="school"
              onChange={handleInputChange}
              value={profile.school}
              placeholder="MIT"
            />
          </div>
          <div className="input-group">
            <Input
              name="company"
              onChange={handleInputChange}
              value={profile.company}
              placeholder="Amazon"
            />
          </div>
        </div>

        <div className="flex-input">
          <div className="input-group">
            <Input
              name="languages"
              onChange={handleInputChange}
              value={profile.languages}
              placeholder="English, Tamil"
            />
          </div>
          <div className="input-group">
            <Input
              name="gender"
              onChange={handleInputChange}
              value={profile.gender}
              placeholder="Male"
            />
          </div>
        </div>

        <button>Save</button>
      </form>
    </StyledSignup>
  );
};

export default EditProfile;
