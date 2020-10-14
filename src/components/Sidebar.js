import React from "react";
import styled from "styled-components";
import { ProfileIcon, TrendingIcon, BookIcon } from "./Icons";

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${props => props.theme.sidebar};
	min-height: 100vh;
	width: 250px;
	border-right: 2px solid ${props => props.theme.ruler};
	padding: 1rem;

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
	}

	.selected svg {
		fill: ${props => props.theme.primaryColor};
	}

	.selected {
		color: ${props => props.theme.black};
	}

	li svg {
		margin-right: 0.5rem;
		position: relative;
		top: 2px;
		fill: ${props => props.theme.secondaryColor};
	}
`;

const Sidebar = () => {
	return (
		<Wrapper>
			<h2>Coursera</h2>

			<ul>
				<li className="selected">
					<TrendingIcon /> Explore
				</li>
				<li>
					<BookIcon /> My Courses
				</li>
				<li>
					<ProfileIcon />
					Profile
				</li>
			</ul>
		</Wrapper>
	);
};

export default Sidebar;
