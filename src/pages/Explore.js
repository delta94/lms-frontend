import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import CourseCard from "../components/CourseCard";
import { getCourses } from '../actions';

const Wrapper = styled.div`
	h1 {
		color: ${props => props.theme.black};
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
	}
`;

const Explore = () => {
	const dispatch = useDispatch();
	const explore = useSelector(state => state.explore);

	useEffect(() => {
		dispatch(getCourses())
	}, []);

	return (
		<Wrapper>
			<h1>Explore</h1>
			<div className="grid">
				{explore.map(course => (
					<CourseCard key={course._id} course={course} />
				))}
			</div>
		</Wrapper>
	);
};

export default Explore;