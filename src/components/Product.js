import React from "react";
import "../styles/Product.css";

const Product = () => {
	return (
		<div className="product">
			<div className="productIn">
				<p>The Lean Startup</p>
				<p className="productPrice">
					<small>$</small>
					<strong>19.99</strong>
				</p>
				<div className="productRating">
					<p>⭐</p>
					<p>⭐</p>
				</div>
			</div>
			<img
				src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
				alt="Book"
			/>
		</div>
	);
};

export default Product;
