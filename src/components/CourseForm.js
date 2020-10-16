import React, { useState } from "react";
import { StyledSignup } from "./Signup";
import { toast } from "react-toastify";
import { client } from "../utils";

const CourseForm = ({ signupAuth }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    department: "",
    capacity: "",
    room: "",
  });

  const clearForm = () =>
    setFormData({
      name: "",
      description: "",
      department: "",
      capacity: "",
      room: "",
    });

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCourseForm = async (e) => {
    e.preventDefault();

    if (!formData.department) {
      return toast("You need to specify your department");
    }

    const course = { ...formData, capacity: parseInt(formData.capacity) };

    await client(`${process.env.REACT_APP_BE_ENDPOINT}/courses`, {
      body: course,
    });

    clearForm();
    toast("Course created successfully");
  };

  return (
    <StyledSignup>
      <form onSubmit={handleCourseForm}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={formData.name}
            placeholder="Intro to Machine Learning"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="description">Course Description</label>

          <textarea
            name="description"
            onChange={handleInputChange}
            value={formData.description}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="room">Room</label>
          <input
            type="text"
            name="room"
            onChange={handleInputChange}
            value={formData.room}
            placeholder="102-AC"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="capacity">Capacity</label>
          <input
            type="text"
            name="capacity"
            onChange={handleInputChange}
            value={formData.capacity}
            placeholder="20"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="department">Department</label>
          <select name="department" onChange={handleInputChange} required>
            <option>--select your department--</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            <option value="Civil Engineering">Mechanical Engineering</option>
            <option value="Aerospace Engineering">Aerospace Engineering</option>
          </select>
        </div>

        <button>Confirm</button>
      </form>
    </StyledSignup>
  );
};

export default CourseForm;
