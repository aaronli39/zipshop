import React from "react";
import logo from "../zipshopIcon.png";
import { Search, ShoppingCart } from "@material-ui/icons";
import "../styles/Header.css";

const Header = () => {
	return (
		<div className="header">
			<img className="headerLogo" src={logo} alt="Logo" />

			<div className="headerSearch">
				<input className="headerSearchInput" type="text" />
				{/* Logo */}
				<Search className="headerSearchIcon" />
			</div>

			<div className="headerNav">
				<div className="headerOption">
					<span className="headerOptionLineOne">Hello Guest</span>
					<span className="headerOptionLineTwo">Sign In</span>
				</div>

				<div className="headerOption">
					<span className="headerOptionLineOne">Returns</span>
					<span className="headerOptionLineTwo">& Orders</span>
				</div>

				<div className="headerOption">
					<span className="headerOptionLineOne">Your</span>
					<span className="headerOptionLineTwo">Prime</span>
				</div>
				<div className="headerOptionBasket">
					<ShoppingCart />
					<span className="headerOptionTwo headerBasketCount">0</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
