import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { addToCourses } from '../actions';
import { toast } from 'react-toastify';

const Wrapper = styled.div`
	position: relative;
	padding: 1rem 0;
	padding-bottom: 0rem;
	margin: 1rem 0;
	border-radius: 5px;
	background-color: ${props => props.theme.gray};

	h3,
	p {
		padding: 0 1rem;
	}

	h3 {
		font-weight: 500;
		margin-bottom: 0.8rem;
	}

	.name-register {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.faculty {
		margin-top: 1rem;
		display: flex;
		align-items: center;
		padding: 0 1rem;
	}

	.faculty span {
		padding-left: 0.5rem;
	}

	.faculty img {
		width: 30px;
		height: 30px;
		border-radius: 15px;
		object-fit: contain;
	}

	.footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 1rem;
		border-top: 1px solid ${props => props.theme.ruler};
		padding: 0.8rem 1rem;
	}

	.register {
		background-color: ${props => props.theme.accentColor};
		border: 1px solid ${props => props.theme.accentColor};
		padding: 0.2rem 0.5rem;
		font-size: 0.9rem;
		color: ${props => props.theme.white};
		border-radius: 2px;
		margin-right: 1rem;
		position: relative;
		top: -5px;
	}
`;

const CourseCard = ({ course, registerHide }) => {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const [register, setRegister] = useState(course.students.includes(user._id));

	const handleAddCourse = () => {
		setRegister(true);
		toast("Registration successful");
		dispatch(addToCourses(course));
	};

	return (
		<Wrapper>
			<div className="name-register">
				<h3>{course.name}</h3>
				{!registerHide && (
					<button
						onClick={handleAddCourse}
						disabled={register}
						className="register"
					>
						Register
					</button>
				)}
			</div>

			<p>{course.description}</p>

			<div className="faculty">
				<img src={course.faculty?.avatar} alt="faculty avatar" />
				<span>
					{course.faculty?.name}, {course.department}
				</span>
			</div>

			<div className="footer">
				<span>Remaining spots: {course.capacity - course.students.length}</span>

				<span>Room: {course.room}</span>
			</div>
		</Wrapper>
	);
};

export default CourseCard;
