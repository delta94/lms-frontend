import { createGlobalStyle } from 'styled-components';

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
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: normal;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	button, input, select {
		font-size: 1rem;
		font-family: ${props => props.theme.font}, sans-serif;
	}

	ul {
		list-style-type: none;
	}

	select:focus, video:focus, input:focus, button:focus, a:focus {
		outline: none;
	}
`
