import React from 'react'
import "../Header.css"
import logo from "../zipshopIcon.png"
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
	return (
		<div className="header">
			<img className="headerLogo" src={logo} alt="Logo" />

			<div className="headerSearch">
				<input className="headerSearchInput" type="text" />
				{/* Logo */}
				<SearchIcon className="headerSearchIcon" />
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
			</div>

		</div>
	)
}

export default Header
