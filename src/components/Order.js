import moment from "moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
import "../styles/Order.css";
import CheckoutProduct from "./CheckoutProduct";

const Order = ({ order }) => {
	return (
		<div className="order">
			<h2>Order</h2>
			<p>{moment.unix(order.data.created).format("MMM Do YYYY, h:mma")}</p>
			<p className="orderId">
				<small>{order.id}</small>
			</p>
			{order.data.basket?.map((item, ind) => (
				<CheckoutProduct
					id={item.id}
					title={item.title}
					image={item.image}
					price={item.price}
					rating={item.rating}
					key={ind}
					hideButton
				/>
			))}
			<CurrencyFormat
				renderText={(value) => (
					<h3 className="orderTotal">Order Total: {value}</h3>
				)}
				decimalScale={2}
				value={order.data.amount / 100}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
		</div>
	);
};

export default Order;
