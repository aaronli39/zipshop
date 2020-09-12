import React from "react";
import "../styles/Checkout.css";

const Checkout = () => {
	return (
		<div className="checkout">
			<div className="checkoutLeft">
				<img
					src="https://www.kotak.com/content/dam/Kotak/herosliderbanner/Product-Card-mobile-mistakes-to-avoide-while-shopping-on-credit-card.jpg"
					alt="Checkout image"
					className="checkoutAd"
				/>

				<div>
					<h2 className="checkoutTitle">Your Shopping Basket</h2>
				</div>
			</div>

			<div className="checkoutRight">
				<h2>Subtotal go here</h2>
			</div>
		</div>
	);
};

export default Checkout;
