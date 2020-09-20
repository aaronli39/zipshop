const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51HSx7WI9SWFZcMtZRu6cTHwDLgcLIktDs0Dk2wVFamHIJhZTnkZ4xgM5Loi67TP3KkRgurtxmSO355HujuYf71EL001v6WTFzR"
);

// API

// - App config
const app = express();

// - middlewares

// security
app.use(cors({ origin: true }));
// allow us to send and receive json data
app.use(express.json());

// - API routes
app.get("/", (req, res) => {
	res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
	// amount in subunits
	const total = req.query.total;

	console.log("payment request received from server: ", total);
	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: "usd",
	});

	// 201: created something, everything good
	res.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// - Listen
exports.api = functions.https.onRequest(app);

// example endpoint:
// http://localhost:5001/zipshop-fbf07/us-central1/api
