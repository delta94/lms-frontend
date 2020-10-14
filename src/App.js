import React from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Router from './Router';
import Auth from './pages/Auth';

const App = () => {
	const loggedIn = false;

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{loggedIn ? <Router /> : <Auth />}
		</ThemeProvider>
	);
};

export default App;
