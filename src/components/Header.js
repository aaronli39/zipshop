import React from "react";
import logo from "../zipshop.png";
import { Search, ShoppingCart } from "@material-ui/icons";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

const Header = () => {
	const [{ basket, user }, dispatch] = useStateValue();

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<div className="header">
			<Link to="/">
				<img className="headerLogo" src={logo} alt="Logo" />
			</Link>

			<div className="headerSearch">
				<input className="headerSearchInput" type="text" />
				{/* Logo */}
				<Search className="headerSearchIcon" />
			</div>

			<div className="headerNav">
				<Link to={!user && "/login"}>
					<div onClick={handleAuthentication} className="headerOption">
						<span className="headerOptionLineOne">Hello, {user?.email}</span>
						<span className="headerOptionLineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>

				<div className="headerOption">
					<span className="headerOptionLineOne">Returns</span>
					<span className="headerOptionLineTwo">& Orders</span>
				</div>

				<div className="headerOption">
					<span className="headerOptionLineOne">Your</span>
					<span className="headerOptionLineTwo">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="headerOptionBasket">
						<ShoppingCart />
						<span className="headerOptionTwo headerBasketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
