import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
	PlusIcon,
	LogoutIcon,
	TrendingIcon,
	BookIcon,
	ProfileIcon
} from "./Icons";
import { logoutUser } from "../actions";

const Wrapper = styled.div`
	position: absolute;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 999;
	border-top: 1px solid ${props => props.theme.ruler};
	background-color: ${props => props.theme.bg};
	min-width: 100vw;
	display: flex;
	padding: 1rem;
	justify-content: space-between;
	overflow: hidden;
	display: none;

	.selected svg {
		fill: ${props => props.theme.primaryColor};
	}

	svg {
		margin-right: 0.5rem;
		position: relative;
		top: 2px;
		fill: ${props => props.theme.secondaryColor};
		cursor: pointer;
	}

	@media screen and (max-width: 600px) {
		display: block;
		display: flex;
	}
`;

const BottomTab = () => {
	const dispatch = useDispatch();
	const { _id, role } = useSelector(state => state.user);

	const facultyTab = (
		<>
			<NavLink exact activeClassName="selected" to="/">
				<BookIcon />
			</NavLink>
			<NavLink activeClassName="selected" to="/newcourse">
				<PlusIcon />
			</NavLink>
		</>
	);

	const studentTab = (
		<>
			<NavLink exact activeClassName="selected" to="/">
				<TrendingIcon />
			</NavLink>
			<NavLink activeClassName="selected" to="/mycourses">
				<BookIcon />
			</NavLink>
		</>
	);

	return (
		<Wrapper>
			{role === "student" ? studentTab : facultyTab}

			<NavLink activeClassName="selected" to={`/profile/${_id}`}>
				<ProfileIcon />
			</NavLink>

			<div className="logout">
				<LogoutIcon onClick={() => dispatch(logoutUser())} />
			</div>
		</Wrapper>
	);
};

export default BottomTab;
