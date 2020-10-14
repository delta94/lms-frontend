import React, { useState } from 'react'
import styled from 'styled-components';
import Signup from '../components/Signup';
import Login from '../components/Login';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 4rem;
`;

const Auth = () => {
	const [auth, setAuth] = useState("LOGIN");

	const loginAuth = () => setAuth("LOGIN");
	const signupAuth = () => setAuth("SIGNUP");

	return (
		<Wrapper>
			{auth === "LOGIN" && <Login signupAuth={signupAuth}/>}
			{auth !== "LOGIN" && <Signup loginAuth={loginAuth}/>}
		</Wrapper>
	)
}

export default Auth;
