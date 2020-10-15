import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CourseCard from "../components/CourseCard";
import { getMyCourses } from "../actions";

const Wrapper = styled.div`
  h1 {
    color: ${(props) => props.theme.black};
  }
`;

const Explore = () => {
  const dispatch = useDispatch();
  const myCourses = useSelector((state) => state.myCourses);

  useEffect(() => {
    dispatch(getMyCourses());
  }, [dispatch]);

  return (
    <Wrapper>
      <h1>My Courses</h1>
      {myCourses.map((course) => (
        <CourseCard key={course._id} registerHide={true} course={course} />
      ))}
    </Wrapper>
  );
};

export default Explore;
