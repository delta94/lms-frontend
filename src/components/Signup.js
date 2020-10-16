import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signupUser } from "../actions";

export const StyledSignup = styled.div`
  h2 {
    margin-bottom: 0.5rem;
  }

  input,
  select,
  textarea {
    padding: 0.4rem 1rem;
    display: block;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.gray};
    border: 1px solid ${(props) => props.theme.gray};
    margin-right: 2rem;
  }

  input::placeholder {
    color: ${(props) => props.theme.secondaryColor};
  }

  select {
    appearance: none;
  }

  textarea {
    width: 353px;
    height: 61px;
  }

  form button {
    padding: 0.4rem 1rem;
    background-color: ${(props) => props.theme.accentColor};
    border: 1px solid ${(props) => props.theme.accentColor};
    border-radius: 4px;
    color: ${(props) => props.theme.white};
  }

  .switch-auth {
    padding-top: 0.8rem;
  }

  .switch-auth span {
    cursor: pointer;
    border-bottom: 2px solid ${(props) => props.theme.accentColor};
  }

  .flex-input {
    display: flex;
    align-items: center;
  }
`;

const Signup = ({ loginAuth }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.role) {
      return toast("You should specify your role");
    }

    dispatch(signupUser(formData));
  };

  return (
    <StyledSignup>
      <h2>Create your account</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={formData.name}
            placeholder="Wes Bos"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={formData.email}
            placeholder="wesbos@gmail.com"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>

          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={formData.password}
            placeholder="mysupersecurepassword"
            minlength="6"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="role">Select your role</label>
          <select name="role" onChange={handleInputChange} required>
            <option>--select your role--</option>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
          </select>
        </div>

        <button>Signup</button>
      </form>

      <p className="switch-auth">
        Have an account?, <span onClick={loginAuth}>Login here</span>
      </p>
    </StyledSignup>
  );
};

export default Signup;
