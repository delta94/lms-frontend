import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions";
import { LogoutIcon } from "./Icons";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 250px;
  padding: 1rem;
  border-right: 1px solid ${(props) => props.theme.ruler};
  display: flex;
  flex-direction: column;

  h2 {
    color: ${(props) => props.theme.accentColor};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
  }

  ul {
    margin-top: 0.7rem;
  }

  li {
    font-size: 1.2rem;
    padding: 0.3rem;
    font-weight: 500;
    color: ${(props) => props.theme.secondaryColor};
  }

  svg {
    margin-right: 0.5rem;
    position: relative;
    top: 2px;
    fill: ${(props) => props.theme.secondaryColor};
  }

  li.selected {
    color: ${(props) => props.theme.primaryColor};
  }

  li.selected svg {
    fill: ${(props) => props.theme.primaryColor};
  }

  .logout {
    margin-top: auto;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .logout svg {
    fill: ${(props) => props.theme.primaryColor};
    position: relative;
    top: -1px;
  }

  .logout span {
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

const Sidebar = () => {
  const dispatch = useDispatch();
  const { role, _id } = useSelector((state) => state.user);

  const studentLinks = (
    <ul>
      <li>
        <Link to="/">Explore</Link>
      </li>
      <li>
        <Link to="/mycourses">My Courses</Link>
      </li>
      <li>
        <Link to={`/profile/${_id}`}>Profile</Link>
      </li>
    </ul>
  );

  const facultyLinks = (
    <ul>
      <li>
        <Link to="/">My Courses</Link>
      </li>
      <li>
        <Link to="/newcourse">New Course</Link>
      </li>
      <li>
        <Link to={`/profile/${_id}`}>Profile</Link>
      </li>
    </ul>
  );

  return (
    <Wrapper>
      <h2>Coursera</h2>

      {role === "faculty" && facultyLinks}
      {role === "student" && studentLinks}

      <div className="logout" onClick={() => dispatch(logoutUser)}>
        <LogoutIcon />
        <span>Logout</span>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
