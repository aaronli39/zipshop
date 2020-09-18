import React from "react";
import { Link } from "react-router-dom";
import "../styles/Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

const Payment = () => {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className="payment">
			<div className="paymentContainer">
				<h1>
					Checkout (<Link to="/checkout">{basket?.length} items</Link>)
				</h1>

				{/* Payment section - delivery address */}
				<div className="paymentSection">
					<div className="paymentTitle">
						<h3>Delivery Address</h3>
					</div>
					<div className="paymentAddress">
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Los Angeles, CA </p>
					</div>
				</div>

				{/* Payment review items */}
				<div className="paymentSection">
					<div className="paymentTitle">
						<h3>Review Items and Delivery</h3>
					</div>
					<div className="paymentItems">
						{basket.map((ele) => (
							<CheckoutProduct
								id={ele.id}
								title={ele.title}
								image={ele.image}
								price={ele.price}
								rating={ele.rating}
							/>
						))}
					</div>
				</div>

				{/* Payment method */}
				<div className="paymentSection">
					<div className="paymentTitle">
						<h3>Payment Method</h3>
					</div>
					<div className="paymentDetails">{/* Stripe stuff */}</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
