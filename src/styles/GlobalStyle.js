import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	html {
		font-size: 16px;
		box-sizing: border-box;
	}

	*, *:before, *:after {
		padding: 0;
		margin: 0;
		box-sizing: inherit;
	}

	body {
		margin: 2rem auto;
		width: 90%;
		font-family: ${props => props.theme.font}, sans-serif;
		font-size: 1rem;
		background: ${props => props.theme.bg};
		color: ${props => props.theme.primaryColor};
		line-height: 1.8;
		overflow-x: hidden;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: normal;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	button {
		cursor: pointer;
	}

	button[disabled] {
		opacity: 0.2;
		cursor: not-allowed;
	}

	textarea, button, input, select {
		font-size: 1rem;
		font-family: ${props => props.theme.font}, sans-serif;
	}

	ul {
		list-style-type: none;
	}

	textarea:focus, select:focus, video:focus, input:focus, button:focus, a:focus {
		outline: none;
	}

	.Toastify__toast {
		font-family: ${props => props.theme.font}, sans-serif;
		border-radius: 4px;
	}

	.Toastify__toast--dark, .Toastify__toast--default {
		background: ${props => props.theme.accentColor};
		color: ${props => props.theme.white};
	}

	@media screen and (max-width: 600px) {
		body {
			font-size: 0.9rem;
		}
	}
`;
