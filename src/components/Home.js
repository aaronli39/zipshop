import React from "react";
import "../styles/Home.css";
import Product from "./Product";

const Home = () => {
	return (
		<div className="home">
			<div className="homeContainer">
				<img
					className="homeImage"
					src="https://images-na.ssl-images-amazon.com/images/G/01/PLF/SpottedZebra/2020/SPRING-DRIVERS/SZ-SW-BOYS_GW_Amazon_GRD_DesktopHero_Template_3000x1200_1x._CB409663690_.jpg"
					alt="Zipshop banner"
				/>

				<div className="homeRow">
					<Product
						id="12344312"
						title="The Lean Startup"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
						rating={5}
					/>
					<Product
						id="49538094"
						title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
						price={239.0}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
					/>
				</div>

				<div className="homeRow">
					<Product
						id="4903850"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
						price={199.99}
						rating={3}
						image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
					/>
					<Product
						id="23445930"
						title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
						price={98.99}
						rating={5}
						image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
					/>
					<Product
						id="3254354345"
						title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
						price={598.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
					/>
				</div>

				<div className="homeRow">
					<Product
						id="9082931"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
						price={1094.98}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
