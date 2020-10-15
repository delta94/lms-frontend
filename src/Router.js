import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Sidebar from "./components/Sidebar";

// pages
import Explore from "./pages/Explore";
import MyCourses from "./pages/MyCourses";

import Students from "./pages/Students";
import NewCourse from "./pages/NewCourse";

import Profile from "./pages/Profile";

// styles
import Container from "./styles/Container";

export default () => {
	const role = useSelector(state => state.user.role);

	const facultyRoutes = (
		<Switch>
			<Route path="/newcourse" component={NewCourse} />
			<Route exact path="/" component={Students} />
		</Switch>
	);

	const studentRoutes = (
		<Switch>
			<Route path="/mycourses" component={MyCourses} />
			<Route exact path="/" component={Explore} />
		</Switch>
	);

	return (
		<Router>
			<Sidebar />

			<Container>
				{role === "student" ? studentRoutes : facultyRoutes}
				<Route path="/profile/:userId" component={Profile} />
			</Container>
		</Router>
	);
};
