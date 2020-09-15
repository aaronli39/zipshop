import React from "react";
import "../styles/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};

	return (
		<div className="checkoutProduct">
			<img className="checkoutProductImage" src={image} alt="Product Image" />

			<div className="checkoutProductInfo">
				<p className="checkoutProductTitle">{title}</p>
				<p className="checkoutProductPrice">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProductRating">
					{Array(rating)
						.fill()
						.map((ele) => (
							<p>⭐</p>
						))}
				</div>

				<button onClick={removeFromBasket}>Remove from basket</button>
			</div>
		</div>
	);
};

export default CheckoutProduct;
