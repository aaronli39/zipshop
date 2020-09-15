import React from "react";
import "../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketSubtotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							{/* Part of the homework */}
							Subtotal ({basket.length} items): <strong>{value}</strong>
						</p>
						<small className="subtotalGift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketSubtotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>

			{/* <button onClick={(e) => history.push("/payment")}>
				Proceed to Checkout
			</button> */}
		</div>
	);
}

export default Subtotal;
