import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StyledSignup } from "./Signup";
import { loginUser } from "../actions";

const Login = ({ signupAuth }) => {
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});

	const handleInputChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleFormSubmit = e => {
		e.preventDefault();
		dispatch(loginUser(formData));
	};

	return (
		<StyledSignup>
			<h2>Login to your account</h2>
			<form onSubmit={handleFormSubmit}>
				<div className="input-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						onChange={handleInputChange}
						value={formData.email}
						placeholder="wesbos@gmail.com"
					/>
				</div>

				<div className="input-group">
					<label htmlFor="password">Password</label>

					<input
						type="password"
						name="password"
						onChange={handleInputChange}
						value={formData.password}
						placeholder="mysupersecurepassword"
					/>
				</div>
				<button>Login</button>
			</form>

			<p className="switch-auth">
				Don't have an account?, <span onClick={signupAuth}>Signup here</span>
			</p>
		</StyledSignup>
	);
};

export default Login;
