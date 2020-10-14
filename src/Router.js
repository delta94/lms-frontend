import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Explore from "./pages/Explore";
import Container from './styles/Container';

export default () => (
	<Router>
		<Sidebar />

		<Container>
			<Switch>
				<Route path="/" component={Explore} />
			</Switch>
		</Container>
	</Router>
);
