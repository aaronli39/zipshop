import axios from "axios";

const instance = axios.create({
	// where API Url is stored (cloud function)
	// baseURL: "http://localhost:5001/zipshop-fbf07/us-central1/api",
	baseURL: "https://us-central1-zipshop-fbf07.cloudfunctions.net/api",
});

export default instance;
