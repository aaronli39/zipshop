import React from "react";
import "../styles/Home.css";
import Product from "./Product";

const Home = () => {
	return (
		<div className="home">
			<div className="homeContainer">
				<img
					className="homeImage"
					src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjJkZWQ0NTgt/YjJkZWQ0NTgt-MWE1MmNlZDAt-w1500._CB406132032_.jpg"
					alt="Zipshop banner"
				/>

				<div className="homeRow">
					<Product />
					{/* product */}
				</div>

				<div className="homeRow">
					{/* product */}
					{/* product */}
					{/* product */}
				</div>

				<div className="homeRow">{/* product */}</div>
			</div>
		</div>
	);
};

export default Home;
