import React from "react";
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
	return (
		<div className="checkout">
			<div className="checkoutLeft">
				<img
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt="Checkout image"
					className="checkoutAd"
				/>

				<div>
					<h2 className="checkoutTitle">Your Shopping Basket</h2>

					{/* BasketItem */}
				</div>
			</div>

			<div className="checkoutRight">
				<Subtotal />
			</div>
		</div>
	);
};

export default Checkout;
