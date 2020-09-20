import React, { useEffect } from "react";
import "../styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
	const [{ basket, user }, dispatch] = useStateValue();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="checkout">
			<div className="checkoutLeft">
				<img
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					className="checkoutAd"
				/>

				<div>
					<h3>Hello, {user?.email ? user.email : "Guest"}</h3>
					<h2 className="checkoutTitle">Your Shopping Basket</h2>
					{basket.map((item) => (
						<CheckoutProduct
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>

			<div className="checkoutRight">
				<Subtotal />
			</div>
		</div>
	);
};

export default Checkout;
