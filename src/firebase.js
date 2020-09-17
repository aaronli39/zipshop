import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBqu2piV2v_8YCTEgyWTRS0M1kKaf4vjM8",
	authDomain: "zipshop-fbf07.firebaseapp.com",
	databaseURL: "https://zipshop-fbf07.firebaseio.com",
	projectId: "zipshop-fbf07",
	storageBucket: "zipshop-fbf07.appspot.com",
	messagingSenderId: "532992788478",
	appId: "1:532992788478:web:40676aa1f543559ff862af",
	measurementId: "G-KPV6CZ21QE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
