import React from "react";
import "../styles/Product.css";

const Product = ({ id, title, image, price, rating }) => {
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
						.map(() => (
							<p key={id}>⭐</p>
						))}
				</div>
			</div>
			<img src={image} alt="Book" />

			<button>Add to Basket</button>
		</div>
	);
};

export default Product;
