import React from "react";
import logo from "../zipshop.png";
import { Search, ShoppingCart } from "@material-ui/icons";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Header = () => {
	const [{ basket }, dispatch] = useStateValue();

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
				<Link to="/login">
					<div className="headerOption">
						<span className="headerOptionLineOne">Hello Guest</span>
						<span className="headerOptionLineTwo">Sign In</span>
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
