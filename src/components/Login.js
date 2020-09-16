import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import logo from "../zipshop.png";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();

		// some fancy firebase login stuff
	};

	const register = (e) => {
		e.preventDefault();

		// do some fancy firebase register stuff
	};
	return (
		<div className="login">
			<Link to="/">
				<img className="loginLogo" src={logo} />
			</Link>

			<div className="loginContainer">
				<h1>Sign-in</h1>

				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button type="submit" onClick={signIn} className="loginSignInButton">
						Sign In
					</button>
				</form>
				<p>
					By signing-in you agree to the Zipshop Conditions of Use & Sale.
					Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice.
				</p>

				<button onClick={register} className="loginRegisterButton">
					Create your Zipshop Account
				</button>
			</div>
		</div>
	);
};

export default Login;
