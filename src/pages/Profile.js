import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
	.avatar-name {
		display: flex;
		align-items: center;
	}

	img.avatar {
		width: 50px;
		height: 50px;
		border-radius: 25px;
		border: 2px solid ${props => props.theme.accentColor};
		margin-right: 0.8rem;
	}
`;

const Profile = () => {
	const user = useSelector(state => state.user);

	return (
		<Wrapper>
			<div className="avatar-name">
				<img className="avatar" src={user.avatar} alt="avatar" />
				<h1>{user.name}</h1>
			</div>
		</Wrapper>
	);
};

export default Profile;
