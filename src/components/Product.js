import React from "react";
import "../styles/Product.css";
import { useStateValue } from "../components/StateProvider";

const Product = ({ id, title, image, price, rating }) => {
	const [{ basket }, dispatch] = useStateValue();
	const addToBasket = () => {
		// display some action the data layer
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

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
							<p>⭐</p>
						))}
				</div>
			</div>
			<img src={image} alt="Book" />

			<button style={{ cursor: "pointer" }} onClick={addToBasket}>
				Add to Basket
			</button>
		</div>
	);
};

export default Product;
