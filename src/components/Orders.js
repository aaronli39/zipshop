import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "../styles/Orders.css";
import Order from "./Order";
import { useStateValue } from "./StateProvider";

const Orders = () => {
	const [orders, setOrders] = useState([]);
	const [{ basket, user }, dispatch] = useStateValue();
	useEffect(() => {
		if (user) {
			db.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.orderBy("created", "desc")
				.onSnapshot((snapshot) =>
					setOrders(
						snapshot.docs.map((element) => ({
							id: element.id,
							data: element.data(),
						}))
					)
				);
		} else {
			setOrders([]);
		}
	}, [user]);

	return (
		<div className="orders">
			{user ? (
				<>
					<h1>Your Orders</h1>

					<div className="ordersOrder">
						{orders?.map((order) => (
							<Order order={order} />
						))}
					</div>
				</>
			) : (
				<h2>You must be logged in to view your orders!</h2>
			)}
		</div>
	);
};

export default Orders;
