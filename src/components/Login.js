import React from "react";
import "../styles/Login.css";
import logo from "../zipshopIcon.png";

const Login = () => {
	return (
		<div className="login">
			<img className="login__logo" src={logo} />
		</div>
	);
};

export default Login;
