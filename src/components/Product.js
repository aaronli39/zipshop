import React from "react";
import "../styles/Product.css";

const Product = ({ title, image, price, rating }) => {
	return (
		<div className="product">
			<div className="productInfo">
				<p>{title}</p>
				<p className="productPrice">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="productRating">
					{Array(rating)
						.fill()
						.map((ele) => (
							<p>⭐</p>
						))}
				</div>
			</div>
			<img src={image} alt="Book" />

			<button>Add to Basket</button>
		</div>
	);
};

export default Product;
