import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import EditProfile from "../components/EditProfile";

const Wrapper = styled.div`
	.avatar-name {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}

	input {
		margin-bottom: 1.5rem;
	}

	img.avatar {
		width: 50px;
		height: 50px;
		border-radius: 25px;
		border: 2px solid ${props => props.theme.accentColor};
		margin-right: 0.8rem;
	}

	textarea {
		height: 73px;
		width: 735px;
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

			<EditProfile />
		</Wrapper>
	);
};

export default Profile;
