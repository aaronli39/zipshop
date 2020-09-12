import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";

const App = () => {
	return (
		<Router>
			<div class="app">
				<Header />
				<Switch>
					<Route path="/checkout">
						<Checkout />
					</Route>

					<Route path="/">
						{/* Home */}
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
