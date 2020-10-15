import React from "react";
import styled from "styled-components";
import CourseForm from "../components/CourseForm";

const Wrapper = styled.div`
  h2 {
    margin-bottom: 0.8rem;
  }
`;

const NewCourse = () => {
  return (
    <Wrapper>
      <h2>New Course</h2>
      <CourseForm />
    </Wrapper>
  );
};

export default NewCourse;
