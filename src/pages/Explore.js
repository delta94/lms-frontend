import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import CourseCard from '../components/CourseCard';

const Wrapper = styled.div`
	h1 {
		color: ${props => props.theme.black};
	}
`;

const Explore = () => {
	const [courses, setCourses] = useState([]);

	console.log(courses);

	const getCourses = async () => {
		const res = await fetch(`${process.env.REACT_APP_BE_ENDPOINT}/courses/explore`);
		return res.json();
	}

	useEffect(() => {
		getCourses().then(res => setCourses(res.data)).catch(err => console.log(err))
	}, [])

	return (
		<Wrapper>
			<h1>Explore</h1>
		  {courses.map(course => <CourseCard key={course._id} course={course}/>)}
		</Wrapper>
	)
}

export default Explore;
