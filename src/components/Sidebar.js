import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import BottomTab from "./BottomTab";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions";
import {
	ProfileIcon,
	TrendingIcon,
	BookIcon,
	PlusIcon,
	LogoutIcon
} from "./Icons";

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	min-height: 100vh;
	width: 250px;
	padding: 1rem;
	border-right: 1px solid ${props => props.theme.ruler};
	display: flex;
	flex-direction: column;

	h2 {
		color: ${props => props.theme.accentColor};
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
		color: ${props => props.theme.secondaryColor};
	}

	svg {
		margin-right: 0.5rem;
		position: relative;
		top: 2px;
		fill: ${props => props.theme.secondaryColor};
	}

	.selected {
		color: ${props => props.theme.primaryColor};
	}

	.selected svg {
		fill: ${props => props.theme.primaryColor};
	}

	.logout {
		margin-top: auto;
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	.logout svg {
		fill: ${props => props.theme.primaryColor};
		position: relative;
		top: -1px;
	}

	.logout span {
		font-weight: 500;
		font-size: 1.2rem;
	}

	@media screen and (max-width: 760px) {
		width: 200px;
	}

	@media screen and (max-width: 638px) {
		width: 180px;

		li {
			font-size: 1rem;
		}
	}

	@media screen and (max-width: 600px) {
		display: none;
	}
`;

const Sidebar = () => {
	const dispatch = useDispatch();
	const { role, _id } = useSelector(state => state.user);

	const studentLinks = (
		<ul>
			<li>
				<NavLink exact to="/" activeClassName="selected">
					<TrendingIcon />
					Explore
				</NavLink>
			</li>
			<li>
				<NavLink to="/mycourses" activeClassName="selected">
					<BookIcon /> My Courses
				</NavLink>
			</li>
			<li>
				<NavLink to={`/profile/${_id}`} activeClassName="selected">
					<ProfileIcon /> Profile
				</NavLink>
			</li>
		</ul>
	);

	const facultyLinks = (
		<ul>
			<li>
				<NavLink exact to="/" activeClassName="selected">
					<BookIcon /> My Courses
				</NavLink>
			</li>
			<li>
				<NavLink to="/newcourse" activeClassName="selected">
					<PlusIcon /> New Course
				</NavLink>
			</li>
			<li>
				<NavLink to={`/profile/${_id}`} activeClassName="selected">
					<ProfileIcon /> Profile
				</NavLink>
			</li>
		</ul>
	);

	return (
		<>
			<Wrapper>
				<h2>Coursera</h2>

				{role === "faculty" && facultyLinks}
				{role === "student" && studentLinks}

				<div className="logout" onClick={() => dispatch(logoutUser)}>
					<LogoutIcon />
					<span>Logout</span>
				</div>
			</Wrapper>
			<BottomTab />
		</>
	);
};

export default Sidebar;
