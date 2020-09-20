import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import Axios from "../axios";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import "../styles/Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketSubtotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import { db } from "../firebase";

const Payment = () => {
	// data layer
	const [{ basket, user }, dispatch] = useStateValue();

	// stripe stuff
	const stripe = useStripe();
	const elements = useElements();

	// state
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [clientSecret, setClientSecret] = useState(true);

	const history = useHistory();

	useEffect(() => {
		// generate Stripe client secret to charge customer
		const getClientSecret = async () => {
			const response = await Axios({
				method: "post",
				// stripe expects the tottal in a currencies subunits (1 dollar is 100 cents)
				url: `/payments/create?total=${getBasketSubtotal(basket) * 100}`,
			});

			setClientSecret(response.data.clientSecret);
		};

		getClientSecret();
	}, [basket]);

	console.log("THE SECRET IS: ", clientSecret);

	// funcs
	const handleSubmit = async (e) => {
		// stripe stuff
		e.preventDefault();
		setProcessing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				// paymentIntent is like a confirmation

				db.collection("users")
					.doc(user?.uid)
					.collection("orders")
					.doc(paymentIntent.id)
					.set({
						basket: basket,
						amount: paymentIntent.amount,
						created: paymentIntent.created,
					});
				setSucceeded(true);
				setError(null);
				setProcessing(false);

				dispatch({
					type: "EMPTY_BASKET",
				});

				// we want to replace so that users can press backwards
				// and end up on that payment page again
				history.replace("/orders");
			});
	};

	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};

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
								// key={ind}
							/>
						))}
					</div>
				</div>

				{/* Payment method */}
				<div className="paymentSection">
					<div className="paymentTitle">
						<h3>Payment Method</h3>
					</div>
					<div className="paymentDetails">
						{/* Stripe stuff */}
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />

							<div className="paymentPriceContainer">
								<CurrencyFormat
									renderText={(value) => (
										<>
											<h3>Order total: {value} </h3>
										</>
									)}
									decimalScale={2}
									value={getBasketSubtotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>

								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
